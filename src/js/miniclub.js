      let miniclubFilter = 'both'
      let miniclubScenario = 'all'
      let miniclubMode = 'dialogues'
      let practiceIdx = 0
      let practiceRevealed = false
      let practiceWho = 'both'
      let practiceCategory = 'all'

      const PRACTICE_CATEGORY_LABELS = {
        pranzo: '🍽️ Pranzo', orari: '🕐 Orari', 'drop-pickup': '🚗 Arrivi/Uscite',
        allergie: '💊 Allergie', programma: '📅 Programma', iscrizione: '📋 Iscrizione',
        serata: '🌙 Serata', 'attivita-junior': '🏹 Junior/Teen', babysitting: '👶 Babysitting',
        emozioni: '💛 Emozioni', attività: '🎯 Attività', regole: '📏 Regole',
        pasti: '🥗 Pasti', luoghi: '🏕️ Luoghi',
      }

      function renderMiniclub() {
        const container = document.getElementById('miniclub-content')
        if (!container) return

        let filtered =
          miniclubFilter === 'both'
            ? MINICLUB_DIALOGUES
            : MINICLUB_DIALOGUES.filter((d) => d.audience === miniclubFilter)

        if (miniclubScenario !== 'all') {
          filtered = filtered.filter((d) => d.scenario === miniclubScenario)
        }

        const grouped = {}
        filtered.forEach((d) => {
          if (!grouped[d.audience]) grouped[d.audience] = []
          grouped[d.audience].push(d)
        })

        let html = ''

        const audienceLabel = {
          parents: '👨‍👩‍👧‍👦 Genitori',
          kids: '👧 Bambini',
        }

        Object.entries(grouped).forEach(([audience, items]) => {
          if (miniclubFilter !== 'both') {
            html += renderDialogueGroup(items)
          } else {
            html += `<h3 style="margin-top:2rem;color:var(--muted);font-size:0.95rem;text-transform:uppercase;letter-spacing:0.05em;">${audienceLabel[audience]}</h3>`
            html += renderDialogueGroup(items)
          }
        })

        container.innerHTML = html
      }

      function renderScenarioPills() {
        const pillsEl = document.getElementById('miniclub-scenario-pills')
        if (!pillsEl) return

        if (miniclubFilter === 'both') {
          pillsEl.style.display = 'none'
          return
        }

        const scenarios = MINICLUB_DIALOGUES.filter(
          (d) => d.audience === miniclubFilter
        )

        let html = `<div class="filter-pills" style="overflow-x:auto; display:flex; flex-wrap:nowrap;">`
        html += `<button class="filter-pill${miniclubScenario === 'all' ? ' active' : ''}" onclick="filterMiniclubScenario('all')">Tutti</button>`
        scenarios.forEach((d) => {
          html += `<button class="filter-pill${miniclubScenario === d.scenario ? ' active' : ''}" onclick="filterMiniclubScenario('${d.scenario}')">${d.label}</button>`
        })
        html += `</div>`

        pillsEl.innerHTML = html
        pillsEl.style.display = 'block'
        const pillsContainer = pillsEl.querySelector('.filter-pills')
        const activeBtn = pillsEl.querySelector('.filter-pill.active')
        if (pillsContainer && activeBtn) {
          pillsContainer.scrollLeft = activeBtn.offsetLeft - pillsContainer.offsetWidth / 2 + activeBtn.offsetWidth / 2
        }
      }

      function renderDialogueGroup(dialogues) {
        let html = ''
        dialogues.forEach((d) => {
          const borderColor =
            d.audience === 'parents' ? 'var(--accent)' : 'var(--accent2)'

          html += `<div style="margin-bottom:1.5rem;border-left:4px solid ${borderColor};padding-left:1rem;">`
          html += `<h3 style="margin:0 0 1rem 0;font-size:1.1rem;">${d.label}</h3>`

          d.exchanges.forEach((ex) => {
            const text =
              currentLang === 'en' ? ex.en : currentLang === 'es' ? ex.es : ex.fr
            const safeText = text.replace(/'/g, "\\'").replace(/"/g, '&quot;')

            let variantsHtml = ''
            if (ex.variants && ex.variants[currentLang] && ex.variants[currentLang].length) {
              const vlist = ex.variants[currentLang]
              const items = vlist.map(v => {
                const sv = v.replace(/'/g, "\\'").replace(/"/g, '&quot;')
                return `<div onclick="copyMiniclubText('${sv}', this)" class="mc-variant-item">↳ ${escHtml(v)}</div>`
              }).join('')
              variantsHtml = `
                <div class="mc-variants-toggle" onclick="toggleVariants(this)">+ ${vlist.length} varianti ▼</div>
                <div class="mc-variants" style="display:none;">${items}</div>`
            }

            html += `<div style="margin-bottom:0.8rem;">`
            html += `<div style="font-size:0.85rem;color:var(--muted);margin-bottom:0.3rem;">${escHtml(ex.it)}</div>`
            html += `<div onclick="copyMiniclubText('${safeText}', this)" style="font-size:1rem;padding:0.6rem;background:rgba(255,255,255,0.3);border-radius:6px;transition:all 0.2s;cursor:pointer;" title="Clicca per copiare">${escHtml(text)}</div>`
            html += variantsHtml
            html += `</div>`
          })

          html += `</div>`
        })
        return html
      }

      function toggleVariants(el) {
        const list = el.nextElementSibling
        const open = list.style.display !== 'none'
        list.style.display = open ? 'none' : 'block'
        el.textContent = open
          ? el.textContent.replace('▲', '▼')
          : el.textContent.replace('▼', '▲')
      }

      function filterMiniclub(audience, btn) {
        miniclubFilter = audience
        miniclubScenario = 'all'
        document
          .querySelectorAll('#miniclub-dialogues-section > .filter-pills button')
          .forEach((b) => b.classList.remove('active'))
        btn.classList.add('active')
        const c = btn.closest('.filter-pills')
        if (c) c.scrollLeft = btn.offsetLeft - c.offsetWidth / 2 + btn.offsetWidth / 2
        renderScenarioPills()
        renderMiniclub()
      }

      function filterMiniclubScenario(scenario) {
        miniclubScenario = scenario
        renderScenarioPills()
        renderMiniclub()
      }

      const _mcAudio = {}

      function speakMiniclub(key) {
        const text = _mcAudio[key]
        if (!text || !window.speechSynthesis) return
        const doSpeak = () => {
          speechSynthesis.cancel()
          const u = new SpeechSynthesisUtterance(text)
          u.lang = getLangCode()
          u.rate = 0.9
          const v = getBestVoice(); if (v) u.voice = v
          speechSynthesis.speak(u)
        }
        if (speechSynthesis.getVoices().length) {
          doSpeak()
        } else {
          speechSynthesis.onvoiceschanged = () => { speechSynthesis.onvoiceschanged = null; doSpeak() }
        }
      }

      function copyMiniclubText(text, el) {
        navigator.clipboard.writeText(text).then(() => {
          const orig = el.style.background
          el.style.background = 'rgba(0,229,160,0.2)'
          setTimeout(() => {
            el.style.background = orig
          }, 300)
        })
      }

      // ===== PRATICA FLASH CARD =====

      function setMiniclubMode(mode, btn) {
        miniclubMode = mode
        document.querySelectorAll('.mc-mode-btn').forEach(b => b.classList.remove('active'))
        btn.classList.add('active')

        const dialogues = document.getElementById('miniclub-dialogues-section')
        const practice = document.getElementById('miniclub-practice-section')

        if (mode === 'dialogues') {
          dialogues.style.display = 'block'
          practice.style.display = 'none'
        } else {
          dialogues.style.display = 'none'
          practice.style.display = 'block'
          practiceIdx = 0
          practiceRevealed = false
          renderPracticeCard()
        }
      }

      function getPracticeList() {
        let list = MINICLUB_PRACTICE
        if (practiceWho !== 'both') list = list.filter(c => c.who === practiceWho)
        if (practiceCategory !== 'all') list = list.filter(c => c.category === practiceCategory)
        return list
      }

      function filterPracticeWho(who, btn) {
        practiceWho = who
        practiceCategory = 'all'
        practiceIdx = 0
        practiceRevealed = false
        document.querySelectorAll('.mc-practice-who-btn').forEach(b => b.classList.remove('active'))
        btn.classList.add('active')
        renderPracticeCard()
      }

      function filterPracticeCategory(cat, btn) {
        practiceCategory = cat
        practiceIdx = 0
        practiceRevealed = false
        document.querySelectorAll('.mc-practice-cat-btn').forEach(b => b.classList.remove('active'))
        btn.classList.add('active')
        renderPracticeCard()
      }

      function renderPracticeCard() {
        const section = document.getElementById('miniclub-practice-section')
        if (!section) return

        const availableCats = [...new Set(
          MINICLUB_PRACTICE
            .filter(c => practiceWho === 'both' || c.who === practiceWho)
            .map(c => c.category)
        )]
        const catPills = availableCats.map(cat => {
          const label = PRACTICE_CATEGORY_LABELS[cat] || cat
          return `<button class="filter-pill mc-practice-cat-btn${practiceCategory === cat ? ' active' : ''}" onclick="filterPracticeCategory('${cat}', this)">${escHtml(label)}</button>`
        }).join('')

        const whoFilterHtml = `
          <div class="filter-pills" style="margin-bottom:0.75rem;">
            <button class="filter-pill mc-practice-who-btn${practiceWho === 'both' ? ' active' : ''}" onclick="filterPracticeWho('both', this)">Tutti</button>
            <button class="filter-pill mc-practice-who-btn${practiceWho === 'parents' ? ' active' : ''}" onclick="filterPracticeWho('parents', this)">👨‍👩‍👧‍👦 Genitori</button>
            <button class="filter-pill mc-practice-who-btn${practiceWho === 'kids' ? ' active' : ''}" onclick="filterPracticeWho('kids', this)">👧 Bambini</button>
          </div>
          <div class="filter-pills" style="margin-bottom:1.25rem;">
            <button class="filter-pill mc-practice-cat-btn${practiceCategory === 'all' ? ' active' : ''}" onclick="filterPracticeCategory('all', this)">Tutti i temi</button>
            ${catPills}
          </div>`

        const list = getPracticeList()
        if (!list || list.length === 0) {
          section.innerHTML = whoFilterHtml + '<p style="color:var(--muted);text-align:center;padding:2rem;">Nessuna scheda disponibile.</p>'
          return
        }

        const card = list[practiceIdx]
        const total = list.length
        const parentText = card.parent_asks[currentLang] || card.parent_asks.en
        const parentIt = card.parent_asks.it
        const speakerLabel = card.who === 'kids' ? '👧 Il bambino dice:' : '🎧 Il genitore dice:'
        _mcAudio.question = parentText

        let replyHtml = ''
        if (practiceRevealed) {
          const replyText = card.you_reply[currentLang] || card.you_reply.en
          const safeReply = replyText.replace(/'/g, "\\'").replace(/"/g, '&quot;')
          _mcAudio.reply = replyText

          let variantsHtml = ''
          if (card.variants && card.variants[currentLang] && card.variants[currentLang].length) {
            const vlist = card.variants[currentLang]
            const items = vlist.map(v => {
              const sv = v.replace(/'/g, "\\'").replace(/"/g, '&quot;')
              return `<div onclick="copyMiniclubText('${sv}', this)" class="mc-variant-item" style="text-align:left;">↳ ${escHtml(v)}</div>`
            }).join('')
            variantsHtml = `
              <div class="mc-variants-toggle" style="margin-top:0.75rem;" onclick="toggleVariants(this)">+ ${vlist.length} varianti ▼</div>
              <div class="mc-variants" style="display:none;">${items}</div>`
          }

          replyHtml = `
            <div style="margin-top:1.5rem;">
              <div style="font-size:0.8rem;color:var(--muted);margin-bottom:0.5rem;text-transform:uppercase;letter-spacing:0.05em;">Tu rispondi:</div>
              <div style="display:flex;align-items:flex-start;gap:0.75rem;">
                <div onclick="copyMiniclubText('${safeReply}', this)"
                  style="flex:1;font-size:1.05rem;padding:1rem;background:rgba(0,229,160,0.08);border:1px solid rgba(0,229,160,0.25);border-radius:10px;cursor:pointer;transition:all 0.2s;"
                  title="Tap per copiare">${escHtml(replyText)}</div>
                <button onclick="speakMiniclub('reply')" style="flex-shrink:0;background:none;border:none;font-size:1.4rem;cursor:pointer;padding:0.75rem 0 0;line-height:1;" title="Ascolta">🔊</button>
              </div>
              ${variantsHtml}
            </div>`
        } else {
          replyHtml = `
            <div style="margin-top:1.5rem;">
              <button onclick="revealPracticeReply()" class="btn btn-accent" style="width:100%;padding:0.75rem;">
                Mostra risposta ▼
              </button>
            </div>`
        }

        section.innerHTML = whoFilterHtml + `
          <div style="max-width:520px;margin:0 auto;">
            <div style="font-size:0.8rem;color:var(--muted);text-align:right;margin-bottom:1rem;">${practiceIdx + 1} / ${total}</div>
            <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1);border-radius:14px;padding:1.5rem;">
              <div style="font-size:0.8rem;color:var(--muted);margin-bottom:0.75rem;text-transform:uppercase;letter-spacing:0.05em;">${speakerLabel}</div>
              <div style="display:flex;align-items:flex-start;gap:0.75rem;">
                <div style="flex:1;font-size:1.25rem;font-weight:700;line-height:1.4;">${escHtml(parentText)}</div>
                <button onclick="speakMiniclub('question')" style="flex-shrink:0;background:none;border:none;font-size:1.4rem;cursor:pointer;padding:0;line-height:1;" title="Ascolta">🔊</button>
              </div>
              <div style="font-size:0.85rem;color:var(--muted);margin-top:0.4rem;font-style:italic;">${escHtml(parentIt)}</div>
              ${replyHtml}
            </div>
            <div style="display:flex;justify-content:space-between;align-items:center;margin-top:1.25rem;">
              <button onclick="navigatePractice(-1)" class="filter-pill" ${practiceIdx === 0 ? 'disabled style="opacity:0.3;"' : ''}>← Prec</button>
              <button onclick="navigatePractice(1)" class="filter-pill" ${practiceIdx === total - 1 ? 'disabled style="opacity:0.3;"' : ''}>Pross →</button>
            </div>
          </div>`
      }

      function revealPracticeReply() {
        practiceRevealed = true
        renderPracticeCard()
      }

      function navigatePractice(dir) {
        const list = getPracticeList()
        const newIdx = practiceIdx + dir
        if (newIdx < 0 || newIdx >= list.length) return
        practiceIdx = newIdx
        practiceRevealed = false
        renderPracticeCard()
      }

      // Render Miniclub al cambio lingua
