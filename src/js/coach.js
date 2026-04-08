      function addChatMsg(role, text) {
        const div = document.createElement('div')
        div.style.cssText =
          role === 'user'
            ? 'background:rgba(255,190,11,0.08);border-radius:14px;padding:12px 16px;border-left:3px solid var(--accent);margin-left:40px'
            : 'background:var(--surface2);border-radius:14px;padding:12px 16px;border-left:3px solid var(--accent3)'
        const label =
          role === 'user'
            ? '<div style="font-size:0.7rem;color:var(--accent);font-family:\'JetBrains Mono\',monospace;margin-bottom:6px">TU ◆</div>'
            : '<div style="font-size:0.7rem;color:var(--accent3);font-family:\'JetBrains Mono\',monospace;margin-bottom:6px">COACH ◆</div>'
        div.innerHTML = label
        const msgDiv = document.createElement('div')
        msgDiv.style.cssText = 'font-size:0.9rem;line-height:1.5'
        text.split('\n').forEach((line, i) => {
          if (i > 0) msgDiv.appendChild(document.createElement('br'))
          msgDiv.appendChild(document.createTextNode(line))
        })
        div.appendChild(msgDiv)
        document.getElementById('chatMessages').appendChild(div)
        div.scrollIntoView({ behavior: 'smooth' })
      }

      let chatHistory = []

      async function sendChat() {
        const input = document.getElementById('chatInput')
        const msg = input.value.trim()
        if (!msg) return
        const key = getApiKey()
        if (!key) {
          addChatMsg(
            'assistant',
            '⚠️ Inserisci prima la tua Anthropic API key qui sopra.',
          )
          return
        }
        input.value = ''
        addChatMsg('user', msg)
        chatHistory.push({ role: 'user', content: msg })
        document.getElementById('loadingChat').style.display = 'flex'
        const sys = `Sei un coach di inglese personale per un animatore italiano per bambini. Organizza feste, eventi, attività per bambini e comunica con genitori e bambini anglofoni. Difficoltà: listening veloce, phrasal verbs nel contesto, tempi verbali. Stile: diretto, pratico, incoraggiante. Esempi sempre dal suo lavoro reale. Se scrive in italiano → rispondi in italiano con esempi in inglese. Se scrive in inglese → correggilo gentilmente e rispondi in inglese. Proponi spesso micro role-play: "Prova a rispondere come faresti con un genitore che dice: ...". Max 150 parole.`
        const reply = await callClaude(
          null,
          sys,
          false,
          chatHistory.slice(-10),
          msg,
        )
        document.getElementById('loadingChat').style.display = 'none'
        if (reply) {
          addChatMsg('assistant', reply)
          chatHistory.push({ role: 'assistant', content: reply })
        }
      }

      // ============================================================
      // SUPABASE
      // ============================================================
      function escHtml(s) {
        return String(s || '')
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;')
      }

      async function callClaude(
        prompt,
        sys,
        json = false,
        history = [],
        userMsg = '',
      ) {
        const key = getApiKey()
        if (!key) return null
        try {
          const messages = history.length
            ? [...history, { role: 'user', content: userMsg }]
            : [{ role: 'user', content: prompt }]
          const res = await fetch('https://api.anthropic.com/v1/messages', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'x-api-key': key,
              'anthropic-version': '2023-06-01',
              'anthropic-dangerous-direct-browser-access': 'true',
            },
            body: JSON.stringify({
              model: 'claude-sonnet-4-6',
              max_tokens: 800,
              system: sys,
              messages,
            }),
          })
          const data = await res.json()
          if (data.error) {
            console.error(data.error)
            return null
          }
          const text = (data.content || []).map((i) => i.text || '').join('')
          if (json) {
            try {
              return JSON.parse(text.replace(/```json|```/g, '').trim())
            } catch (e) {
              return null
            }
          }
          return text
        } catch (e) {
          console.error(e)
          return null
        }
      }

      // ============================================================
      // MINICLUB — rendering e filtri
      // ============================================================
