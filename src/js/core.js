      // ── Voci sintetiche — condiviso da vocab / miniclub / listening ─
      const LANG_VOICE_CFG = {
        en: { prefix: 'en', keys: ['en-US','en-GB','en-AU'], flags: {'en-US':'🇺🇸','en-GB':'🇬🇧','en-AU':'🇦🇺'}, fallback: 'en-US' },
        es: { prefix: 'es', keys: ['es-ES','es-MX','es-US'], flags: {'es-ES':'🇪🇸','es-MX':'🇲🇽','es-US':'🇺🇸'}, fallback: 'es-ES' },
        fr: { prefix: 'fr', keys: ['fr-FR','fr-CA','fr-BE'], flags: {'fr-FR':'🇫🇷','fr-CA':'🇨🇦','fr-BE':'🇧🇪'}, fallback: 'fr-FR' },
      }
      // Voci preferite per regione — iOS Enhanced installate dall'utente
      const PREFERRED_VOICES = {
        'en-US': 'Samantha',
        'es-ES': 'Monica',
        'fr-FR': 'Audrey',
        'fr-CA': 'Amélie',
      }
      function getLangCode() {
        return (LANG_VOICE_CFG[currentLang] || LANG_VOICE_CFG.en).fallback
      }
      // Restituisce la voce migliore per currentLang.
      // Priorità: 1) Settings manuale  2) PREFERRED_VOICES  3) Enhanced/Premium  4) prima disponibile
      // Se `preferred` è passato (override sessione pill) lo usa direttamente.
      function getBestVoice(preferred) {
        if (preferred) return preferred
        const cfg = LANG_VOICE_CFG[currentLang] || LANG_VOICE_CFG.en
        const voices = speechSynthesis.getVoices()
        const candidates = voices.filter(v => v.lang.startsWith(cfg.prefix))
        // 1. Voce salvata manualmente in Settings
        const savedName = localStorage.getItem('eu_voice_' + currentLang)
        if (savedName) {
          const saved = candidates.find(v => v.name === savedName)
          if (saved) return saved
        }
        // 2. Voce preferita per regione (lista curata, funziona su iOS senza "Enhanced" nel nome)
        for (const key of cfg.keys) {
          const prefName = PREFERRED_VOICES[key]
          if (prefName) {
            const v = candidates.find(v => v.name === prefName && v.lang.startsWith(key))
            if (v) return v
          }
        }
        // 3. Enhanced / Premium (macOS)
        const enhanced = candidates.find(v => /enhanced|premium/i.test(v.name))
        if (enhanced) return enhanced
        // 4. Prima disponibile
        for (const key of cfg.keys) {
          const v = candidates.find(v => v.lang.startsWith(key))
          if (v) return v
        }
        return candidates[0] || null
      }

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
        if (typeof reinitVoices === 'function') reinitVoices()
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

      // ── Utilities speech & status ─────────────────────────────────

      function playSpeech(text, rate) {
        if (typeof speechSynthesis === 'undefined') return
        speechSynthesis.cancel()
        const doSpeak = () => {
          const u = new SpeechSynthesisUtterance(text)
          u.lang = getLangCode()
          u.rate = rate || 0.9
          const v = getBestVoice(); if (v) u.voice = v
          speechSynthesis.speak(u)
        }
        if (speechSynthesis.getVoices().length === 0) {
          setTimeout(doSpeak, 250)
        } else {
          doSpeak()
        }
      }

      function showStatus(el, msg, type, duration) {
        if (!el) return
        el.style.color = type === 'err' ? 'var(--error)' : type === 'wait' ? 'var(--muted)' : 'var(--success)'
        el.textContent = msg
        if (duration) setTimeout(() => { el.textContent = '' }, duration)
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
