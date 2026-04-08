      const SENTENCES = [
        {
          en: "Hi! You can drop her off here and we'll take it from there.",
          it: 'Ciao! Può lasciarla qui e pensiamo noi al resto.',
          ctx: "genitore all'arrivo",
          linked: [
            { w: 'take', how: 'teyk-it' },
            { w: 'it', how: '(fused)' },
            { w: 'from', how: 'frm' },
          ],
        },
        {
          en: "Don't worry, we'll keep an eye on him the whole time.",
          it: "Non si preoccupi, lo teniamo d'occhio per tutto il tempo.",
          ctx: 'rassicurazione genitore',
          linked: [
            { w: 'keep', how: 'keepan' },
            { w: 'an', how: '(fused)' },
            { w: 'eye', how: 'eye' },
          ],
        },
        {
          en: "She's been doing great — she really got into it!",
          it: 'È andata benissimo — si è proprio appassionata!',
          ctx: 'aggiornamento genitore',
          linked: [
            { w: 'got', how: 'godinto' },
            { w: 'into', how: '(fused)' },
          ],
        },
        {
          en: "He took a little while to warm up but he's having a blast now.",
          it: "Ha impiegato un po' ad ambientarsi ma ora si sta divertendo un sacco.",
          ctx: 'aggiornamento genitore',
          linked: [
            { w: 'warm', how: 'wormup' },
            { w: 'up', how: '(fused)' },
            { w: 'having', how: 'havin' },
          ],
        },
        {
          en: 'What time are you thinking of picking her up?',
          it: 'A che ora pensa di venirla a prendere?',
          ctx: 'genitore alla partenza',
          linked: [
            { w: 'picking', how: 'pickin' },
            { w: 'her', how: 'hrr' },
            { w: 'up', how: 'up' },
          ],
        },
        {
          en: 'She just needs a bit of time to settle in — totally normal!',
          it: "Ha solo bisogno di un po' di tempo per ambientarsi — normalissimo!",
          ctx: 'rassicurazione',
          linked: [
            { w: 'settle', how: 'seddle' },
            { w: 'in', how: 'inn' },
            { w: 'totally', how: 'todally' },
          ],
        },
        {
          en: "Could you reach out if you're running late? Just so we know.",
          it: 'Può contattarci se fa tardi? Solo per sapere.',
          ctx: 'organizzazione',
          linked: [
            { w: 'reach', how: 'reechouт' },
            { w: 'out', how: '(fused)' },
            { w: 'running', how: 'runnin' },
          ],
        },
        {
          en: "He's been getting along really well with the other kids.",
          it: "Va molto d'accordo con gli altri bambini.",
          ctx: 'feedback positivo',
          linked: [
            { w: 'getting', how: 'geddin' },
            { w: 'along', how: 'along' },
            { w: 'really', how: 'reely' },
          ],
        },
        {
          en: "Come on guys, let's all join in — the more the merrier!",
          it: 'Dai ragazzi, partecipate tutti — più siamo meglio è!',
          ctx: 'animatore con bambini',
          linked: [
            { w: 'Come', how: 'kummon' },
            { w: 'on', how: '(fused)' },
            { w: "let's", how: 'lets' },
          ],
        },
        {
          en: "Watch out, the floor's a bit slippery over there!",
          it: "Attenzione, il pavimento è un po' scivoloso lì!",
          ctx: 'sicurezza bambini',
          linked: [
            { w: 'Watch', how: 'watchouт' },
            { w: 'out', how: '(fused)' },
            { w: "floor's", how: 'floorz' },
          ],
        },
        {
          en: "You're doing awesome — keep it up!",
          it: 'Stai andando benissimo — continua così!',
          ctx: 'incoraggiamento',
          linked: [
            { w: "You're", how: 'yer' },
            { w: 'doing', how: 'doin' },
            { w: 'keep', how: 'keepit' },
          ],
        },
        {
          en: "Okay everyone, let's calm down a sec — I've got something fun planned.",
          it: 'Ok tutti, calmiamoci un secondo — ho qualcosa di divertente in mente.',
          ctx: 'gestione gruppo',
          linked: [
            { w: "let's", how: 'lets' },
            { w: 'calm', how: 'kamdown' },
            { w: 'down', how: '(fused)' },
            { w: "I've", how: 'Iv' },
          ],
        },
      ]

