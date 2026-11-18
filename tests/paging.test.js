/**
 * sbFetchAll — must read every page, never stop at 1000 rows, keep errors.
 * Run: node tests/paging.test.js
 */
const fs = require('fs')
const vm = require('vm')

let passed = 0, failed = 0
function check(ok, msg) { if (ok) { console.log('  ✓', msg); passed++ } else { console.error('  ✗', msg); failed++ } }

const src = fs.readFileSync('src/js/settings.js', 'utf8')
const m = src.match(/async function sbFetchAll[\s\S]*?\n      \}\n/)
if (!m) throw new Error('sbFetchAll not found in settings.js')
const ctx = {}
vm.runInNewContext(m[0] + '; __f = sbFetchAll', ctx)
const sbFetchAll = ctx.__f

// Fake Supabase builder: range(from,to) returns rows [from..to] like PostgREST
const fakeBuild = (total, err) => () => ({
  range: async (from, to) => err ? { data: null, error: { message: 'boom' } }
    : { data: Array.from({ length: Math.max(0, Math.min(to, total - 1) - from + 1) }, (_, i) => ({ n: from + i })), error: null },
})

;(async () => {
  console.log('1. sbFetchAll — 2500 rows read in 3 pages')
  const r1 = await sbFetchAll(fakeBuild(2500))
  check(r1.data.length === 2500, `got ${r1.data && r1.data.length} rows, expected 2500`)
  check(r1.data[2499].n === 2499, 'last row present, order kept')

  console.log('2. sbFetchAll — exactly 1000 rows')
  const r2 = await sbFetchAll(fakeBuild(1000))
  check(r2.data.length === 1000, `got ${r2.data && r2.data.length}, expected 1000`)

  console.log('3. sbFetchAll — empty table')
  const r3 = await sbFetchAll(fakeBuild(0))
  check(Array.isArray(r3.data) && r3.data.length === 0, 'returns empty array')

  console.log('4. sbFetchAll — error returned, no partial data')
  const r4 = await sbFetchAll(fakeBuild(2500, true))
  check(r4.error && !r4.data, 'returns error, no data')

  console.log(`\nResults: ${passed} passed, ${failed} failed`)
  process.exit(failed ? 1 : 0)
})()
