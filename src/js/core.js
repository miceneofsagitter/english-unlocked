      function escHtml(s) {
        return String(s || '')
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;')
      }

      // ============================================================
      // VOCABOLARIO — caricato da src/data/vocabulary.js
      // ============================================================
      let currentLang = localStorage.getItem('eu_lang') || 'en'
      let ALL_VOCAB =
        typeof ALL_VOCAB_FOR_EXERCISES !== 'undefined'
          ? ALL_VOCAB_FOR_EXERCISES.filter((v) => v.language === currentLang)
          : []
      let activeFilter = 'all'
      let activeSearch = ''
      let vocabPage = 0
      let _pendingConcept = null  // usato da navigateToLangConcept per highlight post-switchLang
      let _pendingVerb = null     // usato da navigateToLangVerb per highlight post-switchLang
      const VOCAB_PAGE_SIZE = 6
      let tensesContrast = 'all'
      let zoomLevel = parseFloat(localStorage.getItem('eu_zoom')) || 1.0
      document.body.style.zoom = zoomLevel

      function setZoom(level) {
        zoomLevel = level
        localStorage.setItem('eu_zoom', zoomLevel)
        document.body.style.zoom = zoomLevel
        document.querySelectorAll('.zoom-btn').forEach((btn) => btn.classList.remove('active'))
        event.target.classList.add('active')
      }

      function switchLang(lang) {
        if (quizRunning) {
          stopQuiz()
          const flag =
            { en: '🇬🇧 EN', es: '🇪🇸 ES', fr: '🇫🇷 FR' }[lang] ||
            lang.toUpperCase()
          const notice = document.getElementById('quizLangNotice')
          if (notice) {
            notice.innerHTML = `⚠️ Quiz interrotto<br>Lingua cambiata a <strong>${flag}</strong> — inizia un nuovo quiz!`
            notice.style.display = 'block'
          }
          document.getElementById('quizStartCard').style.display = 'block'
          document.getElementById('quizEndCard').style.display = 'none'
        }
        currentLang = lang
        localStorage.setItem('eu_lang', lang)
        ALL_VOCAB =
          typeof ALL_VOCAB_FOR_EXERCISES !== 'undefined'
            ? ALL_VOCAB_FOR_EXERCISES.filter((v) => v.language === lang)
            : []
        learned = new Set(
          JSON.parse(localStorage.getItem('eu_learned_' + lang) || '[]'),
        )
        stats = JSON.parse(localStorage.getItem('eu_stats_' + lang) || '{}')
        vocabIds = JSON.parse(
          localStorage.getItem('eu_vocab_ids_' + lang) || 'null',
        )
        activeFilter = 'all'
        activeSearch = ''
        document
          .querySelectorAll('#vocabFilters .filter-pill')
          .forEach((p) => p.classList.remove('active'))
        const firstPill = document.querySelector('#vocabFilters .filter-pill')
        if (firstPill) firstPill.classList.add('active')
        const vsearch = document.getElementById('vocabSearch')
        if (vsearch) {
          vsearch.value = ''
          vsearch.placeholder =
            SEARCH_PLACEHOLDER[lang] || SEARCH_PLACEHOLDER.en
        }
        if (document.getElementById('searchClear'))
          document.getElementById('searchClear').style.display = 'none'
        updateStatsUI()
        updateFilterPills()
        updateQuizStartUI()
        updateTenseLabels()
        renderVocabGrid('all')
        renderTensesGrid(currentTenseFilter)
        renderMiniclub()
        if (miniclubMode === 'practice') renderPracticeCard()
        document
          .querySelectorAll('.lang-btn')
          .forEach((b) => b.classList.toggle('active', b.dataset.lang === lang))
        // Update lang toggle text (mobile)
        const flags = { en: '🇬🇧 EN', es: '🇪🇸 ES', fr: '🇫🇷 FR' }
        const togText = document.getElementById('langToggleText')
        if (togText) togText.textContent = flags[lang] || lang
      }

      const SEARCH_PLACEHOLDER = {
        en: '🔍  Cerca in italiano o in inglese...',
        es: '🔍  Cerca in italiano o in spagnolo...',
        fr: '🔍  Cerca in italiano o in francese...',
      }

      const QUIZ_SUBTITLE = {
        en: 'Come si dice in inglese?',
        es: 'Come si dice in spagnolo?',
        fr: 'Come si dice in francese?',
      }

      function updateFilterPills() {
        const pills = document.querySelectorAll('#vocabFilters .filter-pill')
        pills.forEach((pill) => {
          const handler = pill.getAttribute('onclick') || ''
          const m = handler.match(/filterVocab\('([^']+)'/)
          if (!m) return
          const f = m[1]
          if (f === 'all') {
            pill.style.display = ''
            return
          }
          const has = ALL_VOCAB.some(
            (v) => v.type === f || (v.tags && v.tags.includes(f)),
          )
          pill.style.display = has ? '' : 'none'
          if (!has && activeFilter === f) {
            activeFilter = 'all'
            pills.forEach((p) => p.classList.remove('active'))
            document
              .querySelector('#vocabFilters .filter-pill')
              .classList.add('active')
          }
        })
      }

      function updateQuizStartUI() {
        const btn = document.getElementById('quizStartBtn')
        const msg = document.getElementById('quizNoVocabMsg')
        if (!btn) return
        if (ALL_VOCAB.length < 4) {
          btn.disabled = true
          btn.style.opacity = '0.4'
          if (msg) msg.style.display = 'block'
        } else {
          btn.disabled = false
          btn.style.opacity = ''
          if (msg) msg.style.display = 'none'
        }
      }

      const TENSE_FILTER_LABELS = {
        en: {
          all: 'Tutti',
          past: '⏮️ Past',
          present: '⏱️ Present',
          future: '⏭️ Future',
          conditional: '❓ Conditional',
        },
        fr: {
          all: 'Tous',
          past: '⏮️ Passé',
          present: '⏱️ Présent',
          future: '⏭️ Futur',
          conditional: '❓ Conditionnel',
        },
        es: {
          all: 'Todos',
          past: '⏮️ Pasado',
          present: '⏱️ Presente',
          future: '⏭️ Futuro',
          conditional: '❓ Condicional',
        },
      }
      const CONTRAST_LABELS = {
        en: {
          all: 'Tutti misti',
          pp: 'PP vs PS',
          cont: 'Cont. vs Simple',
          used: 'Used to',
          future: 'Future',
          cond: 'Conditional',
        },
        fr: {
          all: 'Mélangés',
          pp: 'PC vs Imparfait',
          cont: 'Présent Cont.',
          future: 'Futur',
          cond: 'Conditionnel',
        },
        es: {
          all: 'Mezclados',
          pp: 'Indef. vs Imp.',
          cont: 'Presente Cont.',
          future: 'Futuro',
          cond: 'Condicional',
        },
      }

      function updateTenseLabels() {
        const tfl = TENSE_FILTER_LABELS[currentLang] || TENSE_FILTER_LABELS.en
        const cl = CONTRAST_LABELS[currentLang] || CONTRAST_LABELS.en

        // Pill schede (tg-*): derivate dai gruppi effettivamente presenti nei dati
        const tenseGrps = [...new Set(getTenses().map((t) => t.grp))]
        const tfContainer = document.getElementById('tenseFilterPills')
        if (tfContainer) {
          tfContainer.innerHTML = ''
          const makeBtn = (val, label, active, onclick) => {
            const b = document.createElement('button')
            b.className = 'contrast-pill' + (active ? ' active' : '')
            b.textContent = label
            b.onclick = onclick
            return b
          }
          const allBtn = makeBtn(
            'all',
            tfl.all,
            currentTenseFilter === 'all',
            function () {
              filterTenses('all', this)
            },
          )
          tfContainer.appendChild(allBtn)
          tenseGrps.forEach((grp) => {
            const label = tfl[grp] || grp
            const b = makeBtn(
              grp,
              label,
              currentTenseFilter === grp,
              function () {
                filterTenses(grp, this)
              },
            )
            tfContainer.appendChild(b)
          })
        }

        // Pill contrasto (cp-*): derivate dai gruppi effettivamente presenti negli esercizi
        const exGrps = [...new Set(getTensesEx().map((e) => e.grp))]
        const cpContainer = document.getElementById('contrastPills')
        if (cpContainer) {
          cpContainer.innerHTML = ''
          const allCpBtn = document.createElement('button')
          allCpBtn.className =
            'contrast-pill' + (tensesContrast === 'all' ? ' active' : '')
          allCpBtn.textContent = cl.all
          allCpBtn.onclick = function () {
            setContrast('all', this)
          }
          cpContainer.appendChild(allCpBtn)
          exGrps.forEach((grp) => {
            const label = cl[grp] || grp
            const b = document.createElement('button')
            b.className =
              'contrast-pill' + (tensesContrast === grp ? ' active' : '')
            b.textContent = label
            b.onclick = function () {
              setContrast(grp, this)
            }
            cpContainer.appendChild(b)
          })
        }
      }

      // LEGACY — mantenuto solo per compatibilità vecchi dati
      const PV = [
        {
          verb: 'calm down',
          it: 'calmarsi / calmare',
          example_en: "Calm down, everything's okay!",
          example_it: 'Calmati, va tutto bene!',
          tags: ['bambini', 'comportamento'],
          type: 'phrasal',
        },
        {
          verb: 'join in',
          it: 'partecipare, unirsi',
          example_en: "Come on, join in! It's fun!",
          example_it: 'Dai, unisciti! È divertente!',
          tags: ['bambini', 'attività'],
          type: 'phrasal',
        },
        {
          verb: 'show off',
          it: 'mettersi in mostra',
          example_en: "He's just showing off in front of the others.",
          example_it: 'Si sta solo mettendo in mostra.',
          tags: ['bambini', 'comportamento'],
          type: 'phrasal',
        },
        {
          verb: 'mess up',
          it: 'fare un casino / sbagliare',
          example_en: "Don't worry if you mess up — we'll try again!",
          example_it: 'Non preoccuparti se sbagli — riproviamo!',
          tags: ['bambini', 'attività'],
          type: 'phrasal',
        },
        {
          verb: 'cheer up',
          it: 'tirarsi su / animarsi',
          example_en: "Cheer up! We're going to play your favourite game.",
          example_it: 'Tirati su! Facciamo il tuo gioco preferito.',
          tags: ['bambini', 'attività'],
          type: 'phrasal',
        },
        {
          verb: 'give up',
          it: 'arrendersi, mollare',
          example_en: "Don't give up! You're almost there.",
          example_it: 'Non mollare! Ci sei quasi.',
          tags: ['bambini', 'attività'],
          type: 'phrasal',
        },
        {
          verb: 'keep on',
          it: 'continuare',
          example_en: "Keep on trying, you'll get it!",
          example_it: 'Continua a provarci, ce la farai!',
          tags: ['bambini', 'attività'],
          type: 'phrasal',
        },
        {
          verb: 'look after',
          it: 'prendersi cura di',
          example_en: "Don't worry, I'll look after him.",
          example_it: 'Non si preoccupi, me ne prendo cura io.',
          tags: ['bambini', 'genitori'],
          type: 'phrasal',
        },
        {
          verb: 'watch out',
          it: 'fare attenzione',
          example_en: 'Watch out! The floor is wet.',
          example_it: 'Attenzione! Il pavimento è bagnato.',
          tags: ['bambini', 'sicurezza'],
          type: 'phrasal',
        },
        {
          verb: 'hand out',
          it: 'distribuire',
          example_en: 'Can you help me hand out the stickers?',
          example_it: 'Mi aiuti a distribuire gli adesivi?',
          tags: ['attività', 'evento'],
          type: 'phrasal',
        },
        {
          verb: 'sort out',
          it: 'sistemare / risolvere',
          example_en: "I'll sort it out in a second.",
          example_it: 'Lo sistemo in un secondo.',
          tags: ['evento', 'genitori'],
          type: 'phrasal',
        },
        {
          verb: 'come up with',
          it: "inventare / trovare un'idea",
          example_en: 'She came up with a great game for the kids.',
          example_it: 'Ha inventato un bel gioco per i bambini.',
          tags: ['attività', 'evento'],
          type: 'phrasal',
        },
        {
          verb: 'run out of',
          it: 'finire (le scorte di)',
          example_en: "We've run out of balloons!",
          example_it: 'Abbiamo finito i palloncini!',
          tags: ['attività', 'evento'],
          type: 'phrasal',
        },
        {
          verb: 'show up',
          it: 'presentarsi, arrivare',
          example_en: 'He showed up a bit late but had a great time.',
          example_it: "È arrivato un po' tardi ma si è divertito.",
          tags: ['genitori', 'evento'],
          type: 'phrasal',
        },
        {
          verb: 'drop off',
          it: 'accompagnare / lasciare',
          example_en: 'You can drop her off at 3 and pick her up at 6.',
          example_it: 'Può lasciarla alle 3 e riprenderla alle 6.',
          tags: ['genitori'],
          type: 'phrasal',
        },
        {
          verb: 'pick up',
          it: 'andare a prendere',
          example_en: 'What time are you picking him up?',
          example_it: 'A che ora viene a prenderlo?',
          tags: ['genitori'],
          type: 'phrasal',
        },
        {
          verb: 'find out',
          it: 'scoprire',
          example_en: "I'll find out what happened and let you know.",
          example_it: 'Scopro cosa è successo e la avverto.',
          tags: ['genitori', 'evento'],
          type: 'phrasal',
        },
        {
          verb: 'let down',
          it: 'deludere',
          example_en: "I promise we won't let you down.",
          example_it: 'Prometto che non la deluderemo.',
          tags: ['genitori'],
          type: 'phrasal',
        },
        {
          verb: 'look forward to',
          it: "non vedere l'ora di",
          example_en: "We're looking forward to seeing you at the party!",
          example_it: "Non vediamo l'ora di vederla alla festa!",
          tags: ['genitori', 'evento'],
          type: 'phrasal',
        },
        {
          verb: 'reach out',
          it: 'contattare',
          example_en: 'Feel free to reach out if you have any questions.',
          example_it: 'Non esiti a contattarmi per qualsiasi domanda.',
          tags: ['genitori'],
          type: 'phrasal',
        },
        {
          verb: 'turn out',
          it: 'rivelarsi / risultare',
          example_en: 'It turned out to be a really fun afternoon!',
          example_it: 'Si è rivelato un pomeriggio davvero divertente!',
          tags: ['genitori', 'evento'],
          type: 'phrasal',
        },
        {
          verb: 'end up',
          it: 'finire per / ritrovarsi',
          example_en: "He ended up having so much fun he didn't want to leave.",
          example_it:
            'Alla fine si è divertito così tanto da non voler andare.',
          tags: ['genitori', 'bambini'],
          type: 'phrasal',
        },
        {
          verb: 'get along with',
          it: "andare d'accordo con",
          example_en: 'She gets along really well with the other kids.',
          example_it: "Va molto d'accordo con gli altri bambini.",
          tags: ['genitori', 'bambini'],
          type: 'phrasal',
        },
        {
          verb: 'catch up',
          it: 'aggiornarsi / recuperare',
          example_en: "Let's catch up at the end of the session.",
          example_it: 'Ci aggiorniamo alla fine della sessione.',
          tags: ['genitori'],
          type: 'phrasal',
        },
        {
          verb: 'set up',
          it: 'allestire / organizzare',
          example_en: 'We need to set up before the kids arrive.',
          example_it: 'Dobbiamo allestire prima che arrivino i bambini.',
          tags: ['evento'],
          type: 'phrasal',
        },
        {
          verb: 'put off',
          it: 'rimandare',
          example_en: 'We had to put off the outdoor activity.',
          example_it: "Abbiamo dovuto rimandare l'attività all'aperto.",
          tags: ['evento'],
          type: 'phrasal',
        },
        {
          verb: 'take on',
          it: 'assumersi / prendere carico',
          example_en: 'I took on the face painting this time.',
          example_it: 'Questa volta mi sono occupato del face painting.',
          tags: ['evento'],
          type: 'phrasal',
        },
        {
          verb: 'take over',
          it: 'prendere il controllo',
          example_en: 'Can you take over while I sort out the food?',
          example_it: 'Puoi prendere il controllo mentre sistemo il cibo?',
          tags: ['evento'],
          type: 'phrasal',
        },
        {
          verb: 'work out',
          it: 'risolvere / funzionare',
          example_en: "Don't worry, it'll all work out!",
          example_it: 'Non preoccuparti, si sistemerà tutto!',
          tags: ['evento', 'genitori'],
          type: 'phrasal',
        },
        {
          verb: 'point out',
          it: 'sottolineare / indicare',
          example_en: "I just wanted to point out that he's allergic to nuts.",
          example_it: 'Volevo sottolineare che è allergico alle noci.',
          tags: ['genitori', 'sicurezza'],
          type: 'phrasal',
        },
        {
          verb: 'check out',
          it: "dare un'occhiata",
          example_en: "Check out what they made — it's amazing!",
          example_it: "Dai un'occhiata a quello che hanno fatto!",
          tags: ['attività', 'genitori'],
          type: 'phrasal',
        },
        {
          verb: 'think over',
          it: 'riflettere su',
          example_en: 'Think it over and let me know if you want to book.',
          example_it: 'Ci pensi e mi faccia sapere se vuole prenotare.',
          tags: ['genitori'],
          type: 'phrasal',
        },
        {
          verb: 'break down',
          it: 'rompersi / scoppiare a piangere',
          example_en: 'The speaker broke down during the event.',
          example_it: "Il microfono si è rotto durante l'evento.",
          tags: ['evento'],
          type: 'phrasal',
        },
        {
          verb: 'get over',
          it: 'superare',
          example_en: 'He got over his shyness after the first game.',
          example_it: 'Ha superato la timidezza dopo il primo gioco.',
          tags: ['bambini'],
          type: 'phrasal',
        },
      ]

      const EMOTIONS = [
        {
          verb: 'No way!',
          it: 'Ma dai! / Impossibile!',
          example_en: 'No way! He scored a goal on his first try!',
          example_it: 'Ma dai! Ha segnato al primo tentativo!',
          tags: ['emozione'],
          type: 'emotion',
        },
        {
          verb: "That's insane!",
          it: 'È assurdo! / È pazzesco!',
          example_en: "That's insane — they want to jump off the frame again!",
          example_it: 'È pazzesco — vogliono saltare di nuovo!',
          tags: ['emozione'],
          type: 'emotion',
        },
        {
          verb: "That's awesome!",
          it: 'È fantastico!',
          example_en: "That's awesome! You remembered all the steps!",
          example_it: 'È fantastico! Hai ricordato tutti i passi!',
          tags: ['emozione'],
          type: 'emotion',
        },
        {
          verb: 'Oh my God!',
          it: 'Oddio!',
          example_en: 'Oh my God, look at that drawing!',
          example_it: 'Oddio, guarda quel disegno!',
          tags: ['emozione'],
          type: 'emotion',
        },
        {
          verb: 'What a mess!',
          it: 'Che casino!',
          example_en: "What a mess! Let's clean up together.",
          example_it: 'Che casino! Puliamo insieme.',
          tags: ['emozione'],
          type: 'emotion',
        },
        {
          verb: 'That sucks!',
          it: 'Che peccato! / Che schifo!',
          example_en: 'That sucks — the rain cancelled the outdoor game.',
          example_it: 'Che peccato — la pioggia ha cancellato il gioco.',
          tags: ['emozione'],
          type: 'emotion',
        },
        {
          verb: 'No kidding!',
          it: 'Ma davvero?!',
          example_en: 'No kidding — he ate five sandwiches!',
          example_it: 'Ma davvero — ha mangiato cinque panini!',
          tags: ['emozione'],
          type: 'emotion',
        },
        {
          verb: 'Are you serious?!',
          it: 'Ma sei serio?!',
          example_en: 'Are you serious?! He fell asleep during the show!',
          example_it: 'Ma sei serio?! Si è addormentato durante lo spettacolo!',
          tags: ['emozione'],
          type: 'emotion',
        },
        {
          verb: 'This is wild!',
          it: 'È assurdo! / È incredibile!',
          example_en: "This is wild — they're all dancing at the same time!",
          example_it: 'È incredibile — stanno ballando tutti insieme!',
          tags: ['emozione'],
          type: 'emotion',
        },
        {
          verb: "That's crazy!",
          it: 'È pazzesco!',
          example_en: "That's crazy — she did it in 10 seconds!",
          example_it: "È pazzesco — l'ha fatto in 10 secondi!",
          tags: ['emozione'],
          type: 'emotion',
        },
        {
          verb: "You don't say!",
          it: 'Ma va?!',
          example_en: "You don't say! She's been here every weekend?",
          example_it: 'Ma va?! Viene qui ogni weekend?',
          tags: ['emozione'],
          type: 'emotion',
        },
        {
          verb: "That's sick!",
          it: 'È fortissimo! (slang positivo)',
          example_en: "That's sick — look at that trick!",
          example_it: 'È fortissimo — guarda quella mossa!',
          tags: ['emozione'],
          type: 'emotion',
        },
      ]

      const OPINIONS = [
        {
          verb: 'I feel like...',
          it: "Ho l'impressione che...",
          example_en: "I feel like he's a bit tired today.",
          example_it: "Ho l'impressione che sia un po' stanco oggi.",
          tags: ['opinione'],
          type: 'opinion',
        },
        {
          verb: "I'd say...",
          it: 'Direi che...',
          example_en: "I'd say she's ready to join the bigger group.",
          example_it: 'Direi che è pronta per il gruppo più grande.',
          tags: ['opinione'],
          type: 'opinion',
        },
        {
          verb: "I'm pretty sure...",
          it: 'Sono abbastanza sicuro che...',
          example_en: "I'm pretty sure he mentioned a nut allergy.",
          example_it:
            "Sono abbastanza sicuro che abbia menzionato un'allergia.",
          tags: ['opinione'],
          type: 'opinion',
        },
        {
          verb: 'As far as I know',
          it: 'Per quanto ne so',
          example_en: 'As far as I know, the event ends at 6.',
          example_it: "Per quanto ne so, l'evento finisce alle 6.",
          tags: ['opinione'],
          type: 'opinion',
        },
        {
          verb: 'If you ask me',
          it: 'Se lo chiedi a me',
          example_en: "If you ask me, she's one of the most engaged kids here.",
          example_it: 'Se lo chiedi a me, è una delle bambine più coinvolte.',
          tags: ['opinione'],
          type: 'opinion',
        },
        {
          verb: 'The way I see it...',
          it: 'Per come la vedo io...',
          example_en: 'The way I see it, he just needs a bit more time.',
          example_it: 'Per come la vedo io, ha solo bisogno di più tempo.',
          tags: ['opinione'],
          type: 'opinion',
        },
        {
          verb: 'Personally speaking',
          it: 'Personalmente',
          example_en: 'Personally speaking, I think the kids loved it.',
          example_it: 'Personalmente, penso che ai bambini sia piaciuto.',
          tags: ['opinione'],
          type: 'opinion',
        },
        {
          verb: 'In my opinion',
          it: 'Secondo me',
          example_en: 'In my opinion, the outdoor games work better.',
          example_it: "Secondo me, i giochi all'aperto funzionano meglio.",
          tags: ['opinione'],
          type: 'opinion',
        },
        {
          verb: 'I guess...',
          it: 'Immagino... / Suppongo...',
          example_en: 'I guess we could split them into two groups.',
          example_it: 'Immagino che potremmo dividerli in due gruppi.',
          tags: ['opinione'],
          type: 'opinion',
        },
        {
          verb: 'To be honest...',
          it: 'Ad essere onesto...',
          example_en: 'To be honest, that game went better than I expected.',
          example_it:
            'Ad essere onesto, quel gioco è andato meglio del previsto.',
          tags: ['opinione'],
          type: 'opinion',
        },
      ]

      // Se vocabulary.js è caricato usa quello, altrimenti fallback agli array legacy
      if (ALL_VOCAB.length === 0) {
        ALL_VOCAB = [...PV, ...EMOTIONS, ...OPINIONS]
      }

      // ============================================================
      let learned = new Set(
        JSON.parse(localStorage.getItem('eu_learned_' + currentLang) || '[]'),
      )
      let stats = JSON.parse(
        localStorage.getItem('eu_stats_' + currentLang) || '{}',
      )
      let session = JSON.parse(
        localStorage.getItem('eu_session') ||
          '{"streak":0,"correct":0,"total":0}',
      )

      function saveLearned() {
        localStorage.setItem(
          'eu_learned_' + currentLang,
          JSON.stringify([...learned]),
        )
      }
      function saveStats() {
        localStorage.setItem('eu_stats_' + currentLang, JSON.stringify(stats))
      }
      function saveSession() {
        localStorage.setItem('eu_session', JSON.stringify(session))
      }

      function updateStatsUI() {
        document.getElementById('stat-streak').textContent = session.streak
        document.getElementById('stat-correct').textContent = session.correct
        document.getElementById('stat-total').textContent = session.total
        const n = learned.size
        const tot = ALL_VOCAB.length
        document.getElementById('learnedCount').textContent = n + ' / ' + tot
        document.getElementById('globalFill').style.width =
          ((n / tot) * 100).toFixed(1) + '%'
        // aggiorna summary accordion
        const sl = document.getElementById('statsToggleLearned')
        const ss = document.getElementById('statsToggleStreak')
        const sc = document.getElementById('statsToggleCorrect')
        const st = document.getElementById('statsToggleTotal')
        if (sl) sl.textContent = n + '/' + tot
        if (ss) ss.textContent = session.streak
        if (sc) sc.textContent = session.correct
        if (st) st.textContent = session.total
      }

      function toggleStatsPanel() {
        const panel = document.getElementById('statsPanel')
        const toggle = document.getElementById('statsToggle')
        panel.classList.toggle('open')
        toggle.classList.toggle('open')
      }
      updateStatsUI()
      updateFilterPills()
      updateQuizStartUI()

      // ============================================================
      // NAVIGATION
      // ============================================================
      function showPanel(name, btn) {
        if (quizRunning && name !== 'quiz') stopQuiz()
        document
          .querySelectorAll('.panel')
          .forEach((p) => p.classList.remove('active'))
        document
          .querySelectorAll('.tab-btn')
          .forEach((b) => b.classList.remove('active'))
        document.getElementById('panel-' + name).classList.add('active')
        if (btn) btn.classList.add('active')
        if (
          name === 'vocab' &&
          !document.getElementById('vocabGrid').children.length
        )
          renderVocabGrid(activeFilter, activeSearch)
        if (name === 'tenses') {
          updateTenseLabels()
          if (!document.getElementById('tensesGrid').children.length)
            renderTensesGrid('all')
        }
        if (name === 'quiz' && !quizRunning) {
          document.getElementById('quizCard').style.display = 'none'
          document.getElementById('quizStartCard').style.display = 'block'
          document.getElementById('quizEndCard').style.display = 'none'
        }
      }

      // ============================================================
      // LANGUAGE DROPDOWN (mobile)
      // ============================================================
      function toggleLangDropdown() {
        const toggle = document.getElementById('langToggle')
        const dropdown = document.getElementById('langDropdown')
        toggle.classList.toggle('open')
        dropdown.classList.toggle('open')
      }

      function selectLang(lang) {
        switchLang(lang)
        document.getElementById('langToggle').classList.remove('open')
        document.getElementById('langDropdown').classList.remove('open')
        const flags = { en: '🇬🇧 EN', es: '🇪🇸 ES', fr: '🇫🇷 FR' }
        document.getElementById('langToggleText').textContent = flags[lang] || lang
      }

      // Close dropdown when clicking outside
      document.addEventListener('click', (e) => {
        const toggle = document.getElementById('langToggle')
        const dropdown = document.getElementById('langDropdown')
        if (toggle && dropdown && !toggle.contains(e.target) && !dropdown.contains(e.target)) {
          toggle.classList.remove('open')
          dropdown.classList.remove('open')
        }
      })

      // ============================================================
      // TAB 1: VOCABOLARIO
      // ============================================================
      document.addEventListener('DOMContentLoaded', () => {
        switchLang(currentLang)
        // Init zoom button active state
        const zoomBtns = document.querySelectorAll('.zoom-btn')
        zoomBtns.forEach((btn) => {
          const btnZoom = parseFloat(btn.getAttribute('onclick').match(/\d+\.?\d*/)[0])
          if (Math.abs(btnZoom - zoomLevel) < 0.01) {
            btn.classList.add('active')
          }
        })
      })
