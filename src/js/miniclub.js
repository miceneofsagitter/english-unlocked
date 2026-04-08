      let miniclubFilter = 'both'
      let miniclubScenario = 'all'

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

        let html = `<div class="filter-pills" style="flex-wrap:wrap;">`
        html += `<button class="filter-pill${miniclubScenario === 'all' ? ' active' : ''}" onclick="filterMiniclubScenario('all')">Tutti</button>`
        scenarios.forEach((d) => {
          html += `<button class="filter-pill${miniclubScenario === d.scenario ? ' active' : ''}" onclick="filterMiniclubScenario('${d.scenario}')">${d.label}</button>`
        })
        html += `</div>`

        pillsEl.innerHTML = html
        pillsEl.style.display = 'block'
      }

      function renderDialogueGroup(dialogues) {
        let html = ''
        dialogues.forEach((d) => {
          const bgColor =
            d.audience === 'parents'
              ? 'rgba(59,130,246,0.05)'
              : 'rgba(249,115,22,0.05)'
          const borderColor =
            d.audience === 'parents' ? 'var(--accent)' : 'var(--accent2)'

          html += `<div style="margin-bottom:1.5rem;border-left:4px solid ${borderColor};padding-left:1rem;">`
          html += `<h3 style="margin:0 0 1rem 0;font-size:1.1rem;">${d.label}</h3>`

          d.exchanges.forEach((ex) => {
            const text =
              currentLang === 'en'
                ? ex.en
                : currentLang === 'es'
                  ? ex.es
                  : ex.fr
            html += `<div style="margin-bottom:0.8rem;cursor:pointer;" onclick="copyMiniclubText('${text.replace(/'/g, "\\'")}', this)" title="Clicca per copiare">`
            html += `<div style="font-size:0.85rem;color:var(--muted);margin-bottom:0.3rem;">${ex.it}</div>`
            html += `<div style="font-size:1rem;padding:0.6rem;background:rgba(255,255,255,0.3);border-radius:6px;transition:all 0.2s;">${text}</div>`
            html += `</div>`
          })

          html += `</div>`
        })
        return html
      }

      function filterMiniclub(audience, btn) {
        miniclubFilter = audience
        miniclubScenario = 'all'
        document
          .querySelectorAll('#panel-miniclub > .panel-content > .filter-pills button')
          .forEach((b) => b.classList.remove('active'))
        btn.classList.add('active')
        renderScenarioPills()
        renderMiniclub()
      }

      function filterMiniclubScenario(scenario) {
        miniclubScenario = scenario
        renderScenarioPills()
        renderMiniclub()
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

      // Render Miniclub al cambio lingua
