/**
 * core.js pure function tests — escHtml XSS prevention.
 * Extracts escHtml directly from source without loading full DOM.
 * Run: node tests/core-utils.test.js
 */

const fs = require('fs')
const vm = require('vm')

let passed = 0, failed = 0

function assert(condition, message) {
  if (condition) { console.log('  ✓', message); passed++ }
  else { console.error('  ✗', message); failed++ }
}
function assertEqual(actual, expected, message) {
  const ok = actual === expected
  if (ok) { console.log('  ✓', message); passed++ }
  else { console.error(`  ✗ ${message}\n    expected: ${JSON.stringify(expected)}\n    got:      ${JSON.stringify(actual)}`); failed++ }
}
function section(name) { console.log(`\n${name}`) }

// ── Extract escHtml from core.js source ───────────────────────────────────────
// Grabs only the function body to avoid loading DOM-dependent init code

const coreSrc = fs.readFileSync('src/js/core.js', 'utf8')
const fnMatch = coreSrc.match(/function escHtml\s*\([^)]*\)\s*\{[^}]+\}/)
if (!fnMatch) throw new Error('escHtml not found in core.js')

const ctx = {}
vm.runInNewContext(fnMatch[0] + '; __fn = escHtml', ctx)
const escHtml = ctx.__fn

// ── Tests ─────────────────────────────────────────────────────────────────────

section('1. escHtml — caratteri pericolosi')
assertEqual(escHtml('<script>'), '&lt;script&gt;', 'escape < e >')
assertEqual(escHtml('"hello"'), '&quot;hello&quot;', 'escape doppi apici')
assertEqual(escHtml('&'), '&amp;', 'escape ampersand')
assertEqual(escHtml('<b>bold</b>'), '&lt;b&gt;bold&lt;/b&gt;', 'escape tag completo')
assertEqual(escHtml('<script>alert("xss")</script>'), '&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;', 'escape XSS classico')

section('2. escHtml — testo sicuro non modificato')
assertEqual(escHtml('safe text'), 'safe text', 'testo normale invariato')
assertEqual(escHtml('hello world 123'), 'hello world 123', 'lettere e numeri invariati')
assertEqual(escHtml("it's fine"), "it's fine", 'apice singolo non escapato')

section('3. escHtml — casi limite')
assertEqual(escHtml(''), '', 'stringa vuota → stringa vuota')
assertEqual(escHtml(null), '', 'null → stringa vuota')
assertEqual(escHtml(undefined), '', 'undefined → stringa vuota')
assertEqual(escHtml(0), '0', 'numero 0 → "0"')
assertEqual(escHtml(42), '42', 'numero intero → stringa')

section('4. escHtml — multipli caratteri nella stessa stringa')
assertEqual(escHtml('a & b < c > d'), 'a &amp; b &lt; c &gt; d', 'mix & < >')
assertEqual(escHtml('<"test">'), '&lt;&quot;test&quot;&gt;', 'mix < > "')

// ── Summary ───────────────────────────────────────────────────────────────────

console.log(`\n${'─'.repeat(50)}`)
console.log(`Results: ${passed} passed, ${failed} failed`)
if (failed > 0) process.exit(1)
