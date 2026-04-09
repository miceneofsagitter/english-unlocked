questa cartella contiene una webapp personale che funziona come un tutor per l'apprendimento di lingue, usa frasi brevi, evita riempitivi,preamboli o formalita;esegui prima gli strumenti, mostar il risultato,poi fermati.Non aggiungere narrazione, ometti gli articoli("aggiusta codice" non "aggiusta il codice")non fare sempre le stesse cose, se riesci "comunica" con claude code sulle cose che hai fatto in base a ciò che la webapp fa.
Rispondi sincero e se non servono non usare troppo parole ;)
CLAUDE_CODE_BRIEF.md = spec originale pre-build (stale). Usa CLAUDE.md come fonte di verità.

## CONTESTO UTENTE — IMPORTANTE
Stefano è un animatore italiano che studia **tre lingue**: inglese (EN), spagnolo (ES) e francese (FR).
L'app non è "un tutor di inglese" — è un tutor multilingua per un animatore.
Ogni lingua ha il suo vocabolario separato e i propri progressi.
I phrasal verbs non esistono in ES/FR (sono un concetto EN), ma le altre categorie (emozioni, opinioni, colloquiali, chiarimento, idiomi) hanno equivalenti in tutte le lingue.
Quando si parla di "aggiungere vocabolo", si intende aggiungere espressioni utili per animatori nelle rispettive lingue — non solo tradurre dall'inglese.

**Contesto Miniclub**: Stefano lavora in un miniclub estivo (genitori che lasciano i bambini, attività con i bambini).
Tab Miniclub = dialoghi rapidi pronti all'uso per comunicare con genitori anglofoni/ispanofoni/francofoni e gestire i bambini durante la giornata.

### Routine giornata Miniclub
- Arrivo bambini con genitori → spiegare programma della giornata e programma settimanale
- Comunicare orario pranzo e se il bambino mangia con il miniclub
- **Pensione completa** → pasto incluso / **Mezza pensione** → costo addebitato sulla stanza a fine vacanza
- Comunicare orari entrata/uscita
- Raccogliere info: allergie, vegetariani/vegani, intolleranze
- Importante: i genitori possono portare/riprendere i bambini in qualsiasi momento della giornata

## ARCHITETTURA ATTUALE

### Come eseguire
Aprire `index.html` direttamente nel browser. Zero build, zero npm, zero server.

### File principali
- `index.html` — app completa, tutto in un file (HTML + CSS + JS vanilla). ~2075 righe.
- `src/data/vocabulary.js` — **unica fonte di verità** per il vocabolario. Si carica come `<script src>` normale (no ES modules, no build). Espone la variabile globale `ALL_VOCAB_FOR_EXERCISES`.

### Struttura vocabulary.js
Array separati per tipo, poi unificati in `ALL_VOCAB_FOR_EXERCISES`:
- `PHRASAL_VERBS` — ha: verb, emoji, it, example_en, example_it, tags
- `EXPRESSIONS_IDIOM` / `EXPRESSIONS_COLLOQUIAL` / `EXPRESSIONS_CLARIFICATION` / `EXPRESSIONS_EMOTION` / `EXPRESSIONS_OPINION` — hanno: en, emoji, it, context (NO example_en)
- `ANIMATOR_SENTENCES` — frasi per il tab Listening
- `ES_EXPRESSIONS_*` / `FR_EXPRESSIONS_*` — stessa struttura EN ma campo `en` invece di `verb`
- `EN_EXPRESSIONS_BEACH` / `ES_EXPRESSIONS_BEACH` / `FR_EXPRESSIONS_BEACH` — vocaboli mare/piscina
- `ALL_VOCAB_FOR_EXERCISES` — array piatto con `language` ('en'|'es'|'fr') e `type` su ogni voce
- ⚠️ Naming: phrasal verbs → campo `verb`; expressions → campo `en` (usato come `e.en` nel map)
- ⚠️ NON usa ES modules — carica come `<script src>` normale, espone `ALL_VOCAB_FOR_EXERCISES` come variabile globale

### Campi vocab card in index.html
Ogni voce in ALL_VOCAB ha: `verb, emoji, it, type, language, example_en, example_it, tags[], context_note`
- Se `example_en` è vuoto → quiz fill-blank fa fallback a traduzione
- Se `example_en` è vuoto → card mostra `context_note` al posto dell'esempio

