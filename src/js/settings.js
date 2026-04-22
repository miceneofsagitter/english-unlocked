      // ============================================================
      // TAB 5: COACH (AI opzionale)
      // ============================================================
      function getApiKey() {
        return localStorage.getItem('eu_api_key') || ''
      }

      // ============================================================
      // SETTINGS PANEL
      // ============================================================
      function openSettings() {
        document.getElementById('settingsOverlay').classList.add('open')
        document.getElementById('sb-url').value =
          localStorage.getItem('eu_sb_url') || ''
        document.getElementById('sb-key').value =
          localStorage.getItem('eu_sb_key') || ''
        document.getElementById('ant-key').value =
          localStorage.getItem('eu_api_key') || ''
        const lbl =
          { en: 'EN', es: 'ES', fr: 'FR' }[currentLang] ||
          currentLang.toUpperCase()
        const el = document.getElementById('resetLangLabel')
        if (el) el.textContent = lbl
        renderVoiceSettings()
      }

      function renderVoiceSettings() {
        const row = document.getElementById('voiceSettingsRow')
        if (!row) return
        const langs = ['en', 'es', 'fr']
        const labels = { en: '🇬🇧 EN', es: '🇪🇸 ES', fr: '🇫🇷 FR' }
        row.innerHTML = ''
        // Attendi voci disponibili
        const voices = speechSynthesis.getVoices()
        if (!voices.length) {
          row.textContent = 'Caricamento voci...'
          speechSynthesis.onvoiceschanged = () => { speechSynthesis.onvoiceschanged = null; renderVoiceSettings() }
          return
        }
        langs.forEach(lang => {
          const cfg = LANG_VOICE_CFG[lang] || LANG_VOICE_CFG.en
          const candidates = voices.filter(v => v.lang.startsWith(cfg.prefix))
          if (!candidates.length) return
          const wrap = document.createElement('div')
          wrap.style.cssText = 'display:flex;align-items:center;gap:6px;margin-bottom:6px;width:100%'
          const lbl = document.createElement('span')
          lbl.style.cssText = 'font-size:0.7rem;font-family:"JetBrains Mono",monospace;color:var(--muted);min-width:42px'
          lbl.textContent = labels[lang]
          wrap.appendChild(lbl)
          const sel = document.createElement('select')
          sel.style.cssText = 'background:var(--surface2);color:var(--text);border:1px solid var(--border);border-radius:6px;padding:3px 8px;font-size:0.7rem;font-family:"JetBrains Mono",monospace;cursor:pointer;flex:1'
          const optAuto = document.createElement('option')
          optAuto.value = ''
          optAuto.textContent = '🔊 Auto'
          sel.appendChild(optAuto)
          const savedName = localStorage.getItem('eu_voice_' + lang)
          candidates.forEach(v => {
            const opt = document.createElement('option')
            opt.value = v.name
            opt.textContent = v.name + ' [' + v.lang + ']'
            if (v.name === savedName) opt.selected = true
            sel.appendChild(opt)
          })
          sel.onchange = () => {
            if (sel.value) {
              localStorage.setItem('eu_voice_' + lang, sel.value)
            } else {
              localStorage.removeItem('eu_voice_' + lang)
            }
            const st = document.getElementById('voice-settings-status')
            if (st) { st.style.color = 'var(--success)'; st.textContent = '✓ Salvata'; setTimeout(() => { st.textContent = '' }, 1500) }
          }
          wrap.appendChild(sel)
          row.appendChild(wrap)
        })
      }
      function closeSettings() {
        document.getElementById('settingsOverlay').classList.remove('open')
      }
      function closeSettingsOutside(e) {
        if (e.target === document.getElementById('settingsOverlay'))
          closeSettings()
      }
      function markUnsaved() {
        document.getElementById('settings-status').textContent = ''
      }

      function switchStab(id, btn) {
        document
          .querySelectorAll('.stab')
          .forEach((b) => b.classList.remove('active'))
        document
          .querySelectorAll('.stab-panel')
          .forEach((p) => p.classList.remove('active'))
        btn.classList.add('active')
        document.getElementById('stab-' + id).classList.add('active')
      }

      function resetStats() {
        const lang = currentLang
        const langLabel =
          { en: 'EN', es: 'ES', fr: 'FR' }[lang] || lang.toUpperCase()
        if (
          !confirm(
            `Azzera statistiche per ${langLabel}?\nVerranno perse le parole imparate e i dati quiz. Supabase non viene modificato.`,
          )
        )
          return
        localStorage.removeItem('eu_learned_' + lang)
        localStorage.removeItem('eu_stats_' + lang)
        learned = new Set()
        stats = {}
        session = { streak: 0, correct: 0, total: 0 }
        saveSession()
        updateStatsUI()
        renderVocabGrid(activeFilter, activeSearch)
        showStatus(document.getElementById('reset-status'), '✓ Statistiche azzerate', 'ok', 3000)
      }

      function saveSettings() {
        const url = document.getElementById('sb-url').value.trim()
        const key = document.getElementById('sb-key').value.trim()
        const ant = document.getElementById('ant-key').value.trim()
        if (url) localStorage.setItem('eu_sb_url', url)
        if (key) localStorage.setItem('eu_sb_key', key)
        if (ant) localStorage.setItem('eu_api_key', ant)
        const st = document.getElementById('settings-status')
        st.style.color = 'var(--success)'
        st.textContent = '✓ Salvato'
        sbInit()
      }

      // Boot
      window.addEventListener('load', () => {
        sbInit()
        initVoices()
      })

      let sb = null
      let vocabIds = JSON.parse(
        localStorage.getItem('eu_vocab_ids_' + currentLang) || 'null',
      ) // {idx: uuid}

      function sbInit() {
        const url = localStorage.getItem('eu_sb_url')
        const key = localStorage.getItem('eu_sb_key')
        if (url && key && window.supabase) {
          sb = window.supabase.createClient(url, key)
          return true
        }
        return false
      }

      async function importVocabToSupabase() {
        const st = document.getElementById('import-status')
        st.style.display = 'block'
        if (!sb) {
          st.style.background = 'rgba(255,77,109,0.1)'
          st.style.color = 'var(--error)'
          st.textContent = '❌ Salva prima le credenziali Supabase.'
          return
        }
        st.style.background = 'rgba(255,190,11,0.08)'
        st.style.color = 'var(--muted)'
        st.textContent = '⏳ Sync in corso...'

        const source =
          typeof ALL_VOCAB_FOR_EXERCISES !== 'undefined'
            ? ALL_VOCAB_FOR_EXERCISES
            : ALL_VOCAB
        const rows = source.map((v) => ({
          verb: v.verb || v.en,
          type: v.type,
          language: v.language || 'en',
          it: v.it,
          example_en: v.example_en || '',
          example_it: v.example_it || '',
          tags: v.tags || [],
        }))

        // Dedup by (verb, type, language)
        const seen = new Map()
        rows.forEach((r) => {
          const k = r.verb + '|' + r.type + '|' + r.language
          if (!seen.has(k)) seen.set(k, r)
        })
        const uniqueRows = [...seen.values()]

        const { data, error } = await sb
          .from('vocabulary')
          .upsert(uniqueRows, { onConflict: 'verb,type,language' })
          .select('id,verb,type,language')
        if (error) {
          st.style.background = 'rgba(255,77,109,0.1)'
          st.style.color = 'var(--error)'
          st.textContent = '❌ ' + error.message
          return
        }

        // Salva vocabIds per lingua
        const byLang = {}
        data.forEach((row) => {
          const lang = row.language || 'en'
          if (!byLang[lang]) byLang[lang] = {}
          const idx = (
            lang === currentLang
              ? ALL_VOCAB
              : source.filter((v) => v.language === lang)
          ).findIndex((v) => v.verb === row.verb && v.type === row.type)
          if (idx >= 0) byLang[lang][idx] = row.id
        })
        Object.entries(byLang).forEach(([lang, ids]) => {
          localStorage.setItem('eu_vocab_ids_' + lang, JSON.stringify(ids))
        })
        vocabIds = byLang[currentLang] || null

        st.style.background = 'rgba(0,229,160,0.1)'
        st.style.color = 'var(--success)'
        st.textContent = '✓ ' + data.length + ' voci sincronizzate.'
      }

      async function pullVocabFromSupabase() {
        const st = document.getElementById('pull-status')
        st.style.display = 'block'
        if (!sb) {
          st.style.background = 'rgba(255,77,109,0.1)'
          st.style.color = 'var(--error)'
          st.textContent = '❌ Salva prima le credenziali Supabase.'
          return
        }
        st.style.background = 'rgba(255,190,11,0.08)'
        st.style.color = 'var(--muted)'
        st.textContent = '⏳ Fetch da Supabase...'

        const lang = currentLang
        const varNames = { en: 'EN_VOCAB', es: 'ES_VOCAB', fr: 'FR_VOCAB' }
        const fileNames = { en: 'vocab-en.js', es: 'vocab-es.js', fr: 'vocab-fr.js' }

        const { data, error } = await sb
          .from('vocabulary')
          .select('*')
          .eq('language', lang)

        if (error) {
          st.style.background = 'rgba(255,77,109,0.1)'
          st.style.color = 'var(--error)'
          st.textContent = '❌ ' + error.message
          return
        }

        const allVocabSource =
          typeof ALL_VOCAB_FOR_EXERCISES !== 'undefined'
            ? ALL_VOCAB_FOR_EXERCISES
            : ALL_VOCAB

        const localSource = allVocabSource.filter((v) => v.language === lang)

        // Set verbi EN per bloccare intrusi in file non-EN
        const enVerbs = new Set(
          allVocabSource
            .filter((v) => v.language === 'en')
            .map((v) => v.verb.toLowerCase().trim())
        )

        const localKeys = new Set(
          localSource.map((v) => v.verb + '|' + v.type + '|' + v.language),
        )

        const rejected = []
        const newEntries = data
          .filter((r) => {
            if (localKeys.has(r.verb + '|' + r.type + '|' + r.language)) return false
            if (!r.verb || !r.type || !r.it) { rejected.push(r.verb + ' (campi mancanti)'); return false }
            if (lang !== 'en' && enVerbs.has(r.verb.toLowerCase().trim())) { rejected.push(r.verb + ' (verb EN in file non-EN)'); return false }
            return true
          })
          .map((r) => ({
            language: r.language,
            type: r.type,
            verb: r.verb,
            emoji: r.emoji || '📝',
            simple: r.simple || '',
            it: r.it || '',
            example_en: r.example_en || '',
            example_it: r.example_it || '',
            tags: Array.isArray(r.tags) ? r.tags : [r.type],
            context_note: r.context_note || '',
            concept: r.concept || '',
          }))

        if (rejected.length) {
          console.warn('Pull: voci scartate dalla validazione:', rejected)
        }

        if (newEntries.length === 0) {
          st.style.background = 'rgba(0,229,160,0.1)'
          st.style.color = 'var(--success)'
          st.textContent = '✓ Nessuna voce mancante — già in sync.'
          return
        }

        const all = [...localSource, ...newEntries]
        const varName = varNames[lang]
        const fileName = fileNames[lang]
        const js =
          `// VOCABOLARIO ${lang.toUpperCase()}\nconst ${varName} = ` +
          JSON.stringify(all, null, 2) +
          ';\n'
        const blob = new Blob([js], { type: 'application/javascript' })
        const a = document.createElement('a')
        a.href = URL.createObjectURL(blob)
        a.download = fileName
        a.click()

        st.style.background = 'rgba(0,229,160,0.1)'
        st.style.color = 'var(--success)'
        st.textContent =
          '✓ ' +
          newEntries.length +
          ` voci nuove → ${fileName} scaricato. Sostituisci src/data/${fileName}`
      }

      async function addVocabEntry() {
        const st = document.getElementById('add-vocab-status')
        if (!sb) {
          st.style.color = 'var(--error)'
          st.textContent = '❌ Salva prima le credenziali Supabase.'
          return
        }
        const verb = document.getElementById('nv-verb').value.trim()
        const it = document.getElementById('nv-it').value.trim()
        if (!verb || !it) {
          st.style.color = 'var(--error)'
          st.textContent = '❌ Espressione e traduzione obbligatorie.'
          return
        }
        const row = {
          verb,
          it,
          type: document.getElementById('nv-type').value,
          language: document.getElementById('nv-lang').value,
          example_en: document.getElementById('nv-ex-en').value.trim(),
          example_it: document.getElementById('nv-ex-it').value.trim(),
          tags: document
            .getElementById('nv-tags')
            .value.split(',')
            .map((t) => t.trim())
            .filter(Boolean),
        }
        const { data, error } = await sb
          .from('vocabulary')
          .upsert([row], { onConflict: 'verb,type,language' })
          .select('id,verb,type,language')
        if (error) {
          st.style.color = 'var(--error)'
          st.textContent = '❌ ' + error.message
          return
        }
        st.style.color = 'var(--success)'
        st.textContent = '✓ "' + verb + '" aggiunto!'
        ;['nv-verb', 'nv-it', 'nv-ex-en', 'nv-ex-it', 'nv-tags'].forEach(
          (id) => (document.getElementById(id).value = ''),
        )
        // Aggiorna vocab locale se stessa lingua
        if (row.language === currentLang) {
          ALL_VOCAB.push({ ...row, context_note: row.example_en || '' })
          renderVocabGrid('all')
          updateStatsUI()
        }
      }

      async function sbSyncLearned(idx, isLearned) {
        if (!sb || !vocabIds || !vocabIds[idx]) return
        const s = stats[idx] || { seen: 0, correct: 0 }
        await sb.from('vocab_stats').upsert(
          {
            vocab_id: vocabIds[idx],
            learned: isLearned,
            times_seen: s.seen,
            times_correct: s.correct,
            last_seen: new Date().toISOString(),
          },
          { onConflict: 'vocab_id' },
        )
      }

      async function sbSyncStat(idx) {
        if (!sb || !vocabIds || !vocabIds[idx]) return
        const s = stats[idx] || { seen: 0, correct: 0 }
        const isLearned = learned.has(idx)
        await sb.from('vocab_stats').upsert(
          {
            vocab_id: vocabIds[idx],
            learned: isLearned,
            times_seen: s.seen,
            times_correct: s.correct,
            last_seen: new Date().toISOString(),
          },
          { onConflict: 'vocab_id' },
        )
      }

      async function loadProgressFromSupabase() {
        const st = document.getElementById('sync-status')
        if (!sb || !vocabIds) {
          showStatus(st, '❌ Mancano credenziali o vocab non importato.', 'err')
          return
        }
        showStatus(st, '⏳ Caricamento...', 'wait')
        const ids = Object.values(vocabIds)
        const { data, error } = await sb
          .from('vocab_stats')
          .select('*')
          .in('vocab_id', ids)
        if (error) {
          st.style.color = 'var(--error)'
          st.textContent = '❌ ' + error.message
          return
        }

        const idToIdx = {}
        Object.entries(vocabIds).forEach(
          ([i, id]) => (idToIdx[id] = parseInt(i)),
        )
        learned = new Set()
        stats = {}
        data.forEach((row) => {
          const idx = idToIdx[row.vocab_id]
          if (idx === undefined) return
          if (row.learned) learned.add(idx)
          stats[idx] = { seen: row.times_seen, correct: row.times_correct }
        })
        saveLearned()
        saveStats()
        updateStatsUI()
        renderVocabGrid('all')
        showStatus(st, '✓ Progressi caricati (' + data.length + ' voci).')
      }

      async function pushAllProgressToSupabase() {
        const st = document.getElementById('sync-status')
        if (!sb || !vocabIds) {
          showStatus(st, '❌ Mancano credenziali o vocab non importato.', 'err')
          return
        }
        showStatus(st, '⏳ Invio in corso...', 'wait')
        const rows = Object.entries(vocabIds).map(([idx, id]) => {
          const s = stats[idx] || { seen: 0, correct: 0 }
          return {
            vocab_id: id,
            learned: learned.has(parseInt(idx)),
            times_seen: s.seen,
            times_correct: s.correct,
            last_seen: new Date().toISOString(),
          }
        })
        const { error } = await sb
          .from('vocab_stats')
          .upsert(rows, { onConflict: 'vocab_id' })
        if (error) {
          showStatus(st, '❌ ' + error.message, 'err')
          return
        }
        showStatus(st, '✓ ' + rows.length + ' voci sincronizzate.')
      }

      // ── Diagnosi voci ─────────────────────────────────────────────
      function diagnoseVoices() {
        const out = document.getElementById('voice-diag')
        if (!out) return
        const voices = speechSynthesis.getVoices()
        if (!voices.length) { out.textContent = '⚠ Nessuna voce caricata ancora — riprova fra 1s'; return }
        const cfg = LANG_VOICE_CFG[currentLang] || LANG_VOICE_CFG.en
        const relevant = voices.filter(v => v.lang.startsWith(cfg.prefix))
        const best = getBestVoice()
        const lines = [`Lingua: ${currentLang} | prefix: ${cfg.prefix} | totale: ${voices.length} | rilevanti: ${relevant.length}`, `→ MIGLIORE: ${best ? best.name + ' [' + best.lang + ']' : 'nessuna'}`, '']
        relevant.forEach(v => {
          const mark = best && v.name === best.name ? '★ ' : '  '
          lines.push(mark + v.name + ' [' + v.lang + ']' + (v.localService ? ' LOCAL' : ' NETWORK'))
        })
        out.textContent = lines.join('\n')
      }

      // ============================================================
      // CLAUDE API
      // ============================================================
