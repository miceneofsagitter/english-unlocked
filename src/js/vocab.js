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
        }
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
          // Widget cross-language
          const FLAGS = { en: '🇬🇧', es: '🇪🇸', fr: '🇫🇷' }
          const ALL_LANGS = ['en', 'es', 'fr']
          let crossLangHtml = ''
          if (item.concept && typeof ALL_VOCAB_FOR_EXERCISES !== 'undefined') {
            const availLangs = ALL_LANGS.filter(lang =>
              lang !== currentLang &&
              ALL_VOCAB_FOR_EXERCISES.some(v => v.concept === item.concept && v.language === lang)
            )
            if (availLangs.length > 0) {
              const btns = availLangs.map(lang =>
                `<button class="vc-cl-btn" onclick="navigateToLangConcept('${escHtml(item.concept)}','${lang}')" title="Vedi equivalente in ${lang.toUpperCase()}">${FLAGS[lang]}</button>`
              ).join('')
              crossLangHtml = `<div class="vc-crosslang"><span class="vc-cl-label">Vedi in:</span>${btns}</div>`
            }
          }

          // Widget connessioni cross-lingua via campo 'it' (collegamento principale)
          let itRelatedHtml = ''
          if (item.it && typeof ALL_VOCAB_FOR_EXERCISES !== 'undefined') {
            const itRelated = []
            ALL_LANGS.filter(lang => lang !== currentLang).forEach(lang => {
              const matches = ALL_VOCAB_FOR_EXERCISES.filter(v => v.language === lang && v.it === item.it)
              matches.forEach(m => {
                const displayText = m.verb || m[m.language] || m.en || ''
                if (displayText) itRelated.push({ lang, verb: displayText, match: m })
              })
            })
            if (itRelated.length > 0) {
              const badges = itRelated.map(r => {
                const it = r.match && r.match.it === item.it ? '' : r.match.it || ''
                return `<span class="vc-rel-badge" onclick="navigateToLangVerb('${r.lang}','${r.verb.replace(/\\/g,'\\\\').replace(/'/g,"\\'")}')">${FLAGS[r.lang]} ${escHtml(r.verb)}${it ? `<span style="opacity:0.6;font-size:0.85em"> → ${escHtml(it)}</span>` : ''}</span>`
              }).join(' · ')
              itRelatedHtml = `<div class="vc-related">🔗 ${badges}</div>`
            }
          }

          // Widget connessioni cross-lingua via campo 'en' (per phrasal EN ↔ verbi ES/FR, fallback)
          let enRelatedHtml = ''
          if (!itRelatedHtml && typeof ALL_VOCAB_FOR_EXERCISES !== 'undefined') {
            const related = []
            if (currentLang === 'en' && item.type === 'phrasal') {
              ALL_LANGS.filter(l => l !== 'en').forEach(lang => {
                const match = ALL_VOCAB_FOR_EXERCISES.find(v => v.language === lang && v.en === item.verb)
                if (match) related.push({ lang, verb: match[lang] || match.en, match })
              })
            } else if (currentLang !== 'en' && item.en) {
              const enMatch = ALL_VOCAB_FOR_EXERCISES.find(v => v.language === 'en' && v.verb === item.en)
              if (enMatch) related.push({ lang: 'en', verb: enMatch.verb, match: enMatch })
              ALL_LANGS.filter(l => l !== currentLang && l !== 'en').forEach(lang => {
                const match = ALL_VOCAB_FOR_EXERCISES.find(v => v.language === lang && v.en === item.en)
                if (match) related.push({ lang, verb: match[lang] || match.en, match })
              })
            }
            if (related.length > 0) {
              const badges = related.map(r => {
                const it = r.match ? r.match.it : ''
                return `<span class="vc-rel-badge" onclick="navigateToLangVerb('${r.lang}','${r.verb.replace(/\\/g,'\\\\').replace(/'/g,"\\'")}')">${FLAGS[r.lang]} ${escHtml(r.verb)} <span style="opacity:0.6;font-size:0.85em">${escHtml(it)}</span></span>`
              }).join(' · ')
              enRelatedHtml = `<div class="vc-related">🔗 ${badges}</div>`
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
      ${crossLangHtml}
      ${itRelatedHtml || enRelatedHtml}
      <div class="vc-actions">
        <button class="btn btn-ghost btn-sm" onclick="speakText(this.dataset.t)" data-t="${escHtml(speakSrc)}">🔊</button>
        <label style="display:flex;align-items:center;gap:6px;cursor:pointer;font-size:0.72rem;font-family:'JetBrains Mono',monospace;color:var(--muted);margin-left:4px">
          <input type="checkbox" class="learned-check" ${isLearned ? 'checked' : ''} onchange="toggleLearned(${idx},this,event)"> imparata
        </label>
      </div>`
          grid.appendChild(d)
        })

        // Highlight card se siamo arrivati qui tramite navigateToLangConcept
        if (_pendingConcept) {
          const pc = _pendingConcept
          _pendingConcept = null
          _highlightConceptCard(pc)
        }

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

      function navigateToLangConcept(concept, targetLang) {
        if (currentLang !== targetLang) {
          _pendingConcept = concept
          switchLang(targetLang)
          // switchLang → renderVocabGrid → rileva _pendingConcept → evidenzia card
          return
        }
        // Stessa lingua: trova la posizione e vai alla pagina giusta
        const targetItem = ALL_VOCAB.find(v => v.concept === concept)
        if (!targetItem) return
        const itemIndex = ALL_VOCAB.indexOf(targetItem)
        if (itemIndex === -1) return
        const targetPage = Math.floor(itemIndex / VOCAB_PAGE_SIZE)
        if (vocabPage !== targetPage) {
          vocabPage = targetPage
          renderVocabGrid(activeFilter, activeSearch)
        } else {
          _highlightConceptCard(concept)
        }
      }

      function _highlightConceptCard(concept) {
        requestAnimationFrame(() => {
          const targetItem = ALL_VOCAB.find(v => v.concept === concept)
          if (!targetItem) return
          const displayVerb = targetItem.verb || targetItem[targetItem.language] || targetItem.en
          document.querySelectorAll('.vocab-card').forEach(card => {
            const verbEl = card.querySelector('.vc-verb')
            if (verbEl && verbEl.textContent.trim() === displayVerb.trim()) {
              card.classList.add('vc-highlight')
              card.scrollIntoView({ behavior: 'smooth', block: 'center' })
              setTimeout(() => card.classList.remove('vc-highlight'), 2000)
            }
          })
        })
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

      const LANG_VOICE = { en: 'en-US', es: 'es-ES', fr: 'fr-FR' }

      // Pre-carica voci per evitare silenzio al primo click
      if (typeof speechSynthesis !== 'undefined') {
        speechSynthesis.getVoices()
        speechSynthesis.onvoiceschanged = () => speechSynthesis.getVoices()
      }

      function speakText(text, rate) {
        if (typeof speechSynthesis === 'undefined') return
        speechSynthesis.cancel()
        const doSpeak = () => {
          const u = new SpeechSynthesisUtterance(text)
          u.lang = LANG_VOICE[currentLang] || 'en-US'
          u.rate = rate || 0.9
          const voices = speechSynthesis.getVoices()
          const langCode = (LANG_VOICE[currentLang] || 'en-US').split('-')[0]
          const voice = voices.find((v) => v.lang.startsWith(langCode)) || null
          if (voice) u.voice = voice
          speechSynthesis.speak(u)
        }
        if (speechSynthesis.getVoices().length === 0) {
          setTimeout(doSpeak, 250)
        } else {
          doSpeak()
        }
      }

