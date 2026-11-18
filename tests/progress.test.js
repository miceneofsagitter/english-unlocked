/**
 * Progress keys — old index-based localStorage must migrate to stable keys.
 * Run: node tests/progress.test.js
 */
const fs = require('fs')
const vm = require('vm')

let passed = 0, failed = 0
function assertEqual(actual, expected, message) {
  const ok = JSON.stringify(actual) === JSON.stringify(expected)
  if (ok) { console.log('  ✓', message); passed++ }
  else { console.error(`  ✗ ${message}\n    expected: ${JSON.stringify(expected)}\n    got:      ${JSON.stringify(actual)}`); failed++ }
}

const coreSrc = fs.readFileSync('src/js/core.js', 'utf8')
const ctx = {}
const fns = ['vkey', 'progressKey', 'rekey'].map(n => coreSrc.match(new RegExp(`function ${n}[^\\n]*`))[0]).join('\n')
vm.runInNewContext(fns + '; __f = { vkey, progressKey, rekey }', ctx)
const { vkey, progressKey, rekey } = ctx.__f

const list = [
  { language: 'en', verb: 'give up', type: 'phrasal' },
  { language: 'en', verb: 'calm down', type: 'phrasal' },
  { language: 'en', verb: 'cheer', type: 'verb' },
]

console.log('\n1. vkey — stable key')
assertEqual(vkey(list[0]), 'en|give up|phrasal', 'lingua|verbo|tipo')

console.log('\n2. progressKey — old index → key, keys kept, bad index dropped')
assertEqual(progressKey(list, '1'), 'en|calm down|phrasal', 'index "1" → key of list[1]')
assertEqual(progressKey(list, 'en|cheer|verb'), 'en|cheer|verb', 'existing key unchanged')
assertEqual(progressKey(list, '9'), null, 'index out of range → null')

console.log('\n3. rekey — stats/ids migrate, unknown index dropped')
assertEqual(
  rekey(list, { '0': { seen: 2, correct: 1 }, '2': { seen: 1, correct: 1 }, '7': { seen: 1, correct: 0 } }),
  { 'en|give up|phrasal': { seen: 2, correct: 1 }, 'en|cheer|verb': { seen: 1, correct: 1 } },
  'numeric keys become vkeys, out-of-range dropped',
)

console.log(`\nResults: ${passed} passed, ${failed} failed`)
process.exit(failed ? 1 : 0)
