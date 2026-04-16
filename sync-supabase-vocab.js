#!/usr/bin/env node
// Sincronizza voci Supabase → file locali + verifica duplicati
// Usage: SUPABASE_URL=xxx SUPABASE_KEY=xxx node sync-supabase-vocab.js

const fs = require('fs')
const vm = require('vm')
const path = require('path')

const SUPABASE_URL = process.env.SUPABASE_URL
const SUPABASE_KEY = process.env.SUPABASE_KEY

if (!SUPABASE_URL || !SUPABASE_KEY) {
  console.error('Uso: SUPABASE_URL=xxx SUPABASE_KEY=xxx node sync-supabase-vocab.js')
  process.exit(1)
}

const BASE = path.join(__dirname, 'src/data')

// Carica vocab locale tramite vm (gestisce sia formato JSON che JS)
function loadLocal(filename, varName) {
  const code = fs.readFileSync(path.join(BASE, filename), 'utf8')
  // `const` non finisce nel ctx con runInNewContext — wrap in funzione che ritorna var
  const wrapped = `(function(){ ${code}; return ${varName}; })()`
  return vm.runInNewContext(wrapped, {})
}

const localEN = loadLocal('vocab-en.js', 'EN_VOCAB')
const localES = loadLocal('vocab-es.js', 'ES_VOCAB')
const localFR = loadLocal('vocab-fr.js', 'FR_VOCAB')

const allLocal = [...localEN, ...localES, ...localFR]
console.log(`Locale: EN=${localEN.length} ES=${localES.length} FR=${localFR.length} (tot ${allLocal.length})`)

// Set verbi EN — usato per bloccare intrusi EN in file non-EN
const enVerbSet = new Set(localEN.map(v => v.verb.toLowerCase().trim()))

function validateEntry(row, expectedLang) {
  if (row.language !== expectedLang)          return { ok: false, reason: `lingua '${row.language}' != '${expectedLang}'` }
  if (!row.verb || !row.type || !row.it)      return { ok: false, reason: 'campi obbligatori mancanti (verb/type/it)' }
  if (expectedLang !== 'en' && enVerbSet.has(row.verb.toLowerCase().trim()))
                                              return { ok: false, reason: 'verb EN in file non-EN' }
  return { ok: true }
}

// Verifica duplicati locali
function findDuplicates(arr, label) {
  const seen = new Map()
  const dups = []
  arr.forEach(v => {
    const k = `${v.verb}|${v.type}|${v.language}`
    if (seen.has(k)) dups.push(k)
    else seen.set(k, true)
  })
  if (dups.length) {
    console.log(`⚠️  ${dups.length} duplicati in ${label}:`)
    dups.forEach(k => console.log(`   - ${k}`))
  } else {
    console.log(`✓ Nessun duplicato in ${label}`)
  }
  return dups
}

findDuplicates(localEN, 'vocab-en.js')
findDuplicates(localES, 'vocab-es.js')
findDuplicates(localFR, 'vocab-fr.js')

// Fetch da Supabase (paginato — max 1000 per request)
async function fetchAll() {
  let all = [], from = 0
  while (true) {
    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/vocabulary?select=*&order=language,type,verb&limit=1000&offset=${from}`,
      { headers: { apikey: SUPABASE_KEY, Authorization: `Bearer ${SUPABASE_KEY}` } }
    )
    if (!res.ok) throw new Error(`Supabase ${res.status}: ${await res.text()}`)
    const rows = await res.json()
    all = all.concat(rows)
    if (rows.length < 1000) break
    from += 1000
  }
  return all
}

fetchAll().then(rows => {
  const sbEN = rows.filter(r => r.language === 'en')
  const sbES = rows.filter(r => r.language === 'es')
  const sbFR = rows.filter(r => r.language === 'fr')
  console.log(`\nSupabase: EN=${sbEN.length} ES=${sbES.length} FR=${sbFR.length} (tot ${rows.length})`)

  // Verifica duplicati su Supabase
  findDuplicates(sbEN, 'Supabase EN')
  findDuplicates(sbES, 'Supabase ES')
  findDuplicates(sbFR, 'Supabase FR')

  // Trova voci mancanti in locale + validazione
  const localKeys = new Set(allLocal.map(v => `${v.verb}|${v.type}|${v.language}`))
  const missing = { en: [], es: [], fr: [] }
  const rejected = []

  rows.forEach(row => {
    const k = `${row.verb}|${row.type}|${row.language}`
    if (localKeys.has(k) || !missing[row.language]) return
    const v = validateEntry(row, row.language)
    if (v.ok) {
      missing[row.language].push(row)
    } else {
      rejected.push({ verb: row.verb, lang: row.language, reason: v.reason })
    }
  })

  if (rejected.length) {
    console.log(`\n⛔ ${rejected.length} voci scartate dalla validazione:`)
    rejected.forEach(r => console.log(`   - "${r.verb}" [${r.lang}]: ${r.reason}`))
  }

  const totMissing = missing.en.length + missing.es.length + missing.fr.length
  console.log(`\nMancanti valide in locale: EN=${missing.en.length} ES=${missing.es.length} FR=${missing.fr.length}`)

  if (totMissing === 0) {
    console.log('✓ File locali già aggiornati, niente da fare.')
    return
  }

  // Mostra cosa verrà aggiunto
  ;['en', 'es', 'fr'].forEach(lang => {
    if (missing[lang].length === 0) return
    console.log(`\n[${lang.toUpperCase()}] ${missing[lang].length} da aggiungere:`)
    missing[lang].forEach(e => console.log(`   + ${e.verb} (${e.type})`))
  })

  // Mappa row Supabase → formato locale
  function toLocal(row) {
    return {
      language: row.language,
      type: row.type,
      verb: row.verb,
      emoji: row.emoji || '📝',
      simple: row.simple || '',
      it: row.it || '',
      example_en: row.example_en || '',
      example_it: row.example_it || '',
      tags: Array.isArray(row.tags) ? row.tags : [],
      context_note: row.context_note || '',
      concept: row.concept || '',
    }
  }

  // Appende voci al file prima di `];`
  function appendToFile(filename, entries) {
    if (entries.length === 0) return
    const filepath = path.join(BASE, filename)
    let content = fs.readFileSync(filepath, 'utf8')
    // Rimuove `];` finale + trailing whitespace
    const closeIdx = content.lastIndexOf('];')
    if (closeIdx === -1) throw new Error(`Non trovo ]; in ${filename}`)
    const newEntries = entries
      .map(e => '  ' + JSON.stringify(toLocal(e)))
      .join(',\n')
    content = content.slice(0, closeIdx) + ',\n' + newEntries + '\n];\n'
    fs.writeFileSync(filepath, content, 'utf8')
    console.log(`✓ ${filename}: +${entries.length} voci`)
  }

  appendToFile('vocab-en.js', missing.en)
  appendToFile('vocab-es.js', missing.es)
  appendToFile('vocab-fr.js', missing.fr)

  // Verifica finale: ricarica e controlla duplicati
  console.log('\n--- Verifica finale dopo merge ---')
  const newEN = loadLocal('vocab-en.js', 'EN_VOCAB')
  const newES = loadLocal('vocab-es.js', 'ES_VOCAB')
  const newFR = loadLocal('vocab-fr.js', 'FR_VOCAB')
  console.log(`Totale: EN=${newEN.length} ES=${newES.length} FR=${newFR.length}`)
  findDuplicates([...newEN, ...newES, ...newFR], 'tutti i file aggiornati')

}).catch(err => {
  console.error('Errore:', err.message)
  process.exit(1)
})
