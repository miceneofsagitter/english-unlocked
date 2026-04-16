// ============================================================
// DATABASE UNIFICATO — richiede vocab-en.js, vocab-es.js, vocab-fr.js
// ============================================================

const ALL_VOCAB_FOR_EXERCISES = [
  ...EN_VOCAB,
  ...ES_VOCAB,
  ...FR_VOCAB,
];

function buildCrossLangIndex(vocab) {
  const map = new Map()
  vocab.forEach(item => {
    const key = (item.concept && item.concept.trim())
      ? item.concept.trim().toLowerCase()
      : (item.it ? item.it.trim().toLowerCase() : null)
    if (!key) return
    if (!map.has(key)) map.set(key, [])
    map.get(key).push(item)
  })
  const result = new Map()
  map.forEach((items, key) => {
    const langs = new Set(items.map(i => i.language))
    if (langs.size >= 2) result.set(key, items)
  })
  return result
}

const CROSS_LANG_INDEX = buildCrossLangIndex(ALL_VOCAB_FOR_EXERCISES)
