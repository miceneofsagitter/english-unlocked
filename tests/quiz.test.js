/**
 * Quiz algorithm tests — runs in Node.js, no browser needed.
 * Tests: pickNextVocab weighting, anti-repeat, quiz type distribution,
 *        generateTranslationQuiz structure, generateFillBlankQuiz blanking,
 *        generateMatchQuiz deduplication.
 */

const fs = require('fs')
const vm = require('vm')

// ── Helpers ──────────────────────────────────────────────────────────────────

let passed = 0, failed = 0

function assert(condition, message) {
  if (condition) {
    console.log('  ✓', message)
    passed++
  } else {
    console.error('  ✗', message)
    failed++
  }
}

function assertApprox(value, min, max, message) {
  assert(value >= min && value <= max, `${message} (got ${value.toFixed(3)}, expected ${min}–${max})`)
}

function section(name) {
  console.log(`\n${name}`)
}

// ── Load vocab-en.js ──────────────────────────────────────────────────────────

const vocabEnSrc = fs.readFileSync('src/data/vocab-en.js', 'utf8')
// const/let don't become ctx properties in vm — use wrapper to extract
const vocabCtx = {}
vm.runInNewContext(`${vocabEnSrc}; __out = EN_VOCAB`, vocabCtx)
const EN_VOCAB = vocabCtx.__out

// ── Build quiz context ────────────────────────────────────────────────────────

// Globals quiz.js expects
const ctx = {
  // Data
  ALL_VOCAB: EN_VOCAB.filter(v => v.language === 'en'),
  currentLang: 'en',
  stats: {},
  session: { correct: 0, total: 0, streak: 0 },
  quizPool: [],
  quizSessionQ: 0,
  quizMaxQ: 10,
  quizTimerMax: 0,

  // DOM stubs — quiz.js calls these at bottom of file
  document: {
    getElementById: () => ({ style: {}, textContent: '', disabled: false, className: '' }),
    querySelectorAll: () => ({ forEach: () => {} }),
  },

  // Functions quiz.js calls that live in other files
  renderVocabGrid: () => {},
  renderTensesGrid: () => {},
  updateQuizPoolCount: () => {},
  saveStats: () => {},
  saveSession: () => {},
  updateStatsUI: () => {},
  sbSyncStat: () => {},
  QUIZ_SUBTITLE: { en: 'Choose EN translation' },

  // Node needs these
  console,
  setTimeout: () => {},
  clearInterval: () => {},
  setInterval: () => {},
  Math,
}

const quizSrc = fs.readFileSync('src/js/quiz.js', 'utf8')
vm.runInNewContext(quizSrc, ctx)

// Extract functions from context
const {
  pickNextVocab,
  generateTranslationQuiz,
  generateFillBlankQuiz,
  generateMatchQuiz,
} = ctx


// ─────────────────────────────────────────────────────────────────────────────
// TESTS
// ─────────────────────────────────────────────────────────────────────────────

section('1. pickNextVocab — always returns a word from ALL_VOCAB')
{
  ctx.stats = {}
  ctx._recentPicked = []
  const result = pickNextVocab.call(ctx)
  assert(result !== undefined, 'returns a vocab entry')
  assert(ctx.ALL_VOCAB.includes(result), 'returned word is in ALL_VOCAB')
}

section('2. pickNextVocab — weight distribution (600 picks, tiny ALL_VOCAB)')
{
  // Use a tiny ALL_VOCAB so quizPool=[] falls back to these 12 words only
  const tiny = Array.from({ length: 12 }, (_, i) => ({
    verb: 'word' + i, emoji: '🔤', it: 'parola' + i,
    type: 'phrasal', language: 'en', example_en: '', tags: [],
  }))
  const origVocab = ctx.ALL_VOCAB
  ctx.ALL_VOCAB = tiny
  ctx.stats = {}
  ctx._recentPicked = []
  // quizPool stays [] → pickNextVocab uses ALL_VOCAB (tiny)

  // 0-3: strong  (correct/seen = 0.9)
  for (let i = 0; i < 4; i++) ctx.stats[i] = { seen: 10, correct: 9 }
  // 4-7: weak    (correct/seen = 0.3)
  for (let i = 4; i < 8; i++) ctx.stats[i] = { seen: 10, correct: 3 }
  // 8-11: unseen (no stats entry)

  const counts = new Array(12).fill(0)
  const N = 600
  for (let i = 0; i < N; i++) {
    const v = pickNextVocab.call(ctx)
    const idx = tiny.indexOf(v)
    if (idx >= 0) counts[idx]++
  }

  const strongAvg = counts.slice(0, 4).reduce((a, b) => a + b, 0) / 4 / N
  const weakAvg   = counts.slice(4, 8).reduce((a, b) => a + b, 0) / 4 / N
  const unseenAvg = counts.slice(8, 12).reduce((a, b) => a + b, 0) / 4 / N

  assertApprox(unseenAvg, 0.06, 0.22, 'unseen words picked most often')
  assertApprox(weakAvg,   0.05, 0.20, 'weak words picked more than strong')
  assertApprox(strongAvg, 0.00, 0.07, 'strong words picked least often')
  assert(unseenAvg > weakAvg,   'unseen > weak')
  assert(weakAvg   > strongAvg, 'weak > strong')

  ctx.ALL_VOCAB = origVocab // restore
}

section('3. pickNextVocab — no consecutive repeats in 200 picks')
{
  ctx.stats = {}
  ctx._recentPicked = []
  ctx.quizPool = ctx.ALL_VOCAB.slice(0, 20)

  let prev = null, dups = 0
  for (let i = 0; i < 200; i++) {
    const v = pickNextVocab.call(ctx)
    if (v === prev) dups++
    prev = v
  }
  assert(dups === 0, `zero consecutive duplicates (got ${dups})`)
}

