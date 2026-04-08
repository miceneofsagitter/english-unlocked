# EnglishUnlocked 🎉

usa frasi brevi, evita riempitivi,preamboli o formalita;esegui prima gli strumenti, mostar il risultato,poi fermati.Non aggiungere narrazione, ometti gli articoli("aggiusta codice" non "aggiusta il codice"

> Trainer personale per animatori — Listening · Phrasal Verbs · Tempi Verbali

## Struttura progetto

```
english-unlocked/
├── index.html              ← App completa (single file, apri nel browser)
├── src/
│   └── data/
│       └── vocabulary.js  ← Database vocabolario (phrasal verbs, espressioni)
└── README.md
```

## Come usare con Claude Code

Questo progetto è pensato per essere espanso con Claude Code.
Il file principale è `index.html` — è un'app standalone che usa l'API Anthropic.

### Setup

1. Apri il terminale nella cartella del progetto
2. Avvia con un server locale: `npx serve .` oppure apri `index.html` direttamente nel browser
3. L'app usa l'API Anthropic — assicurati di avere le credenziali configurate

### Idee di espansione con Claude Code

- [ ] Convertire in app React con Vite
- [ ] Aggiungere backend Node.js per gestire la chiave API lato server
- [ ] Sistema di spaced repetition per il vocabolario
- [ ] Persistenza dati su database (SQLite o Supabase)
- [ ] Modalità offline con vocabolario pre-caricato
- [ ] Esportazione progressi in PDF

## Database vocabolario (`src/data/vocabulary.js`)

Contiene tutto il vocabolario estratto dai post di @kamithepolyglot:

- **34 phrasal verbs** contestualizzati per animatori
- **12 espressioni di emozione** (No way!, That's insane!...)
- **10 espressioni di opinione** (I feel like..., The way I see it...)
- **12 frasi base** per il listening training

## Tecnologie

- HTML/CSS/JS vanilla (nessuna dipendenza)
- Anthropic API (claude-sonnet-4-20250514)
- Web Speech API (sintesi vocale del browser)
- localStorage per statistiche
