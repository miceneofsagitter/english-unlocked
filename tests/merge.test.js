/**
 * mergeRemoteProgress — push must keep progress made on another device.
 * Run: node tests/merge.test.js
 */
const fs = require('fs')
const vm = require('vm')

let passed = 0, failed = 0
function check(ok, msg) { if (ok) { console.log('  ✓', msg); passed++ } else { console.error('  ✗', msg); failed++ } }

const src = fs.readFileSync('src/js/settings.js', 'utf8')
const m = src.match(/function mergeRemoteProgress[\s\S]*?\n      \}\n/)
if (!m) throw new Error('mergeRemoteProgress not found')
const ctx = {}
vm.runInNewContext(m[0] + '; __f = mergeRemoteProgress', ctx)
const merge = ctx.__f

const idToKey = { 'uuid-a': 'en|a|verb', 'uuid-b': 'en|b|verb' }

console.log('1. remote has more work → remote wins, learned follows it')
{
  const stats = { 'en|a|verb': { seen: 3, correct: 1 } }
  const learned = new Set()
  merge(stats, learned, [{ vocab_id: 'uuid-a', times_seen: 10, times_correct: 9, learned: true }], idToKey)
  check(stats['en|a|verb'].seen === 10 && stats['en|a|verb'].correct === 9, 'stats taken from remote')
  check(learned.has('en|a|verb'), 'learned added from remote')
}

console.log('2. local has more work → local kept, remote ignored')
{
  const stats = { 'en|a|verb': { seen: 12, correct: 8 } }
  const learned = new Set()
  merge(stats, learned, [{ vocab_id: 'uuid-a', times_seen: 10, times_correct: 9, learned: true }], idToKey)
  check(stats['en|a|verb'].seen === 12 && stats['en|a|verb'].correct === 8, 'local stats unchanged')
  check(!learned.has('en|a|verb'), 'local learned unchanged')
}

console.log('3. unknown vocab_id ignored, word unseen locally adopted')
{
  const stats = {}
  const learned = new Set(['en|b|verb'])
  merge(stats, learned, [
    { vocab_id: 'uuid-x', times_seen: 5, times_correct: 5, learned: true },
    { vocab_id: 'uuid-b', times_seen: 2, times_correct: 1, learned: false },
  ], idToKey)
  check(!('en|x|verb' in stats) && Object.keys(stats).length === 1, 'unknown id skipped')
  check(stats['en|b|verb'].seen === 2, 'unseen locally → remote used')
  check(!learned.has('en|b|verb'), 'remote learned=false clears local learned')
}

console.log(`\nResults: ${passed} passed, ${failed} failed`)
process.exit(failed ? 1 : 0)
