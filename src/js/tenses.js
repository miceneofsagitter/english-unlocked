      let currentTenseFilter = 'all'

      function renderTensesGrid(filter) {
        const grid = document.getElementById('tensesGrid')
        if (!grid) return
        const tenses = getTenses()
        const grpColors = {
          past: 'var(--accent2)',
          present: 'var(--accent)',
          future: 'var(--accent3)',
          conditional: 'var(--success)',
        }
        const items =
          filter === 'all' ? tenses : tenses.filter((t) => t.grp === filter)
        grid.innerHTML = items
          .map(
            (t) => `
    <div class="tense-card" style="border-color:${t.color};margin-bottom:14px">
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px">
        <span style="font-size:1.3rem">${t.icon}</span>
        <div class="tense-name" style="color:${t.color}">${t.name}</div>
        <span style="margin-left:auto;font-size:0.65rem;font-family:'JetBrains Mono',monospace;color:var(--muted);text-transform:uppercase;letter-spacing:0.1em">${t.grp}</span>
      </div>
      <div style="font-size:0.72rem;font-family:'JetBrains Mono',monospace;color:${t.color};opacity:0.8;margin-bottom:8px;background:rgba(255,255,255,0.04);padding:5px 10px;border-radius:6px">${t.form}</div>
      <div class="tense-when">${t.when}</div>
      <div class="tense-ex">${t.examples.map((e) => `"${e}"`).join(' · ')}</div>
      <div style="font-size:0.78rem;color:var(--accent3);margin-top:8px;font-style:italic">🎭 ${t.animator}</div>
      ${t.phonetic ? `<div class="tense-it" style="margin-top:6px">${t.phonetic}</div>` : ''}
    </div>`,
          )
          .join('')
      }

      function filterTenses(grp, btn) {
        currentTenseFilter = grp
        document
          .querySelectorAll('#tenseFilterPills .contrast-pill')
          .forEach((b) => b.classList.remove('active'))
        btn.classList.add('active')
        renderTensesGrid(grp)
      }

      // ============================================================
      // STATO (localStorage)
      // ============================================================
      // ============================================================
      // TAB 4: TEMPI VERBALI
      // ============================================================
      let tensesIdx = []
      let tensesSessionQ = 0
      let tensesSessionCorrect = 0
      const tensesMaxQ = 10

      function resetTensesExercise() {
        tensesSessionQ = 0
        tensesSessionCorrect = 0
        document.getElementById('tensesExercise').innerHTML =
          '<button class="btn btn-accent" onclick="loadTensesEx()">INIZIA ESERCIZIO</button>'
      }

      function setContrast(c, btn) {
        tensesContrast = c
        document
          .querySelectorAll('#contrastPills .contrast-pill')
          .forEach((b) => b.classList.remove('active'))
        btn.classList.add('active')
        resetTensesExercise()
      }

      function loadTensesEx() {
        if (tensesSessionQ >= tensesMaxQ) {
          const pct = Math.round((tensesSessionCorrect / tensesMaxQ) * 100)
          document.getElementById('tensesExercise').innerHTML = `
      <div style="text-align:center;padding:20px 0">
        <div style="font-size:2rem;font-weight:800;color:var(--success);margin-bottom:8px">${tensesSessionCorrect}/${tensesMaxQ}</div>
        <div style="font-size:0.8rem;font-family:'JetBrains Mono',monospace;color:var(--muted);margin-bottom:20px">${pct}% corretto</div>
        <button class="btn btn-accent" onclick="resetTensesExercise()">↻ Ricomincia</button>
      </div>`
          return
        }

        const allEx = getTensesEx()
        const grpLabels = {
          en: {
            pp: 'PP vs Past Simple',
            cont: 'Continuous vs Simple',
            used: 'Used to / Would / PS',
            future: 'Future forms',
            cond: 'Conditional',
          },
          fr: {
            pp: 'Passé Composé vs Imparfait',
            cont: 'Présent vs Présent Continu',
            future: 'Futur',
            cond: 'Conditionnel',
          },
          es: {
            pp: 'Indefinido vs Imperfecto',
            cont: 'Presente vs Estar + Gerundio',
            future: 'Futuro',
            cond: 'Condicional',
          },
        }
        const pool =
          tensesContrast === 'all'
            ? allEx
            : allEx.filter((e) => e.grp === tensesContrast)
        if (!pool.length) {
          document.getElementById('tensesExercise').innerHTML =
            '<p style="color:var(--muted);font-family:\'JetBrains Mono\',monospace;font-size:0.85rem">Nessun esercizio per questo filtro nella lingua selezionata.</p><button class="btn btn-ghost" onclick="resetTensesExercise()" style="margin-top:12px">↩ Indietro</button>'
          tensesContrast = 'all'
          return
        }
        const ex = pool[Math.floor(Math.random() * pool.length)]
        const all = [ex.c, ...ex.w].sort(() => Math.random() - 0.5)
        const grpLabel = grpLabels[currentLang] || grpLabels.en
        tensesSessionQ++

        const container = document.getElementById('tensesExercise')
        container.innerHTML = `
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">
      <div style="font-size:0.72rem;font-family:'JetBrains Mono',monospace;color:var(--accent2);text-transform:uppercase;letter-spacing:0.08em">${grpLabel[ex.grp] || ex.grp}</div>
      <div style="display:flex;align-items:center;gap:10px">
        <span style="font-size:0.72rem;font-family:'JetBrains Mono',monospace;color:var(--muted)">${tensesSessionQ} / ${tensesMaxQ}</span>
        <button class="btn btn-ghost btn-sm" onclick="resetTensesExercise()" style="font-size:0.65rem;color:var(--muted)">■ Stop</button>
      </div>
    </div>
    <div style="font-size:1.1rem;font-weight:600;line-height:1.8;margin-bottom:16px">
      ${ex.b} <span style="color:var(--accent3);font-weight:800;letter-spacing:0.05em">[ ??? ]</span> ${ex.a}
    </div>
    <div class="quiz-options" id="tensesOpts"></div>
    <div class="feedback-box" id="tensesFb"></div>
    <button class="btn btn-ghost" onclick="loadTensesEx()" style="margin-top:16px;display:none" id="tensesNext">↻ Prossimo</button>`

        const opts = document.getElementById('tensesOpts')
        all.forEach((opt) => {
          const btn = document.createElement('button')
          btn.className = 'opt-btn'
          btn.textContent = opt
          btn.onclick = function () {
            document
              .querySelectorAll('#tensesOpts .opt-btn')
              .forEach((b) => (b.disabled = true))
            const ok = opt === ex.c
            btn.classList.add(ok ? 'correct' : 'wrong')
            if (!ok)
              [...document.querySelectorAll('#tensesOpts .opt-btn')]
                .find((b) => b.textContent === ex.c)
                .classList.add('correct')
            const fb = document.getElementById('tensesFb')
            if (ok) {
              fb.className = 'feedback-box show feedback-correct'
              fb.textContent = '✅ Esatto! — ' + ex.tip
              session.correct++
              session.streak++
              tensesSessionCorrect++
            } else {
              fb.className = 'feedback-box show feedback-wrong'
              fb.textContent = '❌ Era "' + ex.c + '" — ' + ex.tip
              session.streak = 0
            }
            session.total++
            saveSession()
            updateStatsUI()
            document.getElementById('tensesNext').style.display = 'inline-flex'
          }
          opts.appendChild(btn)
        })
      }

