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
- `index.html` — HTML + struttura tabs. ~1250 righe. Zero build, zero server.
- `src/styles/main.css` — tutti gli stili
- `src/data/vocab-en.js` / `vocab-es.js` / `vocab-fr.js` — vocabolario per lingua (`EN_VOCAB`, `ES_VOCAB`, `FR_VOCAB`)
- `src/data/vocabulary.js` — orchestratore: unifica i tre in `ALL_VOCAB_FOR_EXERCISES` + `CROSS_LANG_INDEX`
- `src/data/sentences-data.js` — frasi Listening (`ANIMATOR_SENTENCES`)
- `src/data/miniclub-data.js` — dialoghi Miniclub (`MINICLUB_DIALOGUES`)
- `src/data/tenses-data.js` — tempi verbali (`VERB_TENSES`, `TENSES_EX`)
- `src/js/core.js` — stato globale, init, utilities
- `src/js/vocab.js` / `quiz.js` / `tenses.js` / `listening.js` / `coach.js` / `miniclub.js` / `settings.js`
- `sync-supabase-vocab.js` — script Node: pull Supabase → file locali con validazione anti-intrusi (`SUPABASE_URL=x SUPABASE_KEY=x node sync-supabase-vocab.js`)

### Struttura vocabulary.js
Dati vocab nei file per lingua, vocabulary.js li unifica:
- `EN_VOCAB` / `ES_VOCAB` / `FR_VOCAB` — ogni voce ha già `language` + `type`
- `ALL_VOCAB_FOR_EXERCISES` = `[...EN_VOCAB, ...ES_VOCAB, ...FR_VOCAB]`
- `CROSS_LANG_INDEX` = Map key=concept/it → voci in 2+ lingue (per collegamenti semantici)
- ⚠️ Naming: tutti gli entry usano campo `verb` (non esiste campo `en`)
- ⚠️ NON usa ES modules — carica come `<script src>` normale

### Ordine caricamento script (critico)
```
vocab-en.js → vocab-es.js → vocab-fr.js → vocabulary.js
→ sentences-data.js → miniclub-data.js → tenses-data.js
→ core.js → vocab.js → tenses.js → quiz.js → listening.js → settings.js → coach.js → miniclub.js
```

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
| verb | ciano (#22d3ee) | ciano |
| beach | ciano (#22d3ee) | ciano |

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
1. Aggiungi la voce nel file della lingua: `vocab-en.js` / `vocab-es.js` / `vocab-fr.js` (con emoji!)
   (`vocabulary.js` è orchestratore read-only — non modificarlo)
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
  - Array `MINICLUB_DIALOGUES` in `src/data/miniclub-data.js`, rendering con `renderMiniclub()` + `filterMiniclub()`
- **Selettore lingua** (EN/ES/FR) in header — progressi separati per lingua, search si azzera al cambio
- **Impostazioni**: credenziali Supabase/Anthropic, sync vocab (upsert), pull da Supabase (tutte e 3 le lingue, con validazione anti-intrusi), form aggiungi voce, SQL setup hint

### Vocabolario — conteggio per lingua
File locali (vocab-en/es/fr.js):
| type | EN | ES | FR |
|------|---:|---:|---:|
| phrasal | 149 | 2 | 2 |
| verb | 101 | 283 | 288 |
| colloquial | 156 | 156 | 128 |
| idiom | 87 | 84 | 80 |
| clarification | 50 | 50 | 48 |
| emotion | 50 | 49 | 47 |
| opinion | 44 | 42 | 43 |
| beach | 27 | 27 | 27 |
| **TOTALE** | **664** | **693** | **663** |

Supabase sincronizzato con i file locali (Apr 2026) — 2020 voci, tutti i campi example_en/example_it compilati.

### Fonte dati tempi verbali
`VERB_TENSES` array in `src/data/tenses-data.js` (non in index.html) — 14 oggetti con: `grp, icon, color, name, form, when, examples[], animator, phonetic`
