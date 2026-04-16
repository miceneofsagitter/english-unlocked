#!/usr/bin/env node
// Verifica integrità dei collegamenti cross-lingua (concept IDs)
// Usage: node check-vocab-links.js
// Exit 0 = tutto OK, Exit 1 = errori bloccanti trovati

const vm   = require('vm')
const fs   = require('fs')
const path = require('path')

const BASE = path.join(__dirname, 'src/data')

function loadVocab(filename, varName) {
  const code = fs.readFileSync(path.join(BASE, filename), 'utf8')
  return vm.runInNewContext(`(function(){ ${code}; return ${varName}; })()`, {})
}

const EN = loadVocab('vocab-en.js', 'EN_VOCAB')
const ES = loadVocab('vocab-es.js', 'ES_VOCAB')
const FR = loadVocab('vocab-fr.js', 'FR_VOCAB')
const ALL = [...EN, ...ES, ...FR]

console.log(`\nCaricati: EN=${EN.length} ES=${ES.length} FR=${FR.length} (tot ${ALL.length})\n`)

let errors = 0
let warnings = 0

// ─── CHECK 1a: Entry IDENTICHE (stesso concept + stesso verb nella stessa lingua) ─
// Queste sono sempre bug — qualcuno ha incollato la stessa voce due volte
console.log('─── CHECK 1a: Entry identiche (concept+verb uguali nella stessa lingua) ──')
let exactDups = 0
for (const [lang, data] of [['en', EN], ['es', ES], ['fr', FR]]) {
  const seen = new Set()
  data.forEach(item => {
    const c = item.concept && item.concept.trim()
    if (!c) return
    const key = `${c}||${item.verb}`
    if (seen.has(key)) {
      console.log(`  🔴 ${lang.toUpperCase()} duplicato esatto: concept="${c}"  verb="${item.verb}"`)
      console.log(`     → rimuovi una delle due entry`)
      errors++
      exactDups++
    }
    seen.add(key)
  })
}
if (exactDups === 0) console.log('  ✅ Nessuna entry identica')

// ─── CHECK 1b: pv_ con verbo quasi-uguale nella stessa lingua ────────────────
// "inventar" e "inventar / idear" sono lo stesso verbo con alias aggiunto → duplicato.
// "se casser" e "tomber en panne" sono verbi diversi → legittimo avere 2 traduzioni.
// Criterio: uno dei due verbi è sottostringa dell'altro (es. "funcionar" in "funcionar / resolver")
console.log('\n─── CHECK 1b: pv_ con verbo "alias" (uno contiene l\'altro) ─────────')
let aliasDups = 0
for (const [lang, data] of [['en', EN], ['es', ES], ['fr', FR]]) {
  const byConcept = {}
  data.forEach(item => {
    const c = item.concept && item.concept.trim()
    if (!c || !c.startsWith('pv_')) return
    byConcept[c] = byConcept[c] || []
    byConcept[c].push(item.verb)
  })
  Object.entries(byConcept).forEach(([concept, verbs]) => {
    if (verbs.length < 2) return
    // Controlla se uno è prefisso/sottostringa dell'altro
    for (let i = 0; i < verbs.length; i++) {
      for (let j = 0; j < verbs.length; j++) {
        if (i === j) continue
        const a = verbs[i].toLowerCase().trim()
        const b = verbs[j].toLowerCase().trim()
        if (b.startsWith(a) || b.includes(` ${a}`) || b.includes(`${a} `)) {
          console.log(`  🔴 ${lang.toUpperCase()} "${concept}": "${verbs[i]}" → alias in "${verbs[j]}"`)
          console.log(`     → tieni "${verbs[j]}" (più completo) e rimuovi "${verbs[i]}"`)
          errors++
          aliasDups++
        }
      }
    }
  })
}
if (aliasDups === 0) console.log('  ✅ Nessun alias pv_ duplicato')

// ─── CHECK 2: Concept pv_ presente in 1 sola lingua ──────────────────────────
// Se un pv_ concept esiste solo in EN, il link cross-lingua non funziona.
console.log('\n─── CHECK 2: Concept pv_ senza link cross-lingua (<2 lingue) ────')
const conceptsByLang = {}
ALL.forEach(item => {
  const c = item.concept && item.concept.trim()
  if (!c) return
  conceptsByLang[c] = conceptsByLang[c] || new Set()
  conceptsByLang[c].add(item.language)
})

const orphanPV = Object.entries(conceptsByLang)
  .filter(([concept, langs]) => concept.startsWith('pv_') && langs.size === 1)
  .sort(([a], [b]) => a.localeCompare(b))

if (orphanPV.length === 0) {
  console.log('  ✅ Tutti i pv_ hanno ≥2 lingue')
} else {
  orphanPV.forEach(([concept, langs]) => {
    const lang = [...langs][0].toUpperCase()
    const entry = ALL.find(e => e.concept === concept)
    const verb = entry ? ` ("${entry.verb}")` : ''
    console.log(`  🟡 "${concept}"${verb} → solo ${lang}  (link mancante in altre lingue)`)
    warnings++
  })
}

// ─── RIEPILOGO ────────────────────────────────────────────────────────────────
const working = Object.values(conceptsByLang).filter(langs => langs.size >= 2).length
const pvWorking = Object.entries(conceptsByLang)
  .filter(([c, langs]) => c.startsWith('pv_') && langs.size >= 2).length

console.log('\n─── RIEPILOGO ────────────────────────────────────────────────────')
console.log(`  Cross-link attivi:  ${working} concept con ≥2 lingue  (pv_: ${pvWorking})`)
console.log(`  🔴 Errori bloccanti: ${errors}`)
console.log(`  🟡 Avvisi:           ${warnings}\n`)

if (errors > 0) {
  console.error('FALLITO — correggi gli errori prima di fare sync su Supabase\n')
  process.exit(1)
}
console.log(warnings > 0 ? 'OK con avvisi\n' : 'TUTTO OK\n')
