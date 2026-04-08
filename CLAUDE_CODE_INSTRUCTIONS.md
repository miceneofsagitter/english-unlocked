# CLAUDE CODE — Istruzioni Progetto
# EnglishUnlocked · Web App per animatore italiano
# Stack: React + Vite + Supabase + Algoritmo locale + AI opzionale

---

## CHI SEI E COSA FAI

Stai lavorando su **EnglishUnlocked**, un'app di inglese personalizzata per un
animatore italiano per bambini. Le sue difficoltà specifiche:
1. **Listening** — non capisce il parlato veloce e il connected speech
2. **Phrasal verbs** — li studia ma non li riconosce nel contesto reale
3. **Tempi verbali** — li conosce grammaticalmente ma non li applica parlando

Contesto lavorativo: organizza feste, eventi e attività per bambini,
e ha bisogno di comunicare con **genitori e bambini anglofoni**.

---

## PRINCIPIO ARCHITETTURALE — IMPORTANTE

L'app deve funzionare **quasi interamente offline/senza AI**.
L'AI (Anthropic API) è opzionale e usata solo per generare contenuto nuovo.

```
OFFLINE sempre disponibile:
  - Vocabolario (da Supabase, cachato localmente)
  - Quiz generati dall'algoritmo locale
  - Progressi e statistiche
  - Listening sentences pre-salvate

AI opzionale (solo con connessione, solo su richiesta):
  - Generare nuove frasi listening
  - Chat con il coach
  - Drill personalizzati su una parola specifica
```

---

## STACK

```
React + Vite + TypeScript    ← web app, apri nel browser
Tailwind CSS                 ← stili
Framer Motion                ← animazioni
Supabase                     ← database online (vocabolario + progressi)
Algoritmo locale             ← genera quiz dal db senza AI
Anthropic API (opzionale)    ← solo per contenuto nuovo
```

---

## STRUTTURA CARTELLE

```
english-unlocked-web/
├── src/
│   ├── app/
│   │   └── App.tsx                  ← root, tab navigation
│   ├── pages/
│   │   ├── Listening.tsx
│   │   ├── PhrasalVerbs.tsx
│   │   ├── Tenses.tsx
│   │   ├── Vocab.tsx
│   │   └── Coach.tsx
│   ├── components/
│   │   ├── VocabCard.tsx
│   │   ├── QuizOptions.tsx
│   │   ├── FeedbackBox.tsx
│   │   └── SpeakButton.tsx
│   ├── lib/
│   │   ├── supabase.ts              ← client Supabase
│   │   ├── quizEngine.ts            ← algoritmo locale generazione quiz
│   │   └── claudeAI.ts             ← chiamate Anthropic (opzionale)
│   ├── hooks/
│   │   ├── useVocabulary.ts         ← fetch + cache vocabolario da Supabase
│   │   └── useProgress.ts          ← leggi/scrivi progressi su Supabase
│   └── constants/
│       └── theme.ts                 ← design tokens
├── .env                             ← chiavi Supabase + Anthropic
├── index.html
├── vite.config.ts
└── package.json
```

---

## SUPABASE — SCHEMA DATABASE

### Tabella: `vocabulary`
```sql
create table vocabulary (
  id           uuid default gen_random_uuid() primary key,
  verb         text not null,
  type         text not null,        -- 'phrasal' | 'emotion' | 'opinion'
  it           text not null,        -- traduzione italiana
  example_en   text not null,
  example_it   text not null,
  tags         text[] default '{}',  -- ['bambini','genitori','evento',...]
  difficulty   int default 1,        -- 1=facile, 2=medio, 3=difficile
  created_at   timestamp default now()
);
```

### Tabella: `listening_sentences`
```sql
create table listening_sentences (
  id           uuid default gen_random_uuid() primary key,
  sentence     text not null,
  translation  text not null,
  context      text,                 -- es: "genitore all'arrivo"
  speed        text default 'medium', -- 'slow'|'medium'|'fast'
  linked_words jsonb default '[]',
  phonetic_tip text,
  created_at   timestamp default now()
);
```

### Tabella: `progress`
```sql
create table progress (
  id           uuid default gen_random_uuid() primary key,
  session_date date default current_date,
  correct      int default 0,
  total        int default 0,
  streak       int default 0,
  vocab_seen   uuid[] default '{}',  -- id delle voci viste
  created_at   timestamp default now()
);
```

### Tabella: `vocab_stats`
```sql
create table vocab_stats (
  vocab_id     uuid references vocabulary(id),
  times_seen   int default 0,
  times_correct int default 0,
  last_seen    timestamp,
  primary key (vocab_id)
);
```

