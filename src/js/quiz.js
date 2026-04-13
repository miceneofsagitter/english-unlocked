      // ============================================================
      // TAB 2: QUIZ (algoritmo locale)
      // ============================================================
      let quizRunning = false
      let quizSessionQ = 0
      let quizMaxQ = 10
      let quizTimerMax = 30
      let quizTimerInterval = null
      let quizTimeLeft = 0
      let currentQuiz = null
      let quizStartCorrect = 0
      let quizStartTotal = 0

      function _v(vocab, field) {
        if (field === 'verb') {
          if (currentLang === 'en') return vocab.verb || ''
          if (currentLang === 'es') return vocab.es || vocab.verb || ''
          if (currentLang === 'fr') return vocab.fr || vocab.verb || ''
        }
        if (field === 'example') {
          if (currentLang === 'en') return vocab.example_en || ''
          if (currentLang === 'es') return vocab.example_es || ''
          if (currentLang === 'fr') return vocab.example_fr || ''
        }
        if (field === 'example_it') {
          return vocab.example_it || vocab.it || ''
        }
        return vocab[field] || ''
      }

      function setQuizMax(n, btn) {
        quizMaxQ = n
        document
          .querySelectorAll('[id^="qmax-"]')
          .forEach((b) => b.classList.remove('active'))
        if (btn) btn.classList.add('active')
      }

      function setQuizTimer(n, btn) {
        quizTimerMax = n
        document
          .querySelectorAll('[id^="qtimer-"]')
          .forEach((b) => b.classList.remove('active'))
        if (btn) btn.classList.add('active')
      }

      function showQuizStart() {
        document.getElementById('quizCard').style.display = 'none'
        document.getElementById('quizStartCard').style.display = 'block'
        document.getElementById('quizEndCard').style.display = 'none'
      }

      function stopQuiz() {
        quizRunning = false
        if (quizTimerInterval) {
          clearInterval(quizTimerInterval)
          quizTimerInterval = null
        }
        const td = document.getElementById('quizTimerDisplay')
        if (td) td.style.display = 'none'
        document.getElementById('quizCard').style.display = 'none'
      }

      function endQuiz() {
        const qCorrect = session.correct - quizStartCorrect
        const qTotal = session.total - quizStartTotal
        const qStreak = session.streak
        stopQuiz()
        document.getElementById('quizStartCard').style.display = 'none'
        document.getElementById('quizEndCard').style.display = 'block'
        document.getElementById('quizEndCorrect').textContent = qCorrect
        document.getElementById('quizEndTotal').textContent = qTotal
        document.getElementById('quizEndStreak').textContent = qStreak
      }

      function pickNextVocab() {
        return [...ALL_VOCAB].sort((a, b) => {
          const ia = ALL_VOCAB.indexOf(a),
            ib = ALL_VOCAB.indexOf(b)
          const sa = stats[ia] || { seen: 0, correct: 0 }
          const sb = stats[ib] || { seen: 0, correct: 0 }
          const scoreA = sa.seen === 0 ? -1 : sa.correct / sa.seen
          const scoreB = sb.seen === 0 ? -1 : sb.correct / sb.seen
          return scoreA - scoreB
        })[0]
      }

      function generateTranslationQuiz(target) {
        const correctVerb = _v(target, 'verb')
        const pool = ALL_VOCAB.filter(
          (v) => _v(v, 'verb') !== correctVerb && v.type === target.type,
        )
          .sort(() => Math.random() - 0.5)
          .slice(0, 3)
        const opts = [target, ...pool].sort(() => Math.random() - 0.5)
        return {
          type: 'translation',
          q: target.it,
          sub: '',
          correct: correctVerb,
          opts: opts.map((o) => _v(o, 'verb')),
        }
      }

      function generateFillBlankQuiz(target) {
        const ex = _v(target, 'example')
        const correctVerb = _v(target, 'verb')
        if (!ex) return generateTranslationQuiz(target)
        const blank = ex.replace(
          new RegExp(correctVerb.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi'),
          '___',
        )
        if (blank === ex) return generateTranslationQuiz(target)
        const pool = ALL_VOCAB.filter(
          (v) => _v(v, 'verb') !== correctVerb && v.type === target.type,
        )
          .sort(() => Math.random() - 0.5)
          .slice(0, 3)
          .map((v) => _v(v, 'verb'))
        const opts = [correctVerb, ...pool].sort(() => Math.random() - 0.5)
        return {
          type: 'fill',
          q: blank,
          sub: _v(target, 'example_it'),
          correct: correctVerb,
          opts,
        }
      }

      function generateMatchQuiz() {
        const isPhrasal = ALL_VOCAB.some((v) => v.type === 'phrasal')
        let pool = isPhrasal
          ? ALL_VOCAB.filter((v) => v.type === 'phrasal')
          : ALL_VOCAB
        if (pool.length < 4) pool = ALL_VOCAB
        
        // Remove duplicates by verb field - keep first occurrence
        const seen = new Set()
        pool = pool.filter((v) => {
          const verb = _v(v, 'verb')
          if (seen.has(verb)) return false
          seen.add(verb)
          return true
        })
        
        pool = pool.sort(() => Math.random() - 0.5).slice(0, 4)
        const verbs = [...pool].sort(() => Math.random() - 0.5).map((v) => _v(v, 'verb'))
        const trans = [...pool].sort(() => Math.random() - 0.5).map((v) => v.it)
        const pairs = {}
        pool.forEach((v) => (pairs[_v(v, 'verb')] = v.it))
        return { type: 'match', verbs, trans, pairs }
      }

      function startQuiz() {
        if (ALL_VOCAB.length < 4) return
        quizRunning = true
        quizSessionQ = 0
        quizStartCorrect = session.correct
        quizStartTotal = session.total
        document.getElementById('quizCard').style.display = 'block'
        document.getElementById('quizStartCard').style.display = 'none'
        document.getElementById('quizEndCard').style.display = 'none'
        document.getElementById('quizLangNotice').style.display = 'none'
        nextQuestion()
      }

      function nextQuestion() {
        if (quizSessionQ >= quizMaxQ) {
          endQuiz()
          return
        }
        quizSessionQ++

        // Timer
        if (quizTimerInterval) clearInterval(quizTimerInterval)
        const timerEl = document.getElementById('quizTimerDisplay')
        if (quizTimerMax === 0) {
          timerEl.style.display = 'none'
        } else {
          quizTimeLeft = quizTimerMax
          timerEl.style.display = 'inline'
          timerEl.style.color = 'var(--success)'
          timerEl.textContent = '⏱ ' + quizTimeLeft
          quizTimerInterval = setInterval(() => {
            quizTimeLeft--
            timerEl.textContent = '⏱ ' + quizTimeLeft
            if (quizTimeLeft <= 10) timerEl.style.color = 'var(--error)'
            if (quizTimeLeft <= 0) {
              clearInterval(quizTimerInterval)
              quizTimerInterval = null
              timerEl.style.display = 'none'
              document
                .querySelectorAll('#quizOptions .opt-btn')
                .forEach((b) => (b.disabled = true))
              document
                .querySelectorAll('.match-btn')
                .forEach((b) => (b.disabled = true))
              const fb = document.getElementById('quizFeedback')
              fb.className = 'feedback-box show feedback-wrong'
              if (currentQuiz && currentQuiz.pairs) {
                // abbinamento: evidenzia coppie non trovate
                fb.textContent = '⏰ Tempo scaduto!'
                const revealColors = ['pair-0', 'pair-1', 'pair-2', 'pair-3']
                let ci = 0
                document.querySelectorAll('.match-btn[data-verb]').forEach(verbBtn => {
                  if (!verbBtn.classList.contains('correct')) {
                    const correctTrans = currentQuiz.pairs[verbBtn.dataset.verb]
                    const transBtn = [...document.querySelectorAll('.match-btn[data-trans]')]
                      .find(b => b.dataset.trans === correctTrans)
                    const color = revealColors[ci++]
                    verbBtn.classList.add(color)
                    if (transBtn) transBtn.classList.add(color)
                  }
                })
              } else if (currentQuiz && currentQuiz.correct) {
                // traduzione/fill: mostra risposta nel feedback + evidenzia bottone
                fb.textContent = '⏰ Tempo scaduto! → ' + currentQuiz.correct
                const correctBtn = [...document.querySelectorAll('#quizOptions .opt-btn')]
                  .find(b => b.textContent === currentQuiz.correct)
                if (correctBtn) correctBtn.classList.add('correct')
              } else {
                fb.textContent = '⏰ Tempo scaduto!'
              }
              session.total++
              session.streak = 0
              saveSession()
              updateStatsUI()
              document.getElementById('quizNextBtn').style.display =
                'inline-flex'
            }
          }, 1000)
        }

        document.getElementById('quizNextBtn').style.display = 'none'
        document.getElementById('quizFeedback').className = 'feedback-box'
        document.getElementById('quizCounter').textContent =
          quizSessionQ + ' / ' + quizMaxQ
        document.getElementById('quizProgressFill').style.width =
          (((quizSessionQ - 1) / quizMaxQ) * 100).toFixed(1) + '%'

        const type = ['translation', 'fill', 'match'][(quizSessionQ - 1) % 3]
        const target = pickNextVocab()
        const idx = ALL_VOCAB.indexOf(target)
        if (!stats[idx]) stats[idx] = { seen: 0, correct: 0 }
        stats[idx].seen++
        saveStats()

        if (type === 'match') {
          renderMatchQuiz(generateMatchQuiz())
        } else if (type === 'fill') {
          renderChoiceQuiz(generateFillBlankQuiz(target), idx)
        } else {
          renderChoiceQuiz(generateTranslationQuiz(target), idx)
        }
      }

      function renderChoiceQuiz(quiz, targetIdx) {
        currentQuiz = quiz
        const badge = document.getElementById('quizTypeBadge')
        if (quiz.type === 'translation') {
          badge.className = 'quiz-type-badge badge-translation'
          badge.textContent = '🇮🇹 Traduzione'
          document.getElementById('quizQuestion').textContent = quiz.q
          document.getElementById('quizSubtitle').textContent =
            QUIZ_SUBTITLE[currentLang] || QUIZ_SUBTITLE.en
        } else {
          badge.className = 'quiz-type-badge badge-fill'
          badge.textContent = '✏️ Fill in the blank'
          document.getElementById('quizQuestion').textContent = quiz.q
          document.getElementById('quizSubtitle').textContent = quiz.sub
        }

        const optsDiv = document.getElementById('quizOptions')
        optsDiv.innerHTML = ''
        optsDiv.className = 'quiz-options'
        quiz.opts.forEach((opt) => {
          const btn = document.createElement('button')
          btn.className = 'opt-btn'
          btn.textContent = opt
          btn.onclick = function () {
            if (quizTimerInterval) {
              clearInterval(quizTimerInterval)
              quizTimerInterval = null
            }
            const timerEl = document.getElementById('quizTimerDisplay')
            if (timerEl) timerEl.style.display = 'none'
            document
              .querySelectorAll('#quizOptions .opt-btn')
              .forEach((b) => (b.disabled = true))
            const correct = opt === quiz.correct
            btn.classList.add(correct ? 'correct' : 'wrong')
            if (!correct)
              [...document.querySelectorAll('#quizOptions .opt-btn')]
                .find((b) => b.textContent === quiz.correct)
                .classList.add('correct')
            const fb = document.getElementById('quizFeedback')
            if (correct) {
              fb.className = 'feedback-box show feedback-correct'
              fb.textContent = '✅ Esatto! ' + quiz.correct
              session.correct++
              session.streak++
              if (targetIdx !== undefined) {
                if (!stats[targetIdx])
                  stats[targetIdx] = { seen: 1, correct: 0 }
                stats[targetIdx].correct++
                saveStats()
                sbSyncStat(targetIdx)
              }
            } else {
              fb.className = 'feedback-box show feedback-wrong'
              fb.textContent = '❌ Era: ' + quiz.correct
              session.streak = 0
            }
            session.total++
            saveSession()
            updateStatsUI()
            document.getElementById('quizNextBtn').style.display = 'inline-flex'
          }
          optsDiv.appendChild(btn)
        })
      }

      function renderMatchQuiz(quiz) {
        currentQuiz = quiz
        const badge = document.getElementById('quizTypeBadge')
        badge.className = 'quiz-type-badge badge-match'
        badge.textContent = '🔗 Abbinamento'
        document.getElementById('quizQuestion').textContent =
          'Abbina ogni espressione alla traduzione italiana'
        document.getElementById('quizSubtitle').textContent =
          'Clicca un verbo, poi la traduzione corrispondente'

        const optsDiv = document.getElementById('quizOptions')
        optsDiv.innerHTML = ''
        optsDiv.className = 'match-grid'

        const verbCol = document.createElement('div')
        verbCol.className = 'match-col'
        const transCol = document.createElement('div')
        transCol.className = 'match-col'
        optsDiv.appendChild(verbCol)
        optsDiv.appendChild(transCol)

        let selectedVerb = null
        let matched = 0
        const pairColors = ['pair-0', 'pair-1', 'pair-2', 'pair-3']
        // traccia coppie già tentate erroneamente (una sola penalità per coppia)
        const penalized = new Set()

        quiz.verbs.forEach((v) => {
          const btn = document.createElement('button')
          btn.className = 'match-btn'
          btn.textContent = v
          btn.dataset.verb = v
          btn.onclick = function () {
            if (btn.classList.contains('correct') || btn.disabled) return
            document
              .querySelectorAll('.match-btn[data-verb]')
              .forEach((b) => b.classList.remove('selected'))
            btn.classList.add('selected')
            selectedVerb = v
          }
          verbCol.appendChild(btn)
        })

        quiz.trans.forEach((t) => {
          const btn = document.createElement('button')
          btn.className = 'match-btn'
          btn.textContent = t
          btn.dataset.trans = t
          btn.onclick = function () {
            if (
              !selectedVerb ||
              btn.classList.contains('correct') ||
              btn.disabled
            )
              return
            const verbBtn = [
              ...document.querySelectorAll('.match-btn[data-verb]'),
            ].find((b) => b.dataset.verb === selectedVerb)
            if (quiz.pairs[selectedVerb] === t) {
              btn.classList.add('correct')
              verbBtn.classList.add('correct')
              btn.disabled = true
              verbBtn.disabled = true
              selectedVerb = null
              matched++
              session.correct++
              session.streak++
              session.total++
              if (matched === 4) {
                if (quizTimerInterval) {
                  clearInterval(quizTimerInterval)
                  quizTimerInterval = null
                }
                const timerEl = document.getElementById('quizTimerDisplay')
                if (timerEl) timerEl.style.display = 'none'
                const fb = document.getElementById('quizFeedback')
                fb.className = 'feedback-box show feedback-correct'
                fb.textContent =
                  '✅ Perfetto! Tutte e 4 abbinate correttamente!'
                document.getElementById('quizNextBtn').style.display =
                  'inline-flex'
                saveSession()
                updateStatsUI()
              }
            } else {
              btn.classList.add('wrong')
              verbBtn.classList.add('wrong')
              // penalità solo la prima volta che si sbaglia questa coppia
              if (!penalized.has(selectedVerb)) {
                penalized.add(selectedVerb)
                session.streak = 0
                session.total++
                saveSession()
                updateStatsUI()
              }
              setTimeout(() => {
                btn.classList.remove('wrong')
                verbBtn.classList.remove('wrong')
                verbBtn.classList.remove('selected')
                selectedVerb = null
              }, 600)
            }
          }
          transCol.appendChild(btn)
        })
      }

      function skipQuestion() {
        nextQuestion()
      }

      // Init quiz panel
      renderVocabGrid('all')
      renderTensesGrid('all')

