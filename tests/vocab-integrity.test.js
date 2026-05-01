/**
 * Vocab integrity tests — validates structure of EN/ES/FR vocab arrays.
 * Catches regressions in data files (missing fields, bad types, duplicates).
 * Run: node tests/vocab-integrity.test.js
 */

const fs = require('fs')
const vm = require('vm')

let passed = 0, failed = 0

function assert(condition, message) {
  if (condition) { console.log('  ✓', message); passed++ }
  else { console.error('  ✗', message); failed++ }
}
function section(name) { console.log(`\n${name}`) }

// ── Load all three vocab files ────────────────────────────────────────────────

function loadVocab(file, varName) {
  const ctx = {}
  vm.runInNewContext(fs.readFileSync(file, 'utf8') + `; __out = ${varName}`, ctx)
  return ctx.__out
}

const EN = loadVocab('src/data/vocab-en.js', 'EN_VOCAB')
const ES = loadVocab('src/data/vocab-es.js', 'ES_VOCAB')
const FR = loadVocab('src/data/vocab-fr.js', 'FR_VOCAB')

const VALID_TYPES = new Set(['phrasal','verb','emotion','opinion','idiom','colloquial','clarification','beach'])
const VALID_LANGS = new Set(['en','es','fr'])

// ── Generic validator ─────────────────────────────────────────────────────────

function validateVocab(vocab, expectedLang, label) {
  section(`${label} — campi obbligatori`)

  const missing = vocab.filter(v => !v.verb || !v.emoji || !v.it || !v.type || !v.language)
  assert(missing.length === 0,
    `nessuna voce con campi obbligatori mancanti (verb/emoji/it/type/language) — trovate ${missing.length}`)

  if (missing.length > 0) {
    missing.slice(0, 3).forEach(v =>
      console.error('    →', JSON.stringify({ verb: v.verb, type: v.type, language: v.language }))
    )
  }

  section(`${label} — campo language coerente`)
  const wrongLang = vocab.filter(v => v.language !== expectedLang)
  assert(wrongLang.length === 0,
    `tutte le voci hanno language='${expectedLang}' (errate: ${wrongLang.length})`)

  section(`${label} — tipo valido`)
  const badType = vocab.filter(v => !VALID_TYPES.has(v.type))
  assert(badType.length === 0,
    `tutti i type sono validi — trovati invalidi: ${badType.length}`)
  if (badType.length > 0) {
    const types = [...new Set(badType.map(v => v.type))]
    console.error('    → tipi invalidi:', types.join(', '))
  }

  section(`${label} — tags è sempre un array`)
  const noTags = vocab.filter(v => !Array.isArray(v.tags))
  assert(noTags.length === 0,
    `tutte le voci hanno tags[] (senza: ${noTags.length})`)

  section(`${label} — nessun duplicato verb+type+language`)
  const seen = new Set()
  let dups = 0
  vocab.forEach(v => {
    const key = `${v.verb}|${v.type}|${v.language}`
    if (seen.has(key)) dups++
    seen.add(key)
  })
  assert(dups === 0, `nessun duplicato verb+type+language (trovati: ${dups})`)
}

// ── EN ────────────────────────────────────────────────────────────────────────

validateVocab(EN, 'en', '1. EN_VOCAB')

section('2. EN_VOCAB — conteggi minimi')
const enPhrasal = EN.filter(v => v.type === 'phrasal').length
assert(enPhrasal >= 290, `phrasal verbs EN ≥ 290 (trovati: ${enPhrasal})`)
assert(EN.length >= 900, `EN totale ≥ 900 (trovati: ${EN.length})`)

section('3. EN_VOCAB — phrasal verbs hanno example_en')
const phrasalNoExample = EN.filter(v => v.type === 'phrasal' && !v.example_en)
const phrasalTotal = EN.filter(v => v.type === 'phrasal').length
const pct = ((phrasalTotal - phrasalNoExample.length) / phrasalTotal * 100).toFixed(1)
assert(phrasalNoExample.length < phrasalTotal * 0.15,
  `almeno 85% phrasal hanno example_en (copertura attuale: ${pct}%, senza: ${phrasalNoExample.length})`)

// ── ES ────────────────────────────────────────────────────────────────────────

validateVocab(ES, 'es', '4. ES_VOCAB')

section('5. ES_VOCAB — conteggi minimi')
const esVerb = ES.filter(v => v.type === 'verb').length
assert(esVerb >= 500, `verb ES ≥ 500 (trovati: ${esVerb})`)
assert(ES.length >= 900, `ES totale ≥ 900 (trovati: ${ES.length})`)

// ── FR ────────────────────────────────────────────────────────────────────────

validateVocab(FR, 'fr', '6. FR_VOCAB')

section('7. FR_VOCAB — conteggi minimi')
const frVerb = FR.filter(v => v.type === 'verb').length
assert(frVerb >= 500, `verb FR ≥ 500 (trovati: ${frVerb})`)
assert(FR.length >= 880, `FR totale ≥ 880 (trovati: ${FR.length})`)

// ── Summary ───────────────────────────────────────────────────────────────────

console.log(`\n${'─'.repeat(50)}`)
console.log(`Results: ${passed} passed, ${failed} failed`)
if (failed > 0) process.exit(1)
