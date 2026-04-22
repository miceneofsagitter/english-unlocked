      function renderVocabGrid(filter, search) {
        const grid = document.getElementById('vocabGrid')
        grid.innerHTML = ''
        document.querySelectorAll('.vocab-pagination').forEach(el => el.remove())
        let items =
          filter === 'all'
            ? ALL_VOCAB
            : ALL_VOCAB.filter(
                (v) => v.type === filter || (v.tags && v.tags.includes(filter)),
              )
        if (search) {
          const s = search.toLowerCase()
          items = items.filter(
            (v) => {
              const text = v.verb || v[v.language] || v.en || ''
              return text.toLowerCase().includes(s) ||
                (v.it && v.it.toLowerCase().includes(s)) ||
                (v.context_note && v.context_note.toLowerCase().includes(s))
            },
          )
        }
        if (items.length === 0) {
          grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:40px;color:var(--muted);font-family:'JetBrains Mono',monospace;font-size:0.85rem">Nessun risultato per "<strong>${search}</strong>"</div>`
          return
        }

        const totalPages = Math.ceil(items.length / VOCAB_PAGE_SIZE)
        vocabPage = Math.min(vocabPage, Math.max(0, totalPages - 1))
        const paged = items.slice(vocabPage * VOCAB_PAGE_SIZE, (vocabPage + 1) * VOCAB_PAGE_SIZE)

        const colors = {
          phrasal: 'var(--accent3)',
          emotion: 'var(--accent2)',
          opinion: 'var(--success)',
          idiom: 'var(--accent)',
          colloquial: '#a8ff78',
          clarification: 'var(--muted)',
          verb: '#60a5fa',
          beach: '#22d3ee',
        }
        const FLAGS = { en: '🇬🇧', es: '🇪🇸', fr: '🇫🇷' }
        const ALL_LANGS = ['en', 'es', 'fr']
        paged.forEach((item) => {
          const idx = ALL_VOCAB.indexOf(item)
          const isLearned = learned.has(idx)
          const color = colors[item.type] || 'var(--text)'
          const displayVerb = item.verb || item[item.language] || item.en
          const speakSrc = item.example_en || item[`example_${item.language}`] || displayVerb
          const exampleHtml = item.example_en
            ? `<div class="vc-example">${escHtml(item.example_en)}<br><span style="opacity:0.6;font-style:italic">${escHtml(item.example_it)}</span></div>`
            : item.context_note
              ? `<div class="vc-example" style="color:var(--muted);font-style:italic">${escHtml(item.context_note)}</div>`
              : ''

          // Widget connessioni cross-lingua via concept (priorità) o it (fallback)
          let conceptRelatedHtml = ''
          if (typeof CROSS_LANG_INDEX !== 'undefined') {
            const key = (item.concept && item.concept.trim())
              ? item.concept.trim().toLowerCase()
              : (item.it ? item.it.trim().toLowerCase() : null)
            if (key && CROSS_LANG_INDEX.has(key)) {
              const _related = CROSS_LANG_INDEX.get(key).filter(v => v.language !== item.language)
              const _seen = new Set()
              const related = _related.filter(v => { if (_seen.has(v.language)) return false; _seen.add(v.language); return true })
              if (related.length > 0) {
                const pills = related.map(v => {
                  const verb = v.verb || v[v.language] || v.en || ''
                  const flag = FLAGS[v.language] || ''
                  return `<button class="btn btn-ghost btn-sm" onclick="navigateToLangVerb('${v.language}','${escHtml(verb)}')" style="font-size:0.72rem;padding:2px 7px">${flag} ${escHtml(verb)}</button>`
                }).join('')
                conceptRelatedHtml = `<div style="margin-top:8px;padding-top:8px;border-top:1px solid var(--border);display:flex;flex-wrap:wrap;gap:4px;align-items:center"><span style="font-size:0.65rem;color:var(--muted);font-family:'JetBrains Mono',monospace">🔗</span>${pills}</div>`
              }
            }
          }

          const d = document.createElement('div')
          d.className =
            'vocab-card type-' + item.type + (isLearned ? ' learned' : '')
          d.innerHTML = `
      ${item.emoji ? `<div class="vc-emoji">${escHtml(item.emoji)}</div>` : ''}
      <div class="vc-verb" style="color:${color}">${escHtml(displayVerb)}</div>
      ${item.simple ? `<div style="font-size:0.68rem;font-family:'JetBrains Mono',monospace;color:var(--muted);margin-bottom:2px">≈ ${escHtml(item.simple)}</div>` : ''}
      <div class="vc-it">${escHtml(item.it)}</div>
      ${exampleHtml}
      ${item.tags && item.tags.length ? '<div class="vc-tags">' + item.tags.map((t) => `<span class="vc-tag" style="cursor:pointer" onclick="filterByTag('${t}')" title="Filtra: ${t}">${escHtml(t)}</span>`).join('') + '</div>' : ''}
      ${conceptRelatedHtml}
      <div class="vc-actions">
        <button class="btn btn-ghost btn-sm" onclick="speakText(this.dataset.t)" data-t="${escHtml(speakSrc)}">🔊</button>
        <label style="display:flex;align-items:center;gap:6px;cursor:pointer;font-size:0.72rem;font-family:'JetBrains Mono',monospace;color:var(--muted);margin-left:4px">
          <input type="checkbox" class="learned-check" ${isLearned ? 'checked' : ''} onchange="toggleLearned(${idx},this,event)"> imparata
        </label>
      </div>`
          grid.appendChild(d)
        })

        // Highlight card se siamo arrivati qui tramite navigateToLangVerb
        if (_pendingVerb) {
          const pv = _pendingVerb
          _pendingVerb = null
          _highlightVerbCard(pv)
        }

        if (totalPages > 1) {
          const pagHTML = `
            <button onclick="vocabGoPage(${vocabPage - 1})" ${vocabPage === 0 ? 'disabled' : ''}>←</button>
            <span>${vocabPage + 1} / ${totalPages}</span>
            <button onclick="vocabGoPage(${vocabPage + 1})" ${vocabPage >= totalPages - 1 ? 'disabled' : ''}>→</button>
          `
          const pagTop = document.createElement('div')
          pagTop.className = 'vocab-pagination vocab-pagination-top'
          pagTop.innerHTML = pagHTML
          grid.insertAdjacentElement('beforebegin', pagTop)

          const pagBottom = document.createElement('div')
          pagBottom.className = 'vocab-pagination vocab-pagination-bottom'
          pagBottom.innerHTML = pagHTML
          grid.insertAdjacentElement('afterend', pagBottom)
        }
      }

      function vocabGoPage(p) {
        vocabPage = p
        renderVocabGrid(activeFilter, activeSearch)
        document.getElementById('panel-vocab').scrollIntoView({ behavior: 'smooth', block: 'start' })
      }

      function navigateToLangVerb(targetLang, targetVerb) {
        if (currentLang !== targetLang) {
          _pendingVerb = targetVerb
          switchLang(targetLang)
          return
        }
        _highlightVerbCard(targetVerb)
      }

      function _highlightVerbCard(verb, forcePage = false) {
        requestAnimationFrame(() => {
          const targetItem = ALL_VOCAB.find(v =>
            (v.verb && v.verb === verb) ||
            (v.language && v[v.language] === verb)
          )
          if (!targetItem) return
          const itemIndex = ALL_VOCAB.indexOf(targetItem)
          if (itemIndex === -1) return
          const targetPage = Math.floor(itemIndex / VOCAB_PAGE_SIZE)
          if (forcePage || vocabPage !== targetPage) {
            vocabPage = targetPage
            renderVocabGrid(activeFilter, activeSearch)
          }
          requestAnimationFrame(() => {
            document.querySelectorAll('.vocab-card').forEach(card => {
              const verbEl = card.querySelector('.vc-verb')
              if (verbEl && verbEl.textContent.trim() === verb.trim()) {
                card.classList.add('vc-highlight')
                card.scrollIntoView({ behavior: 'smooth', block: 'center' })
                setTimeout(() => card.classList.remove('vc-highlight'), 2000)
              }
            })
          })
        })
      }

      function filterVocab(f, btn) {
        document
          .querySelectorAll('.filter-pill')
          .forEach((b) => b.classList.remove('active'))
        btn.classList.add('active')
        activeFilter = f
        vocabPage = 0
        renderVocabGrid(activeFilter, activeSearch)
      }

      function filterByTag(tag) {
        document.querySelectorAll('.filter-pill').forEach((b) => b.classList.remove('active'))
        const matchingPill = Array.from(document.querySelectorAll('.filter-pill')).find(
          (b) => b.getAttribute('onclick') && b.getAttribute('onclick').includes(`'${tag}'`)
        )
        if (matchingPill) matchingPill.classList.add('active')
        activeFilter = tag
        vocabPage = 0
        renderVocabGrid(activeFilter, activeSearch)
      }

      function searchVocab(q) {
        activeSearch = q.trim().toLowerCase()
        vocabPage = 0
        document.getElementById('searchClear').style.display = activeSearch
          ? 'block'
          : 'none'
        renderVocabGrid(activeFilter, activeSearch)
      }

      function clearSearch() {
        document.getElementById('vocabSearch').value = ''
        searchVocab('')
      }

      function toggleLearned(idx, chk, e) {
        e.stopPropagation()
        if (chk.checked) learned.add(idx)
        else learned.delete(idx)
        saveLearned()
        updateStatsUI()
        const card = chk.closest('.vocab-card')
        if (chk.checked) card.classList.add('learned')
        else card.classList.remove('learned')
        sbSyncLearned(idx, chk.checked)
      }

      // Pre-carica voci per evitare silenzio al primo click
      if (typeof speechSynthesis !== 'undefined') {
        speechSynthesis.getVoices()
        speechSynthesis.onvoiceschanged = () => speechSynthesis.getVoices()
      }

      function speakText(text, rate) { playSpeech(text, rate) }