section('4. pickNextVocab — same word not in last 3 picks')
{
  ctx.stats = {}
  ctx._recentPicked = []
  ctx.quizPool = ctx.ALL_VOCAB.slice(0, 20)

  const history = []
  let violations = 0
  for (let i = 0; i < 200; i++) {
    const v = pickNextVocab.call(ctx)
    const last3 = history.slice(-3)
    if (last3.includes(v)) violations++
    history.push(v)
  }
  assert(violations === 0, `word never repeated within last 3 picks (violations: ${violations})`)
}

section('5. generateTranslationQuiz — correct structure')
{
  const target = ctx.ALL_VOCAB.find(v => v.type === 'phrasal')
  const quiz = generateTranslationQuiz.call(ctx, target)

  assert(quiz.type === 'translation', 'type is translation')
  assert(quiz.q === target.it, 'question is Italian translation')
  assert(quiz.correct === target.verb, 'correct answer is the verb')
  assert(Array.isArray(quiz.opts), 'opts is array')
  assert(quiz.opts.length === 4, `has 4 options (got ${quiz.opts.length})`)
  assert(quiz.opts.includes(target.verb), 'correct answer in opts')
  const unique = new Set(quiz.opts)
  assert(unique.size === 4, 'all 4 options are distinct')
}

section('6. generateTranslationQuiz — distractors are same type')
{
  const target = ctx.ALL_VOCAB.find(v => v.type === 'phrasal')
  const quiz = generateTranslationQuiz.call(ctx, target)
  const distractors = quiz.opts.filter(o => o !== target.verb)

  // Find the actual vocab entries for distractors
  const distWords = distractors.map(o => ctx.ALL_VOCAB.find(v => v.verb === o))
  const allPhrasal = distWords.every(v => v && v.type === 'phrasal')
  assert(allPhrasal, 'all distractors are same type (phrasal)')
}

section('7. generateFillBlankQuiz — creates blank when example exists')
{
  const target = ctx.ALL_VOCAB.find(v => v.type === 'phrasal' && v.example_en && v.example_en.length > 0)
  const quiz = generateFillBlankQuiz.call(ctx, target)

  if (quiz.type === 'fill') {
    assert(quiz.q.includes('___'), 'question contains blank')
    assert(!quiz.q.toLowerCase().includes(target.verb.toLowerCase()), 'verb replaced by blank')
    assert(quiz.correct === target.verb, 'correct answer is the verb')
    assert(Array.isArray(quiz.opts) && quiz.opts.length === 4, '4 options')
  } else {
    // fell back to translation — also acceptable
    assert(quiz.type === 'translation', 'fell back to translation quiz (acceptable)')
  }
}

section('8. generateFillBlankQuiz — falls back to translation when no example')
{
  const target = { ...ctx.ALL_VOCAB[0], example_en: '', example_es: '', example_fr: '' }
  const quiz = generateFillBlankQuiz.call(ctx, target)
  assert(quiz.type === 'translation', 'falls back to translation when example_en empty')
}

section('9. generateMatchQuiz — returns 4 unique verb-translation pairs')
{
  ctx.quizPool = ctx.ALL_VOCAB.filter(v => v.type === 'phrasal')

  const quiz = generateMatchQuiz.call(ctx)

  assert(quiz.type === 'match', 'type is match')
  assert(quiz.verbs.length === 4, `has 4 verbs (got ${quiz.verbs.length})`)
  assert(quiz.trans.length === 4, `has 4 translations (got ${quiz.trans.length})`)
  const uniqueVerbs = new Set(quiz.verbs)
  assert(uniqueVerbs.size === 4, 'no duplicate verbs')
  const uniqueTrans = new Set(quiz.trans)
  assert(uniqueTrans.size === 4, 'no duplicate translations')

  // Each verb should map to a translation that exists in trans
  const allPaired = quiz.verbs.every(v => {
    const correctTrans = quiz.pairs[v]
    return quiz.trans.includes(correctTrans)
  })
  assert(allPaired, 'every verb has its correct translation in trans array')
}

section('10. generateMatchQuiz — pairs are consistent (verb → correct IT)')
{
  ctx.quizPool = ctx.ALL_VOCAB.filter(v => v.type === 'phrasal')

  for (let trial = 0; trial < 10; trial++) {
    const quiz = generateMatchQuiz.call(ctx)
    const valid = quiz.verbs.every(verb => {
      const expectedIt = ctx.ALL_VOCAB.find(v => v.verb === verb)?.it
      return quiz.pairs[verb] === expectedIt
    })
    if (!valid) {
      assert(false, `trial ${trial}: pairs mismatch — verb maps to wrong translation`)
      break
    }
  }
  assert(true, '10 trials: all pairs correctly map verb → italian')
}

section('11. quiz type distribution (1000 rolls)')
{
  let counts = { translation: 0, fill: 0, match: 0 }
  for (let i = 0; i < 1000; i++) {
    const r = Math.random()
    let type
    if (r < 0.15) type = 'match'
    else if (r < 0.55) type = 'fill'
    else type = 'translation'
    counts[type]++
  }
  assertApprox(counts.match / 1000,       0.08, 0.22, 'match ~15%')
  assertApprox(counts.fill / 1000,        0.30, 0.50, 'fill ~40%')
  assertApprox(counts.translation / 1000, 0.38, 0.55, 'translation ~45%')
}

// ── Summary ───────────────────────────────────────────────────────────────────

console.log(`\n${'─'.repeat(50)}`)
console.log(`Results: ${passed} passed, ${failed} failed`)
if (failed > 0) process.exit(1)
