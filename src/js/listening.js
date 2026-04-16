      // ============================================================
      // TAB 3: LISTENING
      // ============================================================
      let currentSentence = null
      let currentSpeed = 'med'
      let sentenceIndex = -1
      let currentMode = 'standard' // 'standard' | 'progressivo' | 'shadowing'
      let selectedVoice = null  // override sessione (null = usa Settings/Auto)
      let isSpeakingMulti = false
      let phoneticPreviewOn = false

      const MODE_DESC = {
        standard:
          'Ascolta · scrivi quello che senti · scopri perché è difficile',
        progressivo:
          '① 0.4x → ② 0.65x → ③ 1.0x — stessa frase 3 volte a velocità crescente',
        shadowing:
          '◎ 3 ripetizioni con 2.5s di pausa — ascolta e ripeti ogni volta ad alta voce',
      }

      function setMode(m) {
        currentMode = m
        ;['standard', 'progressivo', 'shadowing'].forEach((x) =>
          document
            .getElementById('mode-' + x)
            .classList.toggle('active', x === m),
        )
        document.getElementById('modeDesc').textContent = MODE_DESC[m]
        document.getElementById('speedBtnRow').style.display =
          m === 'standard' ? 'flex' : 'none'
        const badge = document.getElementById('speedBadge')
        if (m === 'standard') {
          setSpeed(currentSpeed)
        } else if (m === 'progressivo') {
          badge.className = 'speed-badge speed-med'
          badge.textContent = '① → ② → ③'
        } else {
          badge.className = 'speed-badge speed-med'
          badge.textContent = '◎ × 3'
        }
        if (isSpeakingMulti) {
          speechSynthesis.cancel()
          isSpeakingMulti = false
          resetSpeakBtn()
        }
      }

      function setSpeed(s) {
        currentSpeed = s
        ;['slow', 'med', 'fast'].forEach(
          (x) =>
            (document.getElementById('spd-' + x).className =
              'speed-btn' + (x === s ? ' sel-' + x : '')),
        )
        const labels = { slow: '🟢 LENTO', med: '⚡ MEDIO', fast: '🔥 VELOCE' }
        const cls = { slow: 'speed-slow', med: 'speed-med', fast: 'speed-fast' }
        const badge = document.getElementById('speedBadge')
        badge.className = 'speed-badge ' + cls[s]
        badge.textContent = labels[s]
      }

      function setModeBadge(text, cls) {
        const b = document.getElementById('speedBadge')
        b.className = 'speed-badge ' + (cls || 'speed-med')
        b.textContent = text
      }

      function resetSpeakBtn() {
        const btn = document.getElementById('speakBtn')
        btn.classList.remove('speaking')
        btn.textContent = '🔊'
      }

      // LANG_VOICE_CFG / getLangCode / getBestVoice → definiti in core.js
      function getSentences() {
        return SENTENCES.filter(s => (s.lang || 'en') === currentLang)
      }

      // ── Selettore accento con bandierine ─────────────────────────
      // Ogni pill = accent region → sceglie la voce migliore (Enhanced first) per quella regione
      // "Auto" pill = usa Settings/getBestVoice() senza override
      function _getBestVoiceForRegion(key) {
        const candidates = speechSynthesis.getVoices().filter(v => v.lang.startsWith(key))
        // 1. Voce preferita curata per questa regione (iOS Enhanced senza bisogno del nome)
        const prefName = PREFERRED_VOICES[key]
        if (prefName) {
          const v = candidates.find(v => v.name === prefName)
          if (v) return v
        }
        // 2. Voce salvata in Settings se è di questa regione
        const savedName = localStorage.getItem('eu_voice_' + currentLang)
        if (savedName) {
          const saved = candidates.find(v => v.name === savedName)
          if (saved) return saved
        }
        // 3. Enhanced/Premium (macOS)
        const enhanced = candidates.find(v => /enhanced|premium/i.test(v.name))
        if (enhanced) return enhanced
        return candidates[0] || null
      }

      function _renderAccentPills() {
        const cfg = LANG_VOICE_CFG[currentLang] || LANG_VOICE_CFG.en
        const row = document.getElementById('voiceAccentRow')
        if (!row) return
        selectedVoice = null
        row.innerHTML = ''
        // Mostra pill solo per regioni con voce preferita installata (Audrey, Amélie, Monica, Samantha)
        const voices = speechSynthesis.getVoices()
        const available = cfg.keys.filter(key => {
          const prefName = PREFERRED_VOICES[key]
          return prefName && voices.some(v => v.name === prefName && v.lang.startsWith(key))
        })
        if (!available.length) return

        // Pill "Auto" (attiva di default)
        const autoBtn = document.createElement('button')
        autoBtn.className = 'voice-pill active'
        autoBtn.textContent = '⚙ Auto'
        autoBtn.onclick = () => {
          selectedVoice = null
          row.querySelectorAll('.voice-pill').forEach(b => b.classList.remove('active'))
          autoBtn.classList.add('active')
        }
        row.appendChild(autoBtn)

        // Pill per ogni regione disponibile
        available.forEach(key => {
          const btn = document.createElement('button')
          btn.className = 'voice-pill'
          btn.textContent = (cfg.flags[key] || '🌐') + ' ' + key.split('-')[1]
          btn.onclick = () => {
            selectedVoice = _getBestVoiceForRegion(key)
            row.querySelectorAll('.voice-pill').forEach(b => b.classList.remove('active'))
            btn.classList.add('active')
          }
          row.appendChild(btn)
        })
      }

      function initVoices() {
        speechSynthesis.onvoiceschanged = _renderAccentPills
        _renderAccentPills()
      }
      function reinitVoices() {
        sentenceIndex = -1
        currentSentence = null
        _renderAccentPills()
        const lbl = document.getElementById('listeningLangLabel')
        if (lbl) {
          const names = { en: 'inglese', es: 'spagnolo', fr: 'francese' }
          lbl.textContent = 'scrivi in ' + (names[currentLang] || currentLang)
        }
      }

      // ── Anteprima fonetica ────────────────────────────────────────
      function applyPhoneticPreview() {
        if (!currentSentence) return
        const el = document.getElementById('sentEN')
        if (!phoneticPreviewOn) {
          el.textContent = currentSentence.en
          el.className = 'sentence-en hidden-text'
          return
        }
        const linked = currentSentence.linked || []
        const html = currentSentence.en
          .split(' ')
          .map((w) => {
            const clean = w.replace(/[^a-zA-Z']/g, '').toLowerCase()
            const info = linked.find((l) => l.w.toLowerCase() === clean)
            return info && info.how && info.how !== '(fused)'
              ? `<span class="phon-preview-word">${escHtml(w)}<span class="phon-hint">${escHtml(info.how)}</span></span>`
              : escHtml(w)
          })
          .join(' ')
        el.innerHTML = html
        el.className = 'sentence-en revealed'
      }

      // ── Carica frase ─────────────────────────────────────────────
      function loadNextSentence() {
        document.getElementById('phoneticCard').style.display = 'none'
        document.getElementById('listeningFeedback').className = 'feedback-box'
        document.getElementById('listeningInput').value = ''
        if (isSpeakingMulti) {
          speechSynthesis.cancel()
          isSpeakingMulti = false
          resetSpeakBtn()
        }
        const pool = getSentences()
        if (!pool.length) {
          document.getElementById('sentCtx').textContent = '⚠️ Nessuna frase per questa lingua'
          return
        }
        sentenceIndex = (sentenceIndex + 1) % pool.length
        currentSentence = pool[sentenceIndex]
        const ctx = document.getElementById('sentCtx')
        ctx.textContent = '📍 ' + currentSentence.ctx
        ctx.style.display = 'block'
        document.getElementById('sentIT').textContent = ''
        applyPhoneticPreview()
      }

      // ── Speech helpers ────────────────────────────────────────────
      function speakPromise(text, rate) {
        return new Promise((resolve) => {
          const u = new SpeechSynthesisUtterance(text)
          u.lang = getLangCode()
          u.rate = rate
          const v = getBestVoice(selectedVoice); if (v) u.voice = v
          u.onend = resolve
          u.onerror = resolve
          speechSynthesis.speak(u)
        })
      }
      function sleepMs(ms) {
        return new Promise((r) => setTimeout(r, ms))
      }

      async function speakProgressive() {
        isSpeakingMulti = true
        const btn = document.getElementById('speakBtn')
        btn.classList.add('speaking')
        btn.textContent = '⏸'
        const steps = [
          { r: 0.4, label: '① SUPER LENTO', cls: 'speed-slow' },
          { r: 0.65, label: '② LENTO', cls: 'speed-slow' },
          { r: 1.0, label: '③ NATURALE', cls: 'speed-fast' },
        ]
        for (const s of steps) {
          if (!isSpeakingMulti) break
          setModeBadge(s.label, s.cls)
          await speakPromise(currentSentence.en, s.r)
          if (isSpeakingMulti) await sleepMs(1400)
        }
        if (isSpeakingMulti) setModeBadge('✓ FATTO', 'speed-med')
        isSpeakingMulti = false
        resetSpeakBtn()
      }

      async function speakShadowing() {
        isSpeakingMulti = true
        const btn = document.getElementById('speakBtn')
        btn.classList.add('speaking')
        btn.textContent = '⏸'
        for (let i = 1; i <= 3; i++) {
          if (!isSpeakingMulti) break
          setModeBadge('ROUND ' + i + '/3', 'speed-fast')
          await speakPromise(currentSentence.en, 0.9)
          if (isSpeakingMulti && i < 3) await sleepMs(2500)
        }
        if (isSpeakingMulti) setModeBadge('✓ FATTO', 'speed-med')
        isSpeakingMulti = false
        resetSpeakBtn()
      }

      function speakCurrent() {
        if (!currentSentence) {
          loadNextSentence()
          return
        }
        if (isSpeakingMulti || speechSynthesis.speaking) {
          speechSynthesis.cancel()
          isSpeakingMulti = false
          resetSpeakBtn()
          return
        }
        if (currentMode === 'progressivo') {
          speakProgressive()
          return
        }
        if (currentMode === 'shadowing') {
          speakShadowing()
          return
        }
        // STANDARD
        const btn = document.getElementById('speakBtn')
        btn.classList.add('speaking')
        btn.textContent = '⏸'
        const u = new SpeechSynthesisUtterance(currentSentence.en)
        u.lang = getLangCode()
        u.rate =
          currentSpeed === 'slow' ? 0.65 : currentSpeed === 'fast' ? 1.25 : 0.95
        const vStd = getBestVoice(selectedVoice); if (vStd) u.voice = vStd
        u.onend = () => resetSpeakBtn()
        speechSynthesis.speak(u)
      }

      function revealSentence() {
        if (!currentSentence) return
        document.getElementById('sentEN').textContent = currentSentence.en
        document.getElementById('sentEN').className = 'sentence-en revealed'
        document.getElementById('sentIT').textContent = currentSentence.it
        showPhonetic()
      }

      function showPhonetic() {
        if (!currentSentence) return
        document.getElementById('phoneticCard').style.display = 'block'
        document.getElementById('phoneticTip').textContent =
          'Nel parlato veloce queste parole si fondono insieme — ecco come suonano realmente:'
        const words = currentSentence.en.split(' ')
        const linked = currentSentence.linked || []
        const grid = document.getElementById('phoneticGrid')
        grid.innerHTML = ''
        words.forEach((w) => {
          const clean = w.replace(/[^a-zA-Z']/g, '').toLowerCase()
          const info = linked.find((l) => l.w.toLowerCase() === clean)
          const d = document.createElement('div')
          d.className = 'phon-word' + (info ? ' linked' : '')
          d.innerHTML = `<div class="word">${escHtml(w)}</div><div class="sound">${info ? escHtml(info.how) : ''}</div>`
          grid.appendChild(d)
        })
      }

      function checkListening() {
        if (!currentSentence) return
        const answer = document
          .getElementById('listeningInput')
          .value.trim()
          .toLowerCase()
        if (!answer) return
        const correct = currentSentence.en.toLowerCase()
        const sim = wordSimilarity(answer, correct)
        const fb = document.getElementById('listeningFeedback')
        if (sim >= 0.75) {
          fb.className = 'feedback-box show feedback-correct'
          fb.textContent =
            '✅ Ottimo! ' +
            (sim >= 0.95
              ? 'Perfetto!'
              : 'Quasi perfetto — piccole differenze ok.')
          session.correct++
          session.streak++
        } else if (sim >= 0.4) {
          fb.className = 'feedback-box show feedback-partial'
          fb.textContent =
            '⚠️ Quasi! Hai colto il senso ma alcune parole erano diverse. Rivela la frase e riascolta.'
          session.streak = 0
        } else {
          fb.className = 'feedback-box show feedback-wrong'
          fb.textContent =
            '❌ Il connected speech inganna tutti! Rivela la frase, guarda le parole collegate e riascolta lentamente.'
          session.streak = 0
        }
        session.total++
        saveSession()
        updateStatsUI()
        revealSentence()
      }

      function wordSimilarity(a, b) {
        const wa = a.split(/\s+/).filter(Boolean)
        const wb = b
          .replace(/[^a-zA-Z\s]/g, '')
          .split(/\s+/)
          .filter(Boolean)
        let hits = 0
        wa.forEach((w) => {
          if (wb.includes(w)) hits++
        })
        return hits / Math.max(wb.length, 1)
      }

      async function generateAISentence() {
        const key = getApiKey()
        if (!key) {
          alert(
            'Inserisci la tua API key nel tab Coach prima di usare questa funzione.',
          )
          return
        }
        document.getElementById('loadingListening').style.display = 'flex'
        const prompt = `Genera una frase in inglese parlato naturale (livello B1-B2) tipica di una situazione reale tra un animatore per bambini e dei genitori anglofoni oppure bambini anglofoni. Deve avere almeno un phrasal verb o connected speech tipico del parlato veloce. Rispondi SOLO con JSON:
{"en":"...","it":"...(italiano)","ctx":"...breve contesto","linked":[{"w":"parola","how":"come suona fusa"}]}`
        const data = await callClaude(
          prompt,
          'Sei un esperto di fonetica inglese. Rispondi SOLO con JSON valido.',
          true,
        )
        document.getElementById('loadingListening').style.display = 'none'
        if (!data || !data.en) return
        currentSentence = {
          en: data.en,
          it: data.it,
          ctx: data.ctx || 'frase generata',
          linked: data.linked || [],
        }
        document.getElementById('sentCtx').textContent =
          '◆ ' + currentSentence.ctx
        document.getElementById('sentCtx').style.display = 'block'
        document.getElementById('sentIT').textContent = ''
        document.getElementById('listeningInput').value = ''
        document.getElementById('listeningFeedback').className = 'feedback-box'
        document.getElementById('phoneticCard').style.display = 'none'
        applyPhoneticPreview()
      }

