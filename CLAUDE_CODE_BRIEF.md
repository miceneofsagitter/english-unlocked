# CLAUDE CODE — BRIEF PROGETTO

# EnglishUnlocked · Web App personale per animatore italiano

---

## CONTESTO PERSONALE

Sono un animatore italiano per bambini. Ho bisogno di migliorare il mio inglese
per comunicare con **genitori e bambini anglofoni** durante feste ed eventi.

Le mie 3 difficoltà specifiche:

1. **Listening** — non capisco il parlato veloce e il connected speech
2. **Phrasal verbs** — li studio ma non li riconosco nel contesto reale
3. **Tempi verbali** — li conosco grammaticalmente ma non li applico parlando

Questa è un'app **solo per me**, non verrà pubblicata.

## usa frasi brevi, evita riempitivi,preamboli o formalita;esegui prima gli strumenti, mostar il risultato,poi fermati.Non aggiungere narrazione, ometti gli articoli("aggiusta codice" non "aggiusta il codice"

## OBIETTIVO

Un **singolo file `index.html`** — zero framework, zero build system, zero npm.
Si apre nel browser e funziona. Punto.

---

## STACK

```
HTML + CSS + JavaScript vanilla   ← tutto in un file
Supabase                          ← database online per vocabolario e progressi
Web Speech API                    ← sintesi vocale nativa del browser
Algoritmo locale JS               ← genera quiz senza AI
Anthropic API (opzionale)         ← solo per coaching e contenuto nuovo
```

---

## HO GIÀ DUE FILE DI RIFERIMENTO

Nella cartella trovi:

### `phrasal_verbs_animator.html`

Contiene già:

- Cards con emoji, categoria, checkbox "learned" ✓
- Filtri per categoria ✓
- Quiz con input testuale e progress bar ✓
- Tempi verbali con contesto da animatore ✓
- Statistiche in localStorage ✓
- Design chiaro, leggibile, funzionale ✓

### `english-trainer.html`

Contiene già:

- Dark theme moderno (colori sotto) ✓
- Filtri per tag (bambini/genitori/evento...) ✓
- Sintesi vocale 🔊 ✓
- Streak + statistiche ✓
- Listening con connected speech ✓
- Vocabolario con 56+ voci già scritte ✓
- AI opzionale integrata ✓

### `src/data/vocabulary.js`

Database con 56+ voci già pronte:

- 34 phrasal verbs contestualizzati per animatori
- 12 espressioni di emozione
- 10 espressioni di opinione
- Ogni voce ha: verb, it, example_en, example_it, tags[], type

---

## COSA COSTRUIRE

Un'unica app che prende il meglio dei due file esistenti.

### Tab 1 — 📚 Vocabolario

- Grid di cards, una per ogni voce del database
- Ogni card mostra: phrasal verb, traduzione IT, esempio EN+IT, emoji categoria
- Checkbox "Ho imparato questa" → card diventa verde, salvato su Supabase
- Filtri per tag: Tutti / Bambini / Genitori / Evento / Sicurezza / Emozioni / Opinioni
- Bottone 🔊 su ogni card per ascoltare la pronuncia (Web Speech API)
- Barra progresso in cima: "X/56 imparate"

### Tab 2 — ⚡ Quiz

- Algoritmo locale che genera quiz dal database (ZERO AI)
- 3 tipi di esercizio che si alternano:
  1. **Traduzione** — vedi la traduzione italiana, scegli il phrasal verb tra 4 opzioni
  2. **Fill-in-the-blank** — frase con \_\_\_ al posto del verb, 4 opzioni
  3. **Abbinamento** — trascina o clicca per abbinare 4 verbi alle 4 traduzioni
- Logica distrattori: sempre dello stesso `type`, mai la risposta corretta
- Progress bar, streak 🔥, statistiche sessione
- Salva su Supabase: quante volte vista ogni voce, quante volte risposto corretto

### Tab 3 — 👂 Listening

- Database di frasi pre-salvate (da `english-trainer.html`, sezione ANIMATOR_SENTENCES)
- Bottone 🔊 legge la frase (Web Speech API, velocità variabile: slow/medium/fast)
- Input testuale: scrivi quello che hai sentito
- Algoritmo similarità locale per valutare la risposta (no AI)
- Dopo il check: mostra le parole "collegate" che rendono difficile la comprensione
- Badge velocità colorato (LENTO 🟢 / MEDIO ⚡ / VELOCE 🔥)
- AI opzionale: bottone "Genera frase nuova" → chiama Anthropic API

### Tab 4 — ⏱️ Tempi Verbali

- Cards esplicative dei 3 contrasti più difficili per un italiano:
  - Present Perfect vs Past Simple
  - Present Continuous vs Simple
  - Used to / Would / Past Simple
- Ogni card ha: nome, quando usarlo, esempio da contesto animatore, nota fonetica
- Quiz fill-in-the-blank con frasi da animatore
- Esercizi pre-scritti nel codice (no AI), almeno 15 frasi per contrasto

### Tab 5 — 🤖 Coach (opzionale, richiede connessione)

- Chat con AI che sa chi sono e cosa faccio
- System prompt già scritto sotto
- Se offline: messaggio "Coach disponibile con connessione internet"

---

## SUPABASE — SCHEMA

Crea queste tabelle:

