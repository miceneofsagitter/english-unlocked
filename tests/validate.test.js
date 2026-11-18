/**
 * validateRow — anti-intrusi: rejects incomplete rows and EN verbs in non-EN files.
 * Run: node tests/validate.test.js
 */
const fs = require('fs')
const vm = require('vm')

let passed = 0, failed = 0
function check(ok, msg) { if (ok) { console.log('  ✓', msg); passed++ } else { console.error('  ✗', msg); failed++ } }

const src = fs.readFileSync('src/js/settings.js', 'utf8')
const m = src.match(/function validateRow[^\n]*/)
if (!m) throw new Error('validateRow not found in settings.js')
const ctx = {}
vm.runInNewContext(m[0] + '; __f = validateRow', ctx)
const validateRow = ctx.__f
const enVerbs = new Set(['run', 'give up'])

check(validateRow({ verb: 'correr', type: 'verb', it: 'correre' }, 'es', enVerbs) === null, 'valid ES row passes')
check(validateRow({ verb: 'run', type: 'verb', it: 'correre' }, 'es', enVerbs) === 'verb EN in file non-EN', 'EN verb in ES rejected')
check(validateRow({ verb: 'Give Up ', type: 'phrasal', it: 'rinunciare' }, 'fr', enVerbs) === 'verb EN in file non-EN', 'EN verb rejected case/space-insensitive')
check(validateRow({ verb: 'run', type: 'verb', it: 'correre' }, 'en', enVerbs) === null, 'EN verb allowed in EN file')
check(validateRow({ verb: 'correr', type: '', it: 'correre' }, 'es', enVerbs) === 'campi mancanti', 'missing type rejected')

console.log(`\nResults: ${passed} passed, ${failed} failed`)
process.exit(failed ? 1 : 0)
