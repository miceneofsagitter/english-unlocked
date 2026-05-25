      // ============================================================
      // PHRASAL VERB QUIZ
      // ============================================================

      let phrasalPool = []
      let phrasalFullPool = []  // tutti i PV, usato per i distrattori
      let phrasalIdx = 0
      let phrasalScore = { correct: 0, total: 0 }
      let phrasalAnswered = false
      let phrasalSearchQuery = ''
      let phrasalFocusMode = false  // true = quiz su verbo singolo

      const PHRASAL_ROUNDS_FOCUSED = 5  // quante volte testare il verbo scelto

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

      function blankSentence(sentence, verb) {
        const base = getBaseVerb(verb)
        const re = new RegExp(verb.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'i')
        if (re.test(sentence)) {
          return sentence.replace(re, base + ' <span class="phrasal-blank">___</span>')
        }
        const baseRe = new RegExp('\\b' + base + '\\b', 'i')
        if (baseRe.test(sentence)) {
          return sentence.replace(baseRe, base + ' <span class="phrasal-blank">___</span>')
        }
        return sentence + ' (' + base + ' <span class="phrasal-blank">___</span>)'
      }

      function pick3WrongParticles(current, _pool) {
        const correct = getParticle(current.verb)
        // usa sempre il pool completo per avere abbastanza distrattori
        const src = phrasalFullPool.length ? phrasalFullPool : _pool
        const others = shuffle(src.filter(v => getParticle(v.verb) !== correct))
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
        // fallback se ci sono meno di 3 particelle uniche
        const fallback = ['up', 'down', 'off', 'out', 'on', 'in', 'back', 'away', 'over', 'through']
        while (result.length < 3) {
          const p = fallback.find(f => f !== correct && !result.includes(f))
          if (p) result.push(p)
          else break
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
            <button class="btn btn-accent" onclick="nextPhrasa()">${phrasalIdx + 1 >= phrasalPool.length ? 'Fine →' : 'Prossimo →'}</button>
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
        const item = phrasalPool[phrasalIdx]
        if (chosen === correct) {
          phrasalScore.correct++
          if (fb) fb.innerHTML = `<span style="color:var(--success);">✅ ${item.verb.toUpperCase()}</span>${item.example_it ? `<div style="color:var(--muted);font-size:0.82rem;margin-top:0.3rem;">${item.example_it}</div>` : ''}`
        } else {
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
        const focusItem = phrasalFocusMode ? phrasalPool[0] : null
        document.getElementById('phrasal-card').innerHTML = `
          <div style="text-align:center; padding:2rem 0;">
            <div style="font-size:3rem; margin-bottom:1rem;">${pct >= 80 ? '🏆' : pct >= 50 ? '💪' : '📚'}</div>
            <div style="font-size:1.5rem; font-weight:700; margin-bottom:0.5rem;">${phrasalFocusMode ? (focusItem ? focusItem.verb.toUpperCase() : '') : 'Pool completato!'}</div>
            <div style="color:var(--muted); margin-bottom:2rem;">${phrasalScore.correct} / ${phrasalScore.total} corrette (${pct}%)</div>
            <div style="display:flex; gap:0.75rem; justify-content:center; flex-wrap:wrap;">
              ${phrasalFocusMode ? `<button class="btn btn-accent" onclick="startFocusedQuiz(phrasalPool[0])">Riprova ↺</button>` : `<button class="btn btn-accent" onclick="startAllQuiz()">Ricomincia 🔄</button>`}
              <button class="btn" onclick="initPhrasalTab()" style="background:rgba(255,255,255,0.07);">← Scegli verbo</button>
            </div>
          </div>
        `
        document.getElementById('phrasal-progress-card').style.display = 'none'
      }

      // ── SCHERMATA SELEZIONE ─────────────────────────────────────

      function renderPhrasalSelect() {
        const lang = typeof currentLang !== 'undefined' ? currentLang : 'en'
        if (lang !== 'en') {
          document.getElementById('phrasal-card').innerHTML = `
            <div style="text-align:center; padding:3rem 1rem; color:var(--muted);">
              <div style="font-size:2.5rem; margin-bottom:1rem;">🇬🇧</div>
              <div>I phrasal verbs sono un concetto inglese.<br>Passa alla lingua <strong>EN</strong> per fare questo quiz.</div>
            </div>
          `
          return
        }

        phrasalFullPool = buildPhrasalPool()
        if (!phrasalFullPool.length) {
          document.getElementById('phrasal-card').innerHTML = `<div style="text-align:center; color:var(--muted); padding:2rem;">Nessun phrasal verb trovato.</div>`
          return
        }

        // ordine alfabetico per selezione
        const sorted = [...phrasalFullPool].sort((a, b) => a.verb.localeCompare(b.verb))

        document.getElementById('phrasal-progress-card').style.display = 'none'
        document.getElementById('phrasal-subtitle').textContent = 'Scegli un verbo o allenati su tutti'

        const q = phrasalSearchQuery.toLowerCase()
        const filtered = q
          ? sorted.filter(v => v.verb.toLowerCase().includes(q) || v.it.toLowerCase().includes(q))
          : sorted

        document.getElementById('phrasal-card').innerHTML = `
          <div style="margin-bottom:1rem;">
            <input
              id="phrasal-search"
              type="text"
              placeholder="Cerca verbo o significato IT…"
              value="${phrasalSearchQuery}"
              oninput="phrasalSearchQuery=this.value; renderPhrasalSelect()"
              style="width:100%; box-sizing:border-box; background:rgba(255,255,255,0.07); border:1.5px solid rgba(255,255,255,0.15); border-radius:10px; padding:0.6rem 0.9rem; color:var(--text); font-size:0.95rem; outline:none; font-family:'JetBrains Mono',monospace;"
            />
          </div>

          <div style="max-height:55vh; overflow-y:auto; margin-bottom:1rem; scrollbar-width:thin;">
            ${filtered.length === 0 ? `<div style="text-align:center; color:var(--muted); padding:1.5rem;">Nessun risultato</div>` :
              filtered.map(v => `
                <div onclick="startFocusedQuiz(phrasalFullPool.find(x=>x.verb===\`${v.verb.replace(/`/g, '\\`')}\`))"
                  style="display:flex; align-items:center; gap:0.75rem; padding:0.65rem 0.75rem; border-radius:10px; cursor:pointer; transition:background 0.15s; margin-bottom:0.3rem;"
                  onmouseover="this.style.background='rgba(255,255,255,0.08)'"
                  onmouseout="this.style.background='transparent'">
                  <span style="font-size:1.3rem; flex-shrink:0;">${v.emoji || '🔗'}</span>
                  <div style="flex:1; min-width:0;">
                    <div style="font-weight:600; color:var(--accent3); font-size:0.95rem;">${v.verb}</div>
                    <div style="color:var(--muted); font-size:0.78rem; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${v.it}</div>
                  </div>
                  <span style="color:var(--muted); font-size:0.9rem; flex-shrink:0;">›</span>
                </div>
              `).join('')
            }
          </div>

          <div style="text-align:center; padding-top:0.5rem; border-top:1px solid rgba(255,255,255,0.08);">
            <button class="btn btn-accent" onclick="startAllQuiz()" style="width:100%;">
              🎲 Quiz su tutti (${phrasalFullPool.length})
            </button>
          </div>
        `

        // focus automatico sulla search se già aveva testo
        if (phrasalSearchQuery) {
          const inp = document.getElementById('phrasal-search')
          if (inp) { inp.focus(); inp.selectionStart = inp.selectionEnd = inp.value.length }
        }
      }

      // ── AVVIO QUIZ ──────────────────────────────────────────────

      function startFocusedQuiz(item) {
        if (!item) return
        phrasalFocusMode = true
        // ripete il verbo N volte nel pool (distrattori sempre dal pool completo)
        phrasalPool = Array(PHRASAL_ROUNDS_FOCUSED).fill(item)
        phrasalIdx = 0
        phrasalScore = { correct: 0, total: 0 }
        phrasalAnswered = false

        const focusEl = document.getElementById('phrasal-focus-label')
        if (focusEl) focusEl.textContent = item.verb
        document.getElementById('phrasal-progress-card').style.display = 'block'
        document.getElementById('phrasal-subtitle').textContent = 'Focus: ' + item.verb

        updatePhrasalProgress()
        renderPhrasalQ()
      }

      function startAllQuiz() {
        phrasalFocusMode = false
        phrasalPool = buildPhrasalPool()
        phrasalIdx = 0
        phrasalScore = { correct: 0, total: 0 }
        phrasalAnswered = false

        const focusEl = document.getElementById('phrasal-focus-label')
        if (focusEl) focusEl.textContent = ''
        document.getElementById('phrasal-progress-card').style.display = 'block'
        document.getElementById('phrasal-subtitle').textContent = 'Quiz su tutti'

        if (!phrasalPool.length) {
          document.getElementById('phrasal-card').innerHTML = `<div style="text-align:center; color:var(--muted); padding:2rem;">Nessun phrasal verb trovato.</div>`
          return
        }

        updatePhrasalProgress()
        renderPhrasalQ()
      }

      function initPhrasalTab() {
        phrasalSearchQuery = ''
        renderPhrasalSelect()
      }
