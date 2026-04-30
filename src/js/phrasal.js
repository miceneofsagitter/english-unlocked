      // ============================================================
      // PHRASAL VERB QUIZ
      // ============================================================

      let phrasalPool = []
      let phrasalIdx = 0
      let phrasalScore = { correct: 0, total: 0 }
      let phrasalAnswered = false

      function getBaseVerb(verb) {
        return verb.split(' ')[0]
      }

      function getParticle(verb) {
        return verb.split(' ').slice(1).join(' ')
      }

      function shuffle(arr) {
        const a = arr.slice()
        for (let i = a.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [a[i], a[j]] = [a[j], a[i]]
        }
        return a
      }

      function buildPhrasalPool() {
        const lang = typeof currentLang !== 'undefined' ? currentLang : 'en'
        return shuffle(
          (typeof ALL_VOCAB_FOR_EXERCISES !== 'undefined' ? ALL_VOCAB_FOR_EXERCISES : [])
            .filter(v => v.type === 'phrasal' && v.language === lang)
        )
      }

      // Replace first occurrence of phrasal verb in sentence with "BASE ___"
      function blankSentence(sentence, verb) {
        const base = getBaseVerb(verb)
        const re = new RegExp(verb.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'i')
        if (re.test(sentence)) {
          return sentence.replace(re, base + ' <span class="phrasal-blank">___</span>')
        }
        // fallback: base verb alone in sentence
        const baseRe = new RegExp('\\b' + base + '\\b', 'i')
        if (baseRe.test(sentence)) {
          return sentence.replace(baseRe, base + ' <span class="phrasal-blank">___</span>')
        }
        return sentence + ' (' + base + ' <span class="phrasal-blank">___</span>)'
      }

      function pick3WrongParticles(current, pool) {
        const correct = getParticle(current.verb)
        const others = shuffle(pool.filter(v => getParticle(v.verb) !== correct))
        const seen = new Set()
        const result = []
        for (const v of others) {
          const p = getParticle(v.verb)
          if (!seen.has(p)) {
            seen.add(p)
            result.push(p)
            if (result.length === 3) break
          }
        }
        return result
      }

      function updatePhrasalProgress() {
        const total = phrasalPool.length
        const done = phrasalIdx
        const pct = total ? Math.round((done / total) * 100) : 0
        const fill = document.getElementById('phrasal-progress-fill')
        const label = document.getElementById('phrasal-progress-label')
        const score = document.getElementById('phrasal-score-display')
        if (fill) fill.style.width = pct + '%'
        if (label) label.textContent = done + ' / ' + total
        if (score) score.textContent = '✅ ' + phrasalScore.correct + '  |  ❌ ' + (phrasalScore.total - phrasalScore.correct)
      }

      function renderPhrasalQ() {
        phrasalAnswered = false
        const item = phrasalPool[phrasalIdx]
        const particle = getParticle(item.verb)
        const wrongs = pick3WrongParticles(item, phrasalPool)
        const options = shuffle([particle, ...wrongs])
        const correctOpt = options.indexOf(particle)

        const sentence = item.example_en
          ? blankSentence(item.example_en, item.verb)
          : getBaseVerb(item.verb) + ' <span class="phrasal-blank">___</span>'

        document.getElementById('phrasal-card').innerHTML = `
          <div style="text-align:center; margin-bottom:1.5rem;">
            <div style="font-size:0.78rem; color:var(--muted); text-transform:uppercase; letter-spacing:0.1em; margin-bottom:0.6rem;">Significato</div>
            <div style="font-size:1.3rem; font-weight:700; color:var(--accent2);">${item.emoji || ''} ${item.it}</div>
            ${item.simple ? `<div style="color:var(--muted); font-size:0.82rem; margin-top:0.25rem;">≈ ${item.simple}</div>` : ''}
          </div>

          <div style="background:rgba(255,255,255,0.05); border-radius:12px; padding:1rem 1.25rem; margin-bottom:1.5rem; font-size:1.05rem; line-height:1.6; color:var(--text);">
            ${sentence}
          </div>

          <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.6rem; margin-bottom:1rem;">
            ${options.map((opt, i) => `
              <button id="phrasal-opt-${i}" onclick="selectPhrasalOpt(${i}, ${correctOpt})"
                style="background:rgba(255,255,255,0.07); border:1.5px solid rgba(255,255,255,0.13); border-radius:12px; padding:0.75rem 1rem; color:var(--text); font-size:1rem; cursor:pointer; transition:all 0.15s;">
                ${opt}
              </button>
            `).join('')}
          </div>

          <div id="phrasal-feedback" style="min-height:1.5rem; text-align:center; font-size:0.95rem;"></div>
          <div id="phrasal-next-btn" style="display:none; text-align:center; margin-top:1rem;">
            <button class="btn btn-accent" onclick="nextPhrasa()">Prossimo →</button>
          </div>
        `
      }

      function selectPhrasalOpt(chosen, correct) {
        if (phrasalAnswered) return
        phrasalAnswered = true
        phrasalScore.total++

        const btns = document.querySelectorAll('[id^="phrasal-opt-"]')
        btns.forEach((b, i) => {
          b.style.pointerEvents = 'none'
          if (i === correct) {
            b.style.borderColor = 'var(--success)'
            b.style.background = 'rgba(34,197,94,0.18)'
          } else if (i === chosen && chosen !== correct) {
            b.style.borderColor = '#f87171'
            b.style.background = 'rgba(248,113,113,0.14)'
          }
        })

        const fb = document.getElementById('phrasal-feedback')
        if (chosen === correct) {
          phrasalScore.correct++
          const item = phrasalPool[phrasalIdx]
          const full = item.verb.toUpperCase()
          if (fb) fb.innerHTML = `<span style="color:var(--success);">✅ ${full}</span>${item.example_it ? `<div style="color:var(--muted);font-size:0.82rem;margin-top:0.3rem;">${item.example_it}</div>` : ''}`
        } else {
          const item = phrasalPool[phrasalIdx]
          if (fb) fb.innerHTML = `<span style="color:#f87171;">❌ Era: <strong>${item.verb.toUpperCase()}</strong></span>${item.example_it ? `<div style="color:var(--muted);font-size:0.82rem;margin-top:0.3rem;">${item.example_it}</div>` : ''}`
        }

        const nextBtn = document.getElementById('phrasal-next-btn')
        if (nextBtn) nextBtn.style.display = 'block'
        updatePhrasalProgress()
      }

      function nextPhrasa() {
        phrasalIdx++
        if (phrasalIdx >= phrasalPool.length) {
          renderPhrasalEnd()
        } else {
          renderPhrasalQ()
        }
        updatePhrasalProgress()
      }

      function renderPhrasalEnd() {
        const pct = phrasalScore.total ? Math.round((phrasalScore.correct / phrasalScore.total) * 100) : 0
        document.getElementById('phrasal-card').innerHTML = `
          <div style="text-align:center; padding:2rem 0;">
            <div style="font-size:3rem; margin-bottom:1rem;">🏆</div>
            <div style="font-size:1.5rem; font-weight:700; margin-bottom:0.5rem;">Pool completato!</div>
            <div style="color:var(--muted); margin-bottom:2rem;">${phrasalScore.correct} / ${phrasalScore.total} corrette (${pct}%)</div>
            <button class="btn btn-accent" onclick="initPhrasalTab()">Ricomincia 🔄</button>
          </div>
        `
      }

      function initPhrasalTab() {
        const lang = typeof currentLang !== 'undefined' ? currentLang : 'en'
        const card = document.getElementById('phrasal-card')
        if (!card) return

        if (lang !== 'en') {
          card.innerHTML = `
            <div style="text-align:center; padding:3rem 1rem; color:var(--muted);">
              <div style="font-size:2.5rem; margin-bottom:1rem;">🇬🇧</div>
              <div>I phrasal verbs sono un concetto inglese.<br>Passa alla lingua <strong>EN</strong> per fare questo quiz.</div>
            </div>
          `
          return
        }

        phrasalPool = buildPhrasalPool()
        phrasalIdx = 0
        phrasalAnswered = false
        phrasalScore = { correct: 0, total: 0 }

        if (!phrasalPool.length) {
          card.innerHTML = `<div style="text-align:center; color:var(--muted); padding:2rem;">Nessun phrasal verb trovato.</div>`
          return
        }

        updatePhrasalProgress()
        renderPhrasalQ()
      }