---

## ALGORITMO LOCALE — `src/lib/quizEngine.ts`

Questo file è il cuore dell'app. Genera quiz dal database senza AI.

### Tipi di esercizio da implementare

**1. Traduzione IT→EN** (dato il significato italiano, scegli il phrasal verb)
```typescript
// Prende 1 voce corretta + 3 distrattori casuali dello stesso tipo
function generateTranslationQuiz(vocab: VocabItem[], target: VocabItem): Quiz
```

**2. Completa la frase** (fill-in-the-blank dall'example_en)
```typescript
// Oscura il verb nell'example_en, offre 4 opzioni
function generateFillBlankQuiz(vocab: VocabItem[], target: VocabItem): Quiz
```

**3. Abbina** (match verb ↔ traduzione, 4 coppie)
```typescript
function generateMatchingQuiz(vocab: VocabItem[]): MatchingQuiz
```

**4. Spaced repetition semplice**
```typescript
// Prioritizza voci con times_correct basso o last_seen > 3 giorni fa
function pickNextVocab(vocab: VocabItem[], stats: VocabStats[]): VocabItem
```

### Logica distrattori
- Stessa `type` della voce target (phrasal con phrasal, emotion con emotion)
- Stesso tag se possibile (bambini con bambini)
- Mai usare la risposta corretta come distrattore
- Mescola sempre le opzioni prima di mostrare

---

## DESIGN SYSTEM — `src/constants/theme.ts`

```typescript
export const colors = {
  bg:       '#0c0c0f',
  surface:  '#14141a',
  surface2: '#1e1e28',
  border:   '#2a2a38',
  accent:   '#e8ff00',   // giallo lime — azioni primarie
  accent2:  '#ff6b35',   // arancio — velocità, warning
  accent3:  '#7c6eff',   // viola — AI, speciale
  text:     '#f0f0f8',
  muted:    '#6b6b88',
  success:  '#00e5a0',
  error:    '#ff4d6d',
}

export const fonts = {
  display: 'Syne',       // titoli, bold
  mono:    'IBM Plex Mono', // label, codice, badge
}
```

---

## VARIABILI D'AMBIENTE — `.env`

```
VITE_SUPABASE_URL=https://xxxx.supabase.co
VITE_SUPABASE_ANON_KEY=xxxx
VITE_ANTHROPIC_API_KEY=xxxx   ← opzionale, solo per funzioni AI
```

---

## PRIMO MESSAGGIO DA DARE A CLAUDE CODE

```
Leggi il file CLAUDE_CODE_INSTRUCTIONS.md per capire il progetto completo.

Poi esegui questi passi nell'ordine:

1. Crea il progetto:
   npm create vite@latest english-unlocked-web -- --template react-ts
   cd english-unlocked-web

2. Installa le dipendenze:
   npm install tailwindcss @tailwindcss/vite framer-motion @supabase/supabase-js

3. Configura Tailwind con Vite (vite.config.ts)

4. Crea il file src/constants/theme.ts con i colori esatti del design system

5. Crea src/lib/supabase.ts con il client Supabase dalle variabili .env

6. Crea le 4 tabelle Supabase con lo schema indicato in CLAUDE_CODE_INSTRUCTIONS.md
   (genera i comandi SQL pronti da eseguire nella Supabase dashboard)

7. Crea src/lib/quizEngine.ts con l'algoritmo locale per generare quiz

8. Popola la tabella vocabulary con i dati da src/data/vocabulary.js
   (già esistente nel progetto, contiene 56+ voci)

Dimmi quando il setup è pronto e migriamo le schermate una per una.
```

---

## AGGIUNGERE VOCABOLARIO DA IMMAGINI

```
Ho queste nuove espressioni [allega immagine].
Estraile, contestualizzale per un animatore per bambini,
e inseriscile nella tabella Supabase vocabulary via client.
Poi dimmi il totale delle voci nel db.
```

---

## NOTE IMPORTANTI

- **Mai** chiamare l'AI per cose che l'algoritmo può fare
- **Cache locale**: al primo caricamento, salva il vocabolario in localStorage
  così funziona anche senza connessione dopo la prima visita
- **Supabase Row Level Security**: per ora disabilitala (app personale, no auth)
- Il file `src/data/vocabulary.js` contiene già 56+ voci — usalo per
  popolare Supabase al setup iniziale
- Aggiorna questo file ogni volta che aggiungi funzionalità significative