### Tipi vocabolo e colori
| type | colore bordo | colore testo |
|------|-------------|--------------|
| phrasal | viola (--accent3) | viola |
| emotion | arancio (--accent2) | arancio |
| opinion | verde (--success) | verde |
| idiom | giallo (--accent) | giallo |
| colloquial | verde lime (#a8ff78) | verde lime |
| clarification | grigio (--muted) | grigio |

### Supabase
- Tabella `vocabulary`: verb, type, language, it, example_en, example_it, tags[]
- Unique index: `(verb, type, language)` — upsert sicuro, niente duplicati
- Tabella `vocab_stats`: vocab_id, learned, times_seen, times_correct, last_seen
- Credenziali salvate in localStorage (mai nel codice)

### localStorage — chiavi importanti
- `eu_lang` — lingua corrente ('en', 'es', 'fr')
- `eu_learned_{lang}` — Set di indici voci imparate
- `eu_stats_{lang}` — oggetto {idx: {seen, correct}}
- `eu_vocab_ids_{lang}` — mapping indice → UUID Supabase
- `eu_session` — streak, correct, total sessione corrente

### Stato JS globale
```js
currentLang     // lingua attiva
ALL_VOCAB       // array filtrato per currentLang (da ALL_VOCAB_FOR_EXERCISES)
activeFilter    // filtro pill attivo ('all', 'phrasal', 'bambini', ...)
activeSearch    // stringa di ricerca attiva (IT o EN)
learned         // Set di indici imparati
stats           // {idx: {seen, correct}}
vocabIds        // {idx: uuid} mapping per Supabase
```

### Come aggiungere nuovi vocaboli
1. Aggiungi la voce in `vocabulary.js` nell'array giusto (con emoji!)
2. Impostazioni → "Sync vocabolario" → fa upsert su Supabase
Oppure direttamente da Impostazioni → form "Aggiungi nuovo vocabolo"

### Campi vocab card
- Tutti i tipi: `verb, emoji, it, type, language, tags[], context_note`
- Phrasal verbs aggiuntivi: `simple` (alternativa semplice, es. "take / grab"), `example_en`, `example_it`
- Emoji watermark in alto a destra sulla card (opaco a riposo, visibile al hover)
- Riga `≈ simple` mostrata sotto il verbo (solo se `simple` presente)

### Funzionalità implementate
- **Tab Vocabolario**: grid card + ricerca IT/EN + filtri tipo/tag + emoji watermark + `≈ simple` + checkbox learned
- **Tab Quiz**: traduzione / fill-in-blank (fallback a traduzione se no example_en) / abbinamento, spaced repetition locale
- **Tab Listening**: frasi pre-salvate, velocità variabile, connected speech, genera con AI
- **Tab Tempi Verbali**: 14 tempi completi con schede di riferimento + 58 esercizi fill-in-blank
  - Schede: filtrabili per Past / Present / Future / Conditional (array `VERB_TENSES`)
  - Esercizi: PP vs PS · Continuous · Used to · Future · Conditional (array `TENSES_EX`, `grp` field)
- **Tab Coach**: chat con claude-sonnet-4-6, system prompt da animatore
- **Tab Miniclub**: dialoghi botta-risposta EN/ES/FR per miniclub estivo
  - Filtri: Genitori (drop-off/pick-up, orari, info) · Bambini (benvenuto, attività, regole, pranzo, incoraggiamento)
  - Tap frase → copia negli appunti, IT piccolo sopra, lingua attiva grande sotto
  - Array `MINICLUB_DIALOGUES` in index.html, rendering con `renderMiniclub()` + `filterMiniclub()`
- **Selettore lingua** (EN/ES/FR) in header — progressi separati per lingua, search si azzera al cambio
- **Impostazioni**: credenziali Supabase/Anthropic, sync vocab (upsert), form aggiungi voce, SQL setup hint

### Vocabolario — conteggio approssimativo (EN)
- Phrasal verbs: ~58 (inclusi batch @kamithepolyglot + da phrasal_verbs_animator.html)
- Idiomi: 8 · Colloquiali: 20 · Emozioni: 21 · Opinioni: 10 · Chiarimento: 12
- Totale EN: ~130 voci

### Fonte dati tempi verbali
`VERB_TENSES` array in index.html (non in vocabulary.js) — 14 oggetti con: `grp, icon, color, name, form, when, examples[], animator, phonetic`
