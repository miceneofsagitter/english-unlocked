// ============================================================
// VOCABOLARIO EN
// ============================================================
const EN_VOCAB = [
  {
    "language": "en",
    "type": "phrasal",
    "verb": "calm down",
    "emoji": "🧘",
    "simple": "relax / stop",
    "it": "calmarsi / calmare",
    "example_en": "Calm down, everything's okay!",
    "example_it": "Calmati, va tutto bene!",
    "tags": [
      "bambini",
      "comportamento"
    ],
    "context_note": "",
    "concept": "pv_calm_down"
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "join in",
    "emoji": "🙌",
    "simple": "",
    "it": "partecipare, unirsi",
    "example_en": "Come on, join in! It's fun!",
    "example_it": "Dai, unisciti! È divertente!",
    "tags": [
      "base",
      "bambini",
      "attività"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "show off",
    "emoji": "🦚",
    "simple": "brag / perform",
    "it": "mettersi in mostra",
    "example_en": "He's just showing off in front of the others.",
    "example_it": "Si sta solo mettendo in mostra davanti agli altri.",
    "tags": [
      "bambini",
      "comportamento"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "mess up",
    "emoji": "😬",
    "simple": "make a mistake",
    "it": "fare un casino / sbagliare",
    "example_en": "Don't worry if you mess up — we'll try again!",
    "example_it": "Non preoccuparti se sbagli — riproviamo!",
    "tags": [
      "bambini",
      "attività"
    ],
    "context_note": "",
    "concept": "pv_mess_up"
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "cheer up",
    "emoji": "😊",
    "simple": "smile / feel better",
    "it": "tirarsi su / animarsi",
    "example_en": "Cheer up! We're going to play your favourite game.",
    "example_it": "Tirati su! Facciamo il tuo gioco preferito.",
    "tags": [
      "bambini",
      "attività"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "give up",
    "emoji": "🏳️",
    "simple": "stop / quit",
    "it": "arrendersi, mollare",
    "example_en": "Don't give up! You're almost there.",
    "example_it": "Non mollare! Ci sei quasi.",
    "tags": [
      "bambini",
      "attività"
    ],
    "context_note": "",
    "concept": "pv_give_up"
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "keep on",
    "emoji": "💪",
    "simple": "continue / persist",
    "it": "continuare",
    "example_en": "Keep on trying, you'll get it!",
    "example_it": "Continua a provarci, ce la farai!",
    "tags": [
      "bambini",
      "attività"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "look after",
    "emoji": "🛡️",
    "simple": "watch / supervise",
    "it": "prendersi cura di",
    "example_en": "Don't worry, I'll look after him.",
    "example_it": "Non preoccuparti, me ne prendo cura io.",
    "tags": [
      "bambini",
      "genitori"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "watch out",
    "emoji": "⚠️",
    "simple": "be careful / attention",
    "it": "fare attenzione",
    "example_en": "Watch out! The floor is wet.",
    "example_it": "Attenzione! Il pavimento è bagnato.",
    "tags": [
      "bambini",
      "sicurezza"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "hand out",
    "emoji": "🤲",
    "simple": "distribute / give",
    "it": "distribuire",
    "example_en": "Can you help me hand out the stickers?",
    "example_it": "Mi aiuti a distribuire gli adesivi?",
    "tags": [
      "base",
      "attività"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "sort out",
    "emoji": "🔧",
    "simple": "fix / organize",
    "it": "sistemare / risolvere",
    "example_en": "I'll sort it out in a second.",
    "example_it": "Lo sistemo in un secondo.",
    "tags": [
      "problemi"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "come up with",
    "emoji": "💡",
    "simple": "invent / think of",
    "it": "inventare / trovare un'idea",
    "example_en": "She came up with a great game for the kids.",
    "example_it": "Ha inventato un bel gioco per i bambini.",
    "tags": [
      "attività"
    ],
    "context_note": "",
    "concept": "pv_come_up_with"
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "run out of",
    "emoji": "🪫",
    "simple": "finish / have no more",
    "it": "finire (scorte)",
    "example_en": "We've run out of balloons!",
    "example_it": "Abbiamo finito i palloncini!",
    "tags": [
      "attività",
      "evento"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "show up",
    "emoji": "🚪",
    "simple": "arrive / appear",
    "it": "presentarsi, arrivare",
    "example_en": "He showed up a bit late but he had a great time.",
    "example_it": "È arrivato un po' tardi ma si è divertito.",
    "tags": [
      "genitori"
    ],
    "context_note": "",
    "concept": "pv_show_up"
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "drop off",
    "emoji": "🚗",
    "simple": "leave / deliver",
    "it": "accompagnare / lasciare",
    "example_en": "You can drop her off at 3 and pick her up at 6.",
    "example_it": "Può lasciarla alle 3 e riprenderla alle 6.",
    "tags": [
      "genitori"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "pick up",
    "emoji": "🫴",
    "simple": "collect / take",
    "it": "andare a prendere",
    "example_en": "What time are you picking him up?",
    "example_it": "A che ora viene a prenderlo?",
    "tags": [
      "base",
      "genitori"
    ],
    "context_note": "",
    "concept": "pv_pick_up"
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "find out",
    "emoji": "🔍",
    "simple": "discover / learn",
    "it": "scoprire",
    "example_en": "I'll find out what happened and let you know.",
    "example_it": "Scopro cosa è successo e la avverto.",
    "tags": [
      "genitori",
      "problemi"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "let down",
    "emoji": "😞",
    "simple": "disappoint / fail",
    "it": "deludere",
    "example_en": "I promise we won't let you down.",
    "example_it": "Prometto che non la deluderemo.",
    "tags": [
      "genitori"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "look forward to",
    "emoji": "🤩",
    "simple": "anticipate / be excited",
    "it": "non vedere l'ora di",
    "example_en": "We're looking forward to seeing you at the party!",
    "example_it": "Non vediamo l'ora di vederla alla festa!",
    "tags": [
      "genitori",
      "evento"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "reach out",
    "emoji": "📱",
    "simple": "contact / call",
    "it": "contattare",
    "example_en": "Feel free to reach out if you have any questions.",
    "example_it": "Non esiti a contattarmi per qualsiasi domanda.",
    "tags": [
      "genitori"
    ],
    "context_note": "",
    "concept": "pv_reach_out"
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "turn out",
    "emoji": "🎯",
    "simple": "result / end up being",
    "it": "rivelarsi / risultare",
    "example_en": "It turned out to be a really fun afternoon!",
    "example_it": "Si è rivelato un pomeriggio davvero divertente!",
    "tags": [
      "genitori",
      "evento"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "end up",
    "emoji": "🛤️",
    "simple": "finally / eventually",
    "it": "finire per / ritrovarsi",
    "example_en": "He ended up having so much fun he didn't want to leave.",
    "example_it": "Alla fine si è divertito così tanto che non voleva andarsene.",
    "tags": [
      "genitori",
      "bambini"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "get along with",
    "emoji": "🤝",
    "simple": "like / work well with",
    "it": "andare d'accordo con",
    "example_en": "She gets along really well with the other kids.",
    "example_it": "Va molto d'accordo con gli altri bambini.",
    "tags": [
      "genitori",
      "bambini"
    ],
    "context_note": "",
    "concept": "pv_get_along_with"
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "catch up",
    "emoji": "☕",
    "simple": "update / recap",
    "it": "aggiornarsi / recuperare",
    "example_en": "Let's catch up at the end of the session.",
    "example_it": "Ci aggiorniamo alla fine della sessione.",
    "tags": [
      "genitori"
    ],
    "context_note": "",
    "concept": "pv_catch_up"
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "set up",
    "emoji": "🏗️",
    "simple": "prepare / arrange",
    "it": "allestire / organizzare",
    "example_en": "We need to set up before the kids arrive.",
    "example_it": "Dobbiamo allestire prima che arrivino i bambini.",
    "tags": [
      "evento"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "put off",
    "emoji": "⏰",
    "simple": "postpone / delay",
    "it": "rimandare",
    "example_en": "We had to put off the outdoor activity.",
    "example_it": "Abbiamo dovuto rimandare l'attività all'aperto.",
    "tags": [
      "evento"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "take on",
    "emoji": "💼",
    "simple": "accept / handle",
    "it": "assumersi / prendere",
    "example_en": "I took on the face painting this time.",
    "example_it": "Questa volta mi sono occupato del face painting.",
    "tags": [
      "evento"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "take over",
    "emoji": "👑",
    "simple": "replace / control",
    "it": "prendere il controllo",
    "example_en": "Can you take over while I sort out the food?",
    "example_it": "Puoi prendere il controllo mentre sistemo il cibo?",
    "tags": [
      "evento"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "work out",
    "emoji": "✅",
    "simple": "solve / succeed",
    "it": "risolvere / funzionare",
    "example_en": "Don't worry, it'll all work out!",
    "example_it": "Non preoccuparti, si sistemerà tutto!",
    "tags": [
      "evento",
      "problemi"
    ],
    "context_note": "",
    "concept": "pv_work_out"
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "point out",
    "emoji": "👉",
    "simple": "highlight / mention",
    "it": "sottolineare / indicare",
    "example_en": "I just wanted to point out that he's allergic to nuts.",
    "example_it": "Volevo solo sottolineare che è allergico alle noci.",
    "tags": [
      "genitori",
      "sicurezza"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "check out",
    "emoji": "👀",
    "simple": "look at / see",
    "it": "dare un'occhiata",
    "example_en": "Check out what they made — it's amazing!",
    "example_it": "Dai un'occhiata a quello che hanno fatto — è incredibile!",
    "tags": [
      "attività",
      "genitori"
    ],
    "context_note": "",
    "concept": "pv_check_out"
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "think over",
    "emoji": "🤔",
    "simple": "consider / reflect",
    "it": "riflettere su",
    "example_en": "Think it over and let me know if you want to book.",
    "example_it": "Ci pensi e mi faccia sapere se vuole prenotare.",
    "tags": [
      "genitori"
    ],
    "context_note": "",
    "concept": "pv_think_over"
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "break down",
    "emoji": "💥",
    "simple": "break / cry / fail",
    "it": "rompersi / scoppiare",
    "example_en": "The speaker broke down during the event.",
    "example_it": "Il microfono si è rotto durante l'evento.",
    "tags": [
      "evento",
      "problemi"
    ],
    "context_note": "",
    "concept": "pv_break_down"
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "get over",
    "emoji": "🏔️",
    "simple": "recover / move on",
    "it": "superare",
    "example_en": "He got over his shyness after the first game.",
    "example_it": "Ha superato la timidezza dopo il primo gioco.",
    "tags": [
      "bambini"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "chill out",
    "emoji": "🧊",
    "simple": "relax / calm down",
    "it": "rilassarsi, calmarsi",
    "example_en": "Just chill out, everything will be fine!",
    "example_it": "Rilassati, andrà tutto bene!",
    "tags": [
      "bambini",
      "comportamento"
    ],
    "context_note": "",
    "concept": "pv_chill_out"
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "break off",
    "emoji": "✂️",
    "simple": "stop / interrupt",
    "it": "interrompere, troncare",
    "example_en": "Let's break off the activity and take a short break.",
    "example_it": "Interrompiamo l'attività e facciamo una pausa.",
    "tags": [
      "attività",
      "evento"
    ],
    "context_note": "",
    "concept": "pv_break_off"
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "figure out",
    "emoji": "🧩",
    "simple": "understand / solve",
    "it": "capire, trovare una soluzione",
    "example_en": "I need to figure out the best game for this group.",
    "example_it": "Devo capire qual è il gioco migliore per questo gruppo.",
    "tags": [
      "attività",
      "evento"
    ],
    "context_note": "",
    "concept": "pv_figure_out"
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "run into",
    "emoji": "😲",
    "simple": "meet (by chance)",
    "it": "incontrare per caso",
    "example_en": "I ran into one of the kids' parents at the supermarket.",
    "example_it": "Ho incontrato per caso il genitore di uno dei bambini al supermercato.",
    "tags": [
      "genitori"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "go down the drain",
    "emoji": "🚿",
    "simple": "be wasted / fail",
    "it": "andare sprecato",
    "example_en": "All my preparation went down the drain when the event got cancelled.",
    "example_it": "Tutta la mia preparazione è andata sprecata quando l'evento è stato cancellato.",
    "tags": [
      "evento",
      "problemi"
    ],
    "context_note": "",
    "concept": "pv_go_down_drain"
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "put down",
    "emoji": "📍",
    "simple": "place / leave",
    "it": "mettere giù / posare",
    "example_en": "Put down the scissors, please!",
    "example_it": "Metti giù le forbici, per favore!",
    "tags": [
      "base",
      "bambini",
      "sicurezza"
    ],
    "context_note": "",
    "concept": "pv_put_down"
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "sit down",
    "emoji": "🪑",
    "simple": "be seated",
    "it": "sedersi",
    "example_en": "Sit down for lunch time.",
    "example_it": "Siediti per il pranzo.",
    "tags": [
      "base",
      "bambini",
      "attività"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "stand up",
    "emoji": "🧍",
    "simple": "get up / rise",
    "it": "alzarsi in piedi",
    "example_en": "Stand up for the game!",
    "example_it": "Alzati per il gioco!",
    "tags": [
      "base",
      "bambini",
      "attività"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "come along",
    "emoji": "👥",
    "simple": "follow / come with",
    "it": "seguire / venire con",
    "example_en": "Come along, everyone! We're going to play outside.",
    "example_it": "Venite tutti! Andiamo a giocare fuori.",
    "tags": [
      "bambini",
      "attività"
    ],
    "context_note": "",
    "concept": "pv_come_along"
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "run around",
    "emoji": "🏃",
    "simple": "play / move freely",
    "it": "correre / muoversi liberamente",
    "example_en": "Go run around the garden!",
    "example_it": "Vai a correre in giardino!",
    "tags": [
      "bambini",
      "attività"
    ],
    "context_note": "",
    "concept": "pv_run_around"
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "go away",
    "emoji": "👋",
    "simple": "leave / disappear",
    "it": "andarsene / smettila",
    "example_en": "The wasp will go away if we're quiet.",
    "example_it": "La vespa se ne andrà se stiamo fermi.",
    "tags": [
      "bambini"
    ],
    "context_note": "",
    "concept": "pv_go_away"
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "carry on",
    "emoji": "➡️",
    "simple": "continue / keep going",
    "it": "continuare / andare avanti",
    "example_en": "Carry on with your drawing.",
    "example_it": "Continua con il tuo disegno.",
    "tags": [
      "bambini",
      "attività"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "clean up",
    "emoji": "🧹",
    "simple": "tidy / put away",
    "it": "riordinare / mettere a posto",
    "example_en": "Time to clean up! Put the toys away.",
    "example_it": "È ora di riordinare! Mettete a posto i giochi.",
    "tags": [
      "attività",
      "evento"
    ],
    "context_note": "",
    "concept": "pv_clean_up"
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "wrap up",
    "emoji": "🎁",
    "simple": "finish / conclude",
    "it": "concludere / finire",
    "example_en": "We need to wrap up the activity in 5 minutes.",
    "example_it": "Dobbiamo concludere l'attività in 5 minuti.",
    "tags": [
      "attività",
      "evento"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "clear up",
    "emoji": "💧",
    "simple": "clean / remove",
    "it": "pulire / sgomberare",
    "example_en": "Clear up that spill before someone slips.",
    "example_it": "Pulisci quel liquido prima che qualcuno scivoli.",
    "tags": [
      "sicurezza",
      "attività"
    ],
    "context_note": "",
    "concept": "pv_clear_up"
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "take care of",
    "emoji": "🤝",
    "simple": "handle / manage",
    "it": "occuparsi di / gestire",
    "example_en": "I'll take care of that situation.",
    "example_it": "Me ne occupo io.",
    "tags": [
      "bambini",
      "genitori"
    ],
    "context_note": "",
    "concept": "pv_take_care_of"
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "deal with",
    "emoji": "⚖️",
    "simple": "handle / manage",
    "it": "gestire / affrontare",
    "example_en": "How do we deal with kids who won't listen?",
    "example_it": "Come gestiamo i bambini che non ascoltano?",
    "tags": [
      "problemi",
      "bambini"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "talk to",
    "emoji": "💬",
    "simple": "speak with / tell",
    "it": "parlare con",
    "example_en": "I need to talk to the parent about his allergies.",
    "example_it": "Devo parlare con il genitore delle sue allergie.",
    "tags": [
      "genitori"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "listen to",
    "emoji": "👂",
    "simple": "hear / pay attention",
    "it": "ascoltare / prestare attenzione",
    "example_en": "Listen to what Marco is saying.",
    "example_it": "Ascolta quello che dice Marco.",
    "tags": [
      "bambini"
    ],
    "context_note": "",
    "concept": "pv_listen_to"
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "get on with",
    "emoji": "😊",
    "simple": "like / work well with",
    "it": "andare d'accordo / lavorare bene con",
    "example_en": "The kids are getting on really well with each other.",
    "example_it": "I bambini vanno molto d'accordo tra di loro.",
    "tags": [
      "bambini",
      "genitori"
    ],
    "context_note": "",
    "concept": "pv_get_on_with"
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "check on",
    "emoji": "👁️",
    "simple": "verify / see / monitor",
    "it": "controllare / andare a vedere",
    "example_en": "Let me check on the kids in the other room.",
    "example_it": "Vado a controllare i bambini nell'altra stanza.",
    "tags": [
      "bambini",
      "sicurezza"
    ],
    "context_note": "",
    "concept": "pv_check_on"
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "settle down",
    "emoji": "🤫",
    "simple": "be quiet / calm down",
    "it": "calmarsi / stare tranquillo",
    "example_en": "Settle down, everyone. Story time!",
    "example_it": "Calmatevi tutti. È l'ora della storia!",
    "tags": [
      "bambini",
      "attività"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "feel better",
    "emoji": "💊",
    "simple": "recover / improve",
    "it": "stare meglio / riprendersi",
    "example_en": "I hope you feel better soon!",
    "example_it": "Spero che tu stia meglio presto!",
    "tags": [
      "bambini"
    ],
    "context_note": "",
    "concept": "pv_feel_better"
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "lighten up",
    "emoji": "😆",
    "simple": "relax / don't worry",
    "it": "prendersela meno / rilassarsi",
    "example_en": "Lighten up! It's just a game.",
    "example_it": "Prendila con leggerezza! È solo un gioco.",
    "tags": [
      "bambini"
    ],
    "context_note": "",
    "concept": "pv_lighten_up"
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "liven up",
    "emoji": "🎉",
    "simple": "energize / make fun",
    "it": "animare / rendere più vivace",
    "example_en": "Let's liven up this activity with some music!",
    "example_it": "Rendiamo questa attività più vivace con un po' di musica!",
    "tags": [
      "bambini",
      "attività"
    ],
    "context_note": "",
    "concept": "pv_liven_up"
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "launch into",
    "emoji": "🚀",
    "simple": "",
    "it": "buttarsi a capofitto, lanciarsi",
    "example_en": "Alright everyone, let's launch into the next game!",
    "example_it": "Dai ragazzi, buttiamoci nel prossimo gioco!",
    "tags": [
      "attività",
      "bambini"
    ],
    "context_note": "",
    "concept": "pv_launch_into"
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "rule out",
    "emoji": "❌",
    "simple": "",
    "it": "escludere, eliminare",
    "example_en": "I can't rule out moving the party indoors if it rains.",
    "example_it": "Non posso escludere di spostare la festa al chiuso se piove.",
    "tags": [
      "evento",
      "problemi"
    ],
    "context_note": "",
    "concept": "pv_rule_out"
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "go off",
    "emoji": "📢",
    "simple": "",
    "it": "andare a male / smettere di funzionare",
    "example_en": "I hope the music system doesn't go off during the show.",
    "example_it": "Spero che il sistema audio non si inceppi durante lo spettacolo.",
    "tags": [
      "evento",
      "problemi"
    ],
    "context_note": "",
    "concept": "pv_go_off"
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "pig out",
    "emoji": "🐷",
    "simple": "eat a lot / stuff yourself",
    "it": "mangiare voracemente, abbuffarsi",
    "example_en": "The kids pigged out on pizza at the party.",
    "example_it": "I bambini si sono abbuffati di pizza alla festa.",
    "tags": [
      "cibo",
      "divertimento"
    ],
    "context_note": "",
    "concept": "pv_pig_out"
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "line up",
    "emoji": "📏",
    "simple": "organize / arrange in a line",
    "it": "organizzare, allineare",
    "example_en": "We need to line up before the game starts.",
    "example_it": "Dobbiamo organizzarci prima che inizi il gioco.",
    "tags": [
      "base",
      "attività",
      "organizzazione"
    ],
    "context_note": "",
    "concept": "pv_line_up"
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "waltz into",
    "emoji": "🚪",
    "simple": "enter casually / stroll in",
    "it": "entrare tranquillamente, camminare verso",
    "example_en": "He waltzed into the room without knocking.",
    "example_it": "È entrato tranquillamente senza bussare.",
    "tags": [
      "movimento",
      "comportamento"
    ],
    "context_note": "",
    "concept": "pv_waltz_into"
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "take away",
    "emoji": "🛍️",
    "simple": "remove / take with you",
    "it": "portare via, asportare",
    "example_en": "The waiter will take away the plates.",
    "example_it": "Il cameriere porterà via i piatti.",
    "tags": [
      "ristorante",
      "quotidiano"
    ],
    "context_note": "",
    "concept": "pv_take_away"
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "horse around",
    "emoji": "🐴",
    "simple": "play foolishly / mess about",
    "it": "fare gli scherzi, giocare selvaggiamente",
    "example_en": "The kids were horsing around instead of doing homework.",
    "example_it": "I bambini stavano facendo i matti anziché fare i compiti.",
    "tags": [
      "bambini",
      "comportamento"
    ],
    "context_note": "",
    "concept": "pv_horse_around"
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "cut down on",
    "emoji": "✂️",
    "simple": "reduce / cut back",
    "it": "ridurre, tagliare",
    "example_en": "I'm trying to cut down on sugar.",
    "example_it": "Sto cercando di ridurre lo zucchero.",
    "tags": [
      "abitudini"
    ],
    "context_note": "",
    "concept": "pv_cut_down_on"
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "look for",
    "emoji": "🔍",
    "simple": "search / find",
    "it": "cercare",
    "example_en": "I'm looking for my keys.",
    "example_it": "Sto cercando le mie chiavi.",
    "tags": [
      "base",
      "quotidiano"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "get by",
    "emoji": "💪",
    "simple": "manage / survive",
    "it": "cavarsela, tirare avanti",
    "example_en": "We don't earn much, but we get by.",
    "example_it": "Non guadagniamo molto, ma ce la caviamo.",
    "tags": [
      "quotidiano"
    ],
    "context_note": "",
    "concept": "pv_get_by"
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "try on",
    "emoji": "👗",
    "simple": "test / wear",
    "it": "provare (un vestito / un paio di scarpe)",
    "example_en": "She tried on the dress before buying it.",
    "example_it": "Ha provato il vestito prima di comprarlo.",
    "tags": [
      "quotidiano"
    ],
    "context_note": "",
    "concept": "pv_try_on"
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "come across",
    "emoji": "🎲",
    "simple": "find / stumble upon",
    "it": "imbattersi in, trovare per caso",
    "example_en": "I came across an interesting article online.",
    "example_it": "Mi sono imbattuto in un articolo interessante online.",
    "tags": [
      "quotidiano"
    ],
    "context_note": "",
    "concept": "pv_come_across"
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "make up",
    "emoji": "🤝",
    "simple": "forgive / reconcile",
    "it": "fare pace, riconciliarsi",
    "example_en": "They argued but made up the next day.",
    "example_it": "Hanno litigato ma il giorno dopo hanno fatto pace.",
    "tags": [
      "relazioni"
    ],
    "context_note": "",
    "concept": "pv_make_up"
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "talk over",
    "emoji": "💬",
    "simple": "discuss / talk through",
    "it": "discutere, parlare di qualcosa insieme",
    "example_en": "Let's talk it over tonight.",
    "example_it": "Parliamone stasera.",
    "tags": [
      "comunicazione"
    ],
    "context_note": "",
    "concept": "pv_talk_over"
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "come up against",
    "emoji": "🧱",
    "simple": "face / run into",
    "it": "trovarsi di fronte a, dover affrontare",
    "example_en": "We came up against an unexpected problem.",
    "example_it": "Ci siamo trovati di fronte a un problema inaspettato.",
    "tags": [
      "problemi"
    ],
    "context_note": "",
    "concept": "pv_come_up_against"
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "break up",
    "emoji": "💔",
    "simple": "split / end a relationship",
    "it": "lasciarsi, separarsi",
    "example_en": "They decided to break up after two years.",
    "example_it": "Hanno deciso di lasciarsi dopo due anni.",
    "tags": [
      "relazioni"
    ],
    "context_note": "",
    "concept": "pv_break_up"
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "chicken out",
    "emoji": "🐔",
    "simple": "back out / get scared",
    "it": "tirarsi indietro per paura",
    "example_en": "He wanted to try bungee jumping but chickened out.",
    "example_it": "Voleva fare il bungee jumping ma si è tirato indietro.",
    "tags": [
      "comportamento"
    ],
    "context_note": "",
    "concept": "pv_chicken_out"
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "run away",
    "emoji": "🏃",
    "simple": "flee / escape",
    "it": "scappare, fuggire",
    "example_en": "The dog ran away when it heard the fireworks.",
    "example_it": "Il cane è scappato quando ha sentito i fuochi d'artificio.",
    "tags": [
      "movimento"
    ],
    "context_note": "",
    "concept": "pv_run_away"
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "run over",
    "emoji": "🚗",
    "simple": "hit with vehicle / crush",
    "it": "investire, travolgere",
    "example_en": "The car ran over my shoe!",
    "example_it": "La macchina mi ha schiacciato la scarpa!",
    "tags": [
      "quotidiano",
      "problemi"
    ],
    "context_note": "",
    "concept": "pv_run_over"
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "run through",
    "emoji": "📋",
    "simple": "go over / review quickly",
    "it": "passare velocemente in rassegna",
    "example_en": "Let's run through the plan before we start.",
    "example_it": "Rivediamo il piano prima di iniziare.",
    "tags": [
      "attività",
      "lavoro"
    ],
    "context_note": "",
    "concept": "pv_run_through"
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "make out",
    "emoji": "🧩",
    "simple": "understand / distinguish",
    "it": "distinguere, capire, riuscire a vedere",
    "example_en": "I couldn't make out what he was saying.",
    "example_it": "Non riuscivo a capire cosa stesse dicendo.",
    "tags": [
      "comunicazione"
    ],
    "context_note": "",
    "concept": "pv_make_out"
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "make up for",
    "emoji": "⚖️",
    "simple": "compensate / make amends",
    "it": "compensare, rimediare a",
    "example_en": "I'll make up for being late by staying longer.",
    "example_it": "Compenserò il ritardo restando più a lungo.",
    "tags": [
      "relazioni",
      "quotidiano"
    ],
    "context_note": "",
    "concept": "pv_make_up_for"
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "bug out",
    "emoji": "😱",
    "simple": "freak out / escape fast",
    "it": "spaventarsi molto, scappare di colpo",
    "example_en": "He totally bugged out when he saw the spider.",
    "example_it": "Si è spaventato da morire quando ha visto il ragno.",
    "tags": [
      "emozioni",
      "comportamento"
    ],
    "context_note": "",
    "concept": "pv_bug_out"
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "fill someone in",
    "emoji": "📢",
    "simple": "update / inform",
    "it": "aggiornare qualcuno, metterlo al corrente",
    "example_en": "Can you fill me in on what I missed?",
    "example_it": "Mi puoi aggiornare su quello che mi sono perso?",
    "tags": [
      "comunicazione"
    ],
    "context_note": "",
    "concept": "pv_fill_in"
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "take off",
    "emoji": "👕",
    "simple": "remove",
    "it": "togliere / sfilare",
    "example_en": "Take off your jacket.",
    "example_it": "Togliti la giacca.",
    "tags": [
      "base",
      "bambini",
      "azioni base"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "take out",
    "emoji": "🎁",
    "simple": "remove / extract",
    "it": "tirare fuori / estrarre",
    "example_en": "Take out your snack.",
    "example_it": "Tira fuori il tuo spuntino.",
    "tags": [
      "base",
      "bambini",
      "azioni base"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "put in",
    "emoji": "📦",
    "simple": "insert / place",
    "it": "mettere dentro / inserire",
    "example_en": "Put it in the box.",
    "example_it": "Mettilo dentro la scatola.",
    "tags": [
      "base",
      "bambini",
      "azioni base"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "put on",
    "emoji": "👕",
    "simple": "wear / dress",
    "it": "mettere / indossare",
    "example_en": "Put on your jacket.",
    "example_it": "Metti la giacca.",
    "tags": [
      "base",
      "bambini",
      "azioni base"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "put away",
    "emoji": "🎒",
    "simple": "store / tidy",
    "it": "mettere a posto / riporre",
    "example_en": "Put away the books.",
    "example_it": "Metti a posto i libri.",
    "tags": [
      "base",
      "bambini",
      "attività",
      "pulizia"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "wake up",
    "emoji": "👁️",
    "simple": "awake",
    "it": "svegliarsi",
    "example_en": "Wake up! It's time for breakfast.",
    "example_it": "Svegliati! È ora di colazione.",
    "tags": [
      "base",
      "bambini",
      "routine"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "get up",
    "emoji": "⬆️",
    "simple": "stand / rise",
    "it": "alzarsi (dal letto)",
    "example_en": "Get up and get dressed!",
    "example_it": "Alzati e vestiti!",
    "tags": [
      "base",
      "bambini",
      "routine"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "go out",
    "emoji": "🚪",
    "simple": "exit / leave",
    "it": "uscire (di casa)",
    "example_en": "We're going out to play.",
    "example_it": "Andiamo fuori a giocare.",
    "tags": [
      "base",
      "bambini",
      "attività",
      "outdoor"
    ],
    "context_note": "",
    "concept": "pv_go_out"
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "come back",
    "emoji": "↩️",
    "simple": "return",
    "it": "tornare / ritornare",
    "example_en": "Come back in 10 minutes.",
    "example_it": "Torna fra 10 minuti.",
    "tags": [
      "bambini",
      "tempo"
    ],
    "context_note": "",
    "concept": "pv_come_back"
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "turn on",
    "emoji": "💡",
    "simple": "switch on",
    "it": "accendere",
    "example_en": "Turn on the light, please.",
    "example_it": "Accendi la luce, per favore.",
    "tags": [
      "base",
      "attività"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "turn off",
    "emoji": "🌙",
    "simple": "switch off",
    "it": "spegnere",
    "example_en": "Turn off the music when we're done.",
    "example_it": "Spegni la musica quando abbiamo finito.",
    "tags": [
      "base",
      "attività"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "wait for",
    "emoji": "⏳",
    "simple": "stay / expect",
    "it": "aspettare / attendere",
    "example_en": "Wait for your turn, please.",
    "example_it": "Aspetta il tuo turno, per favore.",
    "tags": [
      "base",
      "bambini",
      "comportamento"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "get in",
    "emoji": "🚗",
    "simple": "enter / climb in",
    "it": "salire (in auto/piscina)",
    "example_en": "Get in the car.",
    "example_it": "Sali in macchina.",
    "tags": [
      "base",
      "bambini",
      "movimento"
    ],
    "context_note": "",
    "concept": "pv_get_in"
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "get out",
    "emoji": "🚪",
    "simple": "exit / leave",
    "it": "scendere / uscire",
    "example_en": "Get out of the pool.",
    "example_it": "Esci dalla piscina.",
    "tags": [
      "base",
      "bambini",
      "sicurezza",
      "movimento"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "get on",
    "emoji": "🚌",
    "simple": "board / climb on",
    "it": "salire (su autobus, bici)",
    "example_en": "Get on the bus.",
    "example_it": "Sali sull'autobus.",
    "tags": [
      "bambini",
      "movimento"
    ],
    "context_note": "",
    "concept": "pv_get_on"
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "get off",
    "emoji": "⬇️",
    "simple": "descend / exit",
    "it": "scendere (da autobus, bici)",
    "example_en": "Get off the bike.",
    "example_it": "Scendi dalla bici.",
    "tags": [
      "bambini",
      "movimento"
    ],
    "context_note": "",
    "concept": "pv_get_off"
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "eat up",
    "emoji": "🍽️",
    "simple": "finish eating",
    "it": "finire tutto il cibo",
    "example_en": "Eat up your vegetables!",
    "example_it": "Finisci le verdure!",
    "tags": [
      "bambini",
      "tavola",
      "nutrizione"
    ],
    "context_note": "",
    "concept": "pv_eat_up"
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "drink up",
    "emoji": "💧",
    "simple": "finish drinking",
    "it": "bere tutto",
    "example_en": "Drink up your water.",
    "example_it": "Finisci l'acqua.",
    "tags": [
      "bambini",
      "tavola"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "dig in",
    "emoji": "🍴",
    "simple": "start eating",
    "it": "iniziare a mangiare con entusiasmo",
    "example_en": "Dig in, everyone!",
    "example_it": "Iniziamo a mangiare!",
    "tags": [
      "bambini",
      "tavola"
    ],
    "context_note": "",
    "concept": "pv_dig_in"
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "clear away",
    "emoji": "🧼",
    "simple": "tidy / clean up",
    "it": "sparecchiare / togliere le cose",
    "example_en": "Let's clear away the dishes.",
    "example_it": "Togliamo i piatti.",
    "tags": [
      "bambini",
      "pulizia",
      "tavola"
    ],
    "context_note": "",
    "concept": "pv_clear_away"
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "wipe down",
    "emoji": "🧹",
    "simple": "clean / wipe",
    "it": "passare lo straccio / pulire",
    "example_en": "Let's wipe down the table.",
    "example_it": "Puliamo il tavolo.",
    "tags": [
      "bambini",
      "pulizia"
    ],
    "context_note": "",
    "concept": "pv_wipe_down"
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "hand in",
    "emoji": "📄",
    "simple": "submit / give",
    "it": "consegnare (lavoro)",
    "example_en": "Hand in your drawings, please.",
    "example_it": "Consegna i tuoi disegni, per favore.",
    "tags": [
      "base",
      "bambini",
      "attività",
      "scuola"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "take turns",
    "emoji": "🔄",
    "simple": "alternate / rotate",
    "it": "fare a turno",
    "example_en": "Take turns on the swing.",
    "example_it": "Fate a turno sull'altalena.",
    "tags": [
      "bambini",
      "giochi",
      "comportamento"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "cut out",
    "emoji": "✂️",
    "simple": "cut / trim",
    "it": "ritagliare",
    "example_en": "Cut out the shape from the paper.",
    "example_it": "Ritaglia la forma dalla carta.",
    "tags": [
      "bambini",
      "attività",
      "laboratorio"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "color in",
    "emoji": "🖍️",
    "simple": "paint / colour",
    "it": "colorare (dentro i margini)",
    "example_en": "Color in the picture.",
    "example_it": "Colora il disegno.",
    "tags": [
      "bambini",
      "attività",
      "laboratorio"
    ],
    "context_note": "",
    "concept": "pv_color_in"
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "tidy up",
    "emoji": "🧸",
    "simple": "organize / clean",
    "it": "riordinare lo spazio",
    "example_en": "Let's tidy up the room.",
    "example_it": "Riordiniamo la stanza.",
    "tags": [
      "bambini",
      "pulizia",
      "attività"
    ],
    "context_note": "",
    "concept": "pv_tidy_up"
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "slow down",
    "emoji": "🐢",
    "simple": "reduce speed",
    "it": "rallentare",
    "example_en": "Slow down! You're running too fast.",
    "example_it": "Rallenta! Stai correndo troppo veloce.",
    "tags": [
      "bambini",
      "sicurezza"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "hurry up",
    "emoji": "⚡",
    "simple": "rush / move fast",
    "it": "sbrigarsi / affrettarsi",
    "example_en": "Hurry up, it's almost lunch time!",
    "example_it": "Sbrigati, è quasi ora di pranzo!",
    "tags": [
      "bambini",
      "tempo"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "keep up",
    "emoji": "🚶‍♂️",
    "simple": "maintain pace",
    "it": "tenere il passo",
    "example_en": "Keep up with the group!",
    "example_it": "Tieni il passo con il gruppo!",
    "tags": [
      "bambini",
      "movimento",
      "gruppo"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "look around",
    "emoji": "👀",
    "simple": "observe / explore",
    "it": "guardarsi intorno",
    "example_en": "Look around and find a partner.",
    "example_it": "Guardati intorno e trova un compagno.",
    "tags": [
      "bambini",
      "attività",
      "outdoor"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "go back",
    "emoji": "↩️",
    "simple": "return / retreat",
    "it": "tornare indietro",
    "example_en": "We forgot something, let's go back.",
    "example_it": "Abbiamo dimenticato qualcosa, torniamo indietro.",
    "tags": [
      "bambini",
      "movimento"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "dig up",
    "emoji": "⛏️",
    "simple": "excavate / unearth",
    "it": "scavare per estrarre",
    "example_en": "Let's dig up the potatoes!",
    "example_it": "Scaviamo le patate!",
    "tags": [
      "outdoor",
      "orto",
      "attività"
    ],
    "context_note": "",
    "concept": "pv_dig_up"
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "pull out",
    "emoji": "🌱",
    "simple": "extract / remove",
    "it": "strappare (erbacce)",
    "example_en": "Pull out the weeds.",
    "example_it": "Strappa le erbacce.",
    "tags": [
      "outdoor",
      "orto",
      "attività"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "plant out",
    "emoji": "🌿",
    "simple": "plant / transplant",
    "it": "trapiantare",
    "example_en": "Plant out the seedlings.",
    "example_it": "Trapianta le piantine.",
    "tags": [
      "outdoor",
      "orto",
      "attività"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "water down",
    "emoji": "💧",
    "simple": "dilute",
    "it": "diluire acqua/concime",
    "example_en": "Water down the soil after planting.",
    "example_it": "Innaffia la terra dopo il trapianto.",
    "tags": [
      "outdoor",
      "orto"
    ],
    "context_note": "",
    "concept": "pv_water_down"
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "grow up",
    "emoji": "🌱",
    "simple": "mature / develop",
    "it": "crescere (piante / bambini)",
    "example_en": "Watch the plants grow up!",
    "example_it": "Guarda le piante crescere!",
    "tags": [
      "outdoor",
      "orto",
      "crescita"
    ],
    "context_note": "",
    "concept": "pv_grow_up"
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "cut back",
    "emoji": "✂️",
    "simple": "trim / prune",
    "it": "potare / accorciare rami",
    "example_en": "Cut back the branches.",
    "example_it": "Accorcia i rami.",
    "tags": [
      "outdoor",
      "orto"
    ],
    "context_note": "",
    "concept": "pv_cut_back"
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "clear out",
    "emoji": "🧹",
    "simple": "empty / clean out",
    "it": "fare pulizia / svuotare",
    "example_en": "Let's clear out the dead leaves.",
    "example_it": "Togliamo le foglie secche.",
    "tags": [
      "outdoor",
      "orto",
      "pulizia"
    ],
    "context_note": "",
    "concept": "pv_clear_out"
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "warm up",
    "emoji": "🔥",
    "simple": "exercise / prepare",
    "it": "riscaldarsi",
    "example_en": "Let's warm up before we swim.",
    "example_it": "Riscaldiamoci prima di nuotare.",
    "tags": [
      "piscina",
      "attività",
      "esercizio"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "dive in",
    "emoji": "🏊",
    "simple": "plunge / jump",
    "it": "tuffarsi",
    "example_en": "Ready to dive in?",
    "example_it": "Pronti a tuffarvi?",
    "tags": [
      "piscina",
      "movimento"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "splash around",
    "emoji": "💦",
    "simple": "play in water",
    "it": "sguazzare / giocare in acqua",
    "example_en": "Come on, let's splash around!",
    "example_it": "Dai, sguazziamo!",
    "tags": [
      "piscina",
      "giochi",
      "attività"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "dry off",
    "emoji": "🧣",
    "simple": "get dry",
    "it": "asciugarsi bene",
    "example_en": "Dry off with your towel.",
    "example_it": "Asciugati bene con l'asciugamano.",
    "tags": [
      "piscina",
      "igiene"
    ],
    "context_note": "",
    "concept": "pv_dry_off"
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "cool down",
    "emoji": "❄️",
    "simple": "calm / chill",
    "it": "rinfrescarsi / calmarsi",
    "example_en": "Let's cool down after the game.",
    "example_it": "Rinfreschiamoci dopo il gioco.",
    "tags": [
      "piscina",
      "attività",
      "riposo"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "hold on",
    "emoji": "✊",
    "simple": "grip / wait",
    "it": "tenersi forte",
    "example_en": "Hold on to the rail!",
    "example_it": "Tieniti al corrimano!",
    "tags": [
      "piscina",
      "sicurezza"
    ],
    "context_note": "",
    "concept": "pv_hold_on"
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "keep away",
    "emoji": "🚫",
    "simple": "maintain distance",
    "it": "stare lontano",
    "example_en": "Keep away from the deep end.",
    "example_it": "Stai lontano dalla parte profonda.",
    "tags": [
      "piscina",
      "sicurezza",
      "bambini"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "stay away",
    "emoji": "🚫",
    "simple": "avoid / keep clear",
    "it": "rimani lontano",
    "example_en": "Stay away from the edge.",
    "example_it": "Rimani lontano dal bordo.",
    "tags": [
      "piscina",
      "sicurezza",
      "bambini"
    ],
    "context_note": "",
    "concept": "pv_stay_away"
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "share out",
    "emoji": "🤝",
    "simple": "distribute / divide",
    "it": "dividere e distribuire",
    "example_en": "Let's share out the toys.",
    "example_it": "Dividiamo i giocattoli.",
    "tags": [
      "bambini",
      "giochi",
      "comportamento"
    ],
    "context_note": "",
    "concept": "pv_share_out"
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "glue down",
    "emoji": "🧴",
    "simple": "stick / adhere",
    "it": "incollare sopra una superficie",
    "example_en": "Glue down the stickers.",
    "example_it": "Incolla gli adesivi.",
    "tags": [
      "bambini",
      "laboratorio"
    ],
    "context_note": "",
    "concept": "pv_glue_down"
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "call back",
    "emoji": "📞",
    "simple": "return a call",
    "it": "richiamare al telefono",
    "example_en": "I'll call you back later.",
    "example_it": "Ti richiamo più tardi.",
    "tags": [
      "genitori",
      "comunicazione"
    ],
    "context_note": "",
    "concept": "pv_call_back"
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "hang up",
    "emoji": "📞",
    "simple": "end a call",
    "it": "riattaccare il telefono",
    "example_en": "Don't hang up, I need to tell you something!",
    "example_it": "Non riattaccare, devo dirti qualcosa!",
    "tags": [
      "genitori",
      "comunicazione"
    ],
    "context_note": "",
    "concept": "pv_hang_up"
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "hang out",
    "emoji": "👯",
    "simple": "spend time / relax",
    "it": "passare il tempo insieme",
    "example_en": "We're hanging out in the park.",
    "example_it": "Stiamo al parco.",
    "tags": [
      "attività",
      "tempo libero"
    ],
    "context_note": "",
    "concept": "pv_hang_out"
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "throw away",
    "emoji": "🗑️",
    "simple": "discard / trash",
    "it": "buttare via",
    "example_en": "Throw away the trash.",
    "example_it": "Butta la spazzatura.",
    "tags": [
      "pulizia",
      "attività"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "turn up",
    "emoji": "📢",
    "simple": "increase volume",
    "it": "alzare (volume/temperatura)",
    "example_en": "Can you turn up the music?",
    "example_it": "Puoi alzare la musica?",
    "tags": [
      "attività"
    ],
    "context_note": "",
    "concept": "pv_turn_up"
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "turn down",
    "emoji": "🔇",
    "simple": "decrease volume",
    "it": "abbassare (volume/temperatura)",
    "example_en": "Turn down the volume, please.",
    "example_it": "Abbassa il volume, per favore.",
    "tags": [
      "attività"
    ],
    "context_note": "",
    "concept": "pv_turn_down"
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "look up",
    "emoji": "📚",
    "simple": "search / check",
    "it": "cercare informazioni",
    "example_en": "Look up the definition in the dictionary.",
    "example_it": "Cerca la definizione nel dizionario.",
    "tags": [
      "attività",
      "scuola"
    ],
    "context_note": "",
    "concept": "pv_look_up"
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "write down",
    "emoji": "✏️",
    "simple": "note / record",
    "it": "appuntarsi / scrivere su carta",
    "example_en": "Write down your name, please.",
    "example_it": "Scrivi il tuo nome, per favore.",
    "tags": [
      "attività",
      "scuola"
    ],
    "context_note": "",
    "concept": "pv_write_down"
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "fill out",
    "emoji": "📋",
    "simple": "complete",
    "it": "compilare (modulo)",
    "example_en": "Fill out the form.",
    "example_it": "Compila il modulo.",
    "tags": [
      "attività",
      "moduli"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "can't seem to",
    "emoji": "🤷",
    "simple": "unable / struggle",
    "it": "non riesco proprio / sembra che non riesca",
    "example_en": "I can't seem to focus on anything today.",
    "example_it": "Non riesco a concentrarmi su nulla oggi.",
    "tags": [
      "comunicazione",
      "base"
    ],
    "context_note": "",
    "concept": "pv_cant_seem_to"
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "look into",
    "emoji": "🔍",
    "simple": "investigate / examine",
    "it": "indagare / esaminare",
    "example_en": "The police are looking into the case.",
    "example_it": "La polizia sta indagando sul caso.",
    "tags": [
      "lavoro",
      "problemi"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "look out",
    "emoji": "⚠️",
    "simple": "be careful / watch out",
    "it": "fare attenzione",
    "example_en": "Look out! There's a car coming!",
    "example_it": "Attenzione! Sta arrivando una macchina!",
    "tags": [
      "sicurezza",
      "base"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "look over",
    "emoji": "👀",
    "simple": "check / review",
    "it": "controllare / dare un'occhiata",
    "example_en": "I looked over the report before the meeting.",
    "example_it": "Ho controllato il rapporto prima della riunione.",
    "tags": [
      "lavoro",
      "attività"
    ],
    "context_note": "",
    "concept": "pv_look_over"
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "look through",
    "emoji": "📸",
    "simple": "browse / examine",
    "it": "sfogliare / esaminare",
    "example_en": "I'm looking through old photos.",
    "example_it": "Sto sfogliando vecchie foto.",
    "tags": [
      "quotidiano",
      "tempo libero"
    ],
    "context_note": "",
    "concept": "pv_look_through"
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "In a pickle",
    "emoji": "🥒",
    "simple": "",
    "it": "Nei guai / In una situazione difficile",
    "example_en": "I'm totally in a pickle — help!",
    "example_it": "Sono totalmente nei guai — aiuto!",
    "tags": [
      "bambini",
      "problemi"
    ],
    "context_note": "situazione complicata",
    "concept": "idiom_in_pickle"
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "To have your head in the clouds",
    "emoji": "☁️",
    "simple": "",
    "it": "Avere la testa tra le nuvole",
    "example_en": "To have your head in the clouds",
    "example_it": "Avere la testa tra le nuvole",
    "tags": [
      "bambini"
    ],
    "context_note": "essere distratto o perso nei propri pensieri",
    "concept": "idiom_in_clouds"
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "To cost an arm and a leg",
    "emoji": "💸",
    "simple": "",
    "it": "Costare un occhio della testa",
    "example_en": "To cost an arm and a leg",
    "example_it": "Costare un occhio della testa",
    "tags": [
      "base"
    ],
    "context_note": "qualcosa di molto caro",
    "concept": "idiom_arm_leg"
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "To get one's act together",
    "emoji": "🔋",
    "simple": "",
    "it": "Darsi una mossa / attivarsi",
    "example_en": "Come on, get your act together!",
    "example_it": "Dai, datti una mossa!",
    "tags": [
      "bambini"
    ],
    "context_note": "iniziare a impegnarsi o reagire",
    "concept": "idiom_get_act_together"
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "To put one's foot in it",
    "emoji": "🦶",
    "simple": "",
    "it": "Fare una gaffe / sbagliare",
    "example_en": "To put one's foot in it",
    "example_it": "Fare una gaffe",
    "tags": [
      "bambini"
    ],
    "context_note": "fare o dire qualcosa fuori luogo",
    "concept": "idiom_foot_in_mouth"
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "It slipped my mind",
    "emoji": "🧠",
    "simple": "",
    "it": "Mi è sfuggito di mente",
    "example_en": "Sorry, it completely slipped my mind!",
    "example_it": "Scusa, mi è completamente sfuggito di mente!",
    "tags": [
      "base"
    ],
    "context_note": "dimenticare qualcosa",
    "concept": "idiom_slipped_mind"
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "I'm all ears",
    "emoji": "👂",
    "simple": "",
    "it": "Sono tutt'orecchi",
    "example_en": "Tell me what happened — I'm all ears.",
    "example_it": "Dimmi cosa è successo — sono tutt'orecchi.",
    "tags": [
      "bambini"
    ],
    "context_note": "ascolto attento",
    "concept": "idiom_all_ears"
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "Play it by ear",
    "emoji": "🎵",
    "simple": "",
    "it": "Decidere sul momento / Vedere come va",
    "example_en": "Let's play it by ear and see.",
    "example_it": "Decidiamo sul momento e vediamo.",
    "tags": [
      "bambini"
    ],
    "context_note": "improvvisare, essere flessibili",
    "concept": "idiom_by_ear"
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "Spill the beans",
    "emoji": "🫘",
    "simple": "",
    "it": "Rivelare un segreto",
    "example_en": "Come on, spill the beans — what happened?",
    "example_it": "Dai, spilla il sacco — cosa è successo?",
    "tags": [
      "bambini"
    ],
    "context_note": "dire qualcosa che non si doveva",
    "concept": "idiom_spill_beans"
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "On the same page",
    "emoji": "📖",
    "simple": "",
    "it": "Sulla stessa lunghezza d'onda",
    "example_en": "Are we all on the same page?",
    "example_it": "Siamo tutti sulla stessa lunghezza d'onda?",
    "tags": [
      "bambini"
    ],
    "context_note": "essere d'accordo, capirsi",
    "concept": "idiom_same_page"
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "Go haywire",
    "emoji": "🌀",
    "simple": "",
    "it": "Andare in tilt / non funzionare più",
    "example_en": "The schedule went completely haywire today.",
    "example_it": "Il programma è andato completamente in tilt oggi.",
    "tags": [
      "problemi"
    ],
    "context_note": "quando qualcosa smette improvvisamente di funzionare",
    "concept": "idiom_chaos"
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "Without a hitch",
    "emoji": "✨",
    "simple": "",
    "it": "Senza intoppi / liscio come l'olio",
    "example_en": "Everything ran without a hitch!",
    "example_it": "Tutto è filato liscio come l'olio!",
    "tags": [
      "base"
    ],
    "context_note": "evento o attività che va tutto perfettamente",
    "concept": "without_a_hitch"
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "The jig is up",
    "emoji": "🥕",
    "simple": "",
    "it": "È tutto finito / non c'è più nulla da fare",
    "example_en": "The jig is up — I know you hid it!",
    "example_it": "È tutto finito — so che l'hai nascosto!",
    "tags": [
      "problemi"
    ],
    "context_note": "situazione senza via d'uscita, tutto è perduto",
    "concept": "idiom_jig_is_up"
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "Take something for granted",
    "emoji": "🙈",
    "simple": "",
    "it": "Dare qualcosa per scontato",
    "example_en": "Don't take good weather for granted here!",
    "example_it": "Non dare per scontato il bel tempo qui!",
    "tags": [
      "bambini"
    ],
    "context_note": "non apprezzare ciò che si ha, considerarlo ovvio",
    "concept": "idiom_granted"
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "Tackle an issue",
    "emoji": "⚔️",
    "simple": "",
    "it": "Affrontare un problema con determinazione",
    "example_en": "Let's tackle this issue together.",
    "example_it": "Affrontiamo questo problema insieme.",
    "tags": [
      "base"
    ],
    "context_note": "gestire o risolvere attivamente una difficoltà",
    "concept": "idiom_tackle"
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "Take into account",
    "emoji": "🧮",
    "simple": "",
    "it": "Tenere conto di / considerare",
    "example_en": "Take the kids' allergies into account.",
    "example_it": "Tieni conto delle allergie dei bambini.",
    "tags": [
      "lavoro"
    ],
    "context_note": "includere un fattore nel ragionamento o nella decisione",
    "concept": "idiom_take_account"
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "Put pressure on someone",
    "emoji": "😤",
    "simple": "",
    "it": "Mettere pressione a qualcuno",
    "example_en": "Don't put pressure on him — he'll learn.",
    "example_it": "Non mettergli pressione — imparerà.",
    "tags": [
      "bambini"
    ],
    "context_note": "forzare o spingere qualcuno a fare qualcosa",
    "concept": "idiom_pressure"
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "Have a knack for",
    "emoji": "🎯",
    "simple": "",
    "it": "Avere talento/attitudine per",
    "example_en": "She has a knack for calming kids down.",
    "example_it": "Ha un talento per calmare i bambini.",
    "tags": [
      "bambini"
    ],
    "context_note": "essere bravo/a naturalmente in qualcosa",
    "concept": "idiom_knack"
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "It looks like",
    "emoji": "👀",
    "simple": "",
    "it": "Sembra che / ha l'aria di",
    "example_en": "It looks like it might rain later.",
    "example_it": "Sembra che potrebbe piovere più tardi.",
    "tags": [
      "base"
    ],
    "context_note": "apparenza o impressione iniziale",
    "concept": "idiom_looks_like"
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "A sight for sore eyes",
    "emoji": "👁️",
    "simple": "",
    "it": "Un vero piacere per gli occhi",
    "example_en": "The kids on the beach are a sight for sore eyes.",
    "example_it": "I bambini in spiaggia sono un piacere per gli occhi.",
    "tags": [
      "bambini"
    ],
    "context_note": "qualcosa di bellissimo e gradevole",
    "concept": "idiom_sight_sore_eyes"
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "Feel under the weather",
    "emoji": "🌧️",
    "simple": "",
    "it": "Non sentirsi bene / stare male",
    "example_en": "I'm feeling a bit under the weather today.",
    "example_it": "Oggi mi sento un po' giù.",
    "tags": [
      "bambini"
    ],
    "context_note": "malessere, malattia lieve",
    "concept": "idiom_under_weather"
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "Hurl into the lion's den",
    "emoji": "🦁",
    "simple": "",
    "it": "Buttarsi nella tana del leone",
    "example_en": "They threw the new animator into the lion's den.",
    "example_it": "Hanno buttato il nuovo animatore nella tana del leone.",
    "tags": [
      "bambini"
    ],
    "context_note": "affrontare una situazione pericolosa o difficile",
    "concept": "idiom_lions_den"
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "Put all your eggs in one basket",
    "emoji": "🧺",
    "simple": "",
    "it": "Mettere tutte le uova nello stesso paniere",
    "example_en": "Put all your eggs in one basket",
    "example_it": "Mettere tutte le uova nello stesso paniere",
    "tags": [
      "bambini"
    ],
    "context_note": "rischiare tutto su una sola cosa",
    "concept": "idiom_eggs_basket"
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "Sow your wild oats",
    "emoji": "🌾",
    "simple": "",
    "it": "Sfogare i propri istinti da giovane",
    "example_en": "He's young and still sowing his wild oats.",
    "example_it": "È giovane e sta ancora facendo le sue esperienze.",
    "tags": [
      "bambini"
    ],
    "context_note": "vivere avventure giovanili senza freni",
    "concept": "idiom_wild_oats"
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "Red carpet treatment",
    "emoji": "🎬",
    "simple": "",
    "it": "Trattamento rosso-carpeto / grande accoglienza",
    "example_en": "Red carpet treatment — that's just the way it is.",
    "example_it": "Trattamento rosso-carpeto — è così che stanno le cose.",
    "tags": [
      "genitori"
    ],
    "context_note": "ricevere un'accoglienza importante e speciale",
    "concept": "idiom_red_carpet"
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "Red tape",
    "emoji": "📋",
    "simple": "",
    "it": "Burocrazia / procedure lente",
    "example_en": "Red tape — that's just the way it is.",
    "example_it": "Burocrazia — è così che stanno le cose.",
    "tags": [
      "lavoro"
    ],
    "context_note": "complessità burocratiche e iter amministrativi lunghi",
    "concept": "idiom_red_tape"
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "In the red",
    "emoji": "💸",
    "simple": "",
    "it": "In rosso / con debiti",
    "example_en": "In the red — that's just the way it is.",
    "example_it": "In rosso — è così che stanno le cose.",
    "tags": [
      "base"
    ],
    "context_note": "essere in perdita finanziaria",
    "concept": "idiom_in_red"
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "See red",
    "emoji": "😡",
    "simple": "",
    "it": "Andare su tutte le furie / arrabbiarsi",
    "example_en": "See red — that's just the way it is.",
    "example_it": "Andare su tutte le furie — è così che stanno le cose.",
    "tags": [
      "bambini"
    ],
    "context_note": "arrabbiarsi moltissimo",
    "concept": "idiom_see_red"
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "Feel blue",
    "emoji": "💙",
    "simple": "",
    "it": "Sentirsi triste / melanconico",
    "example_en": "Feel blue — that's just the way it is.",
    "example_it": "Sentirsi triste — è così che stanno le cose.",
    "tags": [
      "bambini"
    ],
    "context_note": "tristezza, malinconia",
    "concept": "idiom_feeling_down"
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "Once in a blue moon",
    "emoji": "🌙",
    "simple": "",
    "it": "Una volta nella vita blu / raramente",
    "example_en": "He actually behaves once in a blue moon.",
    "example_it": "Si comporta bene ogni morte di papa.",
    "tags": [
      "base"
    ],
    "context_note": "evento che accade molto raramente",
    "concept": "idiom_blue_moon"
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "Blue blood",
    "emoji": "👑",
    "simple": "",
    "it": "Sangue blu / nobiltà",
    "example_en": "Blue blood — that's just the way it is.",
    "example_it": "Sangue blu — è così che stanno le cose.",
    "tags": [
      "base"
    ],
    "context_note": "essere di famiglia nobile o aristocratica",
    "concept": "idiom_blue_blood"
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "Out of the blue",
    "emoji": "☁️",
    "simple": "",
    "it": "Dal nulla / inaspettatamente",
    "example_en": "Out of the blue, she started crying.",
    "example_it": "All'improvviso, ha iniziato a piangere.",
    "tags": [
      "base"
    ],
    "context_note": "accadimento improvviso e sorprendente",
    "concept": "idiom_out_of_blue"
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "The last straw",
    "emoji": "🚫",
    "simple": "",
    "it": "L'ultima goccia che fa traboccare il vaso",
    "example_en": "That was the last straw — time to call the parents.",
    "example_it": "È stata la goccia che ha fatto traboccare il vaso — è ora di chiamare i genitori.",
    "tags": [
      "bambini"
    ],
    "context_note": "situazione che fa arrabbiare dopo molto tempo",
    "concept": "idiom_last_straw"
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "Miss the point",
    "emoji": "🎯",
    "simple": "",
    "it": "Non cogliere il punto / perdere il significato",
    "example_en": "Miss the point — that's just the way it is.",
    "example_it": "Non cogliere il punto — è così che stanno le cose.",
    "tags": [
      "bambini"
    ],
    "context_note": "non capire il senso di quello che viene detto",
    "concept": "idiom_miss_point"
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "Filthy rich",
    "emoji": "🤑",
    "simple": "",
    "it": "Ricco sfondato",
    "example_en": "Filthy rich — that's just the way it is.",
    "example_it": "Ricco sfondato — è così che stanno le cose.",
    "tags": [
      "base"
    ],
    "context_note": "persona estremamente ricca, in modo quasi osceno",
    "concept": "idiom_filthy_rich"
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "Save money for a rainy day",
    "emoji": "☔",
    "simple": "",
    "it": "Fare un gruzzoletto / risparmiare per i momenti difficili",
    "example_en": "Save money for a rainy day",
    "example_it": "Fare un gruzzoletto",
    "tags": [
      "base"
    ],
    "context_note": "mettere soldi da parte per emergenze future",
    "concept": "idiom_rainy_day"
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "Spend money like water",
    "emoji": "💸",
    "simple": "",
    "it": "Avere le mani bucate / sperperare",
    "example_en": "Spend money like water — that's just the way it is.",
    "example_it": "Avere le mani bucate — è così che stanno le cose.",
    "tags": [
      "base"
    ],
    "context_note": "spendere soldi in modo eccessivo e irresponsabile",
    "concept": "idiom_money_water"
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "Hit the road",
    "emoji": "🚗",
    "simple": "",
    "it": "Mettersi in viaggio / andarsene",
    "example_en": "Hit the road — that's just the way it is.",
    "example_it": "Mettersi in viaggio — è così che stanno le cose.",
    "tags": [
      "base"
    ],
    "context_note": "partire, iniziare un viaggio o andarsene",
    "concept": "idiom_hit_road"
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "Hit the sack",
    "emoji": "😴",
    "simple": "",
    "it": "Andare a letto / crollare dal sonno",
    "example_en": "Time to hit the sack, kids!",
    "example_it": "È ora di andare a nanna, bambini!",
    "tags": [
      "bambini"
    ],
    "context_note": "andare a dormire, specialmente quando si è stanchi",
    "concept": "idiom_hit_sack"
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "In a nutshell",
    "emoji": "🥜",
    "simple": "",
    "it": "In poche parole / in sintesi",
    "example_en": "In a nutshell: breakfast, activity, lunch, beach!",
    "example_it": "In parole povere: colazione, attività, pranzo, spiaggia!",
    "tags": [
      "base"
    ],
    "context_note": "riassumere qualcosa brevemente",
    "concept": "idiom_nutshell"
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "Keep an eye on",
    "emoji": "👁️",
    "simple": "",
    "it": "Tenere d'occhio / sorvegliare",
    "example_en": "Keep an eye on — that's just the way it is.",
    "example_it": "Tenere d'occhio — è così che stanno le cose.",
    "tags": [
      "bambini",
      "sicurezza"
    ],
    "context_note": "monitorare o fare attenzione a qualcosa o qualcuno",
    "concept": "idiom_eye_on"
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "Let the cat out of the bag",
    "emoji": "🐱",
    "simple": "",
    "it": "Svelare un segreto / non saper tenere un segreto",
    "example_en": "Let the cat out of the bag",
    "example_it": "Svelare un segreto",
    "tags": [
      "bambini"
    ],
    "context_note": "rivelare accidentalmente qualcosa che doveva restare segreto",
    "concept": "idiom_cat_bag"
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "Miss the boat",
    "emoji": "⛵",
    "simple": "",
    "it": "Perdere l'occasione / arrivare tardi",
    "example_en": "If you don't sign up now, you'll miss the boat.",
    "example_it": "Se non ti iscrivi adesso, perdi il treno.",
    "tags": [
      "base"
    ],
    "context_note": "lasciarsi sfuggire un'opportunità",
    "concept": "idiom_miss_boat"
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "Beat around the bush",
    "emoji": "🌿",
    "simple": "",
    "it": "Girare intorno alla questione / menare il can per l'aia",
    "example_en": "Stop beating around the bush — what's wrong?",
    "example_it": "Smettila di girare intorno — cosa c'è che non va?",
    "tags": [
      "comunicazione"
    ],
    "context_note": "evitare di arrivare al punto, parlare di tutto tranne che del problema",
    "concept": "idiom_beat_bush"
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "Get a move on",
    "emoji": "⚡",
    "simple": "",
    "it": "Darsi una mossa / sbrigarsi",
    "example_en": "Get a move on — that's just the way it is.",
    "example_it": "Darsi una mossa — è così che stanno le cose.",
    "tags": [
      "bambini"
    ],
    "context_note": "incoraggiamento ad agire con urgenza",
    "concept": "idiom_get_move_on"
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "Break a leg",
    "emoji": "🦵",
    "simple": "",
    "it": "In bocca al lupo! / buona fortuna!",
    "example_en": "Break a leg at the talent show tonight!",
    "example_it": "In bocca al lupo per lo spettacolo stasera!",
    "tags": [
      "bambini"
    ],
    "context_note": "augurio di buona fortuna, specie prima di uno spettacolo o esame",
    "concept": "idiom_break_leg"
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "Call it a day",
    "emoji": "🌅",
    "simple": "",
    "it": "Smettere per oggi / finirla qui",
    "example_en": "Let's call it a day — great work everyone!",
    "example_it": "Chiudiamola qui — ottimo lavoro a tutti!",
    "tags": [
      "attività"
    ],
    "context_note": "decidere di fermarsi e riprendere un'altra volta",
    "concept": "call_it_a_day_idiom"
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "Cross your fingers",
    "emoji": "🤞",
    "simple": "",
    "it": "Incrociare le dita / sperare",
    "example_en": "Cross your fingers — that's just the way it is.",
    "example_it": "Incrociare le dita — è così che stanno le cose.",
    "tags": [
      "bambini"
    ],
    "context_note": "sperare che le cose vadano bene",
    "concept": "idiom_cross_fingers"
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "Cut to the chase",
    "emoji": "🎬",
    "simple": "",
    "it": "Andare al sodo / venire al punto",
    "example_en": "Let's cut to the chase — what happened?",
    "example_it": "Veniamo al punto — cosa è successo?",
    "tags": [
      "comunicazione"
    ],
    "context_note": "smetttere di girare intorno e dire subito la cosa importante",
    "concept": "idiom_cut_chase"
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "Easy come, easy go",
    "emoji": "🌊",
    "simple": "",
    "it": "Facile a venire, facile ad andare",
    "example_en": "Easy come, easy go — that's just the way it is.",
    "example_it": "Facile a venire, facile ad andare — è così che stanno le cose.",
    "tags": [
      "base"
    ],
    "context_note": "ciò che si ottiene facilmente si perde altrettanto facilmente",
    "concept": "idiom_easy_come"
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "Face the music",
    "emoji": "🎵",
    "simple": "",
    "it": "Affrontare le conseguenze / pagare le conseguenze",
    "example_en": "You'll have to face the music eventually.",
    "example_it": "Dovrai prima o poi fare i conti con le conseguenze.",
    "tags": [
      "bambini"
    ],
    "context_note": "accettare la punizione o le conseguenze delle proprie azioni",
    "concept": "idiom_face_music"
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "Get cold feet",
    "emoji": "🥶",
    "simple": "",
    "it": "Avere paura all'ultimo momento / tirarsi indietro",
    "example_en": "Get cold feet — that's just the way it is.",
    "example_it": "Avere paura all'ultimo momento — è così che stanno le cose.",
    "tags": [
      "bambini"
    ],
    "context_note": "perdere coraggio prima di fare qualcosa di importante",
    "concept": "idiom_cold_feet"
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "Green with envy",
    "emoji": "💚",
    "simple": "",
    "it": "Verde dall'invidia / morire d'invidia",
    "example_en": "Green with envy — that's just the way it is.",
    "example_it": "Verde dall'invidia — è così che stanno le cose.",
    "tags": [
      "bambini"
    ],
    "context_note": "essere molto geloso o invidioso di qualcuno",
    "concept": "idiom_green_envy"
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "The grass is always greener",
    "emoji": "🌱",
    "simple": "",
    "it": "L'erba del vicino è sempre più verde",
    "example_en": "The grass is always greener — that's just the way it is.",
    "example_it": "L'erba del vicino è sempre più verde — è così che stanno le cose.",
    "tags": [
      "bambini"
    ],
    "context_note": "credere che la situazione degli altri sia sempre migliore della propria",
    "concept": "idiom_grass_greener"
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "Every cloud has a silver lining",
    "emoji": "🌈",
    "simple": "",
    "it": "Non tutto il male vien per nuocere",
    "example_en": "Every cloud has a silver lining",
    "example_it": "Non tutto il male vien per nuocere",
    "tags": [
      "bambini"
    ],
    "context_note": "ottimismo di fronte alle difficoltà",
    "concept": "idiom_silver_lining"
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "No hard feelings",
    "emoji": "🤝",
    "simple": "",
    "it": "Nessun rancore / senza rancori",
    "example_en": "No hard feelings — that's just the way it is.",
    "example_it": "Nessun rancore — è così che stanno le cose.",
    "tags": [
      "bambini"
    ],
    "context_note": "dire che non si è arrabbiati nonostante quanto è successo",
    "concept": "idiom_no_hard_feelings"
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "In hot water",
    "emoji": "♨️",
    "simple": "",
    "it": "Nei guai / in una situazione difficile",
    "example_en": "In hot water — that's just the way it is.",
    "example_it": "Nei guai — è così che stanno le cose.",
    "tags": [
      "problemi"
    ],
    "context_note": "essere in seri guai o in una situazione problematica",
    "concept": "idiom_hot_water"
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "To be a handful",
    "emoji": "🌪️",
    "simple": "",
    "it": "essere una peste / difficile da gestire",
    "example_en": "be a handful — that's just the way it is.",
    "example_it": "essere una peste — è così che stanno le cose.",
    "tags": [
      "bambini",
      "genitori"
    ],
    "context_note": "bambino difficile",
    "concept": ""
  },
  {
    "language": "en",
    "type": "clarification",
    "verb": "Could you repeat, please?",
    "emoji": "🔁",
    "simple": "",
    "it": "Puoi ripetere, per favore?",
    "example_en": "Could you repeat, please?",
    "example_it": "Puoi ripetere, per favore?",
    "tags": [
      "bambini"
    ],
    "context_note": "chiedere ripetizione (semplice)",
    "concept": "clarif_repeat"
  },
  {
    "language": "en",
    "type": "clarification",
    "verb": "Could you speak up, please?",
    "emoji": "📢",
    "simple": "",
    "it": "Puoi alzare la voce, per favore?",
    "example_en": "Could you speak up, please?",
    "example_it": "Puoi alzare la voce, per favore?",
    "tags": [
      "bambini"
    ],
    "context_note": "chiedere di parlare più forte",
    "concept": "clarif_louder"
  },
  {
    "language": "en",
    "type": "clarification",
    "verb": "Say that again, please?",
    "emoji": "🔄",
    "simple": "",
    "it": "Puoi ripetere?",
    "example_en": "Say that again, please?",
    "example_it": "Puoi ripetere?",
    "tags": [
      "bambini"
    ],
    "context_note": "chiedere ripetizione (diretto)",
    "concept": "clarif_short_repeat"
  },
  {
    "language": "en",
    "type": "clarification",
    "verb": "Could you paraphrase this?",
    "emoji": "📝",
    "simple": "",
    "it": "Puoi parafrasare?",
    "example_en": "Could you paraphrase this?",
    "example_it": "Puoi parafrasare?",
    "tags": [
      "bambini"
    ],
    "context_note": "chiedere riformulazione",
    "concept": "clarif_rephrase"
  },
  {
    "language": "en",
    "type": "clarification",
    "verb": "Could you explain this differently?",
    "emoji": "🗣️",
    "simple": "",
    "it": "Puoi spiegarlo in modo diverso?",
    "example_en": "Could you explain this differently?",
    "example_it": "Puoi spiegarlo in modo diverso?",
    "tags": [
      "bambini"
    ],
    "context_note": "chiedere spiegazione alternativa",
    "concept": "clarif_rephrase"
  },
  {
    "language": "en",
    "type": "clarification",
    "verb": "Can you say it in another way, please?",
    "emoji": "💬",
    "simple": "",
    "it": "Puoi dirlo in un altro modo?",
    "example_en": "Can you say it in another way, please?",
    "example_it": "Puoi dirlo in un altro modo?",
    "tags": [
      "bambini"
    ],
    "context_note": "chiedere riformulazione (educato)",
    "concept": "clarif_rephrase"
  },
  {
    "language": "en",
    "type": "clarification",
    "verb": "Would you mind repeating that one last time?",
    "emoji": "🙏",
    "simple": "",
    "it": "Le dispiacerebbe ripetere un'ultima volta?",
    "example_en": "Would you mind repeating that one last time?",
    "example_it": "Le dispiacerebbe ripetere un'ultima volta?",
    "tags": [
      "genitori"
    ],
    "context_note": "chiedere ripetizione (formale/B2)",
    "concept": "clarif_repeat"
  },
  {
    "language": "en",
    "type": "clarification",
    "verb": "Could you clarify? I didn't quite catch that.",
    "emoji": "❓",
    "simple": "",
    "it": "Potrebbe chiarire? Non ho ben capito.",
    "example_en": "Could you clarify? I didn't quite catch that.",
    "example_it": "Potrebbe chiarire? Non ho ben capito.",
    "tags": [
      "bambini"
    ],
    "context_note": "non aver capito bene",
    "concept": "clarif_didnt_understand"
  },
  {
    "language": "en",
    "type": "clarification",
    "verb": "Do I understand you correctly, that...?",
    "emoji": "✅",
    "simple": "",
    "it": "Ho capito bene che...?",
    "example_en": "Do I understand you correctly, that...?",
    "example_it": "Ho capito bene che...?",
    "tags": [
      "bambini"
    ],
    "context_note": "confermare comprensione",
    "concept": "clarif_confirm"
  },
  {
    "language": "en",
    "type": "clarification",
    "verb": "Sorry, I didn't catch that.",
    "emoji": "👂",
    "simple": "",
    "it": "Scusa, non ho capito.",
    "example_en": "Sorry, I didn't catch that. — did everyone understand?",
    "example_it": "Scusa, non ho capito. — tutti hanno capito?",
    "tags": [
      "bambini"
    ],
    "context_note": "non aver sentito/capito (comune)",
    "concept": "clarif_didnt_understand"
  },
  {
    "language": "en",
    "type": "clarification",
    "verb": "What did you just say?",
    "emoji": "😕",
    "simple": "",
    "it": "Cosa hai appena detto?",
    "example_en": "What did you just say?",
    "example_it": "Cosa hai appena detto?",
    "tags": [
      "bambini"
    ],
    "context_note": "chiedere ripetizione (informale)",
    "concept": "what_did_you_say"
  },
  {
    "language": "en",
    "type": "clarification",
    "verb": "Did I hear you right?",
    "emoji": "🎧",
    "simple": "",
    "it": "Ho sentito bene?",
    "example_en": "Did I hear you right?",
    "example_it": "Ho sentito bene?",
    "tags": [
      "bambini"
    ],
    "context_note": "confermare quello che si è sentito",
    "concept": "did_i_hear_right"
  },
  {
    "language": "en",
    "type": "clarification",
    "verb": "Because",
    "emoji": "🔗",
    "simple": "",
    "it": "perché",
    "example_en": "Because — did everyone understand?",
    "example_it": "perché — tutti hanno capito?",
    "tags": [
      "base"
    ],
    "context_note": "connettore di causa base",
    "concept": "connector_because"
  },
  {
    "language": "en",
    "type": "clarification",
    "verb": "Since",
    "emoji": "📅",
    "simple": "",
    "it": "poiché",
    "example_en": "Since — did everyone understand?",
    "example_it": "poiché — tutti hanno capito?",
    "tags": [
      "base"
    ],
    "context_note": "causa con sfumatura temporale",
    "concept": "connector_since"
  },
  {
    "language": "en",
    "type": "clarification",
    "verb": "As",
    "emoji": "🔄",
    "simple": "",
    "it": "poiché / dato che",
    "example_en": "As — did everyone understand?",
    "example_it": "poiché — tutti hanno capito?",
    "tags": [
      "base"
    ],
    "context_note": "causa formale",
    "concept": "connector_as"
  },
  {
    "language": "en",
    "type": "clarification",
    "verb": "Due to",
    "emoji": "⚠️",
    "simple": "",
    "it": "a causa di",
    "example_en": "Due to — did everyone understand?",
    "example_it": "a causa di — tutti hanno capito?",
    "tags": [
      "lavoro"
    ],
    "context_note": "causa formale scritta",
    "concept": "connector_due_to"
  },
  {
    "language": "en",
    "type": "clarification",
    "verb": "In view of",
    "emoji": "🧭",
    "simple": "",
    "it": "in considerazione di",
    "example_en": "In view of — did everyone understand?",
    "example_it": "in considerazione di — tutti hanno capito?",
    "tags": [
      "lavoro"
    ],
    "context_note": "causa formale/B2",
    "concept": "connector_in_view_of"
  },
  {
    "language": "en",
    "type": "clarification",
    "verb": "Given that",
    "emoji": "💡",
    "simple": "",
    "it": "considerando che",
    "example_en": "Given that — did everyone understand?",
    "example_it": "considerando che — tutti hanno capito?",
    "tags": [
      "base"
    ],
    "context_note": "causa logica",
    "concept": "connector_given_that"
  },
  {
    "language": "en",
    "type": "clarification",
    "verb": "Owing to",
    "emoji": "📋",
    "simple": "",
    "it": "a causa di / in seguito a",
    "example_en": "Owing to — did everyone understand?",
    "example_it": "a causa di — tutti hanno capito?",
    "tags": [
      "lavoro"
    ],
    "context_note": "causa formale",
    "concept": "connector_owing_to"
  },
  {
    "language": "en",
    "type": "clarification",
    "verb": "Thanks to",
    "emoji": "🙏",
    "simple": "",
    "it": "grazie a",
    "example_en": "Thanks to — did everyone understand?",
    "example_it": "grazie a — tutti hanno capito?",
    "tags": [
      "base"
    ],
    "context_note": "causa positiva",
    "concept": "connector_thanks_to"
  },
  {
    "language": "en",
    "type": "clarification",
    "verb": "For this reason",
    "emoji": "➡️",
    "simple": "",
    "it": "per questo motivo",
    "example_en": "For this reason — did everyone understand?",
    "example_it": "per questo motivo — tutti hanno capito?",
    "tags": [
      "base"
    ],
    "context_note": "connettore conseguenza",
    "concept": "connector_for_this_reason"
  },
  {
    "language": "en",
    "type": "clarification",
    "verb": "Considering that",
    "emoji": "🤔",
    "simple": "",
    "it": "considerando che",
    "example_en": "Considering that — did everyone understand?",
    "example_it": "considerando che — tutti hanno capito?",
    "tags": [
      "base"
    ],
    "context_note": "causa argomentativa",
    "concept": "connector_considering_that"
  },
  {
    "language": "en",
    "type": "clarification",
    "verb": "Basically",
    "emoji": "💬",
    "simple": "",
    "it": "in pratica",
    "example_en": "Basically — did everyone understand?",
    "example_it": "in pratica — tutti hanno capito?",
    "tags": [
      "bambini"
    ],
    "context_note": "semplificare un concetto",
    "concept": "discourse_basically"
  },
  {
    "language": "en",
    "type": "clarification",
    "verb": "Actually",
    "emoji": "💡",
    "simple": "",
    "it": "in realtà",
    "example_en": "Actually — did everyone understand?",
    "example_it": "in realtà — tutti hanno capito?",
    "tags": [
      "bambini"
    ],
    "context_note": "correggere o precisare",
    "concept": "discourse_actually"
  },
  {
    "language": "en",
    "type": "clarification",
    "verb": "In fact",
    "emoji": "📌",
    "simple": "",
    "it": "infatti / in realtà",
    "example_en": "In fact, we start a bit earlier today.",
    "example_it": "In effetti, oggi iniziamo un po' prima.",
    "tags": [
      "bambini"
    ],
    "context_note": "rafforzare un'affermazione",
    "concept": "discourse_in_fact"
  },
  {
    "language": "en",
    "type": "clarification",
    "verb": "For instance",
    "emoji": "🎯",
    "simple": "",
    "it": "per esempio",
    "example_en": "For instance — did everyone understand?",
    "example_it": "per esempio — tutti hanno capito?",
    "tags": [
      "bambini"
    ],
    "context_note": "introdurre un esempio",
    "concept": "discourse_for_instance"
  },
  {
    "language": "en",
    "type": "clarification",
    "verb": "Such as",
    "emoji": "📋",
    "simple": "",
    "it": "come / ad esempio",
    "example_en": "Such as — did everyone understand?",
    "example_it": "come — tutti hanno capito?",
    "tags": [
      "bambini"
    ],
    "context_note": "elencare esempi",
    "concept": "discourse_such_as"
  },
  {
    "language": "en",
    "type": "clarification",
    "verb": "In other words",
    "emoji": "🔄",
    "simple": "",
    "it": "in altre parole",
    "example_en": "In other words, the activity starts at 9.",
    "example_it": "In altre parole, l'attività inizia alle 9.",
    "tags": [
      "bambini"
    ],
    "context_note": "riformulare un concetto",
    "concept": "discourse_in_other_words"
  },
  {
    "language": "en",
    "type": "clarification",
    "verb": "That is (to say)",
    "emoji": "🗣️",
    "simple": "",
    "it": "cioè",
    "example_en": "That is (to say) — did everyone understand?",
    "example_it": "cioè — tutti hanno capito?",
    "tags": [
      "bambini"
    ],
    "context_note": "equivalente di \"ovvero\"",
    "concept": "discourse_that_is"
  },
  {
    "language": "en",
    "type": "clarification",
    "verb": "To put it simply",
    "emoji": "✏️",
    "simple": "",
    "it": "per dirla semplicemente",
    "example_en": "To put it simply — did everyone understand?",
    "example_it": "per dirla semplicemente — tutti hanno capito?",
    "tags": [
      "bambini"
    ],
    "context_note": "semplificare un concetto",
    "concept": "discourse_put_simply"
  },
  {
    "language": "en",
    "type": "clarification",
    "verb": "Moreover",
    "emoji": "➕",
    "simple": "",
    "it": "inoltre",
    "example_en": "Moreover — did everyone understand?",
    "example_it": "inoltre — tutti hanno capito?",
    "tags": [
      "base"
    ],
    "context_note": "aggiungere un punto più forte",
    "concept": "connector_moreover"
  },
  {
    "language": "en",
    "type": "clarification",
    "verb": "Furthermore",
    "emoji": "📢",
    "simple": "",
    "it": "inoltre / per di più",
    "example_en": "Furthermore — did everyone understand?",
    "example_it": "inoltre — tutti hanno capito?",
    "tags": [
      "lavoro"
    ],
    "context_note": "rinforzo formale",
    "concept": "connector_furthermore"
  },
  {
    "language": "en",
    "type": "clarification",
    "verb": "In addition",
    "emoji": "➕",
    "simple": "",
    "it": "in aggiunta",
    "example_en": "In addition — did everyone understand?",
    "example_it": "in aggiunta — tutti hanno capito?",
    "tags": [
      "base"
    ],
    "context_note": "aggiunta neutra",
    "concept": "connector_in_addition"
  },
  {
    "language": "en",
    "type": "clarification",
    "verb": "Additionally",
    "emoji": "📝",
    "simple": "",
    "it": "inoltre",
    "example_en": "Additionally — did everyone understand?",
    "example_it": "inoltre — tutti hanno capito?",
    "tags": [
      "lavoro"
    ],
    "context_note": "aggiunta formale scritta",
    "concept": "connector_additionally"
  },
  {
    "language": "en",
    "type": "clarification",
    "verb": "Also",
    "emoji": "✅",
    "simple": "",
    "it": "anche",
    "example_en": "Also — did everyone understand?",
    "example_it": "anche — tutti hanno capito?",
    "tags": [
      "base"
    ],
    "context_note": "aggiunta base",
    "concept": "connector_also"
  },
  {
    "language": "en",
    "type": "clarification",
    "verb": "As well",
    "emoji": "🤝",
    "simple": "",
    "it": "anche / pure",
    "example_en": "As well — did everyone understand?",
    "example_it": "anche — tutti hanno capito?",
    "tags": [
      "bambini"
    ],
    "context_note": "aggiunta informale a fine frase",
    "concept": "connector_as_well"
  },
  {
    "language": "en",
    "type": "clarification",
    "verb": "Let alone",
    "emoji": "🚫",
    "simple": "",
    "it": "per non parlare di",
    "example_en": "Let alone — did everyone understand?",
    "example_it": "per non parlare di — tutti hanno capito?",
    "tags": [
      "base"
    ],
    "context_note": "escludere qualcosa di ancora più estremo",
    "concept": "connector_let_alone"
  },
  {
    "language": "en",
    "type": "clarification",
    "verb": "Besides",
    "emoji": "💭",
    "simple": "",
    "it": "inoltre / tra l'altro",
    "example_en": "Besides — did everyone understand?",
    "example_it": "inoltre — tutti hanno capito?",
    "tags": [
      "base"
    ],
    "context_note": "aggiunta con sfumatura",
    "concept": "connector_besides"
  },
  {
    "language": "en",
    "type": "clarification",
    "verb": "What's more",
    "emoji": "🔝",
    "simple": "",
    "it": "per di più / oltretutto",
    "example_en": "What's more — did everyone understand?",
    "example_it": "per di più — tutti hanno capito?",
    "tags": [
      "bambini"
    ],
    "context_note": "aggiunta con enfasi",
    "concept": "connector_whats_more"
  },
  {
    "language": "en",
    "type": "clarification",
    "verb": "I don't understand",
    "emoji": "😕",
    "simple": "",
    "it": "Non capisco",
    "example_en": "I don't understand — did everyone understand?",
    "example_it": "Non capisco — tutti hanno capito?",
    "tags": [
      "bambini"
    ],
    "context_note": "incomprensione diretta",
    "concept": "i_dont_understand"
  },
  {
    "language": "en",
    "type": "clarification",
    "verb": "That doesn't make sense",
    "emoji": "🤔",
    "simple": "",
    "it": "Non ha senso",
    "example_en": "That doesn't make sense — did everyone understand?",
    "example_it": "Non ha senso — tutti hanno capito?",
    "tags": [
      "bambini"
    ],
    "context_note": "confusione su qualcosa",
    "concept": "doesnt_make_sense"
  },
  {
    "language": "en",
    "type": "clarification",
    "verb": "I'm confused",
    "emoji": "😵",
    "simple": "",
    "it": "Sono confuso/a",
    "example_en": "I'm confused — did everyone understand?",
    "example_it": "Sono confuso — tutti hanno capito?",
    "tags": [
      "bambini"
    ],
    "context_note": "stato di confusione",
    "concept": "im_confused"
  },
  {
    "language": "en",
    "type": "clarification",
    "verb": "I can't follow",
    "emoji": "👂",
    "simple": "",
    "it": "Non riesco a seguire",
    "example_en": "I can't follow — did everyone understand?",
    "example_it": "Non riesco a seguire — tutti hanno capito?",
    "tags": [
      "bambini"
    ],
    "context_note": "perdere il filo del discorso",
    "concept": "cant_follow"
  },
  {
    "language": "en",
    "type": "clarification",
    "verb": "I get it",
    "emoji": "💡",
    "simple": "",
    "it": "Capito / ho capito",
    "example_en": "I get it — did everyone understand?",
    "example_it": "Capito — tutti hanno capito?",
    "tags": [
      "bambini"
    ],
    "context_note": "comprensione raggiunta",
    "concept": "i_get_it"
  },
  {
    "language": "en",
    "type": "clarification",
    "verb": "I see",
    "emoji": "🔍",
    "simple": "",
    "it": "Vedo / capisco",
    "example_en": "I see — did everyone understand?",
    "example_it": "Vedo — tutti hanno capito?",
    "tags": [
      "bambini"
    ],
    "context_note": "comprensione progressiva",
    "concept": "i_see_clarif"
  },
  {
    "language": "en",
    "type": "clarification",
    "verb": "That makes sense",
    "emoji": "✅",
    "simple": "",
    "it": "Ha senso",
    "example_en": "That makes sense — did everyone understand?",
    "example_it": "Ha senso — tutti hanno capito?",
    "tags": [
      "bambini"
    ],
    "context_note": "conferma comprensione",
    "concept": "that_makes_sense"
  },
  {
    "language": "en",
    "type": "clarification",
    "verb": "I understand it",
    "emoji": "✅",
    "simple": "",
    "it": "Lo capisco",
    "example_en": "I understand it — did everyone understand?",
    "example_it": "Lo capisco — tutti hanno capito?",
    "tags": [
      "bambini"
    ],
    "context_note": "comprensione esplicita",
    "concept": "i_understand_it"
  },
  {
    "language": "en",
    "type": "clarification",
    "verb": "Wait a minute",
    "emoji": "✋",
    "simple": "",
    "it": "Aspetta un attimo",
    "example_en": "Wait a minute — did everyone understand?",
    "example_it": "Aspetta un attimo — tutti hanno capito?",
    "tags": [
      "bambini"
    ],
    "context_note": "interrompere brevemente",
    "concept": "wait_a_minute"
  },
  {
    "language": "en",
    "type": "clarification",
    "verb": "Hold on",
    "emoji": "✋",
    "simple": "",
    "it": "Aspetta",
    "example_en": "Hold on — did everyone understand?",
    "example_it": "Aspetta — tutti hanno capito?",
    "tags": [
      "bambini"
    ],
    "context_note": "pausa nella conversazione",
    "concept": "hold_on_pause"
  },
  {
    "language": "en",
    "type": "clarification",
    "verb": "Just a second",
    "emoji": "⏱️",
    "simple": "",
    "it": "Un secondo",
    "example_en": "Just a second — did everyone understand?",
    "example_it": "Un secondo — tutti hanno capito?",
    "tags": [
      "bambini"
    ],
    "context_note": "pausa breve",
    "concept": "just_a_second"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "No big deal",
    "emoji": "👌",
    "simple": "",
    "it": "Nessun problema / Non è niente di che",
    "example_en": "No big deal, it happens to everyone!",
    "example_it": "Non è niente di che, capita a tutti!",
    "tags": [
      "bambini"
    ],
    "context_note": "minimizzare qualcosa",
    "concept": "no_big_deal"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Kind of",
    "emoji": "🤷",
    "simple": "",
    "it": "Più o meno / In un certo senso",
    "example_en": "It's kind of hot today, right?",
    "example_it": "Fa un po' caldo oggi, vero?",
    "tags": [
      "bambini"
    ],
    "context_note": "risposta vaga o parziale",
    "concept": "kind_of"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "No offense",
    "emoji": "🙏",
    "simple": "",
    "it": "Senza offesa",
    "example_en": "No offense, but that's not quite right.",
    "example_it": "Senza offesa, ma non è proprio così.",
    "tags": [
      "bambini"
    ],
    "context_note": "prima di dire qualcosa di scomodo",
    "concept": "no_offense"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "I'm out",
    "emoji": "🚪",
    "simple": "",
    "it": "Passo / Non ci sto",
    "example_en": "I'm out!",
    "example_it": "Passo!",
    "tags": [
      "bambini"
    ],
    "context_note": "ritirarsi da qualcosa",
    "concept": "im_out"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Just kidding",
    "emoji": "😜",
    "simple": "",
    "it": "Stavo scherzando",
    "example_en": "Just kidding!",
    "example_it": "Stavo scherzando!",
    "tags": [
      "bambini"
    ],
    "context_note": "dopo una battuta",
    "concept": "just_kidding"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "My bad",
    "emoji": "🙈",
    "simple": "",
    "it": "Colpa mia / Scusa, mi sono sbagliato",
    "example_en": "My bad — I forgot the sunscreen!",
    "example_it": "Colpa mia — ho dimenticato la crema!",
    "tags": [
      "bambini"
    ],
    "context_note": "ammettere un errore in modo informale",
    "concept": "my_bad"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "That's on me",
    "emoji": "🤚",
    "simple": "",
    "it": "È colpa mia / me ne assumo io",
    "example_en": "That's on me, I made a mistake.",
    "example_it": "È colpa mia, ho sbagliato.",
    "tags": [
      "bambini"
    ],
    "context_note": "assumersi la responsabilità di qualcosa",
    "concept": "thats_on_me"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "What the hell?",
    "emoji": "😳",
    "simple": "",
    "it": "Che diavolo? / Ma cosa...?",
    "example_en": "What the hell?",
    "example_it": "Che diavolo?",
    "tags": [
      "bambini"
    ],
    "context_note": "sorpresa o reazione forte a qualcosa di inaspettato",
    "concept": "what_the_hell"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Don't push it",
    "emoji": "✋",
    "simple": "",
    "it": "Non esagerare / non stressare",
    "example_en": "Don't push it, Marco — enough!",
    "example_it": "Non esagerare, Marco — basta!",
    "tags": [
      "bambini"
    ],
    "context_note": "invito a non forzare o spingere oltre",
    "concept": "dont_push_it"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Who cares",
    "emoji": "🤷",
    "simple": "",
    "it": "A chi importa / chi se ne frega",
    "example_en": "Who cares, let's just have fun!",
    "example_it": "E chi se ne frega, divertiamoci!",
    "tags": [
      "bambini"
    ],
    "context_note": "disinteresse o liberarsi dal giudizio altrui",
    "concept": "who_cares"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Give me a break",
    "emoji": "😤",
    "simple": "",
    "it": "Ma dai! / Fammi il piacere",
    "example_en": "Give me a break, that's not fair!",
    "example_it": "Ma dai, non è giusto!",
    "tags": [
      "bambini"
    ],
    "context_note": "incredulità o leggero fastidio",
    "concept": "give_me_a_break"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "You wish",
    "emoji": "😏",
    "simple": "",
    "it": "Magari / Sì, come no",
    "example_en": "You wish — that spot is mine!",
    "example_it": "Magari — quel posto è mio!",
    "tags": [
      "bambini"
    ],
    "context_note": "risposta sarcastica a un'affermazione esagerata",
    "concept": "you_wish"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Get over yourself",
    "emoji": "🙄",
    "simple": "",
    "it": "Scendi dal piedistallo / non tirartela",
    "example_en": "Get over yourself and join the group.",
    "example_it": "Non tirartela e unisciti al gruppo.",
    "tags": [
      "bambini"
    ],
    "context_note": "dire a qualcuno di smettere di essere arrogante",
    "concept": "get_over_yourself"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "The thing is",
    "emoji": "💭",
    "simple": "",
    "it": "Il fatto è che / la verità è che",
    "example_en": "The thing is, I forgot my towel.",
    "example_it": "Il fatto è che ho dimenticato l'asciugamano.",
    "tags": [
      "bambini"
    ],
    "context_note": "introdurre una spiegazione, un problema o una riserva",
    "concept": "the_thing_is"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "The point is",
    "emoji": "🎯",
    "simple": "",
    "it": "Il punto è che / in sostanza",
    "example_en": "The point is, safety comes first.",
    "example_it": "Il punto è che la sicurezza viene prima.",
    "tags": [
      "bambini"
    ],
    "context_note": "riassumere il punto principale di un discorso",
    "concept": "the_point_is"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "And stuff (like that)",
    "emoji": "💫",
    "simple": "",
    "it": "E cose del genere / eccetera",
    "example_en": "Bring your towel, sunscreen and stuff.",
    "example_it": "Porta asciugamano, crema solare e roba del genere.",
    "tags": [
      "bambini"
    ],
    "context_note": "aggiunta vaga a una lista di cose simili",
    "concept": "and_stuff"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Or something",
    "emoji": "🤔",
    "simple": "",
    "it": "O qualcosa del genere",
    "example_en": "Ask your mum or something!",
    "example_it": "Chiedi a tua mamma o qualcosa del genere!",
    "tags": [
      "bambini"
    ],
    "context_note": "aggiungere un'alternativa vaga a fine frase",
    "concept": "or_something"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "I was like",
    "emoji": "💬",
    "simple": "",
    "it": "Ero tipo / ho fatto tipo",
    "example_en": "I was like, wow — amazing!",
    "example_it": "Ero tipo, wow — fantastico!",
    "tags": [
      "bambini"
    ],
    "context_note": "usato nel parlato per riportare una reazione o pensiero",
    "concept": "i_was_like"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Anyway",
    "emoji": "➡️",
    "simple": "",
    "it": "Comunque / in ogni caso",
    "example_en": "Anyway, let's start the activity!",
    "example_it": "Comunque, iniziamo l'attività!",
    "tags": [
      "bambini"
    ],
    "context_note": "cambiare argomento o tornare al punto principale",
    "concept": "anyway"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Literally",
    "emoji": "📍",
    "simple": "",
    "it": "Letteralmente / davvero",
    "example_en": "I literally have no idea what happened.",
    "example_it": "Letteralmente non so cosa è successo.",
    "tags": [
      "bambini"
    ],
    "context_note": "usato per enfatizzare (spesso in modo colloquiale/esagerato)",
    "concept": "literally"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Not at all",
    "emoji": "🚫",
    "simple": "",
    "it": "Per niente / assolutamente no",
    "example_en": "Not at all — it was no trouble!",
    "example_it": "Per niente — non è stato un problema!",
    "tags": [
      "bambini"
    ],
    "context_note": "negazione enfatica",
    "concept": "not_at_all"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Nah",
    "emoji": "😂",
    "simple": "",
    "it": "Macché! / Ma no!",
    "example_en": "Nah, I don't want to swim today.",
    "example_it": "Macché, oggi non voglio nuotare.",
    "tags": [
      "bambini"
    ],
    "context_note": "negazione informale e leggera",
    "concept": "nah"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "I'm down",
    "emoji": "👍",
    "simple": "",
    "it": "Mi sto bene / va bene per me",
    "example_en": "Beach games? I'm down!",
    "example_it": "Giochi in spiaggia? Ci sto!",
    "tags": [
      "bambini"
    ],
    "context_note": "accordo o disponibilità",
    "concept": "im_down"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "I'm good",
    "emoji": "✅",
    "simple": "",
    "it": "Va bene per me / sto bene",
    "example_en": "Thanks, I'm good with water for now.",
    "example_it": "Grazie, per ora va bene l'acqua.",
    "tags": [
      "bambini"
    ],
    "context_note": "risposta positiva, non ho bisogno di nulla",
    "concept": "im_good"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Go for it",
    "emoji": "🚀",
    "simple": "",
    "it": "Vai! / Fatti! / Prova!",
    "example_en": "Go for it!",
    "example_it": "Vai!!",
    "tags": [
      "bambini"
    ],
    "context_note": "incoraggiamento a fare qualcosa",
    "concept": "go_for_it"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Fair enough",
    "emoji": "🤝",
    "simple": "",
    "it": "Va bene / è giusto",
    "example_en": "Fair enough, we'll do it your way.",
    "example_it": "Va bene, lo facciamo a modo tuo.",
    "tags": [
      "bambini"
    ],
    "context_note": "accordo o accettazione ragionevole",
    "concept": "fair_enough"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "You bet",
    "emoji": "💯",
    "simple": "",
    "it": "Certamente! / Certo che sì!",
    "example_en": "You bet — we'll have so much fun!",
    "example_it": "Certo che sì — ci divertiremo un sacco!",
    "tags": [
      "bambini"
    ],
    "context_note": "accordo entusiasta",
    "concept": "you_bet"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "I meant it",
    "emoji": "💪",
    "simple": "",
    "it": "Lo dico davvero / ero serio",
    "example_en": "I meant it — great job today!",
    "example_it": "Lo dico davvero — ottimo lavoro oggi!",
    "tags": [
      "bambini"
    ],
    "context_note": "enfatizzare che si dice la verità",
    "concept": "i_meant_it"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "It depends",
    "emoji": "⚖️",
    "simple": "",
    "it": "Dipende / dipende dalle circostanze",
    "example_en": "It depends on the weather tomorrow.",
    "example_it": "Dipende dal tempo domani.",
    "tags": [
      "bambini"
    ],
    "context_note": "risposta che non è netta",
    "concept": "it_depends"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Come again?",
    "emoji": "🤨",
    "simple": "",
    "it": "Come? / Scusa, ripeti?",
    "example_en": "Come again?",
    "example_it": "Come?",
    "tags": [
      "bambini"
    ],
    "context_note": "chiedere di ripetere",
    "concept": "come_again"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Come on",
    "emoji": "😤",
    "simple": "",
    "it": "Dai! / Vai!",
    "example_en": "Come on — let's go swimming!",
    "example_it": "Dai — andiamo a nuotare!",
    "tags": [
      "bambini"
    ],
    "context_note": "incoraggiamento o incredulità",
    "concept": "come_on"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "I have a crush on you",
    "emoji": "💘",
    "simple": "",
    "it": "Mi piaci (romanticamente)",
    "example_en": "I think he has a crush on her.",
    "example_it": "Penso che lui ci provi con lei.",
    "tags": [
      "bambini"
    ],
    "context_note": "attrazione romantica per qualcuno",
    "concept": "have_a_crush"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "I'm catching feelings",
    "emoji": "🥹",
    "simple": "",
    "it": "Sto prendendo una cotta",
    "example_en": "She's catching feelings for her teammate.",
    "example_it": "Lei sta prendendo una cotta per il suo compagno.",
    "tags": [
      "bambini"
    ],
    "context_note": "iniziare a sviluppare sentimenti romantici per qualcuno",
    "concept": "catching_feelings"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "I'm head over heels",
    "emoji": "🌹",
    "simple": "",
    "it": "Sono completamente innamorato/a",
    "example_en": "He's head over heels for that girl.",
    "example_it": "È completamente innamorato di quella ragazza.",
    "tags": [
      "bambini"
    ],
    "context_note": "amore intenso e travolgente",
    "concept": "head_over_heels"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "I'm into you",
    "emoji": "😍",
    "simple": "",
    "it": "Mi piaci molto / sei il mio tipo",
    "example_en": "I can tell she's really into him.",
    "example_it": "Si vede che lei è presa da lui.",
    "tags": [
      "bambini"
    ],
    "context_note": "attrazione romantica o interesse verso qualcuno",
    "concept": "im_into_you"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Ghost someone",
    "emoji": "👻",
    "simple": "",
    "it": "Sparire senza spiegazioni",
    "example_en": "He just ghosted her after camp.",
    "example_it": "L'ha semplicemente ignorata dopo il campo.",
    "tags": [
      "bambini"
    ],
    "context_note": "interrompere ogni contatto senza dare spiegazioni",
    "concept": "ghost_someone"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Have a fling",
    "emoji": "🔥",
    "simple": "",
    "it": "Avere una storia / avventura breve",
    "example_en": "They had a summer fling at camp.",
    "example_it": "Hanno avuto una storia estiva al campo.",
    "tags": [
      "bambini"
    ],
    "context_note": "relazione romantica breve e non seria",
    "concept": "have_a_fling"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Hook up",
    "emoji": "🎣",
    "simple": "",
    "it": "Avere un'avventura",
    "example_en": "They hooked up at the end of camp.",
    "example_it": "Si sono messi insieme alla fine del campo.",
    "tags": [
      "bambini"
    ],
    "context_note": "incontro romantico o sessuale occasionale",
    "concept": "hook_up"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Shoot your shot",
    "emoji": "🏀",
    "simple": "",
    "it": "Provarci / tentare la fortuna",
    "example_en": "Just shoot your shot — what's the worst?",
    "example_it": "Prova tanto — cosa può succedere di male?",
    "tags": [
      "bambini"
    ],
    "context_note": "fare il primo passo romanticamente, rischiare",
    "concept": "shoot_your_shot"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Slow fade",
    "emoji": "🌅",
    "simple": "",
    "it": "Allontanarsi gradualmente",
    "example_en": "He's doing the slow fade on her.",
    "example_it": "Sta gradualmente scomparendo dalla sua vita.",
    "tags": [
      "bambini"
    ],
    "context_note": "sparire lentamente dalla vita di qualcuno senza dirlo direttamente",
    "concept": "slow_fade"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Fall out of love",
    "emoji": "💔",
    "simple": "",
    "it": "Smettere di amare",
    "example_en": "They fell out of love after the summer.",
    "example_it": "Hanno smesso di amarsi dopo l'estate.",
    "tags": [
      "bambini"
    ],
    "context_note": "perdere i sentimenti romantici per qualcuno nel tempo",
    "concept": "fall_out_of_love"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Hit on someone",
    "emoji": "😘",
    "simple": "",
    "it": "Fare la corte a qualcuno / flirtare",
    "example_en": "That parent was totally hitting on me!",
    "example_it": "Quel genitore mi stava decisamente corteggiando!",
    "tags": [
      "bambini"
    ],
    "context_note": "approccio romantico o flirty verso qualcuno",
    "concept": "hit_on_someone"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "I'm broke",
    "emoji": "🪙",
    "simple": "",
    "it": "Sono al verde / non ho soldi",
    "example_en": "I'm broke until payday.",
    "example_it": "Sono al verde fino al giorno di paga.",
    "tags": [
      "bambini"
    ],
    "context_note": "non avere soldi, essere senza un euro",
    "concept": "im_broke"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Keep in touch",
    "emoji": "📱",
    "simple": "",
    "it": "Rimaniamo in contatto / teniamoci aggiornati",
    "example_en": "Let's keep in touch after the summer!",
    "example_it": "Rimaniamo in contatto dopo l'estate!",
    "tags": [
      "genitori"
    ],
    "context_note": "invito a mantenere i contatti dopo un saluto",
    "concept": "keep_in_touch"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Knock it off",
    "emoji": "🛑",
    "simple": "",
    "it": "Smettila! / Piantala!",
    "example_en": "Knock it off!",
    "example_it": "Smettila!!",
    "tags": [
      "bambini"
    ],
    "context_note": "dire a qualcuno di smettere di fare qualcosa di fastidioso",
    "concept": "knock_it_off"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Keep someone posted",
    "emoji": "📬",
    "simple": "",
    "it": "Tienmi aggiornato / aggiornare qualcuno",
    "example_en": "Keep me posted if anything changes.",
    "example_it": "Tienimi aggiornato se qualcosa cambia.",
    "tags": [
      "genitori"
    ],
    "context_note": "chiedere di ricevere aggiornamenti su qualcosa",
    "concept": "keep_posted"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Let it go",
    "emoji": "🕊️",
    "simple": "",
    "it": "Lascia andare / non pensarci più",
    "example_en": "It's over — just let it go.",
    "example_it": "È finita — lascia andare.",
    "tags": [
      "bambini"
    ],
    "context_note": "smettere di pensare a qualcosa che fa stare male",
    "concept": "let_it_go"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Beats me",
    "emoji": "🤷",
    "simple": "",
    "it": "Non ne ho idea / boh / chi lo sa",
    "example_en": "Beats me where he put the ball.",
    "example_it": "Non ne ho idea dove ha messo il pallone.",
    "tags": [
      "bambini"
    ],
    "context_note": "risposta informale per dire che non si sa qualcosa",
    "concept": "dunno"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Whatever you say",
    "emoji": "🙄",
    "simple": "",
    "it": "Come vuoi / quel che dici tu",
    "example_en": "Whatever you say, but I disagree.",
    "example_it": "Come vuoi, ma non sono d'accordo.",
    "tags": [
      "bambini"
    ],
    "context_note": "accordo ironico o rassegnato",
    "concept": "whatever_you_say"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "That's right",
    "emoji": "✅",
    "simple": "",
    "it": "È così / esatto",
    "example_en": "That's right!",
    "example_it": "È così!",
    "tags": [
      "bambini"
    ],
    "context_note": "conferma di quanto detto da un altro",
    "concept": "thats_right"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Give it a shot",
    "emoji": "🎯",
    "simple": "",
    "it": "Provarci / fare un tentativo",
    "example_en": "Never tried it? Give it a shot!",
    "example_it": "Non l'hai mai provato? Fai un tentativo!",
    "tags": [
      "bambini"
    ],
    "context_note": "tentare qualcosa anche senza certezze",
    "concept": "give_it_a_shot"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Have a blast",
    "emoji": "🎉",
    "simple": "",
    "it": "Divertirsi un sacco / spassarsela",
    "example_en": "Hope you have a blast today!",
    "example_it": "Spero che vi divertiate un sacco oggi!",
    "tags": [
      "bambini"
    ],
    "context_note": "divertirsi moltissimo",
    "concept": "have_a_blast"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Have second thoughts",
    "emoji": "🤔",
    "simple": "",
    "it": "Avere ripensamenti / non essere più sicuro",
    "example_en": "I'm having second thoughts about this game.",
    "example_it": "Sto avendo ripensamenti su questo gioco.",
    "tags": [
      "bambini"
    ],
    "context_note": "iniziare a dubitare di una decisione già presa",
    "concept": "second_thoughts"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Get a grip",
    "emoji": "💪",
    "simple": "",
    "it": "Datti una calmata / riprenditi",
    "example_en": "Get a grip — it's just a game!",
    "example_it": "Datti una calmata — è solo un gioco!",
    "tags": [
      "bambini"
    ],
    "context_note": "dire a qualcuno di controllarsi e smettere di farsi prendere dal panico",
    "concept": "get_a_grip"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Social butterfly",
    "emoji": "🦋",
    "simple": "",
    "it": "Anima della festa / persona molto socievole",
    "example_en": "She's such a social butterfly at camp.",
    "example_it": "È davvero l'anima del miniclub.",
    "tags": [
      "bambini"
    ],
    "context_note": "chi è a proprio agio in qualsiasi contesto sociale",
    "concept": "social_butterfly"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Eye candy",
    "emoji": "😍",
    "simple": "",
    "it": "Qualcosa/qualcuno di molto piacevole da guardare",
    "example_en": "The new brochure is total eye candy!",
    "example_it": "La nuova brochure è davvero bella da vedere!",
    "tags": [
      "bambini"
    ],
    "context_note": "persona attraente o oggetto molto bello visivamente",
    "concept": "eye_candy"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "How's it going?",
    "emoji": "👋",
    "simple": "",
    "it": "Come va?",
    "example_en": "How's it going?",
    "example_it": "Come va?",
    "tags": [
      "bambini"
    ],
    "context_note": "saluto informale",
    "concept": "hows_it_going"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "How've you been?",
    "emoji": "🤗",
    "simple": "",
    "it": "Come sei stato/a?",
    "example_en": "How've you been?",
    "example_it": "Come sei stato",
    "tags": [
      "genitori"
    ],
    "context_note": "saluto dopo un po'",
    "concept": "how_have_you_been"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Hey, what's new?",
    "emoji": "🆕",
    "simple": "",
    "it": "Ehi, che c'è di nuovo?",
    "example_en": "Hey, what's new?",
    "example_it": "Ehi, che c'è di nuovo?",
    "tags": [
      "bambini"
    ],
    "context_note": "saluto curioso",
    "concept": "whats_new"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Sup?",
    "emoji": "😎",
    "simple": "",
    "it": "Che si dice?",
    "example_en": "Sup?",
    "example_it": "Che si dice?",
    "tags": [
      "bambini"
    ],
    "context_note": "saluto super informale / slang",
    "concept": "sup"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "What's up?",
    "emoji": "🙌",
    "simple": "",
    "it": "Che succede?",
    "example_en": "What's up?",
    "example_it": "Che succede?",
    "tags": [
      "bambini"
    ],
    "context_note": "saluto informale americano",
    "concept": "whats_up"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Hey there",
    "emoji": "👋",
    "simple": "",
    "it": "Ehi / Ciao",
    "example_en": "Hey there — ready for another fun day?",
    "example_it": "Ehi ciao — pronti per un'altra giornata?",
    "tags": [
      "bambini"
    ],
    "context_note": "saluto neutro informale",
    "concept": "hey_there"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Long time no see",
    "emoji": "⏳",
    "simple": "",
    "it": "È da tanto che non ci vediamo",
    "example_en": "Long time no see — how was your winter?",
    "example_it": "È da tanto che non ci vediamo — com'è stato l'inverno?",
    "tags": [
      "genitori"
    ],
    "context_note": "incontro dopo lungo tempo",
    "concept": "long_time_no_see"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Nice to see you",
    "emoji": "😊",
    "simple": "",
    "it": "Piacere di vederti",
    "example_en": "Nice to see you!",
    "example_it": "Piacere di vederti!",
    "tags": [
      "genitori"
    ],
    "context_note": "incontro piacevole",
    "concept": "nice_to_see_you"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Good to see you",
    "emoji": "🥰",
    "simple": "",
    "it": "Felice di vederti",
    "example_en": "Good to see you!",
    "example_it": "Felice di vederti!",
    "tags": [
      "genitori"
    ],
    "context_note": "calore nel salutare",
    "concept": "good_to_see_you"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "What's the deal?",
    "emoji": "🤨",
    "simple": "",
    "it": "Che succede? / Che storia è questa?",
    "example_en": "What's the deal with today's activity?",
    "example_it": "Che storia è con l'attività di oggi?",
    "tags": [
      "bambini"
    ],
    "context_note": "curiosità o sorpresa",
    "concept": "whats_the_deal"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Here we go again",
    "emoji": "🔁",
    "simple": "",
    "it": "Eccoci di nuovo",
    "example_en": "He forgot his towel — here we go again!",
    "example_it": "Ha dimenticato l'asciugamano — eccoci di nuovo!",
    "tags": [
      "bambini"
    ],
    "context_note": "rassegnazione ironica",
    "concept": "here_we_go_again"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "That figures",
    "emoji": "🙄",
    "simple": "",
    "it": "Era prevedibile",
    "example_en": "Lost again? That figures.",
    "example_it": "Ha perso di nuovo? Era prevedibile.",
    "tags": [
      "bambini"
    ],
    "context_note": "sarcasmo bonario",
    "concept": "that_figures"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Suit yourself",
    "emoji": "🤷",
    "simple": "",
    "it": "Fai come vuoi",
    "example_en": "Don't want to swim? Suit yourself!",
    "example_it": "Non vuoi nuotare? Fai come vuoi!",
    "tags": [
      "bambini"
    ],
    "context_note": "indifferenza / lasciare libertà",
    "concept": "suit_yourself"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Don't even",
    "emoji": "🚫",
    "simple": "",
    "it": "Non iniziare nemmeno",
    "example_en": "Don't even — we're not doing that today.",
    "example_it": "Non iniziare nemmeno — oggi non lo facciamo.",
    "tags": [
      "bambini"
    ],
    "context_note": "bloccare una discussione",
    "concept": "dont_even"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "That's your call",
    "emoji": "👉",
    "simple": "",
    "it": "Decidi tu",
    "example_en": "Stay or leave early? That's your call.",
    "example_it": "Restare o andare prima? Decidi tu.",
    "tags": [
      "bambini"
    ],
    "context_note": "rimandare la decisione all'altro",
    "concept": "thats_your_call"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "I doubt it",
    "emoji": "😐",
    "simple": "",
    "it": "Ne dubito",
    "example_en": "Will it rain? I doubt it.",
    "example_it": "Pioverà? Ne dubito.",
    "tags": [
      "bambini"
    ],
    "context_note": "scetticismo",
    "concept": "i_doubt_it"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Poor you",
    "emoji": "😢",
    "simple": "",
    "it": "Povero te / Poverina",
    "example_en": "You fell down? Poor you!",
    "example_it": "Sei caduto? Poveretto!",
    "tags": [
      "bambini"
    ],
    "context_note": "compassione ironica o sincera",
    "concept": "poor_you"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Back off",
    "emoji": "😤",
    "simple": "",
    "it": "Lasciami stare / Levati",
    "example_en": "Back off — let him try alone first.",
    "example_it": "Lascialo stare — lascialo provare da solo prima.",
    "tags": [
      "bambini"
    ],
    "context_note": "difendersi da qualcuno invadente",
    "concept": "back_off"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Snatched",
    "emoji": "💅",
    "simple": "",
    "it": "Perfetto / impeccabile",
    "example_en": "Your costume looks absolutely snatched!",
    "example_it": "Il tuo costume è assolutamente perfetto!",
    "tags": [
      "bambini"
    ],
    "context_note": "complimento su look/stile (slang Gen Z)",
    "concept": "snatched"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Salty",
    "emoji": "😒",
    "simple": "",
    "it": "Offeso / risentito",
    "example_en": "She's still salty about losing the game.",
    "example_it": "È ancora offesa per aver perso il gioco.",
    "tags": [
      "bambini"
    ],
    "context_note": "essere suscettibile o risentito",
    "concept": "salty"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "NO CAP",
    "emoji": "🧢",
    "simple": "",
    "it": "Senza scherzi / davvero",
    "example_en": "No cap, that was the best day ever!",
    "example_it": "Senza scherzi, è stato il giorno migliore di sempre!",
    "tags": [
      "bambini"
    ],
    "context_note": "enfatizzare la verità (slang)",
    "concept": "no_cap"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "High-key",
    "emoji": "🔊",
    "simple": "",
    "it": "Davvero / molto",
    "example_en": "I'm high-key obsessed with this game.",
    "example_it": "Sono davvero ossessionato da questo gioco.",
    "tags": [
      "bambini"
    ],
    "context_note": "intensificare un'affermazione (slang)",
    "concept": "high_key"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "I gotta go",
    "emoji": "🏃",
    "simple": "",
    "it": "Devo andare",
    "example_en": "I gotta go!",
    "example_it": "Devo andare!",
    "tags": [
      "bambini"
    ],
    "context_note": "congedo informale urgente",
    "concept": "i_gotta_go"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Catch you later",
    "emoji": "👋",
    "simple": "",
    "it": "A dopo / ci vediamo",
    "example_en": "Catch you later!",
    "example_it": "A dopo!",
    "tags": [
      "genitori"
    ],
    "context_note": "saluto informale",
    "concept": "catch_you_later"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Talk to you later",
    "emoji": "📱",
    "simple": "",
    "it": "Ci sentiamo dopo",
    "example_en": "Talk to you later!",
    "example_it": "Ci sentiamo dopo!",
    "tags": [
      "genitori"
    ],
    "context_note": "congedo al telefono o chat",
    "concept": "talk_to_you_later"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "I'll get going",
    "emoji": "🚶",
    "simple": "",
    "it": "Mi avvio / vado",
    "example_en": "I'll get going!",
    "example_it": "Mi avvio!",
    "tags": [
      "genitori"
    ],
    "context_note": "congedo gentile",
    "concept": "ill_get_going"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "See you around",
    "emoji": "🙌",
    "simple": "",
    "it": "Ci vediamo in giro",
    "example_en": "See you around!",
    "example_it": "Ci vediamo in giro!",
    "tags": [
      "genitori"
    ],
    "context_note": "saluto vago",
    "concept": "see_you_around"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "I'm off",
    "emoji": "🚪",
    "simple": "",
    "it": "Vado / me ne vado",
    "example_en": "I'm off!",
    "example_it": "Vado!",
    "tags": [
      "bambini"
    ],
    "context_note": "congedo diretto",
    "concept": "im_off"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Let's call it a day",
    "emoji": "🌅",
    "simple": "",
    "it": "Chiudiamola qui per oggi",
    "example_en": "Let's call it a day!",
    "example_it": "Chiudiamola qui per oggi!",
    "tags": [
      "bambini"
    ],
    "context_note": "fine attività/lavoro",
    "concept": "call_it_a_day"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "I'll head out",
    "emoji": "🏃",
    "simple": "",
    "it": "Me ne vado",
    "example_en": "I'll head out!",
    "example_it": "Me ne vado!",
    "tags": [
      "genitori"
    ],
    "context_note": "congedo informale",
    "concept": "ill_head_out"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Take care",
    "emoji": "🤗",
    "simple": "",
    "it": "Abbi cura di te",
    "example_en": "Take care!",
    "example_it": "Abbi cura di te!",
    "tags": [
      "genitori"
    ],
    "context_note": "saluto affettuoso",
    "concept": "take_care_coll"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Time to head out",
    "emoji": "⏰",
    "simple": "",
    "it": "È ora di andare",
    "example_en": "Time to head out!",
    "example_it": "È ora di andare!",
    "tags": [
      "genitori"
    ],
    "context_note": "congedo con senso temporale",
    "concept": "time_to_head_out"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "I'll catch up with you later",
    "emoji": "☕",
    "simple": "",
    "it": "Ci aggiorniamo dopo",
    "example_en": "I'll catch up with you later at the beach!",
    "example_it": "Ci aggiorniamo dopo in spiaggia!",
    "tags": [
      "genitori"
    ],
    "context_note": "rimandare a più tardi",
    "concept": "catch_up_later"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "I'm ready",
    "emoji": "✅",
    "simple": "",
    "it": "Sono pronto/a",
    "example_en": "I'm ready!",
    "example_it": "Sono pronto!",
    "tags": [
      "bambini"
    ],
    "context_note": "disponibilità",
    "concept": "im_ready"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "I'm good to go",
    "emoji": "🚀",
    "simple": "",
    "it": "Sono pronto/a a partire",
    "example_en": "I'm good to go!",
    "example_it": "Sono pronto!",
    "tags": [
      "bambini"
    ],
    "context_note": "disponibilità entusiasta",
    "concept": "good_to_go"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "I'm prepared",
    "emoji": "🎒",
    "simple": "",
    "it": "Sono preparato/a",
    "example_en": "I'm prepared!",
    "example_it": "Sono preparato!",
    "tags": [
      "bambini"
    ],
    "context_note": "disponibilità formale",
    "concept": "im_prepared"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "I'm geared up",
    "emoji": "⚙️",
    "simple": "",
    "it": "Sono attrezzato/a / pronto",
    "example_en": "I'm geared up!",
    "example_it": "Sono attrezzato!",
    "tags": [
      "bambini"
    ],
    "context_note": "disponibilità con energia",
    "concept": "im_geared_up"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "It's fine",
    "emoji": "🆗",
    "simple": "",
    "it": "Va bene",
    "example_en": "It's fine!",
    "example_it": "Va bene!",
    "tags": [
      "bambini"
    ],
    "context_note": "minimizzare o rassicurare",
    "concept": "its_fine"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "No worries",
    "emoji": "😌",
    "simple": "",
    "it": "Nessun problema",
    "example_en": "No worries!",
    "example_it": "Nessun problema!",
    "tags": [
      "bambini"
    ],
    "context_note": "rassicurazione informale",
    "concept": "no_worries"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "All good",
    "emoji": "✅",
    "simple": "",
    "it": "Tutto a posto",
    "example_en": "All good!",
    "example_it": "Tutto a posto!",
    "tags": [
      "bambini"
    ],
    "context_note": "tutto ok",
    "concept": "all_good"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "It's alright",
    "emoji": "👌",
    "simple": "",
    "it": "Va tutto bene",
    "example_en": "It's alright!",
    "example_it": "Va tutto bene!",
    "tags": [
      "bambini"
    ],
    "context_note": "rassicurazione",
    "concept": "its_alright"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Don't worry about it",
    "emoji": "🤗",
    "simple": "",
    "it": "Non preoccuparti",
    "example_en": "Don't worry about it!",
    "example_it": "Non preoccuparti!",
    "tags": [
      "bambini"
    ],
    "context_note": "rassicurare qualcuno",
    "concept": "dont_worry_about_it"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "It's nothing",
    "emoji": "🤏",
    "simple": "",
    "it": "Non è niente",
    "example_en": "It's nothing!",
    "example_it": "Non è niente!",
    "tags": [
      "bambini"
    ],
    "context_note": "minimizzare",
    "concept": "its_nothing"
  },
  {
    "language": "en",
    "type": "emotion",
    "verb": "No way!",
    "emoji": "😱",
    "simple": "",
    "it": "Ma dai! / Impossibile!",
    "example_en": "No way!",
    "example_it": "Ma dai!",
    "tags": [
      "bambini"
    ],
    "context_note": "sorpresa o incredulità",
    "concept": "disbelief"
  },
  {
    "language": "en",
    "type": "emotion",
    "verb": "Hold your horses!",
    "emoji": "🐴",
    "simple": "",
    "it": "Pazienza! / Piano!",
    "example_en": "Hold your horses!",
    "example_it": "Pazienza!",
    "tags": [
      "bambini"
    ],
    "context_note": "invito a calmarsi o rallentare",
    "concept": "hold_horses"
  },
  {
    "language": "en",
    "type": "emotion",
    "verb": "Don't lose your head!",
    "emoji": "🧠",
    "simple": "",
    "it": "Non perdere la testa!",
    "example_en": "Don't lose your head!",
    "example_it": "Non perdere la testa!",
    "tags": [
      "bambini"
    ],
    "context_note": "invito a mantenere il controllo",
    "concept": "dont_lose_head"
  },
  {
    "language": "en",
    "type": "emotion",
    "verb": "I've had it up to here",
    "emoji": "✋",
    "simple": "",
    "it": "Ne ho fin sopra i capelli",
    "example_en": "I've had it up to here",
    "example_it": "Ne ho fin sopra i capelli",
    "tags": [
      "bambini"
    ],
    "context_note": "frustrazione totale, non se ne può più",
    "concept": "had_it_up_to_here"
  },
  {
    "language": "en",
    "type": "emotion",
    "verb": "It's not the end of the world",
    "emoji": "🌍",
    "simple": "",
    "it": "Non è la fine del mondo",
    "example_en": "It's not the end of the world",
    "example_it": "Non è la fine del mondo",
    "tags": [
      "bambini"
    ],
    "context_note": "minimizzare una situazione negativa",
    "concept": "not_end_of_world"
  },
  {
    "language": "en",
    "type": "emotion",
    "verb": "I'm at my wits' end",
    "emoji": "😵",
    "simple": "",
    "it": "Non so più che fare",
    "example_en": "I feel really i'm at my wits' end today.",
    "example_it": "Mi sento davvero non so più che fare oggi.",
    "tags": [
      "bambini"
    ],
    "context_note": "disperazione per la frustrazione",
    "concept": "at_wits_end"
  },
  {
    "language": "en",
    "type": "emotion",
    "verb": "That's insane!",
    "emoji": "🤯",
    "simple": "",
    "it": "È assurdo! / È pazzesco!",
    "example_en": "That's insane!",
    "example_it": "È assurdo!",
    "tags": [
      "bambini"
    ],
    "context_note": "reazione forte",
    "concept": "thats_insane"
  },
  {
    "language": "en",
    "type": "emotion",
    "verb": "That's mental!",
    "emoji": "🧠",
    "simple": "",
    "it": "È pazzesco! / È assurdo!",
    "example_en": "That's mental!",
    "example_it": "È pazzesco!",
    "tags": [
      "bambini"
    ],
    "context_note": "reazione forte (UK slang)",
    "concept": "thats_mental"
  },
  {
    "language": "en",
    "type": "emotion",
    "verb": "That's awesome!",
    "emoji": "🤩",
    "simple": "",
    "it": "È fantastico!",
    "example_en": "That's awesome!",
    "example_it": "È fantastico!",
    "tags": [
      "bambini"
    ],
    "context_note": "entusiasmo",
    "concept": "joy_intense"
  },
  {
    "language": "en",
    "type": "emotion",
    "verb": "Oh my God!",
    "emoji": "😮",
    "simple": "",
    "it": "Oddio!",
    "example_en": "Oh my God!",
    "example_it": "Oddio!",
    "tags": [
      "bambini"
    ],
    "context_note": "sorpresa",
    "concept": "oh_my_god"
  },
  {
    "language": "en",
    "type": "emotion",
    "verb": "That's crazy!",
    "emoji": "🌀",
    "simple": "",
    "it": "È pazzesco!",
    "example_en": "That's crazy!",
    "example_it": "È pazzesco!",
    "tags": [
      "bambini"
    ],
    "context_note": "sorpresa o reazione",
    "concept": "thats_crazy"
  },
  {
    "language": "en",
    "type": "emotion",
    "verb": "What a mess!",
    "emoji": "🤦",
    "simple": "",
    "it": "Che casino!",
    "example_en": "What a mess!",
    "example_it": "Che casino!",
    "tags": [
      "bambini"
    ],
    "context_note": "situazione caotica",
    "concept": "chaos_mess"
  },
  {
    "language": "en",
    "type": "emotion",
    "verb": "That sucks!",
    "emoji": "😞",
    "simple": "",
    "it": "Che schifo! / Che peccato!",
    "example_en": "That sucks!",
    "example_it": "Che schifo!",
    "tags": [
      "bambini"
    ],
    "context_note": "disappunto",
    "concept": "disappointment"
  },
  {
    "language": "en",
    "type": "emotion",
    "verb": "No kidding!",
    "emoji": "😲",
    "simple": "",
    "it": "Ma davvero?!",
    "example_en": "No kidding!",
    "example_it": "Ma davvero?!",
    "tags": [
      "bambini"
    ],
    "context_note": "incredulità ironica",
    "concept": "ironic_surprise"
  },
  {
    "language": "en",
    "type": "emotion",
    "verb": "Are you serious?!",
    "emoji": "😤",
    "simple": "",
    "it": "Ma sei serio?!",
    "example_en": "Are you serious?!",
    "example_it": "Ma sei serio?!",
    "tags": [
      "bambini"
    ],
    "context_note": "incredulità",
    "concept": "shocked_question"
  },
  {
    "language": "en",
    "type": "emotion",
    "verb": "This is wild!",
    "emoji": "🦁",
    "simple": "",
    "it": "È assurdo! / È incredibile!",
    "example_en": "This is wild!",
    "example_it": "È assurdo!",
    "tags": [
      "bambini"
    ],
    "context_note": "stupore",
    "concept": "this_is_wild"
  },
  {
    "language": "en",
    "type": "emotion",
    "verb": "You don't say!",
    "emoji": "🫢",
    "simple": "",
    "it": "Ma va?!",
    "example_en": "You don't say!",
    "example_it": "Ma va?!",
    "tags": [
      "bambini"
    ],
    "context_note": "sorpresa ironica",
    "concept": "you_dont_say"
  },
  {
    "language": "en",
    "type": "emotion",
    "verb": "That's sick!",
    "emoji": "🔥",
    "simple": "",
    "it": "È fortissimo! / È pazzesco!",
    "example_en": "That's sick!",
    "example_it": "È fortissimo!",
    "tags": [
      "bambini"
    ],
    "context_note": "slang positivo",
    "concept": "slang_awesome"
  },
  {
    "language": "en",
    "type": "emotion",
    "verb": "This is annoying",
    "emoji": "😒",
    "simple": "",
    "it": "È irritante",
    "example_en": "I feel really this is annoying today.",
    "example_it": "Mi sento davvero è irritante oggi.",
    "tags": [
      "bambini"
    ],
    "context_note": "fastidio lieve",
    "concept": "this_is_annoying"
  },
  {
    "language": "en",
    "type": "emotion",
    "verb": "I'm fed up",
    "emoji": "😩",
    "simple": "",
    "it": "Sono stufo/a",
    "example_en": "I feel really i'm fed up today.",
    "example_it": "Mi sento davvero sono stufo oggi.",
    "tags": [
      "bambini"
    ],
    "context_note": "stanchezza/noia accumulata",
    "concept": "exhaustion_fed_up"
  },
  {
    "language": "en",
    "type": "emotion",
    "verb": "I've had enough",
    "emoji": "🛑",
    "simple": "",
    "it": "Ne ho abbastanza",
    "example_en": "I feel really i've had enough today.",
    "example_it": "Mi sento davvero ne ho abbastanza oggi.",
    "tags": [
      "bambini"
    ],
    "context_note": "limite raggiunto",
    "concept": "ive_had_enough"
  },
  {
    "language": "en",
    "type": "emotion",
    "verb": "This is unbearable",
    "emoji": "😣",
    "simple": "",
    "it": "È insopportabile",
    "example_en": "I feel really this is unbearable today.",
    "example_it": "Mi sento davvero è insopportabile oggi.",
    "tags": [
      "bambini"
    ],
    "context_note": "frustrazione forte",
    "concept": "this_is_unbearable"
  },
  {
    "language": "en",
    "type": "emotion",
    "verb": "I'm sick of this",
    "emoji": "🤢",
    "simple": "",
    "it": "Sono stufo/a di questa cosa",
    "example_en": "I feel really i'm sick of this today.",
    "example_it": "Mi sento davvero sono stufo oggi.",
    "tags": [
      "bambini"
    ],
    "context_note": "frustrazione ripetuta",
    "concept": "im_sick_of_this"
  },
  {
    "language": "en",
    "type": "emotion",
    "verb": "This is driving me crazy",
    "emoji": "🌪️",
    "simple": "",
    "it": "Mi sta facendo impazzire",
    "example_en": "I feel really this is driving me crazy today.",
    "example_it": "Mi sento davvero mi sta facendo impazzire oggi.",
    "tags": [
      "bambini"
    ],
    "context_note": "frustrazione massima",
    "concept": "driving_me_crazy"
  },
  {
    "language": "en",
    "type": "emotion",
    "verb": "I can't deal with this",
    "emoji": "😰",
    "simple": "",
    "it": "Non riesco a gestirlo",
    "example_en": "I feel really i can't deal with this today.",
    "example_it": "Mi sento davvero non riesco a gestirlo oggi.",
    "tags": [
      "bambini"
    ],
    "context_note": "frustrazione intensa, situazione sopraffacente",
    "concept": "cant_deal_with_this"
  },
  {
    "language": "en",
    "type": "emotion",
    "verb": "I'm over it",
    "emoji": "🙌",
    "simple": "",
    "it": "Ne ho abbastanza / l'ho superata",
    "example_en": "I feel really i'm over it today.",
    "example_it": "Mi sento davvero ne ho abbastanza oggi.",
    "tags": [
      "bambini"
    ],
    "context_note": "stanchezza e voglia di andare avanti",
    "concept": "im_over_it"
  },
  {
    "language": "en",
    "type": "emotion",
    "verb": "This is ridiculous",
    "emoji": "🙃",
    "simple": "",
    "it": "È ridicolo!",
    "example_en": "I feel really this is ridiculous today.",
    "example_it": "Mi sento davvero è ridicolo! oggi.",
    "tags": [
      "bambini"
    ],
    "context_note": "reazione di frustrazione o incredulità",
    "concept": "this_is_ridiculous"
  },
  {
    "language": "en",
    "type": "emotion",
    "verb": "I'm at my limit",
    "emoji": "🌋",
    "simple": "",
    "it": "Sono al limite",
    "example_en": "I feel really i'm at my limit today.",
    "example_it": "Mi sento davvero sono al limite oggi.",
    "tags": [
      "bambini"
    ],
    "context_note": "frustrazione al massimo, non se ne può più",
    "concept": "im_at_my_limit"
  },
  {
    "language": "en",
    "type": "emotion",
    "verb": "It gets on my nerves",
    "emoji": "😬",
    "simple": "",
    "it": "Mi dà sui nervi / mi irrita",
    "example_en": "I feel really it gets on my nerves today.",
    "example_it": "Mi sento davvero mi dà sui nervi oggi.",
    "tags": [
      "bambini"
    ],
    "context_note": "qualcosa di ripetutamente fastidioso",
    "concept": "on_my_nerves"
  },
  {
    "language": "en",
    "type": "emotion",
    "verb": "I can't take it anymore",
    "emoji": "🤯",
    "simple": "",
    "it": "Non ce la faccio più",
    "example_en": "I feel really i can't take it anymore today.",
    "example_it": "Mi sento davvero non ce la faccio più oggi.",
    "tags": [
      "bambini"
    ],
    "context_note": "limite raggiunto, situazione insopportabile",
    "concept": "exhaustion_fed_up"
  },
  {
    "language": "en",
    "type": "emotion",
    "verb": "It pissed me off",
    "emoji": "🤬",
    "simple": "",
    "it": "Mi ha fatto incazzare",
    "example_en": "I feel really it pissed me off today.",
    "example_it": "Mi sento davvero mi ha fatto incazzare oggi.",
    "tags": [
      "bambini"
    ],
    "context_note": "qualcosa che ha fatto arrabbiare molto (informale)",
    "concept": "pissed_me_off"
  },
  {
    "language": "en",
    "type": "emotion",
    "verb": "I'm on edge",
    "emoji": "⚡",
    "simple": "",
    "it": "Sono tesissimo/a / sulle spine",
    "example_en": "I feel really i'm on edge today.",
    "example_it": "Mi sento davvero sono tesissimo oggi.",
    "tags": [
      "bambini"
    ],
    "context_note": "nervosismo, tensione, difficoltà a rilassarsi",
    "concept": "im_on_edge"
  },
  {
    "language": "en",
    "type": "emotion",
    "verb": "I'm tense",
    "emoji": "😬",
    "simple": "",
    "it": "Sono teso/a",
    "example_en": "I feel really i'm tense today.",
    "example_it": "Mi sento davvero sono teso oggi.",
    "tags": [
      "bambini"
    ],
    "context_note": "tensione fisica e mentale",
    "concept": "im_tense"
  },
  {
    "language": "en",
    "type": "emotion",
    "verb": "My nerves are shot",
    "emoji": "💥",
    "simple": "",
    "it": "Ho i nervi a pezzi",
    "example_en": "I feel really my nerves are shot today.",
    "example_it": "Mi sento davvero ho i nervi a pezzi oggi.",
    "tags": [
      "bambini"
    ],
    "context_note": "nervi logorati, tensione accumulata",
    "concept": "nerves_are_shot"
  },
  {
    "language": "en",
    "type": "emotion",
    "verb": "I'm freaking out",
    "emoji": "😱",
    "simple": "",
    "it": "Sto andando nel panico / impazzisco",
    "example_en": "I feel really i'm freaking out today.",
    "example_it": "Mi sento davvero sto andando nel panico oggi.",
    "tags": [
      "bambini"
    ],
    "context_note": "panico o agitazione intensa",
    "concept": "im_freaking_out"
  },
  {
    "language": "en",
    "type": "emotion",
    "verb": "I can't calm down",
    "emoji": "🌪️",
    "simple": "",
    "it": "Non riesco a calmarmi",
    "example_en": "I feel really i can't calm down today.",
    "example_it": "Mi sento davvero non riesco a calmarmi oggi.",
    "tags": [
      "bambini"
    ],
    "context_note": "agitazione che non si riesce a controllare",
    "concept": "cant_calm_down"
  },
  {
    "language": "en",
    "type": "emotion",
    "verb": "I'm losing it",
    "emoji": "🫠",
    "simple": "",
    "it": "Sto perdendo il controllo",
    "example_en": "I feel really i'm losing it today.",
    "example_it": "Mi sento davvero sto perdendo il controllo oggi.",
    "tags": [
      "bambini"
    ],
    "context_note": "perdere lucidità o controllo emotivo",
    "concept": "im_losing_it"
  },
  {
    "language": "en",
    "type": "emotion",
    "verb": "I feel crushed",
    "emoji": "💔",
    "simple": "",
    "it": "Mi sento a pezzi / distrutto/a",
    "example_en": "I feel really i feel crushed today.",
    "example_it": "Mi sento davvero mi sento a pezzi oggi.",
    "tags": [
      "bambini"
    ],
    "context_note": "dolore emotivo intenso, devastazione",
    "concept": "feel_crushed"
  },
  {
    "language": "en",
    "type": "emotion",
    "verb": "I have a lump in my throat",
    "emoji": "🥺",
    "simple": "",
    "it": "Ho un nodo alla gola",
    "example_en": "I have a lump in my throat",
    "example_it": "Ho un nodo alla gola",
    "tags": [
      "bambini"
    ],
    "context_note": "emozione intensa che blocca la parola, vicino al pianto",
    "concept": "lump_in_throat"
  },
  {
    "language": "en",
    "type": "emotion",
    "verb": "I'm emotionally drained",
    "emoji": "🪫",
    "simple": "",
    "it": "Sono emotivamente sfinito/a",
    "example_en": "I feel really i'm emotionally drained today.",
    "example_it": "Mi sento davvero sono emotivamente sfinito oggi.",
    "tags": [
      "bambini"
    ],
    "context_note": "esaurimento emotivo dopo situazioni intense",
    "concept": "emotionally_drained"
  },
  {
    "language": "en",
    "type": "emotion",
    "verb": "I feel like crying",
    "emoji": "😢",
    "simple": "",
    "it": "Mi viene da piangere",
    "example_en": "I feel really i feel like crying today.",
    "example_it": "Mi sento davvero mi viene da piangere oggi.",
    "tags": [
      "bambini"
    ],
    "context_note": "sensazione di voler piangere",
    "concept": "feel_like_crying"
  },
  {
    "language": "en",
    "type": "emotion",
    "verb": "I'm on the verge of tears",
    "emoji": "😭",
    "simple": "",
    "it": "Sono sul punto di piangere",
    "example_en": "I'm on the verge of tears",
    "example_it": "Sono sul punto di piangere",
    "tags": [
      "bambini"
    ],
    "context_note": "a un passo dal pianto",
    "concept": "on_verge_of_tears"
  },
  {
    "language": "en",
    "type": "emotion",
    "verb": "I want it",
    "emoji": "🙋",
    "simple": "",
    "it": "Lo voglio",
    "example_en": "I feel really i want it today.",
    "example_it": "Mi sento davvero lo voglio oggi.",
    "tags": [
      "bambini"
    ],
    "context_note": "desiderio diretto",
    "concept": "i_want_it"
  },
  {
    "language": "en",
    "type": "emotion",
    "verb": "I don't like it",
    "emoji": "👎",
    "simple": "",
    "it": "Non mi piace",
    "example_en": "I feel really i don't like it today.",
    "example_it": "Mi sento davvero non mi piace oggi.",
    "tags": [
      "bambini"
    ],
    "context_note": "disappunto / rifiuto",
    "concept": "i_dont_like_it"
  },
  {
    "language": "en",
    "type": "opinion",
    "verb": "In my opinion",
    "emoji": "💭",
    "simple": "",
    "it": "Secondo me",
    "example_en": "In my opinion, the morning slot works best.",
    "example_it": "Secondo me, la mattina funziona meglio.",
    "tags": [
      "bambini"
    ],
    "context_note": "opinione formale",
    "concept": "opinion_formal"
  },
  {
    "language": "en",
    "type": "opinion",
    "verb": "As far as I know",
    "emoji": "🔭",
    "simple": "",
    "it": "Per quanto ne so",
    "example_en": "As far as I know, the pool opens at 10.",
    "example_it": "Per quanto ne so, la piscina apre alle 10.",
    "tags": [
      "bambini"
    ],
    "context_note": "incertezza educata",
    "concept": "opinion_limited_knowledge"
  },
  {
    "language": "en",
    "type": "opinion",
    "verb": "If you ask me",
    "emoji": "🙋",
    "simple": "",
    "it": "Se lo chiedi a me",
    "example_en": "If you ask me, add more water breaks.",
    "example_it": "Se lo chiedi a me, aggiungi più pause acqua.",
    "tags": [
      "bambini"
    ],
    "context_note": "opinione personale",
    "concept": "opinion_personal"
  },
  {
    "language": "en",
    "type": "opinion",
    "verb": "I guess...",
    "emoji": "🤔",
    "simple": "",
    "it": "Immagino... / Suppongo...",
    "example_en": "I guess..., this is the right decision.",
    "example_it": "Immagino..., questa è la decisione giusta.",
    "tags": [
      "bambini"
    ],
    "context_note": "incertezza",
    "concept": "opinion_tentative"
  },
  {
    "language": "en",
    "type": "opinion",
    "verb": "I feel like...",
    "emoji": "💫",
    "simple": "",
    "it": "Ho l'impressione che...",
    "example_en": "I feel like..., this is the right decision.",
    "example_it": "Ho l'impressione che..., questa è la decisione giusta.",
    "tags": [
      "bambini"
    ],
    "context_note": "sensazione personale",
    "concept": "opinion_impression"
  },
  {
    "language": "en",
    "type": "opinion",
    "verb": "Personally speaking",
    "emoji": "👤",
    "simple": "",
    "it": "Personalmente",
    "example_en": "Personally speaking, this is the right decision.",
    "example_it": "Personalmente, questa è la decisione giusta.",
    "tags": [
      "bambini"
    ],
    "context_note": "opinione personale",
    "concept": "opinion_personal"
  },
  {
    "language": "en",
    "type": "opinion",
    "verb": "The way I see it...",
    "emoji": "👁️",
    "simple": "",
    "it": "Per come la vedo io...",
    "example_en": "The way I see it..., this is the right decision.",
    "example_it": "Per come la vedo io..., questa è la decisione giusta.",
    "tags": [
      "bambini"
    ],
    "context_note": "punto di vista",
    "concept": "opinion_pov"
  },
  {
    "language": "en",
    "type": "opinion",
    "verb": "I'd say...",
    "emoji": "💬",
    "simple": "",
    "it": "Direi che...",
    "example_en": "I'd say..., this is the right decision.",
    "example_it": "Direi che..., questa è la decisione giusta.",
    "tags": [
      "bambini"
    ],
    "context_note": "opinione cauta",
    "concept": "opinion_tentative"
  },
  {
    "language": "en",
    "type": "opinion",
    "verb": "I'm pretty sure...",
    "emoji": "🎯",
    "simple": "",
    "it": "Sono abbastanza sicuro che...",
    "example_en": "I'm pretty sure..., this is the right decision.",
    "example_it": "Sono abbastanza sicuro che..., questa è la decisione giusta.",
    "tags": [
      "bambini"
    ],
    "context_note": "quasi certezza",
    "concept": "opinion_confident"
  },
  {
    "language": "en",
    "type": "opinion",
    "verb": "To be honest...",
    "emoji": "💯",
    "simple": "",
    "it": "Ad essere onesto...",
    "example_en": "To be honest..., this is the right decision.",
    "example_it": "Ad essere onesto..., questa è la decisione giusta.",
    "tags": [
      "bambini"
    ],
    "context_note": "franchezza",
    "concept": "honesty_marker"
  },
  {
    "language": "en",
    "type": "opinion",
    "verb": "I'm into it",
    "emoji": "🔥",
    "simple": "",
    "it": "Mi piace un sacco / mi appassiona",
    "example_en": "I'm into it, this is the right decision.",
    "example_it": "Mi piace un sacco, questa è la decisione giusta.",
    "tags": [
      "bambini"
    ],
    "context_note": "interesse entusiasta",
    "concept": "pref_into_it"
  },
  {
    "language": "en",
    "type": "opinion",
    "verb": "I dig it",
    "emoji": "🎸",
    "simple": "",
    "it": "Mi piace un sacco",
    "example_en": "I dig it, this is the right decision.",
    "example_it": "Mi piace un sacco, questa è la decisione giusta.",
    "tags": [
      "bambini"
    ],
    "context_note": "slang per esprimere entusiasmo",
    "concept": "i_dig_it"
  },
  {
    "language": "en",
    "type": "opinion",
    "verb": "I'm a fan of it",
    "emoji": "⭐",
    "simple": "",
    "it": "Ne sono fan",
    "example_en": "I'm a fan of it, this is the right decision.",
    "example_it": "Ne sono fan, questa è la decisione giusta.",
    "tags": [
      "bambini"
    ],
    "context_note": "preferenza dichiarata",
    "concept": "pref_fan_of"
  },
  {
    "language": "en",
    "type": "opinion",
    "verb": "I'm really into that",
    "emoji": "💫",
    "simple": "",
    "it": "Mi piace davvero / mi appassiona molto",
    "example_en": "I'm really into that, this is the right decision.",
    "example_it": "Mi piace davvero, questa è la decisione giusta.",
    "tags": [
      "bambini"
    ],
    "context_note": "preferenza forte",
    "concept": "really_into_it"
  },
  {
    "language": "en",
    "type": "opinion",
    "verb": "It's my thing",
    "emoji": "🎯",
    "simple": "",
    "it": "Fa per me / è il mio campo",
    "example_en": "It's my thing, this is the right decision.",
    "example_it": "Fa per me, questa è la decisione giusta.",
    "tags": [
      "bambini"
    ],
    "context_note": "affinità personale",
    "concept": "its_my_thing"
  },
  {
    "language": "en",
    "type": "opinion",
    "verb": "I'm not sure",
    "emoji": "🤷",
    "simple": "",
    "it": "Non sono sicuro/a",
    "example_en": "I'm not sure, this is the right decision.",
    "example_it": "Non sono sicuro, questa è la decisione giusta.",
    "tags": [
      "bambini"
    ],
    "context_note": "incertezza",
    "concept": "im_not_sure"
  },
  {
    "language": "en",
    "type": "opinion",
    "verb": "I'm not certain",
    "emoji": "😐",
    "simple": "",
    "it": "Non sono certo/a",
    "example_en": "I'm not certain, this is the right decision.",
    "example_it": "Non sono certo, questa è la decisione giusta.",
    "tags": [
      "bambini"
    ],
    "context_note": "incertezza formale",
    "concept": "im_not_certain"
  },
  {
    "language": "en",
    "type": "opinion",
    "verb": "I'm not convinced",
    "emoji": "🧐",
    "simple": "",
    "it": "Non sono convinto/a",
    "example_en": "I'm not convinced, this is the right decision.",
    "example_it": "Non sono convinto, questa è la decisione giusta.",
    "tags": [
      "bambini"
    ],
    "context_note": "scetticismo",
    "concept": "im_not_convinced"
  },
  {
    "language": "en",
    "type": "opinion",
    "verb": "I'm on the fence",
    "emoji": "⚖️",
    "simple": "",
    "it": "Sono indeciso/a",
    "example_en": "I'm on the fence, this is the right decision.",
    "example_it": "Sono indeciso, questa è la decisione giusta.",
    "tags": [
      "bambini"
    ],
    "context_note": "indecisione",
    "concept": "on_the_fence"
  },
  {
    "language": "en",
    "type": "opinion",
    "verb": "Hard to say",
    "emoji": "🤔",
    "simple": "",
    "it": "Difficile a dirsi",
    "example_en": "Hard to say, this is the right decision.",
    "example_it": "Difficile a dirsi, questa è la decisione giusta.",
    "tags": [
      "bambini"
    ],
    "context_note": "risposta vaga",
    "concept": "hard_to_say"
  },
  {
    "language": "en",
    "type": "opinion",
    "verb": "All in all",
    "emoji": "📊",
    "simple": "",
    "it": "In generale / tutto sommato",
    "example_en": "All in all, this is the right decision.",
    "example_it": "In generale, questa è la decisione giusta.",
    "tags": [
      "bambini"
    ],
    "context_note": "conclusione o bilancio",
    "concept": "all_in_all"
  },
  {
    "language": "en",
    "type": "opinion",
    "verb": "Beautiful",
    "emoji": "😍",
    "simple": "",
    "it": "Bello/a",
    "example_en": "Beautiful, this is the right decision.",
    "example_it": "Bello, questa è la decisione giusta.",
    "tags": [
      "bambini"
    ],
    "context_note": "bellezza",
    "concept": "beautiful"
  },
  {
    "language": "en",
    "type": "opinion",
    "verb": "Gorgeous",
    "emoji": "🌟",
    "simple": "",
    "it": "Splendido/a",
    "example_en": "Gorgeous, this is the right decision.",
    "example_it": "Splendido, questa è la decisione giusta.",
    "tags": [
      "bambini"
    ],
    "context_note": "bellezza intensa",
    "concept": "gorgeous"
  },
  {
    "language": "en",
    "type": "opinion",
    "verb": "Stunning",
    "emoji": "🤩",
    "simple": "",
    "it": "Mozzafiato",
    "example_en": "Stunning, this is the right decision.",
    "example_it": "Mozzafiato, questa è la decisione giusta.",
    "tags": [
      "bambini"
    ],
    "context_note": "bellezza sorprendente",
    "concept": "stunning"
  },
  {
    "language": "en",
    "type": "opinion",
    "verb": "Lovely",
    "emoji": "💕",
    "simple": "",
    "it": "Adorabile",
    "example_en": "Lovely, this is the right decision.",
    "example_it": "Adorabile, questa è la decisione giusta.",
    "tags": [
      "bambini"
    ],
    "context_note": "qualcosa di grazioso",
    "concept": "lovely"
  },
  {
    "language": "en",
    "type": "opinion",
    "verb": "Pretty",
    "emoji": "🌸",
    "simple": "",
    "it": "Carino/a",
    "example_en": "Pretty, this is the right decision.",
    "example_it": "Carino, questa è la decisione giusta.",
    "tags": [
      "bambini"
    ],
    "context_note": "bellezza delicata",
    "concept": "pretty"
  },
  {
    "language": "en",
    "type": "opinion",
    "verb": "Attractive",
    "emoji": "💫",
    "simple": "",
    "it": "Attraente",
    "example_en": "Attractive, this is the right decision.",
    "example_it": "Attraente, questa è la decisione giusta.",
    "tags": [
      "bambini"
    ],
    "context_note": "attrazione estetica",
    "concept": "attractive"
  },
  {
    "language": "en",
    "type": "opinion",
    "verb": "Amazing",
    "emoji": "🤯",
    "simple": "",
    "it": "Fantastico/a",
    "example_en": "Amazing, this is the right decision.",
    "example_it": "Fantastico, questa è la decisione giusta.",
    "tags": [
      "bambini"
    ],
    "context_note": "entusiasmo forte",
    "concept": "amazing"
  },
  {
    "language": "en",
    "type": "opinion",
    "verb": "Good",
    "emoji": "👍",
    "simple": "",
    "it": "Buono",
    "example_en": "Good, this is the right decision.",
    "example_it": "Buono, questa è la decisione giusta.",
    "tags": [
      "bambini"
    ],
    "context_note": "valutazione positiva base",
    "concept": "good_opinion"
  },
  {
    "language": "en",
    "type": "opinion",
    "verb": "Nice",
    "emoji": "😊",
    "simple": "",
    "it": "Piacevole",
    "example_en": "Nice, this is the right decision.",
    "example_it": "Piacevole, questa è la decisione giusta.",
    "tags": [
      "bambini"
    ],
    "context_note": "gradevolezza",
    "concept": "nice_opinion"
  },
  {
    "language": "en",
    "type": "opinion",
    "verb": "Awesome",
    "emoji": "🔥",
    "simple": "",
    "it": "Fantastico",
    "example_en": "Awesome, this is the right decision.",
    "example_it": "Fantastico, questa è la decisione giusta.",
    "tags": [
      "bambini"
    ],
    "context_note": "entusiasmo colloquiale",
    "concept": "awesome"
  },
  {
    "language": "en",
    "type": "opinion",
    "verb": "Solid",
    "emoji": "💪",
    "simple": "",
    "it": "Valido",
    "example_en": "Solid, this is the right decision.",
    "example_it": "Valido, questa è la decisione giusta.",
    "tags": [
      "bambini"
    ],
    "context_note": "approvazione solida",
    "concept": "solid"
  },
  {
    "language": "en",
    "type": "opinion",
    "verb": "Decent",
    "emoji": "🆗",
    "simple": "",
    "it": "Decente",
    "example_en": "Decent, this is the right decision.",
    "example_it": "Decente, questa è la decisione giusta.",
    "tags": [
      "bambini"
    ],
    "context_note": "approvazione moderata",
    "concept": "decent"
  },
  {
    "language": "en",
    "type": "opinion",
    "verb": "Excellent",
    "emoji": "⭐",
    "simple": "",
    "it": "Eccellente",
    "example_en": "Excellent, this is the right decision.",
    "example_it": "Eccellente, questa è la decisione giusta.",
    "tags": [
      "bambini"
    ],
    "context_note": "valutazione alta",
    "concept": "excellent"
  },
  {
    "language": "en",
    "type": "opinion",
    "verb": "Impressive",
    "emoji": "👏",
    "simple": "",
    "it": "Impressionante",
    "example_en": "Impressive, this is the right decision.",
    "example_it": "Impressionante, questa è la decisione giusta.",
    "tags": [
      "bambini"
    ],
    "context_note": "qualcosa che colpisce",
    "concept": "impressive"
  },
  {
    "language": "en",
    "type": "opinion",
    "verb": "Bad",
    "emoji": "👎",
    "simple": "",
    "it": "Cattivo / brutto",
    "example_en": "Bad, this is the right decision.",
    "example_it": "Cattivo, questa è la decisione giusta.",
    "tags": [
      "bambini"
    ],
    "context_note": "valutazione negativa base",
    "concept": "bad_opinion"
  },
  {
    "language": "en",
    "type": "opinion",
    "verb": "Terrible",
    "emoji": "😱",
    "simple": "",
    "it": "Terribile",
    "example_en": "Terrible, this is the right decision.",
    "example_it": "Terribile, questa è la decisione giusta.",
    "tags": [
      "bambini"
    ],
    "context_note": "valutazione molto negativa",
    "concept": "terrible"
  },
  {
    "language": "en",
    "type": "opinion",
    "verb": "Awful",
    "emoji": "🤢",
    "simple": "",
    "it": "Pessimo",
    "example_en": "Awful, this is the right decision.",
    "example_it": "Pessimo, questa è la decisione giusta.",
    "tags": [
      "bambini"
    ],
    "context_note": "disgusto o forte disappunto",
    "concept": "awful"
  },
  {
    "language": "en",
    "type": "opinion",
    "verb": "Horrible",
    "emoji": "😣",
    "simple": "",
    "it": "Orribile",
    "example_en": "Horrible, this is the right decision.",
    "example_it": "Orribile, questa è la decisione giusta.",
    "tags": [
      "bambini"
    ],
    "context_note": "orrore o forte fastidio",
    "concept": "horrible"
  },
  {
    "language": "en",
    "type": "opinion",
    "verb": "Sucks",
    "emoji": "💩",
    "simple": "",
    "it": "Fa schifo",
    "example_en": "Sucks, this is the right decision.",
    "example_it": "Fa schifo, questa è la decisione giusta.",
    "tags": [
      "bambini"
    ],
    "context_note": "slang informale negativo",
    "concept": "sucks"
  },
  {
    "language": "en",
    "type": "opinion",
    "verb": "Ridiculous",
    "emoji": "🙃",
    "simple": "",
    "it": "Ridicolo",
    "example_en": "Ridiculous, this is the right decision.",
    "example_it": "Ridicolo, questa è la decisione giusta.",
    "tags": [
      "bambini"
    ],
    "context_note": "assurdità",
    "concept": "ridiculous"
  },
  {
    "language": "en",
    "type": "opinion",
    "verb": "Pathetic",
    "emoji": "😤",
    "simple": "",
    "it": "Patetico",
    "example_en": "Pathetic, this is the right decision.",
    "example_it": "Patetico, questa è la decisione giusta.",
    "tags": [
      "bambini"
    ],
    "context_note": "disprezzo",
    "concept": "pathetic"
  },
  {
    "language": "en",
    "type": "beach",
    "verb": "The water's lovely!",
    "emoji": "💧",
    "simple": "",
    "it": "L'acqua è meravigliosa!",
    "example_en": "The water's lovely!",
    "example_it": "L'acqua è meravigliosa!",
    "tags": [
      "mare"
    ],
    "context_note": "invitare qualcuno ad entrare in acqua",
    "concept": "water_is_lovely"
  },
  {
    "language": "en",
    "type": "beach",
    "verb": "Dive in!",
    "emoji": "🤿",
    "simple": "",
    "it": "Buttati!",
    "example_en": "Dive in!",
    "example_it": "Buttati!",
    "tags": [
      "mare"
    ],
    "context_note": "incoraggiare qualcuno a tuffarsi",
    "concept": "dive_in"
  },
  {
    "language": "en",
    "type": "beach",
    "verb": "Last one in is a rotten egg!",
    "emoji": "🥚",
    "simple": "",
    "it": "L'ultimo che entra è un uovo marcio!",
    "example_en": "Last one in is a rotten egg!",
    "example_it": "L'ultimo che entra è un uovo marcio!",
    "tags": [
      "mare"
    ],
    "context_note": "grido scherzoso per spingere tutti in acqua",
    "concept": "last_one_in"
  },
  {
    "language": "en",
    "type": "beach",
    "verb": "Let's warm up first!",
    "emoji": "🤸",
    "simple": "",
    "it": "Prima facciamo riscaldamento!",
    "example_en": "Let's warm up first!",
    "example_it": "Prima facciamo riscaldamento!",
    "tags": [
      "mare"
    ],
    "context_note": "prima di nuotare, attività fisica",
    "concept": "warm_up_first"
  },
  {
    "language": "en",
    "type": "beach",
    "verb": "Check the flag before you go in!",
    "emoji": "🚩",
    "simple": "",
    "it": "Controlla la bandiera prima di entrare!",
    "example_en": "Check the flag before you go in!",
    "example_it": "Controlla la bandiera prima di entrare!",
    "tags": [
      "mare",
      "sicurezza"
    ],
    "context_note": "sicurezza in mare, colori della bandiera",
    "concept": "check_flag"
  },
  {
    "language": "en",
    "type": "beach",
    "verb": "Wet your feet first!",
    "emoji": "🦶",
    "simple": "",
    "it": "Bagnati i piedi prima!",
    "example_en": "Wet your feet first!",
    "example_it": "Bagnati i piedi prima!",
    "tags": [
      "mare"
    ],
    "context_note": "abituarsi all'acqua gradualmente",
    "concept": "wet_feet_first"
  },
  {
    "language": "en",
    "type": "beach",
    "verb": "Stay in the shallow end!",
    "emoji": "📏",
    "simple": "",
    "it": "Resta nella parte bassa!",
    "example_en": "Stay in the shallow end!",
    "example_it": "Resta nella parte bassa!",
    "tags": [
      "mare",
      "sicurezza"
    ],
    "context_note": "sicurezza per chi non sa nuotare bene",
    "concept": "stay_shallow"
  },
  {
    "language": "en",
    "type": "beach",
    "verb": "Buddy up — no one swims alone!",
    "emoji": "👫",
    "simple": "",
    "it": "A coppie — nessuno nuota da solo!",
    "example_en": "Buddy up — no one swims alone!",
    "example_it": "A coppie — nessuno nuota da solo!",
    "tags": [
      "mare",
      "sicurezza"
    ],
    "context_note": "regola di sicurezza fondamentale",
    "concept": "buddy_up"
  },
  {
    "language": "en",
    "type": "beach",
    "verb": "Put your sunscreen on!",
    "emoji": "🧴",
    "simple": "",
    "it": "Metti la crema solare!",
    "example_en": "Put your sunscreen on!",
    "example_it": "Metti la crema solare!",
    "tags": [
      "mare"
    ],
    "context_note": "prima di esporsi al sole",
    "concept": "sunscreen_on"
  },
  {
    "language": "en",
    "type": "beach",
    "verb": "Don't run by the pool!",
    "emoji": "⚠️",
    "simple": "",
    "it": "Non correre in piscina!",
    "example_en": "Don't run by the pool!",
    "example_it": "Non correre in piscina!",
    "tags": [
      "mare",
      "sicurezza"
    ],
    "context_note": "regola di sicurezza standard",
    "concept": "no_running_pool"
  },
  {
    "language": "en",
    "type": "beach",
    "verb": "No swimming right after eating!",
    "emoji": "🍕",
    "simple": "",
    "it": "Non nuotate subito dopo aver mangiato!",
    "example_en": "No swimming right after eating!",
    "example_it": "Non nuotate subito dopo aver mangiato!",
    "tags": [
      "mare"
    ],
    "context_note": "regola classica, anche se discussa",
    "concept": "no_swim_after_eating"
  },
  {
    "language": "en",
    "type": "beach",
    "verb": "Watch out for the waves!",
    "emoji": "🌊",
    "simple": "",
    "it": "Attenzione alle onde!",
    "example_en": "Watch out for the waves!",
    "example_it": "Attenzione alle onde!",
    "tags": [
      "mare",
      "sicurezza"
    ],
    "context_note": "avvertimento per i bambini in riva al mare",
    "concept": "watch_waves"
  },
  {
    "language": "en",
    "type": "beach",
    "verb": "The sea is really choppy today.",
    "emoji": "⛵",
    "simple": "",
    "it": "Il mare è molto mosso oggi.",
    "example_en": "The sea is really choppy today.",
    "example_it": "Il mare è molto mosso oggi.",
    "tags": [
      "mare"
    ],
    "context_note": "avvisare sulle condizioni del mare",
    "concept": "sea_choppy"
  },
  {
    "language": "en",
    "type": "beach",
    "verb": "Let's do a head count!",
    "emoji": "🔢",
    "simple": "",
    "it": "Contiamoci tutti!",
    "example_en": "Let's do a head count!",
    "example_it": "Contiamoci tutti!",
    "tags": [
      "mare"
    ],
    "context_note": "verificare che ci siano tutti prima di entrare",
    "concept": "head_count"
  },
  {
    "language": "en",
    "type": "beach",
    "verb": "Race you to the buoy!",
    "emoji": "🏁",
    "simple": "",
    "it": "Chi arriva primo al galleggiante!",
    "example_en": "Race you to the buoy!",
    "example_it": "Chi arriva primo al galleggiante!",
    "tags": [
      "mare"
    ],
    "context_note": "sfida amichevole tra nuotatori",
    "concept": "race_to_buoy"
  },
  {
    "language": "en",
    "type": "beach",
    "verb": "Can you float on your back?",
    "emoji": "🏊",
    "simple": "",
    "it": "Sai fare il morto a galla?",
    "example_en": "Can you float on your back?",
    "example_it": "Sai fare il morto a galla?",
    "tags": [
      "mare"
    ],
    "context_note": "gioco o sfida in acqua",
    "concept": "float_back"
  },
  {
    "language": "en",
    "type": "beach",
    "verb": "Splash fight!",
    "emoji": "💦",
    "simple": "",
    "it": "Battaglia d'acqua!",
    "example_en": "Splash fight!",
    "example_it": "Battaglia d'acqua!",
    "tags": [
      "mare"
    ],
    "context_note": "gioco d'acqua classico",
    "concept": "splash_fight"
  },
  {
    "language": "en",
    "type": "beach",
    "verb": "Hold your breath!",
    "emoji": "🤐",
    "simple": "",
    "it": "Tieni il respiro!",
    "example_en": "Hold your breath!",
    "example_it": "Tieni il respiro!",
    "tags": [
      "mare"
    ],
    "context_note": "sfida apnea, gioco sott'acqua",
    "concept": "hold_breath"
  },
  {
    "language": "en",
    "type": "beach",
    "verb": "Cannonball!",
    "emoji": "💣",
    "simple": "",
    "it": "Bomba!",
    "example_en": "Cannonball!",
    "example_it": "Bomba!",
    "tags": [
      "mare"
    ],
    "context_note": "grido prima di tuffarsi a bomba",
    "concept": "cannonball"
  },
  {
    "language": "en",
    "type": "beach",
    "verb": "Towel off before you catch a cold!",
    "emoji": "🏖️",
    "simple": "",
    "it": "Asciugati o prendi il raffreddore!",
    "example_en": "Towel off before you catch a cold!",
    "example_it": "Asciugati o prendi il raffreddore!",
    "tags": [
      "mare"
    ],
    "context_note": "dopo il bagno, specialmente con i bambini",
    "concept": "towel_off"
  },
  {
    "language": "en",
    "type": "beach",
    "verb": "How was the water?",
    "emoji": "❓",
    "simple": "",
    "it": "Com'era l'acqua?",
    "example_en": "How was the water?",
    "example_it": "Com'era l'acqua?",
    "tags": [
      "mare"
    ],
    "context_note": "chiedere dopo il bagno",
    "concept": "how_was_water"
  },
  {
    "language": "en",
    "type": "beach",
    "verb": "Time to reapply sunscreen!",
    "emoji": "🧴",
    "simple": "",
    "it": "Ora rimetti la crema solare!",
    "example_en": "Time to reapply sunscreen!",
    "example_it": "Ora rimetti la crema solare!",
    "tags": [
      "mare"
    ],
    "context_note": "dopo il bagno la crema si lava via",
    "concept": "reapply_sunscreen"
  },
  {
    "language": "en",
    "type": "beach",
    "verb": "You've caught a bit of sun!",
    "emoji": "🔴",
    "simple": "",
    "it": "Ti sei preso un po' di sole!",
    "example_en": "You've caught a bit of sun!",
    "example_it": "Ti sei preso un po' di sole!",
    "tags": [
      "mare"
    ],
    "context_note": "notare che qualcuno si è scottato",
    "concept": "caught_sun"
  },
  {
    "language": "en",
    "type": "beach",
    "verb": "Let's rinse off in the shower!",
    "emoji": "🚿",
    "simple": "",
    "it": "Andiamo a sciacquarci alla doccia!",
    "example_en": "Let's rinse off in the shower!",
    "example_it": "Andiamo a sciacquarci alla doccia!",
    "tags": [
      "mare"
    ],
    "context_note": "dopo il bagno in mare, togliere il sale",
    "concept": "rinse_shower"
  },
  {
    "language": "en",
    "type": "beach",
    "verb": "Did you lose anything in the water?",
    "emoji": "🔍",
    "simple": "",
    "it": "Hai perso qualcosa in acqua?",
    "example_en": "Did you lose anything in the water?",
    "example_it": "Hai perso qualcosa in acqua?",
    "tags": [
      "mare"
    ],
    "context_note": "controllo oggetti dopo il bagno",
    "concept": "lost_something"
  },
  {
    "language": "en",
    "type": "beach",
    "verb": "Anyone get stung by a jellyfish?",
    "emoji": "🪼",
    "simple": "",
    "it": "Qualcuno è stato punto da una medusa?",
    "example_en": "Anyone get stung by a jellyfish?",
    "example_it": "Qualcuno è stato punto da una medusa?",
    "tags": [
      "mare"
    ],
    "context_note": "domanda frequente al mare",
    "concept": "jellyfish_sting"
  },
  {
    "language": "en",
    "type": "beach",
    "verb": "Who's hungry after all that swimming?",
    "emoji": "🍉",
    "simple": "",
    "it": "Chi ha fame dopo tutta quella nuotata?",
    "example_en": "Who's hungry after all that swimming?",
    "example_it": "Chi ha fame dopo tutta quella nuotata?",
    "tags": [
      "mare"
    ],
    "context_note": "dopo il bagno viene sempre fame",
    "concept": "hungry_after_swimming"
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "sign in / sign out",
    "emoji": "📝",
    "simple": "",
    "it": "firmare l'entrata / l'uscita",
    "example_en": "Please don't forget to sign your kids out before leaving.",
    "example_it": "Per favore, non dimenticate di firmare l'uscita dei bambini prima di andare.",
    "tags": [
      "genitori",
      "scuola",
      "sicurezza"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "snack time",
    "emoji": "🍎",
    "simple": "",
    "it": "ora della merenda",
    "example_en": "Wash your hands, it's snack time!",
    "example_it": "Lavatavi le mani, è l'ora della merenda!",
    "tags": [
      "bambini",
      "routine"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "to be a handful",
    "emoji": "🌪️",
    "simple": "",
    "it": "essere una peste / difficile da gestire",
    "example_en": "He can be a bit of a handful sometimes, but he is lovely.",
    "example_it": "A volte può essere una peste, ma è adorabile.",
    "tags": [
      "bambini",
      "comportamento",
      "genitori"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "fall for it",
    "emoji": "🤡",
    "simple": "",
    "it": "ci sei cascato",
    "example_en": "You fell for it!",
    "example_it": "Ci sei cascato!",
    "tags": [
      "reazione",
      "scherzo"
    ],
    "context_note": "",
    "concept": "pv_fall_for_it"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "you got me",
    "emoji": "🤝",
    "simple": "",
    "it": "mi hai fregato",
    "example_en": "Haha, you got me!",
    "example_it": "Ahah, mi hai fregato!",
    "tags": [
      "reazione",
      "scherzo"
    ],
    "context_note": "",
    "concept": "you_got_me"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "good one",
    "emoji": "👍",
    "simple": "",
    "it": "bella questa!",
    "example_en": "That was a good one!",
    "example_it": "Questa era bella!",
    "tags": [
      "reazione",
      "apprezzamento"
    ],
    "context_note": "",
    "concept": "good_one"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "that's not funny",
    "emoji": "😐",
    "simple": "",
    "it": "non è divertente",
    "example_en": "Stop it, that's not funny.",
    "example_it": "Smettila, non è divertente.",
    "tags": [
      "reazione",
      "comportamento"
    ],
    "context_note": "",
    "concept": "thats_not_funny"
  },
  {
    "language": "en",
    "type": "phrasal",
    "verb": "pulling your leg",
    "emoji": "😜",
    "simple": "",
    "it": "ti prendo in giro",
    "example_en": "Don't worry, I'm just pulling your leg!",
    "example_it": "Non preoccuparti, ti sto solo prendendo in giro!",
    "tags": [
      "scherzo",
      "bambini"
    ],
    "context_note": "",
    "concept": "pv_pulling_leg"
  },
  {
    "language": "en",
    "type": "emotion",
    "verb": "What a joy!",
    "emoji": "😄",
    "simple": "",
    "it": "che gioia!",
    "example_en": "What a joy!",
    "example_it": "che gioia!",
    "tags": [
      "emozioni"
    ],
    "context_note": "",
    "concept": "what_joy"
  },
  {
    "language": "en",
    "type": "emotion",
    "verb": "How embarrassing!",
    "emoji": "😳",
    "simple": "",
    "it": "che imbarazzo!",
    "example_en": "How embarrassing!",
    "example_it": "che imbarazzo!",
    "tags": [
      "emozioni"
    ],
    "context_note": "",
    "concept": "how_embarrassing"
  },
  {
    "language": "en",
    "type": "emotion",
    "verb": "Come on, cheer up!",
    "emoji": "💪",
    "simple": "",
    "it": "dai, su di giri!",
    "example_en": "Come on, cheer up!",
    "example_it": "dai, su di giri!",
    "tags": [
      "emozioni"
    ],
    "context_note": "",
    "concept": "cheer_up_em"
  },
  {
    "language": "en",
    "type": "emotion",
    "verb": "I'm sorry.",
    "emoji": "😔",
    "simple": "",
    "it": "mi dispiace",
    "example_en": "I feel really i'm sorry. today.",
    "example_it": "Mi sento davvero mi dispiace oggi.",
    "tags": [
      "emozioni"
    ],
    "context_note": "",
    "concept": "im_sorry_em"
  },
  {
    "language": "en",
    "type": "emotion",
    "verb": "Why not?",
    "emoji": "🤷",
    "simple": "",
    "it": "perché no?",
    "example_en": "Why not?",
    "example_it": "perché no?",
    "tags": [
      "emozioni"
    ],
    "context_note": "",
    "concept": "why_not_em"
  },
  {
    "language": "en",
    "type": "emotion",
    "verb": "All the better!",
    "emoji": "👍",
    "simple": "",
    "it": "meglio così!",
    "example_en": "All the better!",
    "example_it": "meglio così!",
    "tags": [
      "emozioni"
    ],
    "context_note": "",
    "concept": "relief_good_news"
  },
  {
    "language": "en",
    "type": "opinion",
    "verb": "It seems to me...",
    "emoji": "🤔",
    "simple": "",
    "it": "mi sembra che...",
    "example_en": "It seems to me..., this is the right decision.",
    "example_it": "mi sembra che..., questa è la decisione giusta.",
    "tags": [
      "opinioni"
    ],
    "context_note": "",
    "concept": "it_seems_to_me"
  },
  {
    "language": "en",
    "type": "opinion",
    "verb": "To tell the truth...",
    "emoji": "🗣️",
    "simple": "",
    "it": "a dire il vero...",
    "example_en": "To tell the truth..., this is the right decision.",
    "example_it": "a dire il vero..., questa è la decisione giusta.",
    "tags": [
      "opinioni"
    ],
    "context_note": "",
    "concept": "to_tell_the_truth"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Come on!",
    "emoji": "💪",
    "simple": "",
    "it": "dai!",
    "example_en": "Come on!",
    "example_it": "dai!",
    "tags": [
      "colloquiale"
    ],
    "context_note": "",
    "concept": "come_on_colloquial"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "How cool!",
    "emoji": "😎",
    "simple": "",
    "it": "che fico!",
    "example_en": "How cool!",
    "example_it": "che fico!",
    "tags": [
      "colloquiale"
    ],
    "context_note": "",
    "concept": "how_cool"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "That's really cool",
    "emoji": "🔥",
    "simple": "",
    "it": "è davvero figo",
    "example_en": "That's really cool!",
    "example_it": "è davvero figo!",
    "tags": [
      "colloquiale"
    ],
    "context_note": "",
    "concept": "really_cool"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Let me see...",
    "emoji": "🤔",
    "simple": "",
    "it": "vediamo...",
    "example_en": "Let me see...!",
    "example_it": "vediamo...!",
    "tags": [
      "colloquiale"
    ],
    "context_note": "",
    "concept": "let_me_see"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "No idea",
    "emoji": "🤷",
    "simple": "",
    "it": "nessuna idea",
    "example_en": "No idea!",
    "example_it": "nessuna idea!",
    "tags": [
      "colloquiale"
    ],
    "context_note": "",
    "concept": "no_idea"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Dude / Mate",
    "emoji": "🤙",
    "simple": "",
    "it": "amico / tipo",
    "example_en": "Dude / Mate!",
    "example_it": "amico!",
    "tags": [
      "colloquiale"
    ],
    "context_note": "",
    "concept": "dude_mate"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Going all out",
    "emoji": "🔥",
    "simple": "",
    "it": "andare a tutto gas",
    "example_en": "Going all out!",
    "example_it": "andare a tutto gas!",
    "tags": [
      "colloquiale"
    ],
    "context_note": "",
    "concept": "going_hard"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Watch out!",
    "emoji": "⚠️",
    "simple": "",
    "it": "attenzione!",
    "example_en": "Watch out!",
    "example_it": "attenzione!",
    "tags": [
      "colloquiale"
    ],
    "context_note": "",
    "concept": "watch_out_coll"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "No way",
    "emoji": "🙅",
    "simple": "",
    "it": "manco per sogno",
    "example_en": "No way!",
    "example_it": "manco per sogno!",
    "tags": [
      "colloquiale"
    ],
    "context_note": "",
    "concept": "no_way_coll"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Oh really?",
    "emoji": "😲",
    "simple": "",
    "it": "davvero?",
    "example_en": "Oh really?",
    "example_it": "davvero?",
    "tags": [
      "colloquiale"
    ],
    "context_note": "",
    "concept": "really_now"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "I'm starving",
    "emoji": "🍕",
    "simple": "",
    "it": "sto morendo di fame",
    "example_en": "I'm starving!",
    "example_it": "sto morendo di fame!",
    "tags": [
      "colloquiale"
    ],
    "context_note": "",
    "concept": "im_starving"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "I'm exhausted",
    "emoji": "😴",
    "simple": "",
    "it": "sono esausto/a",
    "example_en": "I'm exhausted!",
    "example_it": "sono esausto!",
    "tags": [
      "colloquiale"
    ],
    "context_note": "",
    "concept": "im_exhausted"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "You don't say!",
    "emoji": "😮",
    "simple": "",
    "it": "figurati!",
    "example_en": "You don't say!",
    "example_it": "figurati!",
    "tags": [
      "colloquiale"
    ],
    "context_note": "",
    "concept": "you_dont_say_coll"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Screw it!",
    "emoji": "💢",
    "simple": "",
    "it": "al diavolo!",
    "example_en": "Screw it!",
    "example_it": "al diavolo!",
    "tags": [
      "colloquiale"
    ],
    "context_note": "",
    "concept": "screw_it"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Cop (slang)",
    "emoji": "👮",
    "simple": "",
    "it": "sbirro (slang)",
    "example_en": "Cop (slang)!",
    "example_it": "sbirro!",
    "tags": [
      "colloquiale"
    ],
    "context_note": "",
    "concept": "cop_slang"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Do the cheek kiss",
    "emoji": "💋",
    "simple": "",
    "it": "baciare sulla guancia",
    "example_en": "Do the cheek kiss!",
    "example_it": "baciare sulla guancia!",
    "tags": [
      "colloquiale"
    ],
    "context_note": "",
    "concept": "do_the_bise"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "I'm not feeling well",
    "emoji": "🤒",
    "simple": "",
    "it": "non mi sento bene",
    "example_en": "I'm not feeling well!",
    "example_it": "non mi sento bene!",
    "tags": [
      "colloquiale"
    ],
    "context_note": "",
    "concept": "not_feeling_well"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "With pleasure",
    "emoji": "😊",
    "simple": "",
    "it": "con piacere",
    "example_en": "With pleasure!",
    "example_it": "con piacere!",
    "tags": [
      "colloquiale"
    ],
    "context_note": "",
    "concept": "with_pleasure"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "With a smile",
    "emoji": "😊",
    "simple": "",
    "it": "col sorriso",
    "example_en": "With a smile!",
    "example_it": "col sorriso!",
    "tags": [
      "colloquiale"
    ],
    "context_note": "",
    "concept": "with_a_smile"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Absolutely",
    "emoji": "💯",
    "simple": "",
    "it": "assolutamente",
    "example_en": "Absolutely!",
    "example_it": "assolutamente!",
    "tags": [
      "colloquiale"
    ],
    "context_note": "",
    "concept": "absolutely"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "What nonsense!",
    "emoji": "🤯",
    "simple": "",
    "it": "che assurdità!",
    "example_en": "What nonsense!",
    "example_it": "che assurdità!",
    "tags": [
      "colloquiale"
    ],
    "context_note": "",
    "concept": "what_nonsense"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Oh my goodness!",
    "emoji": "😱",
    "simple": "",
    "it": "mamma mia!",
    "example_en": "Oh my goodness!",
    "example_it": "mamma mia!",
    "tags": [
      "colloquiale"
    ],
    "context_note": "",
    "concept": "oh_la_la"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Meh",
    "emoji": "😑",
    "simple": "",
    "it": "boh / così così",
    "example_en": "Meh!",
    "example_it": "boh!",
    "tags": [
      "colloquiale"
    ],
    "context_note": "",
    "concept": "meh"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "It's a drag",
    "emoji": "😤",
    "simple": "",
    "it": "è una seccatura",
    "example_en": "It's a drag!",
    "example_it": "è una seccatura!",
    "tags": [
      "colloquiale"
    ],
    "context_note": "",
    "concept": "its_annoying_coll"
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "Nail it / Hit the nail on the head",
    "emoji": "🎯",
    "simple": "",
    "it": "cogliere nel segno",
    "example_en": "Nail it / Hit the nail on the head",
    "example_it": "cogliere nel segno",
    "tags": [
      "idiomi"
    ],
    "context_note": "trovare esattamente la soluzione",
    "concept": "idiom_hit_on_nail"
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "Be left speechless / Be dumbstruck",
    "emoji": "😲",
    "simple": "",
    "it": "restare di stucco",
    "example_en": "Be left speechless / Be dumbstruck",
    "example_it": "restare di stucco",
    "tags": [
      "idiomi"
    ],
    "context_note": "restare senza parole per la sorpresa",
    "concept": "idiom_thunderstruck"
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "It's all over",
    "emoji": "😱",
    "simple": "",
    "it": "è finita",
    "example_en": "It's all over — that's just the way it is.",
    "example_it": "è finita — è così che stanno le cose.",
    "tags": [
      "idiomi"
    ],
    "context_note": "situazione disperata senza più speranza",
    "concept": "idiom_all_over"
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "It was amazing!",
    "emoji": "🤩",
    "simple": "",
    "it": "era fantastico!",
    "example_en": "It was amazing!",
    "example_it": "era fantastico!",
    "tags": [
      "idiomi"
    ],
    "context_note": "entusiasmo per qualcosa di straordinario",
    "concept": "idiom_amazing"
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "It's incredible!",
    "emoji": "😲",
    "simple": "",
    "it": "è incredibile!",
    "example_en": "It's incredible!",
    "example_it": "è incredibile!",
    "tags": [
      "idiomi"
    ],
    "context_note": "stupore per qualcosa di incredibile",
    "concept": "idiom_incredible"
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "What a disaster!",
    "emoji": "💥",
    "simple": "",
    "it": "che disastro!",
    "example_en": "What a disaster!",
    "example_it": "che disastro!",
    "tags": [
      "idiomi"
    ],
    "context_note": "esclamazione di fronte a un disastro",
    "concept": "idiom_what_a_mess"
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "No way! / Out of the question!",
    "emoji": "🚫",
    "simple": "",
    "it": "neanche per sogno!",
    "example_en": "No way! / Out of the question!",
    "example_it": "neanche per sogno!",
    "tags": [
      "idiomi"
    ],
    "context_note": "rifiuto categorico",
    "concept": "idiom_no_way"
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "Have a good trip!",
    "emoji": "✈️",
    "simple": "",
    "it": "buon viaggio!",
    "example_en": "Have a good trip!",
    "example_it": "buon viaggio!",
    "tags": [
      "idiomi"
    ],
    "context_note": "augurare un buon viaggio",
    "concept": "idiom_safe_trip"
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "I've got to go / I need to go.",
    "emoji": "🏃",
    "simple": "",
    "it": "devo andare",
    "example_en": "I've got to go / I need to go.",
    "example_it": "devo andare",
    "tags": [
      "idiomi"
    ],
    "context_note": "doversi congedare in modo educato",
    "concept": "idiom_gotta_go"
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "We need to talk.",
    "emoji": "💬",
    "simple": "",
    "it": "dobbiamo parlare",
    "example_en": "We need to talk. — that's just the way it is.",
    "example_it": "dobbiamo parlare — è così che stanno le cose.",
    "tags": [
      "idiomi"
    ],
    "context_note": "avviare una conversazione seria",
    "concept": "idiom_we_need_talk"
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "Stand someone up",
    "emoji": "🐰",
    "simple": "",
    "it": "dare buca / piantare in asso",
    "example_en": "Stand someone up — that's just the way it is.",
    "example_it": "dare buca — è così che stanno le cose.",
    "tags": [
      "idiomi"
    ],
    "context_note": "non presentarsi a un appuntamento",
    "concept": "idiom_stand_up"
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "Pass out / Faint",
    "emoji": "😵",
    "simple": "",
    "it": "svenire",
    "example_en": "Pass out / Faint — that's just the way it is.",
    "example_it": "svenire — è così che stanno le cose.",
    "tags": [
      "idiomi"
    ],
    "context_note": "svenire / perdere i sensi",
    "concept": "idiom_faint"
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "Have bigger fish to fry",
    "emoji": "🐟",
    "simple": "",
    "it": "avere di meglio da fare",
    "example_en": "Have bigger fish to fry — that's just the way it is.",
    "example_it": "avere di meglio da fare — è così che stanno le cose.",
    "tags": [
      "idiomi"
    ],
    "context_note": "avere cose più importanti di cui occuparsi",
    "concept": "idiom_busy"
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "It's all over / We're done for",
    "emoji": "🥕",
    "simple": "",
    "it": "è fatta / siamo fritti",
    "example_en": "It's all over / We're done for",
    "example_it": "è fatta",
    "tags": [
      "idiomi"
    ],
    "context_note": "situazione senza più speranza, inevitabile",
    "concept": "idiom_done_for"
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "Fall in love at first sight",
    "emoji": "⚡",
    "simple": "",
    "it": "colpo di fulmine",
    "example_en": "Fall in love at first sight",
    "example_it": "colpo di fulmine",
    "tags": [
      "idiomi"
    ],
    "context_note": "innamorarsi all'improvviso / a prima vista",
    "concept": "idiom_love_first_sight"
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "Don't push your luck",
    "emoji": "⚠️",
    "simple": "",
    "it": "non esagerare",
    "example_en": "Don't push your luck — that's just the way it is.",
    "example_it": "non esagerare — è così che stanno le cose.",
    "tags": [
      "idiomi"
    ],
    "context_note": "non esagerare / non approfittare della situazione",
    "concept": "idiom_dont_push_it"
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "Give up trying to guess",
    "emoji": "🐱",
    "simple": "",
    "it": "arrendersi a indovinare",
    "example_en": "Give up trying to guess — that's just the way it is.",
    "example_it": "arrendersi a indovinare — è così che stanno le cose.",
    "tags": [
      "idiomi"
    ],
    "context_note": "arrendersi a trovare la risposta",
    "concept": "idiom_give_up"
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "Have it both ways / Have your cake and eat it",
    "emoji": "🧈",
    "simple": "",
    "it": "avere la botte piena e la moglie ubriaca",
    "example_en": "Have it both ways / Have your cake and eat it",
    "example_it": "avere la botte piena e la moglie ubriaca",
    "tags": [
      "idiomi"
    ],
    "context_note": "volere tutto senza dover scegliere",
    "concept": "idiom_have_it_all"
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "Bad things come in threes",
    "emoji": "3️⃣",
    "simple": "",
    "it": "non c'è due senza tre",
    "example_en": "Bad things come in threes — that's just the way it is.",
    "example_it": "non c'è due senza tre — è così che stanno le cose.",
    "tags": [
      "idiomi"
    ],
    "context_note": "le cose brutte tendono a ripetersi tre volte",
    "concept": "idiom_no_two_no_three"
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "Adding insult to injury / It never rains but it pours",
    "emoji": "🌧️",
    "simple": "",
    "it": "non c'è limite al peggio",
    "example_en": "Adding insult to injury / It never rains but it pours",
    "example_it": "non c'è limite al peggio",
    "tags": [
      "idiomi"
    ],
    "context_note": "quando le cose già brutte peggiorano",
    "concept": "idiom_adding_insult"
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "Have your head in the clouds",
    "emoji": "☁️",
    "simple": "",
    "it": "essere con la testa tra le nuvole",
    "example_en": "Have your head in the clouds",
    "example_it": "essere con la testa tra le nuvole",
    "tags": [
      "idiomi"
    ],
    "context_note": "non stare attento alla realtà",
    "concept": "daydreaming"
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "Cost an arm and a leg",
    "emoji": "💸",
    "simple": "",
    "it": "costare un occhio della testa",
    "example_en": "Cost an arm and a leg",
    "example_it": "costare un occhio della testa",
    "tags": [
      "idiomi"
    ],
    "context_note": "costare moltissimo",
    "concept": "expensive"
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "Get your act together",
    "emoji": "💪",
    "simple": "",
    "it": "darsi una mossa / organizzarsi",
    "example_en": "Get your act together — that's just the way it is.",
    "example_it": "darsi una mossa — è così che stanno le cose.",
    "tags": [
      "idiomi"
    ],
    "context_note": "darsi da fare / organizzarsi",
    "concept": "get_moving"
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "Every setback has a silver lining",
    "emoji": "🌤️",
    "simple": "",
    "it": "ogni avversità porta qualcosa di buono",
    "example_en": "Every setback has a silver lining",
    "example_it": "ogni avversità porta qualcosa di buono",
    "tags": [
      "idiomi"
    ],
    "context_note": "trovare il lato positivo",
    "concept": "silver_lining"
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "Be left speechless",
    "emoji": "😲",
    "simple": "",
    "it": "restare senza parole",
    "example_en": "Be left speechless — that's just the way it is.",
    "example_it": "restare senza parole — è così che stanno le cose.",
    "tags": [
      "idiomi"
    ],
    "context_note": "restare di stucco per la sorpresa",
    "concept": "in_trouble"
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "Have the blues / Feel down",
    "emoji": "😞",
    "simple": "",
    "it": "sentirsi giù / blues",
    "example_en": "Have the blues / Feel down",
    "example_it": "sentirsi giù",
    "tags": [
      "idiomi"
    ],
    "context_note": "sentirsi triste o depresso",
    "concept": "feeling_down"
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "It's all over / We're toast",
    "emoji": "🥕",
    "simple": "",
    "it": "è fatta / siamo fritti",
    "example_en": "It's all over / We're toast",
    "example_it": "è fatta",
    "tags": [
      "idiomi"
    ],
    "context_note": "situazione senza più speranza",
    "concept": "game_over"
  },
  {
    "language": "en",
    "type": "idiom",
    "verb": "Love at first sight / Thunderstruck by love",
    "emoji": "⚡",
    "simple": "",
    "it": "colpo di fulmine",
    "example_en": "Love at first sight / Thunderstruck by love",
    "example_it": "colpo di fulmine",
    "tags": [
      "idiomi"
    ],
    "context_note": "innamorarsi all'improvviso",
    "concept": "love_at_first_sight"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Not at all / No way (mild)",
    "emoji": "🙅",
    "simple": "",
    "it": "no di certo / macché",
    "example_en": "Not at all / No way (mild)",
    "example_it": "no di certo",
    "tags": [
      "colloquiale"
    ],
    "context_note": "negazione mild, non enfatica",
    "concept": "no_way_mild"
  },
  {
    "language": "en",
    "type": "verb",
    "verb": "break",
    "emoji": "💥",
    "it": "rompere",
    "simple": "",
    "example_en": "Let's break together!",
    "example_it": "rompere insieme!",
    "tags": [
      "verbi-irregolari"
    ],
    "context_note": "",
    "concept": "verb_break"
  },
  {
    "language": "en",
    "type": "verb",
    "verb": "tear",
    "emoji": "😢",
    "it": "strappare",
    "simple": "",
    "example_en": "Let's tear together!",
    "example_it": "strappare insieme!",
    "tags": [
      "verbi-irregolari"
    ],
    "context_note": "",
    "concept": "verb_tear"
  },
  {
    "language": "en",
    "type": "verb",
    "verb": "split",
    "emoji": "✂️",
    "it": "dividere",
    "simple": "",
    "example_en": "Let's split into two teams.",
    "example_it": "Dividiamoci in due squadre.",
    "tags": [
      "verbi-irregolari"
    ],
    "context_note": "",
    "concept": "verb_split"
  },
  {
    "language": "en",
    "type": "verb",
    "verb": "burst",
    "emoji": "💢",
    "it": "scoppiare",
    "simple": "",
    "example_en": "Let's burst together!",
    "example_it": "scoppiare insieme!",
    "tags": [
      "verbi-irregolari"
    ],
    "context_note": "",
    "concept": "verb_burst"
  },
  {
    "language": "en",
    "type": "verb",
    "verb": "shrink",
    "emoji": "🔽",
    "it": "restringere",
    "simple": "",
    "example_en": "Let's shrink together!",
    "example_it": "restringere insieme!",
    "tags": [
      "verbi-irregolari"
    ],
    "context_note": "",
    "concept": "verb_shrink"
  },
  {
    "language": "en",
    "type": "verb",
    "verb": "shake",
    "emoji": "🤝",
    "it": "scuotere",
    "simple": "",
    "example_en": "Let's shake together!",
    "example_it": "scuotere insieme!",
    "tags": [
      "verbi-irregolari"
    ],
    "context_note": "",
    "concept": "verb_shake"
  },
  {
    "language": "en",
    "type": "verb",
    "verb": "strike",
    "emoji": "⚡",
    "it": "colpire",
    "simple": "",
    "example_en": "Let's strike together!",
    "example_it": "colpire insieme!",
    "tags": [
      "verbi-irregolari"
    ],
    "context_note": "",
    "concept": "verb_strike"
  },
  {
    "language": "en",
    "type": "verb",
    "verb": "bleed",
    "emoji": "🩸",
    "it": "sanguinare",
    "simple": "",
    "example_en": "Let's bleed together!",
    "example_it": "sanguinare insieme!",
    "tags": [
      "verbi-irregolari"
    ],
    "context_note": "",
    "concept": "verb_bleed"
  },
  {
    "language": "en",
    "type": "verb",
    "verb": "grind",
    "emoji": "⚙️",
    "it": "macinare",
    "simple": "",
    "example_en": "Let's grind together!",
    "example_it": "macinare insieme!",
    "tags": [
      "verbi-irregolari"
    ],
    "context_note": "",
    "concept": "verb_grind"
  },
  {
    "language": "en",
    "type": "verb",
    "verb": "throw",
    "emoji": "🎯",
    "it": "lanciare",
    "simple": "",
    "example_en": "Let's throw together!",
    "example_it": "lanciare insieme!",
    "tags": [
      "verbi-irregolari"
    ],
    "context_note": "",
    "concept": "verb_throw"
  },
  {
    "language": "en",
    "type": "verb",
    "verb": "catch",
    "emoji": "🫳",
    "it": "prendere",
    "simple": "",
    "example_en": "Let's catch together!",
    "example_it": "prendere insieme!",
    "tags": [
      "verbi-irregolari"
    ],
    "context_note": "",
    "concept": "verb_catch"
  },
  {
    "language": "en",
    "type": "verb",
    "verb": "hold",
    "emoji": "🤲",
    "it": "tenere",
    "simple": "",
    "example_en": "Let's hold together!",
    "example_it": "tenere insieme!",
    "tags": [
      "verbi-irregolari"
    ],
    "context_note": "",
    "concept": "verb_hold"
  },
  {
    "language": "en",
    "type": "verb",
    "verb": "cling",
    "emoji": "🧲",
    "it": "aggrapparsi",
    "simple": "",
    "example_en": "Let's cling together!",
    "example_it": "aggrapparsi insieme!",
    "tags": [
      "verbi-irregolari"
    ],
    "context_note": "",
    "concept": "verb_cling"
  },
  {
    "language": "en",
    "type": "verb",
    "verb": "stick",
    "emoji": "📌",
    "it": "attaccarsi",
    "simple": "",
    "example_en": "Let's stick together!",
    "example_it": "attaccarsi insieme!",
    "tags": [
      "verbi-irregolari"
    ],
    "context_note": "",
    "concept": "verb_stick"
  },
  {
    "language": "en",
    "type": "verb",
    "verb": "hang",
    "emoji": "🪝",
    "it": "appendere",
    "simple": "",
    "example_en": "Let's hang together!",
    "example_it": "appendere insieme!",
    "tags": [
      "verbi-irregolari"
    ],
    "context_note": "",
    "concept": "verb_hang"
  },
  {
    "language": "en",
    "type": "verb",
    "verb": "swing",
    "emoji": "🌊",
    "it": "oscillare",
    "simple": "",
    "example_en": "Let's swing together!",
    "example_it": "oscillare insieme!",
    "tags": [
      "verbi-irregolari"
    ],
    "context_note": "",
    "concept": "verb_swing"
  },
  {
    "language": "en",
    "type": "verb",
    "verb": "bind",
    "emoji": "🔗",
    "it": "legare",
    "simple": "",
    "example_en": "Let's bind together!",
    "example_it": "legare insieme!",
    "tags": [
      "verbi-irregolari"
    ],
    "context_note": "",
    "concept": "verb_bind"
  },
  {
    "language": "en",
    "type": "verb",
    "verb": "fling",
    "emoji": "🚀",
    "it": "scagliare",
    "simple": "",
    "example_en": "Let's fling together!",
    "example_it": "scagliare insieme!",
    "tags": [
      "verbi-irregolari"
    ],
    "context_note": "",
    "concept": "verb_fling"
  },
  {
    "language": "en",
    "type": "verb",
    "verb": "sling",
    "emoji": "🪃",
    "it": "lanciare con fionda",
    "simple": "",
    "example_en": "Let's sling together!",
    "example_it": "lanciare con fionda insieme!",
    "tags": [
      "verbi-irregolari"
    ],
    "context_note": "",
    "concept": "verb_sling"
  },
  {
    "language": "en",
    "type": "verb",
    "verb": "thrust",
    "emoji": "👊",
    "it": "spingere",
    "simple": "",
    "example_en": "Let's thrust together!",
    "example_it": "spingere insieme!",
    "tags": [
      "verbi-irregolari"
    ],
    "context_note": "",
    "concept": "verb_thrust"
  },
  {
    "language": "en",
    "type": "verb",
    "verb": "spill",
    "emoji": "💧",
    "it": "versare",
    "simple": "",
    "example_en": "Let's spill together!",
    "example_it": "versare insieme!",
    "tags": [
      "verbi-irregolari"
    ],
    "context_note": "",
    "concept": "verb_spill"
  },
  {
    "language": "en",
    "type": "verb",
    "verb": "steal",
    "emoji": "🦹",
    "it": "rubare",
    "simple": "",
    "example_en": "Let's steal together!",
    "example_it": "rubare insieme!",
    "tags": [
      "verbi-irregolari"
    ],
    "context_note": "",
    "concept": "verb_steal"
  },
  {
    "language": "en",
    "type": "verb",
    "verb": "freeze",
    "emoji": "🧊",
    "it": "congelare",
    "simple": "",
    "example_en": "Let's freeze together!",
    "example_it": "congelare insieme!",
    "tags": [
      "verbi-irregolari"
    ],
    "context_note": "",
    "concept": "verb_freeze"
  },
  {
    "language": "en",
    "type": "verb",
    "verb": "cut",
    "emoji": "✂️",
    "it": "tagliare",
    "simple": "",
    "example_en": "Let's cut together!",
    "example_it": "tagliare insieme!",
    "tags": [
      "verbi-irregolari"
    ],
    "context_note": "",
    "concept": "verb_cut"
  },
  {
    "language": "en",
    "type": "verb",
    "verb": "hit",
    "emoji": "🥊",
    "it": "colpire",
    "simple": "",
    "example_en": "Let's hit together!",
    "example_it": "colpire insieme!",
    "tags": [
      "verbi-irregolari"
    ],
    "context_note": "",
    "concept": "verb_hit"
  },
  {
    "language": "en",
    "type": "verb",
    "verb": "hurt",
    "emoji": "🤕",
    "it": "ferire",
    "simple": "",
    "example_en": "Let's hurt together!",
    "example_it": "ferire insieme!",
    "tags": [
      "verbi-irregolari"
    ],
    "context_note": "",
    "concept": "verb_hurt"
  },
  {
    "language": "en",
    "type": "verb",
    "verb": "shut",
    "emoji": "🚪",
    "it": "chiudere",
    "simple": "",
    "example_en": "Let's shut together!",
    "example_it": "chiudere insieme!",
    "tags": [
      "verbi-irregolari"
    ],
    "context_note": "",
    "concept": "verb_shut"
  },
  {
    "language": "en",
    "type": "verb",
    "verb": "put",
    "emoji": "📥",
    "it": "mettere",
    "simple": "",
    "example_en": "Let's put together!",
    "example_it": "mettere insieme!",
    "tags": [
      "verbi-irregolari"
    ],
    "context_note": "",
    "concept": "verb_put"
  },
  {
    "language": "en",
    "type": "verb",
    "verb": "ride",
    "emoji": "🚴",
    "it": "cavalcare / andare in",
    "simple": "",
    "example_en": "Let's ride together!",
    "example_it": "cavalcare insieme!",
    "tags": [
      "verbi-irregolari"
    ],
    "context_note": "",
    "concept": "verb_ride"
  },
  {
    "language": "en",
    "type": "verb",
    "verb": "drive",
    "emoji": "🚗",
    "it": "guidare",
    "simple": "",
    "example_en": "Let's drive together!",
    "example_it": "guidare insieme!",
    "tags": [
      "verbi-irregolari"
    ],
    "context_note": "",
    "concept": "verb_drive"
  },
  {
    "language": "en",
    "type": "verb",
    "verb": "fly",
    "emoji": "✈️",
    "it": "volare",
    "simple": "",
    "example_en": "Let's fly together!",
    "example_it": "volare insieme!",
    "tags": [
      "verbi-irregolari"
    ],
    "context_note": "",
    "concept": "verb_fly"
  },
  {
    "language": "en",
    "type": "verb",
    "verb": "fall",
    "emoji": "🍂",
    "it": "cadere",
    "simple": "",
    "example_en": "Let's fall together!",
    "example_it": "cadere insieme!",
    "tags": [
      "verbi-irregolari"
    ],
    "context_note": "",
    "concept": "verb_fall"
  },
  {
    "language": "en",
    "type": "verb",
    "verb": "rise",
    "emoji": "⬆️",
    "it": "salire / sorgere",
    "simple": "",
    "example_en": "Let's rise together!",
    "example_it": "salire insieme!",
    "tags": [
      "verbi-irregolari"
    ],
    "context_note": "",
    "concept": "verb_rise"
  },
  {
    "language": "en",
    "type": "verb",
    "verb": "sit",
    "emoji": "🪑",
    "it": "sedersi",
    "simple": "",
    "example_en": "Let's sit together!",
    "example_it": "sedersi insieme!",
    "tags": [
      "verbi-irregolari"
    ],
    "context_note": "",
    "concept": "verb_sit"
  },
  {
    "language": "en",
    "type": "verb",
    "verb": "stand",
    "emoji": "🧍",
    "it": "stare in piedi",
    "simple": "",
    "example_en": "Let's stand together!",
    "example_it": "stare in piedi insieme!",
    "tags": [
      "verbi-irregolari"
    ],
    "context_note": "",
    "concept": "verb_stand"
  },
  {
    "language": "en",
    "type": "verb",
    "verb": "go",
    "emoji": "🚶",
    "it": "andare",
    "simple": "",
    "example_en": "Let's go together!",
    "example_it": "andare insieme!",
    "tags": [
      "verbi-irregolari"
    ],
    "context_note": "",
    "concept": "verb_go"
  },
  {
    "language": "en",
    "type": "verb",
    "verb": "come",
    "emoji": "🏃",
    "it": "venire",
    "simple": "",
    "example_en": "Let's come together!",
    "example_it": "venire insieme!",
    "tags": [
      "verbi-irregolari"
    ],
    "context_note": "",
    "concept": "verb_come"
  },
  {
    "language": "en",
    "type": "verb",
    "verb": "run",
    "emoji": "🏃",
    "it": "correre",
    "simple": "",
    "example_en": "You can run on the sand, not by the pool!",
    "example_it": "Puoi correre sulla sabbia, non vicino alla piscina!",
    "tags": [
      "verbi-irregolari"
    ],
    "context_note": "",
    "concept": "verb_run"
  },
  {
    "language": "en",
    "type": "verb",
    "verb": "sleep",
    "emoji": "😴",
    "it": "dormire",
    "simple": "",
    "example_en": "Let's sleep together!",
    "example_it": "dormire insieme!",
    "tags": [
      "verbi-irregolari"
    ],
    "context_note": "",
    "concept": "verb_sleep"
  },
  {
    "language": "en",
    "type": "verb",
    "verb": "awake",
    "emoji": "⏰",
    "it": "svegliarsi",
    "simple": "",
    "example_en": "Let's awake together!",
    "example_it": "svegliarsi insieme!",
    "tags": [
      "verbi-irregolari"
    ],
    "context_note": "",
    "concept": "verb_awake"
  },
  {
    "language": "en",
    "type": "verb",
    "verb": "arise",
    "emoji": "🌅",
    "it": "sorgere / emergere",
    "simple": "",
    "example_en": "Let's arise together!",
    "example_it": "sorgere insieme!",
    "tags": [
      "verbi-irregolari"
    ],
    "context_note": "",
    "concept": "verb_arise"
  },
  {
    "language": "en",
    "type": "verb",
    "verb": "wear",
    "emoji": "👕",
    "it": "indossare",
    "simple": "",
    "example_en": "Let's wear together!",
    "example_it": "indossare insieme!",
    "tags": [
      "verbi-irregolari"
    ],
    "context_note": "",
    "concept": "verb_wear"
  },
  {
    "language": "en",
    "type": "verb",
    "verb": "keep",
    "emoji": "🔒",
    "it": "mantenere / tenere",
    "simple": "",
    "example_en": "Let's keep together!",
    "example_it": "mantenere insieme!",
    "tags": [
      "verbi-irregolari"
    ],
    "context_note": "",
    "concept": "verb_keep"
  },
  {
    "language": "en",
    "type": "verb",
    "verb": "leave",
    "emoji": "🚪",
    "it": "lasciare / partire",
    "simple": "",
    "example_en": "Let's leave together!",
    "example_it": "lasciare insieme!",
    "tags": [
      "verbi-irregolari"
    ],
    "context_note": "",
    "concept": "verb_leave"
  },
  {
    "language": "en",
    "type": "verb",
    "verb": "feel",
    "emoji": "❤️",
    "it": "sentire / provare",
    "simple": "",
    "example_en": "Let's feel together!",
    "example_it": "sentire insieme!",
    "tags": [
      "verbi-irregolari"
    ],
    "context_note": "",
    "concept": "verb_feel"
  },
  {
    "language": "en",
    "type": "verb",
    "verb": "deal",
    "emoji": "🤝",
    "it": "gestire / trattare",
    "simple": "",
    "example_en": "Let's deal together!",
    "example_it": "gestire insieme!",
    "tags": [
      "verbi-irregolari"
    ],
    "context_note": "",
    "concept": "verb_deal"
  },
  {
    "language": "en",
    "type": "verb",
    "verb": "eat",
    "emoji": "🍽️",
    "it": "mangiare",
    "simple": "",
    "example_en": "Let's eat together!",
    "example_it": "mangiare insieme!",
    "tags": [
      "verbi-irregolari"
    ],
    "context_note": "",
    "concept": "verb_eat"
  },
  {
    "language": "en",
    "type": "verb",
    "verb": "drink",
    "emoji": "🥤",
    "it": "bere",
    "simple": "",
    "example_en": "Let's drink together!",
    "example_it": "bere insieme!",
    "tags": [
      "verbi-irregolari"
    ],
    "context_note": "",
    "concept": "verb_drink"
  },
  {
    "language": "en",
    "type": "verb",
    "verb": "spit",
    "emoji": "🤮",
    "it": "sputare",
    "simple": "",
    "example_en": "Let's spit together!",
    "example_it": "sputare insieme!",
    "tags": [
      "verbi-irregolari"
    ],
    "context_note": "",
    "concept": "verb_spit"
  },
  {
    "language": "en",
    "type": "verb",
    "verb": "swim",
    "emoji": "🏊",
    "it": "nuotare",
    "simple": "",
    "example_en": "Only swim where you can touch the bottom!",
    "example_it": "Nuota solo dove tocchi il fondo!",
    "tags": [
      "verbi-irregolari"
    ],
    "context_note": "",
    "concept": "verb_swim"
  },
  {
    "language": "en",
    "type": "verb",
    "verb": "build",
    "emoji": "🏗️",
    "it": "costruire",
    "simple": "",
    "example_en": "Let's build together!",
    "example_it": "costruire insieme!",
    "tags": [
      "verbi-irregolari"
    ],
    "context_note": "",
    "concept": "verb_build"
  },
  {
    "language": "en",
    "type": "verb",
    "verb": "make",
    "emoji": "🔨",
    "it": "fare / costruire",
    "simple": "",
    "example_en": "Let's make together!",
    "example_it": "fare insieme!",
    "tags": [
      "verbi-irregolari"
    ],
    "context_note": "",
    "concept": "verb_make"
  },
  {
    "language": "en",
    "type": "verb",
    "verb": "draw",
    "emoji": "✏️",
    "it": "disegnare",
    "simple": "",
    "example_en": "Let's draw together!",
    "example_it": "disegnare insieme!",
    "tags": [
      "verbi-irregolari"
    ],
    "context_note": "",
    "concept": "verb_draw"
  },
  {
    "language": "en",
    "type": "verb",
    "verb": "grow",
    "emoji": "🌱",
    "it": "crescere",
    "simple": "",
    "example_en": "Let's grow together!",
    "example_it": "crescere insieme!",
    "tags": [
      "verbi-irregolari"
    ],
    "context_note": "",
    "concept": "verb_grow"
  },
  {
    "language": "en",
    "type": "verb",
    "verb": "buy",
    "emoji": "🛍️",
    "it": "comprare",
    "simple": "",
    "example_en": "Let's buy together!",
    "example_it": "comprare insieme!",
    "tags": [
      "verbi-irregolari"
    ],
    "context_note": "",
    "concept": "verb_buy"
  },
  {
    "language": "en",
    "type": "verb",
    "verb": "sell",
    "emoji": "💰",
    "it": "vendere",
    "simple": "",
    "example_en": "Let's sell together!",
    "example_it": "vendere insieme!",
    "tags": [
      "verbi-irregolari"
    ],
    "context_note": "",
    "concept": "verb_sell"
  },
  {
    "language": "en",
    "type": "verb",
    "verb": "pay",
    "emoji": "💳",
    "it": "pagare",
    "simple": "",
    "example_en": "Let's pay together!",
    "example_it": "pagare insieme!",
    "tags": [
      "verbi-irregolari"
    ],
    "context_note": "",
    "concept": "verb_pay"
  },
  {
    "language": "en",
    "type": "verb",
    "verb": "lend",
    "emoji": "🤲",
    "it": "prestare",
    "simple": "",
    "example_en": "Let's lend together!",
    "example_it": "prestare insieme!",
    "tags": [
      "verbi-irregolari"
    ],
    "context_note": "",
    "concept": "verb_lend"
  },
  {
    "language": "en",
    "type": "verb",
    "verb": "send",
    "emoji": "📨",
    "it": "mandare",
    "simple": "",
    "example_en": "Let's send together!",
    "example_it": "mandare insieme!",
    "tags": [
      "verbi-irregolari"
    ],
    "context_note": "",
    "concept": "verb_send"
  },
  {
    "language": "en",
    "type": "verb",
    "verb": "spend",
    "emoji": "💸",
    "it": "spendere / trascorrere",
    "simple": "",
    "example_en": "Let's spend together!",
    "example_it": "spendere insieme!",
    "tags": [
      "verbi-irregolari"
    ],
    "context_note": "",
    "concept": "verb_spend"
  },
  {
    "language": "en",
    "type": "verb",
    "verb": "cost",
    "emoji": "🏷️",
    "it": "costare",
    "simple": "",
    "example_en": "Let's cost together!",
    "example_it": "costare insieme!",
    "tags": [
      "verbi-irregolari"
    ],
    "context_note": "",
    "concept": "verb_cost"
  },
  {
    "language": "en",
    "type": "verb",
    "verb": "take",
    "emoji": "🤏",
    "it": "prendere",
    "simple": "",
    "example_en": "Let's take together!",
    "example_it": "prendere insieme!",
    "tags": [
      "verbi-irregolari"
    ],
    "context_note": "",
    "concept": "verb_take"
  },
  {
    "language": "en",
    "type": "verb",
    "verb": "give",
    "emoji": "🎁",
    "it": "dare",
    "simple": "",
    "example_en": "Let's give together!",
    "example_it": "dare insieme!",
    "tags": [
      "verbi-irregolari"
    ],
    "context_note": "",
    "concept": "verb_give"
  },
  {
    "language": "en",
    "type": "verb",
    "verb": "bring",
    "emoji": "📦",
    "it": "portare",
    "simple": "",
    "example_en": "Let's bring together!",
    "example_it": "portare insieme!",
    "tags": [
      "verbi-irregolari"
    ],
    "context_note": "",
    "concept": "verb_bring"
  },
  {
    "language": "en",
    "type": "verb",
    "verb": "know",
    "emoji": "🧠",
    "it": "sapere / conoscere",
    "simple": "",
    "example_en": "Let's know together!",
    "example_it": "sapere insieme!",
    "tags": [
      "verbi-irregolari"
    ],
    "context_note": "",
    "concept": "verb_know"
  },
  {
    "language": "en",
    "type": "verb",
    "verb": "think",
    "emoji": "💭",
    "it": "pensare",
    "simple": "",
    "example_en": "Let's think together!",
    "example_it": "pensare insieme!",
    "tags": [
      "verbi-irregolari"
    ],
    "context_note": "",
    "concept": "verb_think"
  },
  {
    "language": "en",
    "type": "verb",
    "verb": "understand",
    "emoji": "💡",
    "it": "capire",
    "simple": "",
    "example_en": "Do you understand the rules of the game?",
    "example_it": "Capisci le regole del gioco?",
    "tags": [
      "verbi-irregolari"
    ],
    "context_note": "",
    "concept": "verb_understand"
  },
  {
    "language": "en",
    "type": "verb",
    "verb": "swear",
    "emoji": "🤬",
    "it": "giurare / imprecare",
    "simple": "",
    "example_en": "Let's swear together!",
    "example_it": "giurare insieme!",
    "tags": [
      "verbi-irregolari"
    ],
    "context_note": "",
    "concept": "verb_swear"
  },
  {
    "language": "en",
    "type": "verb",
    "verb": "seek",
    "emoji": "🔍",
    "it": "cercare",
    "simple": "",
    "example_en": "Let's seek together!",
    "example_it": "cercare insieme!",
    "tags": [
      "verbi-irregolari"
    ],
    "context_note": "",
    "concept": "verb_seek"
  },
  {
    "language": "en",
    "type": "verb",
    "verb": "find",
    "emoji": "🎯",
    "it": "trovare",
    "simple": "",
    "example_en": "Let's find together!",
    "example_it": "trovare insieme!",
    "tags": [
      "verbi-irregolari"
    ],
    "context_note": "",
    "concept": "verb_find"
  },
  {
    "language": "en",
    "type": "verb",
    "verb": "lose",
    "emoji": "😞",
    "it": "perdere",
    "simple": "",
    "example_en": "Let's lose together!",
    "example_it": "perdere insieme!",
    "tags": [
      "verbi-irregolari"
    ],
    "context_note": "",
    "concept": "verb_lose"
  },
  {
    "language": "en",
    "type": "verb",
    "verb": "win",
    "emoji": "🏆",
    "it": "vincere",
    "simple": "",
    "example_en": "Play fair — winning isn't everything!",
    "example_it": "Gioca lealmente — vincere non è tutto!",
    "tags": [
      "verbi-irregolari"
    ],
    "context_note": "",
    "concept": "verb_win"
  },
  {
    "language": "en",
    "type": "verb",
    "verb": "meet",
    "emoji": "👋",
    "it": "incontrare",
    "simple": "",
    "example_en": "Let's meet together!",
    "example_it": "incontrare insieme!",
    "tags": [
      "verbi-irregolari"
    ],
    "context_note": "",
    "concept": "verb_meet"
  },
  {
    "language": "en",
    "type": "verb",
    "verb": "learn",
    "emoji": "📚",
    "it": "imparare",
    "simple": "",
    "example_en": "Today we learn something new about the ocean!",
    "example_it": "Oggi impariamo qualcosa di nuovo sull'oceano!",
    "tags": [
      "verbi-irregolari"
    ],
    "context_note": "",
    "concept": "verb_learn"
  },
  {
    "language": "en",
    "type": "verb",
    "verb": "teach",
    "emoji": "👩‍🏫",
    "it": "insegnare",
    "simple": "",
    "example_en": "Today I'll teach you a new beach game.",
    "example_it": "Oggi vi insegnerò un nuovo gioco in spiaggia.",
    "tags": [
      "verbi-irregolari"
    ],
    "context_note": "",
    "concept": "verb_teach"
  },
  {
    "language": "en",
    "type": "verb",
    "verb": "mean",
    "emoji": "❓",
    "it": "significare",
    "simple": "",
    "example_en": "Let's mean together!",
    "example_it": "significare insieme!",
    "tags": [
      "verbi-irregolari"
    ],
    "context_note": "",
    "concept": "verb_mean"
  },
  {
    "language": "en",
    "type": "verb",
    "verb": "forgive",
    "emoji": "🕊️",
    "it": "perdonare",
    "simple": "",
    "example_en": "Let's forgive together!",
    "example_it": "perdonare insieme!",
    "tags": [
      "verbi-irregolari"
    ],
    "context_note": "",
    "concept": "verb_forgive"
  },
  {
    "language": "en",
    "type": "verb",
    "verb": "say",
    "emoji": "💬",
    "it": "dire",
    "simple": "",
    "example_en": "Let's say together!",
    "example_it": "dire insieme!",
    "tags": [
      "verbi-irregolari"
    ],
    "context_note": "",
    "concept": "verb_say"
  },
  {
    "language": "en",
    "type": "verb",
    "verb": "tell",
    "emoji": "📢",
    "it": "raccontare / dire",
    "simple": "",
    "example_en": "Let's tell together!",
    "example_it": "raccontare insieme!",
    "tags": [
      "verbi-irregolari"
    ],
    "context_note": "",
    "concept": "verb_tell"
  },
  {
    "language": "en",
    "type": "verb",
    "verb": "speak",
    "emoji": "🗣️",
    "it": "parlare",
    "simple": "",
    "example_en": "Let's speak together!",
    "example_it": "parlare insieme!",
    "tags": [
      "verbi-irregolari"
    ],
    "context_note": "",
    "concept": "verb_speak"
  },
  {
    "language": "en",
    "type": "verb",
    "verb": "hear",
    "emoji": "👂",
    "it": "sentire / udire",
    "simple": "",
    "example_en": "Let's hear together!",
    "example_it": "sentire insieme!",
    "tags": [
      "verbi-irregolari"
    ],
    "context_note": "",
    "concept": "verb_hear"
  },
  {
    "language": "en",
    "type": "verb",
    "verb": "begin",
    "emoji": "🚦",
    "it": "iniziare",
    "simple": "",
    "example_en": "Let's begin together!",
    "example_it": "iniziare insieme!",
    "tags": [
      "verbi-irregolari"
    ],
    "context_note": "",
    "concept": "verb_begin"
  },
  {
    "language": "en",
    "type": "verb",
    "verb": "become",
    "emoji": "🦋",
    "it": "diventare",
    "simple": "",
    "example_en": "Let's become together!",
    "example_it": "diventare insieme!",
    "tags": [
      "verbi-irregolari"
    ],
    "context_note": "",
    "concept": "verb_become"
  },
  {
    "language": "en",
    "type": "verb",
    "verb": "get",
    "emoji": "✅",
    "it": "ottenere / diventare",
    "simple": "",
    "example_en": "Let's get together!",
    "example_it": "ottenere insieme!",
    "tags": [
      "verbi-irregolari"
    ],
    "context_note": "",
    "concept": "verb_get"
  },
  {
    "language": "en",
    "type": "verb",
    "verb": "have",
    "emoji": "🏠",
    "it": "avere",
    "simple": "",
    "example_en": "Let's have together!",
    "example_it": "avere insieme!",
    "tags": [
      "verbi-irregolari"
    ],
    "context_note": "",
    "concept": "verb_have"
  },
  {
    "language": "en",
    "type": "verb",
    "verb": "be",
    "emoji": "💫",
    "it": "essere",
    "simple": "",
    "example_en": "Let's be together!",
    "example_it": "essere insieme!",
    "tags": [
      "verbi-irregolari"
    ],
    "context_note": "",
    "concept": "verb_be"
  },
  {
    "language": "en",
    "type": "verb",
    "verb": "do",
    "emoji": "✔️",
    "it": "fare",
    "simple": "",
    "example_en": "Let's do together!",
    "example_it": "fare insieme!",
    "tags": [
      "verbi-irregolari"
    ],
    "context_note": "",
    "concept": "verb_do"
  },
  {
    "language": "en",
    "type": "verb",
    "verb": "show",
    "emoji": "🎭",
    "it": "mostrare",
    "simple": "",
    "example_en": "Let's show together!",
    "example_it": "mostrare insieme!",
    "tags": [
      "verbi-irregolari"
    ],
    "context_note": "",
    "concept": "verb_show"
  },
  {
    "language": "en",
    "type": "verb",
    "verb": "hide",
    "emoji": "🙈",
    "it": "nascondere",
    "simple": "",
    "example_en": "Let's hide together!",
    "example_it": "nascondere insieme!",
    "tags": [
      "verbi-irregolari"
    ],
    "context_note": "",
    "concept": "verb_hide"
  },
  {
    "language": "en",
    "type": "verb",
    "verb": "choose",
    "emoji": "🎲",
    "it": "scegliere",
    "simple": "",
    "example_en": "Let's choose together!",
    "example_it": "scegliere insieme!",
    "tags": [
      "verbi-irregolari"
    ],
    "context_note": "",
    "concept": "verb_choose"
  },
  {
    "language": "en",
    "type": "verb",
    "verb": "forget",
    "emoji": "💭",
    "it": "dimenticare",
    "simple": "",
    "example_en": "Let's forget together!",
    "example_it": "dimenticare insieme!",
    "tags": [
      "verbi-irregolari"
    ],
    "context_note": "",
    "concept": "verb_forget"
  },
  {
    "language": "en",
    "type": "verb",
    "verb": "lay",
    "emoji": "🛏️",
    "it": "posare / deporre",
    "simple": "",
    "example_en": "Let's lay together!",
    "example_it": "posare insieme!",
    "tags": [
      "verbi-irregolari"
    ],
    "context_note": "",
    "concept": "verb_lay"
  },
  {
    "language": "en",
    "type": "verb",
    "verb": "lie",
    "emoji": "🛋️",
    "it": "stendersi / mentire",
    "simple": "",
    "example_en": "Let's lie together!",
    "example_it": "stendersi insieme!",
    "tags": [
      "verbi-irregolari"
    ],
    "context_note": "",
    "concept": "verb_lie"
  },
  {
    "language": "en",
    "type": "verb",
    "verb": "light",
    "emoji": "💡",
    "it": "accendere",
    "simple": "",
    "example_en": "Let's light together!",
    "example_it": "accendere insieme!",
    "tags": [
      "verbi-irregolari"
    ],
    "context_note": "",
    "concept": "verb_light"
  },
  {
    "language": "en",
    "type": "verb",
    "verb": "set",
    "emoji": "⚙️",
    "it": "impostare / fissare",
    "simple": "",
    "example_en": "Let's set together!",
    "example_it": "impostare insieme!",
    "tags": [
      "verbi-irregolari"
    ],
    "context_note": "",
    "concept": "verb_set"
  },
  {
    "language": "en",
    "type": "verb",
    "verb": "upset",
    "emoji": "😤",
    "it": "turbare / sconvolgere",
    "simple": "",
    "example_en": "Let's upset together!",
    "example_it": "turbare insieme!",
    "tags": [
      "verbi-irregolari"
    ],
    "context_note": "",
    "concept": "verb_upset"
  },
  {
    "language": "en",
    "type": "verb",
    "verb": "bet",
    "emoji": "🎰",
    "it": "scommettere",
    "simple": "",
    "example_en": "Let's bet together!",
    "example_it": "scommettere insieme!",
    "tags": [
      "verbi-irregolari"
    ],
    "context_note": "",
    "concept": "verb_bet"
  },
  {
    "language": "en",
    "type": "verb",
    "verb": "cast",
    "emoji": "🎣",
    "it": "gettare / lanciare",
    "simple": "",
    "example_en": "Let's cast together!",
    "example_it": "gettare insieme!",
    "tags": [
      "verbi-irregolari"
    ],
    "context_note": "",
    "concept": "verb_cast"
  },
  {
    "language": "en",
    "type": "verb",
    "verb": "overcome",
    "emoji": "💪",
    "it": "superare",
    "simple": "",
    "example_en": "Let's overcome together!",
    "example_it": "superare insieme!",
    "tags": [
      "verbi-irregolari"
    ],
    "context_note": "",
    "concept": "verb_overcome"
  },
  {
    "language": "en",
    "type": "verb",
    "verb": "overtake",
    "emoji": "🏎️",
    "it": "sorpassare",
    "simple": "",
    "example_en": "Let's overtake together!",
    "example_it": "sorpassare insieme!",
    "tags": [
      "verbi-irregolari"
    ],
    "context_note": "",
    "concept": "verb_overtake"
  },
  {
    "language": "en",
    "type": "verb",
    "verb": "withdraw",
    "emoji": "🏧",
    "it": "ritirare / prelevare",
    "simple": "",
    "example_en": "Let's withdraw together!",
    "example_it": "ritirare insieme!",
    "tags": [
      "verbi-irregolari"
    ],
    "context_note": "",
    "concept": "verb_withdraw"
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Anyone get stung by a jellyfish?",
    "emoji": "📝",
    "simple": "",
    "it": "Qualcuno è stato punto da una medusa?",
    "example_en": "Anyone get stung by a jellyfish?",
    "example_it": "Qualcuno è stato punto da una medusa?",
    "tags": [
      "mare"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Buddy up — no one swims alone!",
    "emoji": "📝",
    "simple": "",
    "it": "A coppie — nessuno nuota da solo!",
    "example_en": "Buddy up — no one swims alone!",
    "example_it": "A coppie — nessuno nuota da solo!",
    "tags": [
      "mare"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Can you float on your back?",
    "emoji": "📝",
    "simple": "",
    "it": "Sai fare il morto a galla?",
    "example_en": "Can you float on your back?",
    "example_it": "Sai fare il morto a galla?",
    "tags": [
      "mare"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Cannonball!",
    "emoji": "📝",
    "simple": "",
    "it": "Bomba!",
    "example_en": "Cannonball!",
    "example_it": "Bomba!",
    "tags": [
      "mare"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Check the flag before you go in!",
    "emoji": "📝",
    "simple": "",
    "it": "Controlla la bandiera prima di entrare!",
    "example_en": "Check the flag before you go in!",
    "example_it": "Controlla la bandiera prima di entrare!",
    "tags": [
      "mare"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Did you lose anything in the water?",
    "emoji": "📝",
    "simple": "",
    "it": "Hai perso qualcosa in acqua?",
    "example_en": "Did you lose anything in the water?",
    "example_it": "Hai perso qualcosa in acqua?",
    "tags": [
      "mare"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Dive in!",
    "emoji": "📝",
    "simple": "",
    "it": "Buttati!",
    "example_en": "Dive in!",
    "example_it": "Buttati!",
    "tags": [
      "mare"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Don't run by the pool!",
    "emoji": "📝",
    "simple": "",
    "it": "Non correre in piscina!",
    "example_en": "Don't run by the pool!",
    "example_it": "Non correre in piscina!",
    "tags": [
      "mare"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Hold your breath!",
    "emoji": "📝",
    "simple": "",
    "it": "Tieni il respiro!",
    "example_en": "Hold your breath!",
    "example_it": "Tieni il respiro!",
    "tags": [
      "mare"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "How was the water?",
    "emoji": "📝",
    "simple": "",
    "it": "Com'era l'acqua?",
    "example_en": "How was the water?",
    "example_it": "Com'era l'acqua?",
    "tags": [
      "mare"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "How's good?",
    "emoji": "📝",
    "simple": "",
    "it": "Come va?",
    "example_en": "How's good?",
    "example_it": "Come va?",
    "tags": [
      "colloquiale"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Last one in is a rotten egg!",
    "emoji": "📝",
    "simple": "",
    "it": "L'ultimo che entra è un uovo marcio!",
    "example_en": "Last one in is a rotten egg!",
    "example_it": "L'ultimo che entra è un uovo marcio!",
    "tags": [
      "mare"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Let's do a head count!",
    "emoji": "📝",
    "simple": "",
    "it": "Contiamoci tutti!",
    "example_en": "Let's do a head count!",
    "example_it": "Contiamoci tutti!",
    "tags": [
      "mare"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Let's rinse off in the shower!",
    "emoji": "📝",
    "simple": "",
    "it": "Andiamo a sciacquarci alla doccia!",
    "example_en": "Let's rinse off in the shower!",
    "example_it": "Andiamo a sciacquarci alla doccia!",
    "tags": [
      "mare"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Let's warm up first!",
    "emoji": "📝",
    "simple": "",
    "it": "Prima facciamo riscaldamento!",
    "example_en": "Let's warm up first!",
    "example_it": "Prima facciamo riscaldamento!",
    "tags": [
      "mare"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "No swimming right after eating!",
    "emoji": "📝",
    "simple": "",
    "it": "Non nuotate subito dopo aver mangiato!",
    "example_en": "No swimming right after eating!",
    "example_it": "Non nuotate subito dopo aver mangiato!",
    "tags": [
      "mare"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Put your sunscreen on!",
    "emoji": "📝",
    "simple": "",
    "it": "Metti la crema solare!",
    "example_en": "Put your sunscreen on!",
    "example_it": "Metti la crema solare!",
    "tags": [
      "mare"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Race you to the buoy!",
    "emoji": "📝",
    "simple": "",
    "it": "Chi arriva primo al galleggiante!",
    "example_en": "Race you to the buoy!",
    "example_it": "Chi arriva primo al galleggiante!",
    "tags": [
      "mare"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Splash fight!",
    "emoji": "📝",
    "simple": "",
    "it": "Battaglia d'acqua!",
    "example_en": "Splash fight!",
    "example_it": "Battaglia d'acqua!",
    "tags": [
      "mare"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Stay in the shallow end!",
    "emoji": "📝",
    "simple": "",
    "it": "Resta nella parte bassa!",
    "example_en": "Stay in the shallow end!",
    "example_it": "Resta nella parte bassa!",
    "tags": [
      "mare"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "The sea is really choppy today.",
    "emoji": "📝",
    "simple": "",
    "it": "Il mare è molto mosso oggi.",
    "example_en": "The sea is really choppy today.",
    "example_it": "Il mare è molto mosso oggi.",
    "tags": [
      "mare"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "The water's lovely!",
    "emoji": "📝",
    "simple": "",
    "it": "L'acqua è meravigliosa!",
    "example_en": "The water's lovely!",
    "example_it": "L'acqua è meravigliosa!",
    "tags": [
      "mare"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Time to reapply sunscreen!",
    "emoji": "📝",
    "simple": "",
    "it": "Ora rimetti la crema solare!",
    "example_en": "Time to reapply sunscreen!",
    "example_it": "Ora rimetti la crema solare!",
    "tags": [
      "mare"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Towel off before you catch a cold!",
    "emoji": "📝",
    "simple": "",
    "it": "Asciugati o prendi il raffreddore!",
    "example_en": "Towel off before you catch a cold!",
    "example_it": "Asciugati o prendi il raffreddore!",
    "tags": [
      "mare"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Watch out for the waves!",
    "emoji": "📝",
    "simple": "",
    "it": "Attenzione alle onde!",
    "example_en": "Watch out for the waves!",
    "example_it": "Attenzione alle onde!",
    "tags": [
      "mare"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Wet your feet first!",
    "emoji": "📝",
    "simple": "",
    "it": "Bagnati i piedi prima!",
    "example_en": "Wet your feet first!",
    "example_it": "Bagnati i piedi prima!",
    "tags": [
      "mare"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "Who's hungry after all that swimming?",
    "emoji": "📝",
    "simple": "",
    "it": "Chi ha fame dopo tutta quella nuotata?",
    "example_en": "Who's hungry after all that swimming?",
    "example_it": "Chi ha fame dopo tutta quella nuotata?",
    "tags": [
      "mare"
    ],
    "context_note": "",
    "concept": ""
  },
  {
    "language": "en",
    "type": "colloquial",
    "verb": "You've caught a bit of sun!",
    "emoji": "📝",
    "simple": "",
    "it": "Ti sei preso un po' di sole!",
    "example_en": "You've caught a bit of sun!",
    "example_it": "Ti sei preso un po' di sole!",
    "tags": [
      "mare"
    ],
    "context_note": "",
    "concept": ""
  },
  { verb: "move on", emoji: "➡️", simple: "go forward / leave behind", it: "andare avanti / voltare pagina", type: "phrasal", language: "en", example_en: "It's time to move on.", example_it: "È ora di andare avanti.", tags: [], context_note: "" },
  { verb: "go on", emoji: "▶️", simple: "continue / happen", it: "continuare / succedere", type: "phrasal", language: "en", example_en: "Go on, I'm listening.", example_it: "Continua, ti ascolto.", tags: [], context_note: "" },
  { verb: "put up with", emoji: "😤", simple: "tolerate / stand", it: "sopportare / tollerare", type: "phrasal", language: "en", example_en: "I can't put up with this anymore.", example_it: "Non posso più sopportarlo.", tags: [], context_note: "" },
  { verb: "stand out", emoji: "⭐", simple: "be different / shine", it: "distinguersi / risaltare", type: "phrasal", language: "en", example_en: "She really stands out in the group.", example_it: "Si distingue davvero nel gruppo.", tags: [], context_note: "" },
  { verb: "blow up", emoji: "💥", simple: "explode / lose temper", it: "esplodere / arrabbiarsi", type: "phrasal", language: "en", example_en: "He blew up at me for no reason.", example_it: "Si è arrabbiato con me senza motivo.", tags: [], context_note: "" },
  { verb: "manage to", emoji: "✅", it: "riuscire a", type: "verb", language: "en", example_en: "I managed to finish it on time.", example_it: "Sono riuscito a finirlo in tempo.", tags: [], context_note: "manage to + V infinitive" },
  { verb: "seem / appear to", emoji: "🤔", it: "sembrare", type: "verb", language: "en", example_en: "He seems to be tired.", example_it: "Sembra stanco.", tags: [], context_note: "seem/appear to + V infinitive" },
  { verb: "there's no point in", emoji: "🚫", it: "non ha senso", type: "idiom", language: "en", example_en: "There's no point in worrying.", example_it: "Non ha senso preoccuparsi.", tags: [], context_note: "there's no point in + V-ing" },
  { verb: "fall behind", emoji: "🐢", simple: "lag / lose ground", it: "rimanere indietro", type: "phrasal", language: "en", example_en: "I'm falling behind in my studies.", example_it: "Sto rimanendo indietro negli studi.", tags: [], context_note: "" },
  { verb: "stick to", emoji: "📌", simple: "follow / keep to", it: "attenersi a / rispettare", type: "phrasal", language: "en", example_en: "I'm trying to stick to my plan.", example_it: "Sto cercando di attenermi al mio piano.", tags: [], context_note: "" },
  { verb: "look down on", emoji: "👆", simple: "disrespect / judge", it: "guardare dall'alto in basso", type: "phrasal", language: "en", example_en: "Don't look down on people.", example_it: "Non guardare le persone dall'alto in basso.", tags: [], context_note: "" },
  { verb: "be meant to", emoji: "🎯", it: "essere fatto per / essere destinato a", type: "verb", language: "en", example_en: "This place is meant to be quiet.", example_it: "Questo posto è pensato per essere tranquillo.", tags: [], context_note: "be meant to + V infinitive" },
  { verb: "be supposed to", emoji: "📋", it: "dovere / essere previsto", type: "verb", language: "en", example_en: "I was supposed to call her.", example_it: "Dovevo chiamarla.", tags: [], context_note: "be supposed to + V infinitive" }
];