```sql
-- Vocabolario (importa da vocabulary.js)
create table vocabulary (
  id           uuid default gen_random_uuid() primary key,
  verb         text not null,
  type         text not null,
  it           text not null,
  example_en   text not null,
  example_it   text not null,
  tags         text[] default '{}',
  created_at   timestamp default now()
);

-- Progressi per voce
create table vocab_stats (
  vocab_id      uuid references vocabulary(id) primary key,
  times_seen    int default 0,
  times_correct int default 0,
  learned       boolean default false,
  last_seen     timestamp
);

-- Frasi listening
create table listening_sentences (
  id          uuid default gen_random_uuid() primary key,
  sentence    text not null,
  translation text not null,
  context     text,
  speed       text default 'medium',
  linked_words jsonb default '[]',
  phonetic_tip text
);

-- Sessioni di studio
create table sessions (
  id           uuid default gen_random_uuid() primary key,
  date         date default current_date,
  correct      int default 0,
  total        int default 0,
  streak       int default 0
);
```

Variabili d'ambiente nel file `.env`:

```
SUPABASE_URL=...
SUPABASE_ANON_KEY=...
ANTHROPIC_API_KEY=...   ← opzionale
```

Siccome è un'app personale, **disabilita Row Level Security** su tutte le tabelle.

---

## DESIGN SYSTEM

Dark theme. Questi colori esatti:

```css
--bg: #0c0c0f;
--surface: #14141a;
--surface2: #1e1e28;
--border: #2a2a38;
--accent: #e8ff00; /* giallo lime — azioni primarie */
--accent2: #ff6b35; /* arancio — velocità, warning */
--accent3: #7c6eff; /* viola — AI, speciale */
--text: #f0f0f8;
--muted: #6b6b88;
--success: #00e5a0;
--error: #ff4d6d;
```

Font:

- Titoli/UI: **Syne** (Google Fonts)
- Label/codice: **IBM Plex Mono** (Google Fonts)

Cards vocabolario: bordo colorato in cima per tipo

- phrasal verb → `--accent3` (viola)
- emozione → `--accent2` (arancio)
- opinione → `--success` (verde)

Card "learned" → sfondo leggermente verde, bordo `--success`

---

## SYSTEM PROMPT COACH AI

```
Sei un coach di inglese personale per un animatore italiano per bambini.
Conosci il suo lavoro: organizza feste, eventi, attività per bambini e
comunica con genitori e bambini anglofoni.
Difficoltà: listening veloce, phrasal verbs nel contesto, tempi verbali.
Stile: diretto, pratico, incoraggiante. Esempi sempre dal suo lavoro reale.
Se scrive in italiano → rispondi in italiano con esempi in inglese.
Se scrive in inglese → correggilo gentilmente e rispondi in inglese.
Proponi spesso micro role-play: "Prova a rispondere come faresti con
un genitore che dice: ..."
Max 150 parole per risposta.
```

---

## ALGORITMO QUIZ LOCALE

Implementa in JS puro, senza librerie:

```javascript
// Genera quiz "Traduzione IT→EN"
function generateTranslationQuiz(allVocab, target) {
  // 3 distrattori: stesso type di target, mai la risposta corretta
  const distractors = allVocab
    .filter((v) => v.type === target.type && v.verb !== target.verb)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3)
  const options = [target, ...distractors].sort(() => Math.random() - 0.5)
  return {
    type: 'translation',
    question: target.it,
    correct: target.verb,
    options,
  }
}

// Genera quiz "Fill in the blank"
function generateFillBlankQuiz(allVocab, target) {
  // oscura il verb nell'example_en
  const blank = target.example_en.replace(new RegExp(target.verb, 'gi'), '___')
  const distractors = allVocab
    .filter((v) => v.type === target.type && v.verb !== target.verb)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3)
    .map((v) => v.verb)
  const options = [target.verb, ...distractors].sort(() => Math.random() - 0.5)
  return {
    type: 'fill',
    question: blank,
    context: target.example_it,
    correct: target.verb,
    options,
  }
}

// Spaced repetition semplice: prioritizza voci meno viste o sbagliate
function pickNextVocab(allVocab, stats) {
  return allVocab.sort((a, b) => {
    const sa = stats[a.id] || { times_seen: 0, times_correct: 0 }
    const sb = stats[b.id] || { times_seen: 0, times_correct: 0 }
    const scoreA = sa.times_seen === 0 ? -1 : sa.times_correct / sa.times_seen
    const scoreB = sb.times_seen === 0 ? -1 : sb.times_correct / sb.times_seen
    return scoreA - scoreB // prima le più difficili / meno viste
  })[0]
}
```

---

## ORDINE DI COSTRUZIONE CONSIGLIATO

1. Setup HTML base con tab navigation e design system (CSS variables)
2. Carica vocabolario da Supabase (con fallback a `vocabulary.js` se offline)
3. Tab Vocabolario — grid + filtri + checkbox learned + sintesi vocale
4. Algoritmo quiz + Tab Quiz
5. Tab Listening con frasi pre-salvate
6. Tab Tempi Verbali con esercizi pre-scritti
7. Tab Coach (ultima, dipende da API key)
8. Supabase sync per progressi e stats

---

## COME AGGIUNGERE NUOVO VOCABOLARIO

Quando porto nuove immagini da Instagram:

```
Ho queste nuove espressioni [immagine].
Estraile, contestualizzale per un animatore,
inseriscile nella tabella Supabase vocabulary.
Dimmi il totale voci nel db.
```

---

_Aggiorna questo file quando aggiungi funzionalità importanti._
