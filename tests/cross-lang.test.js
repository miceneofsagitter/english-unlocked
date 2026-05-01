/**
 * Cross-language index tests — validates buildCrossLangIndex from vocabulary.js.
 * Run: node tests/cross-lang.test.js
 */

const fs = require('fs')
const vm = require('vm')

let passed = 0, failed = 0

function assert(condition, message) {
  if (condition) { console.log('  ✓', message); passed++ }
  else { console.error('  ✗', message); failed++ }
}
function section(name) { console.log(`\n${name}`) }

// ── Load all vocab + vocabulary.js into single context ────────────────────────
// concat all sources + extract exports via __out_* trick (const not on ctx directly)

const allSrc = [
  'src/data/vocab-en.js',
  'src/data/vocab-es.js',
  'src/data/vocab-fr.js',
  'src/data/vocabulary.js',
].map(f => fs.readFileSync(f, 'utf8')).join('\n')
  + '\n__all=ALL_VOCAB_FOR_EXERCISES; __idx=CROSS_LANG_INDEX; __build=buildCrossLangIndex'

const ctx = { Map, Set, Array, console }
vm.runInNewContext(allSrc, ctx)

const ALL_VOCAB_FOR_EXERCISES = ctx.__all
const CROSS_LANG_INDEX = ctx.__idx
const buildCrossLangIndex = ctx.__build

// ── Tests ─────────────────────────────────────────────────────────────────────

section('1. Struttura base')
assert(Array.isArray(ALL_VOCAB_FOR_EXERCISES), 'ALL_VOCAB_FOR_EXERCISES è un Array')
assert(ALL_VOCAB_FOR_EXERCISES.length > 2500, `totale voci > 2500 (trovate: ${ALL_VOCAB_FOR_EXERCISES.length})`)
assert(CROSS_LANG_INDEX instanceof Map, 'CROSS_LANG_INDEX è una Map')
assert(CROSS_LANG_INDEX.size >= 100, `CROSS_LANG_INDEX ha ≥100 entries cross-lingua (trovate: ${CROSS_LANG_INDEX.size})`)

section('2. Invariante: ogni entry ha ≥2 lingue diverse')
let singleLangEntries = 0
CROSS_LANG_INDEX.forEach((items, key) => {
  const langs = new Set(items.map(i => i.language))
  if (langs.size < 2) singleLangEntries++
})
assert(singleLangEntries === 0, `nessuna entry con una sola lingua (trovate: ${singleLangEntries})`)

section('3. Concept ID noti esistono nell\'index')
const knownConcepts = ['pv_calm_down', 'pv_hang_out', 'pv_give_up']
knownConcepts.forEach(id => {
  assert(CROSS_LANG_INDEX.has(id), `concept '${id}' presente nell'index`)
})

section('4. buildCrossLangIndex — deterministico (due chiamate = stesso risultato)')
const idx1 = buildCrossLangIndex(ALL_VOCAB_FOR_EXERCISES)
const idx2 = buildCrossLangIndex(ALL_VOCAB_FOR_EXERCISES)
assert(idx1.size === idx2.size, `stesso size in due chiamate (${idx1.size})`)

section('5. buildCrossLangIndex — voce con concept esplicito indicizzata per concept')
const calmDown = CROSS_LANG_INDEX.get('pv_calm_down')
assert(calmDown !== undefined, "'pv_calm_down' trovato nell'index")
if (calmDown) {
  const langs = new Set(calmDown.map(i => i.language))
  assert(langs.has('en'), "'pv_calm_down' ha entry EN")
}

section('6. buildCrossLangIndex — fallback su it (voce senza concept)')
// Find an IT key that exists in index (cross-lang via IT translation fallback)
let fallbackFound = 0
CROSS_LANG_INDEX.forEach((items, key) => {
  // entries indexed by IT (not a concept ID — no underscores pattern like pv_x)
  if (!key.startsWith('pv_') && items.length >= 2) fallbackFound++
})
assert(fallbackFound > 0, `fallback IT funziona: ${fallbackFound} entries cross-lingua senza concept ID`)

section('7. ALL_VOCAB_FOR_EXERCISES — tutte e 3 le lingue presenti')
const allLangs = new Set(ALL_VOCAB_FOR_EXERCISES.map(v => v.language))
assert(allLangs.has('en'), 'EN presente in ALL_VOCAB_FOR_EXERCISES')
assert(allLangs.has('es'), 'ES presente in ALL_VOCAB_FOR_EXERCISES')
assert(allLangs.has('fr'), 'FR presente in ALL_VOCAB_FOR_EXERCISES')

section('8. buildCrossLangIndex — array vuoto → Map vuota')
const empty = buildCrossLangIndex([])
assert(empty instanceof Map, 'restituisce Map per input vuoto')
assert(empty.size === 0, 'Map vuota per vocab vuoto')

section('9. buildCrossLangIndex — voce senza concept né it ignorata')
const minimal = [
  { language: 'en', verb: 'test', it: '', concept: '' },
  { language: 'es', verb: 'prueba', it: '', concept: '' },
]
const minIdx = buildCrossLangIndex(minimal)
assert(minIdx.size === 0, 'voci senza it né concept non entrano nell\'index')

// ── Summary ───────────────────────────────────────────────────────────────────

console.log(`\n${'─'.repeat(50)}`)
console.log(`Results: ${passed} passed, ${failed} failed`)
if (failed > 0) process.exit(1)
