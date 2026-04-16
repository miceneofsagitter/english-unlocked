      const SENTENCES = [
        // ── INGLESE ────────────────────────────────────────────────────────────
        {
          lang: 'en',
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
          lang: 'en',
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
          lang: 'en',
          en: "She's been doing great — she really got into it!",
          it: 'È andata benissimo — si è proprio appassionata!',
          ctx: 'aggiornamento genitore',
          linked: [
            { w: 'got', how: 'godinto' },
            { w: 'into', how: '(fused)' },
          ],
        },
        {
          lang: 'en',
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
          lang: 'en',
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
          lang: 'en',
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
          lang: 'en',
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
          lang: 'en',
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
          lang: 'en',
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
          lang: 'en',
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
          lang: 'en',
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
          lang: 'en',
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
        // ── SPAGNOLO ───────────────────────────────────────────────────────────
        {
          lang: 'es',
          en: '¡Hola! Puede dejarlo aquí, nosotros nos encargamos.',
          it: 'Ciao! Può lasciarlo qui, pensiamo noi a tutto.',
          ctx: 'llegada del niño',
          linked: [
            { w: 'dejarlo', how: 'de-HAR-lo' },
            { w: 'encargamos', how: 'en-kar-GA-mos' },
          ],
        },
        {
          lang: 'es',
          en: '¿Tiene alguna alergia que deba saber?',
          it: 'Ha qualche allergia che devo sapere?',
          ctx: 'información sanitaria',
          linked: [
            { w: 'alergia', how: 'a-ler-HIA' },
          ],
        },
        {
          lang: 'es',
          en: 'El programa de hoy incluye manualidades y playa.',
          it: "Il programma di oggi include lavoretti e spiaggia.",
          ctx: 'presentar el programa',
          linked: [
            { w: 'incluye', how: 'in-KLU-ye' },
            { w: 'manualidades', how: 'ma-nua-li-DA-des' },
          ],
        },
        {
          lang: 'es',
          en: '¿A qué hora viene a buscarlo?',
          it: 'A che ora viene a prenderlo?',
          ctx: 'hora de recogida',
          linked: [
            { w: 'buscarlo', how: 'bus-KAR-lo' },
          ],
        },
        {
          lang: 'es',
          en: 'Puede pasar a buscarlo cuando quiera.',
          it: 'Può passare a prenderlo quando vuole.',
          ctx: 'horario flexible',
          linked: [
            { w: 'pasar', how: 'pa-SAR' },
            { w: 'quiera', how: 'KIE-ra' },
          ],
        },
        {
          lang: 'es',
          en: 'Hoy tenemos piscina — ¿ha traído el bañador?',
          it: 'Oggi abbiamo la piscina — ha portato il costume?',
          ctx: 'material necesario',
          linked: [
            { w: 'tenemos', how: 'te-NE-mos' },
            { w: 'bañador', how: 'ba-NYA-dor' },
          ],
        },
        {
          lang: 'es',
          en: 'Se lo está pasando genial — no te preocupes.',
          it: 'Si sta divertendo un sacco — non preoccuparti.',
          ctx: 'tranquilizar al niño',
          linked: [
            { w: 'pasando', how: 'pa-SAN-do' },
            { w: 'genial', how: 'he-NIAL' },
            { w: 'preocupes', how: 'pre-o-KU-pes' },
          ],
        },
        {
          lang: 'es',
          en: 'Ahora vamos a hacer una manualidad de verano.',
          it: "Adesso facciamo un lavoretto estivo.",
          ctx: 'inicio actividad',
          linked: [
            { w: 'vamos', how: 'BA-mos' },
            { w: 'hacer', how: 'a-SER' },
            { w: 'manualidad', how: 'ma-nua-li-DAD' },
          ],
        },
        {
          lang: 'es',
          en: 'Vamos a dividirnos en dos equipos.',
          it: 'Ci dividiamo in due squadre.',
          ctx: 'organizar grupos',
          linked: [
            { w: 'dividirnos', how: 'di-bi-DIR-nos' },
            { w: 'equipos', how: 'e-KI-pos' },
          ],
        },
        {
          lang: 'es',
          en: '¡Fantástico, lo has hecho perfecto!',
          it: 'Fantastico, lo hai fatto perfettamente!',
          ctx: 'elogio al niño',
          linked: [
            { w: 'Fantástico', how: 'fan-TAS-ti-ko' },
            { w: 'perfecto', how: 'per-FEK-to' },
          ],
        },
        {
          lang: 'es',
          en: '¡Poneos en fila — vamos a la playa!',
          it: 'Mettetevi in fila — andiamo in spiaggia!',
          ctx: 'desplazamiento',
          linked: [
            { w: 'Poneos', how: 'po-NE-os' },
          ],
        },
        {
          lang: 'es',
          en: '¡No corráis cerca de la piscina!',
          it: 'Non correte vicino alla piscina!',
          ctx: 'seguridad',
          linked: [
            { w: 'corráis', how: 'ko-RRAIS' },
            { w: 'piscina', how: 'pis-SI-na' },
          ],
        },
        {
          lang: 'es',
          en: 'Es la hora de la merienda — ¡a lavarse las manos!',
          it: "È l'ora della merenda — a lavarsi le mani!",
          ctx: 'merienda',
          linked: [
            { w: 'merienda', how: 'me-RIEN-da' },
            { w: 'lavarse', how: 'la-BAR-se' },
          ],
        },
        {
          lang: 'es',
          en: 'El almuerzo es a las 13h — la media pensión incluye la comida.',
          it: "Il pranzo è alle 13 — la mezza pensione include il pasto.",
          ctx: 'información comida',
          linked: [
            { w: 'almuerzo', how: 'al-MUER-so' },
            { w: 'pensión', how: 'pen-SION' },
          ],
        },
        {
          lang: 'es',
          en: '¿Es vegetariano o tiene alguna intolerancia?',
          it: 'È vegetariano o ha qualche intolleranza?',
          ctx: 'dieta especial',
          linked: [
            { w: 'vegetariano', how: 've-he-ta-RIA-no' },
            { w: 'intolerancia', how: 'in-to-le-RAN-sia' },
          ],
        },
        {
          lang: 'es',
          en: '¡No te alejes del grupo!',
          it: 'Non allontanarti dal gruppo!',
          ctx: 'seguridad',
          linked: [
            { w: 'alejes', how: 'a-LE-hes' },
          ],
        },
        {
          lang: 'es',
          en: 'Ponte la crema solar antes de salir.',
          it: 'Mettiti la crema solare prima di uscire.',
          ctx: 'protección solar',
          linked: [
            { w: 'Ponte', how: 'PON-te' },
            { w: 'solar', how: 'so-LAR' },
          ],
        },
        {
          lang: 'es',
          en: 'Quedaos en la zona señalizada — el mar está un poco movido.',
          it: 'Restate nella zona segnalata — il mare è un po\' mosso.',
          ctx: 'seguridad playa',
          linked: [
            { w: 'Quedaos', how: 'ke-DA-os' },
            { w: 'señalizada', how: 'se-nya-li-SA-da' },
          ],
        },
        {
          lang: 'es',
          en: 'Hoy se lo ha pasado fenomenal — ha participado en todo.',
          it: 'Oggi si è divertito da matti — ha partecipato a tutto.',
          ctx: 'informe del día',
          linked: [
            { w: 'fenomenal', how: 'fe-no-me-NAL' },
            { w: 'participado', how: 'par-ti-si-PA-do' },
          ],
        },
        {
          lang: 'es',
          en: 'Aquí tiene sus cosas — creo que no falta nada.',
          it: 'Ecco le sue cose — credo non manchi niente.',
          ctx: 'recogida',
          linked: [
            { w: 'falta', how: 'FAL-ta' },
          ],
        },
        {
          lang: 'es',
          en: 'Mañana traemos disfraces — recuérdelo.',
          it: 'Domani portiamo i costumi — se lo ricordi.',
          ctx: 'aviso para mañana',
          linked: [
            { w: 'disfraces', how: 'dis-FRA-ses' },
            { w: 'recuérdelo', how: 're-KUER-de-lo' },
          ],
        },
        {
          lang: 'es',
          en: 'Si hay algún problema, le avisamos enseguida.',
          it: 'Se c\'è qualche problema, la avvisiamo subito.',
          ctx: 'tranquilizar al padre',
          linked: [
            { w: 'problema', how: 'pro-BLE-ma' },
            { w: 'enseguida', how: 'en-se-GI-da' },
          ],
        },
        {
          lang: 'es',
          en: 'Hoy hemos hecho teatro — ¡ha sido el protagonista!',
          it: 'Oggi abbiamo fatto teatro — è stato il protagonista!',
          ctx: 'actividad especial',
          linked: [
            { w: 'teatro', how: 'te-A-tro' },
            { w: 'protagonista', how: 'pro-ta-go-NIS-ta' },
          ],
        },
        {
          lang: 'es',
          en: 'Le ha costado un poco al principio pero luego se ha integrado muy bien.',
          it: 'All\'inizio ha faticato un po\' ma poi si è integrato molto bene.',
          ctx: 'integración',
          linked: [
            { w: 'principio', how: 'prin-SI-pio' },
            { w: 'integrado', how: 'in-te-GRA-do' },
          ],
        },
        {
          lang: 'es',
          en: 'Pensión completa incluye almuerzo, merienda y actividades.',
          it: 'Pensione completa include pranzo, merenda e attività.',
          ctx: 'información pensión',
          linked: [
            { w: 'Pensión', how: 'pen-SION' },
            { w: 'incluye', how: 'in-KLU-ye' },
          ],
        },
        {
          lang: 'es',
          en: 'Necesito que firme este formulario de autorización.',
          it: 'Ho bisogno che firmi questo modulo di autorizzazione.',
          ctx: 'documentación',
          linked: [
            { w: 'firme', how: 'FIR-me' },
            { w: 'autorización', how: 'au-to-ri-SA-sion' },
          ],
        },
        {
          lang: 'es',
          en: '¡Cuidado con las olas — quédate en la parte baja!',
          it: 'Attenzione alle onde — rimani nella parte bassa!',
          ctx: 'seguridad agua',
          linked: [
            { w: 'Cuidado', how: 'kui-DA-do' },
            { w: 'quédate', how: 'KE-da-te' },
          ],
        },
        {
          lang: 'es',
          en: '¡Nos vemos mañana — que descanséis!',
          it: 'A domani — buon riposo!',
          ctx: 'despedida',
          linked: [
            { w: 'descanséis', how: 'des-kan-SEIS' },
          ],
        },
        {
          lang: 'es',
          en: 'Se ha dormido en la siesta — está un poco cansado.',
          it: 'Si è addormentato durante il riposino — è un po\' stanco.',
          ctx: 'informe del día',
          linked: [
            { w: 'siesta', how: 'SIES-ta' },
            { w: 'cansado', how: 'kan-SA-do' },
          ],
        },
        {
          lang: 'es',
          en: '¿Quién quiere ser el jefe de equipo hoy?',
          it: 'Chi vuole essere il caposquadra oggi?',
          ctx: 'juego en grupo',
          linked: [
            { w: 'jefe', how: 'HE-fe' },
            { w: 'equipo', how: 'e-KI-po' },
          ],
        },
        // ── FRANCESE ───────────────────────────────────────────────────────────
        {
          lang: 'fr',
          en: 'Bonjour ! Vous pouvez le déposer ici, on s\'occupe de tout.',
          it: 'Buongiorno! Può lasciarlo qui, pensiamo noi a tutto.',
          ctx: 'arrivée de l\'enfant',
          linked: [
            { w: 'pouvez', how: 'poo-VEH' },
            { w: 'déposer', how: 'deh-po-ZEH' },
            { w: "s'occupe", how: 'so-KUP' },
          ],
        },
        {
          lang: 'fr',
          en: 'Est-ce qu\'il a des allergies que je dois connaître ?',
          it: 'Ha delle allergie che devo sapere?',
          ctx: 'information médicale',
          linked: [
            { w: 'Est-ce', how: 'ES-kuh' },
            { w: 'allergies', how: 'a-ler-ZHI' },
            { w: 'connaître', how: 'ko-NET-ruh' },
          ],
        },
        {
          lang: 'fr',
          en: 'Le programme d\'aujourd\'hui : atelier créatif et plage.',
          it: "Il programma di oggi: laboratorio creativo e spiaggia.",
          ctx: 'présenter le programme',
          linked: [
            { w: "aujourd'hui", how: 'o-zhur-DWI' },
            { w: 'atelier', how: 'a-tel-YEH' },
            { w: 'créatif', how: 'kre-a-TIF' },
          ],
        },
        {
          lang: 'fr',
          en: 'À quelle heure passez-vous le récupérer ?',
          it: 'A che ora viene a prenderlo?',
          ctx: 'heure de récupération',
          linked: [
            { w: 'passez-vous', how: 'pa-SEH-voo' },
            { w: 'récupérer', how: 're-ku-pe-REH' },
          ],
        },
        {
          lang: 'fr',
          en: 'Vous pouvez venir le chercher quand vous voulez.',
          it: 'Può venire a prenderlo quando vuole.',
          ctx: 'horaire flexible',
          linked: [
            { w: 'pouvez', how: 'poo-VEH' },
            { w: 'chercher', how: 'sher-SHEH' },
            { w: 'voulez', how: 'voo-LEH' },
          ],
        },
        {
          lang: 'fr',
          en: 'On a piscine cet après-midi — il a son maillot ?',
          it: 'Oggi pomeriggio c\'è piscina — ha il costume?',
          ctx: 'matériel nécessaire',
          linked: [
            { w: 'On_a', how: 'on-NA' },
            { w: 'après-midi', how: 'a-preh-mi-DI' },
            { w: 'maillot', how: 'ma-YO' },
          ],
        },
        {
          lang: 'fr',
          en: 'Il s\'amuse vraiment bien — ne t\'inquiète pas.',
          it: 'Si sta divertendo davvero — non preoccuparti.',
          ctx: 'rassurer l\'enfant',
          linked: [
            { w: "s'amuse", how: 'sa-MUZ' },
            { w: 'vraiment', how: 'vreh-MAN' },
            { w: "t'inquiète", how: 'tan-KIET' },
          ],
        },
        {
          lang: 'fr',
          en: 'Maintenant on va faire un atelier créatif.',
          it: "Adesso facciamo un laboratorio creativo.",
          ctx: 'début d\'activité',
          linked: [
            { w: 'Maintenant', how: 'man-tuh-NAN' },
            { w: 'on_va', how: 'on-VA' },
            { w: 'faire', how: 'FER' },
          ],
        },
        {
          lang: 'fr',
          en: 'On va se diviser en deux équipes.',
          it: 'Ci dividiamo in due squadre.',
          ctx: 'organiser les groupes',
          linked: [
            { w: 'diviser', how: 'di-vi-ZEH' },
            { w: 'équipes', how: 'e-KIP' },
          ],
        },
        {
          lang: 'fr',
          en: 'Excellent — tu as fait ça parfaitement !',
          it: "Eccellente — lo hai fatto perfettamente!",
          ctx: 'félicitations',
          linked: [
            { w: 'Excellent', how: 'ek-se-LAN' },
            { w: 'as_fait', how: 'a-FEH' },
            { w: 'parfaitement', how: 'par-fet-MAN' },
          ],
        },
        {
          lang: 'fr',
          en: 'Mettez-vous en file — on va à la plage !',
          it: 'Mettetevi in fila — andiamo in spiaggia!',
          ctx: 'déplacement',
          linked: [
            { w: 'Mettez-vous', how: 'me-TEH-voo' },
            { w: 'en_file', how: 'an-FIL' },
          ],
        },
        {
          lang: 'fr',
          en: 'Ne courez pas près de la piscine !',
          it: 'Non correte vicino alla piscina!',
          ctx: 'sécurité',
          linked: [
            { w: 'courez', how: 'koo-REH' },
            { w: 'piscine', how: 'pi-SIN' },
          ],
        },
        {
          lang: 'fr',
          en: 'C\'est l\'heure du goûter — allez vous laver les mains !',
          it: "È l'ora della merenda — andate a lavarvi le mani!",
          ctx: 'goûter',
          linked: [
            { w: "C'est", how: 'SEH' },
            { w: "l'heure", how: 'LEUR' },
            { w: 'goûter', how: 'goo-TEH' },
          ],
        },
        {
          lang: 'fr',
          en: 'Le déjeuner est à 13h — la demi-pension inclut le repas.',
          it: "Il pranzo è alle 13 — la mezza pensione include il pasto.",
          ctx: 'information repas',
          linked: [
            { w: 'déjeuner', how: 'deh-zhuh-NEH' },
            { w: 'demi-pension', how: 'duh-mi-pan-SION' },
            { w: 'inclut', how: 'an-KLU' },
          ],
        },
        {
          lang: 'fr',
          en: 'Il est végétarien ou a des intolérances ?',
          it: 'È vegetariano o ha intolleranze?',
          ctx: 'régime spécial',
          linked: [
            { w: 'végétarien', how: 've-zhe-ta-RIAN' },
            { w: 'intolérances', how: 'an-to-le-RANS' },
          ],
        },
        {
          lang: 'fr',
          en: 'Ne t\'éloigne pas du groupe !',
          it: 'Non allontanarti dal gruppo!',
          ctx: 'sécurité',
          linked: [
            { w: "t'éloigne", how: 'te-LWAN-yuh' },
          ],
        },
        {
          lang: 'fr',
          en: 'Mets ta crème solaire avant de sortir.',
          it: 'Metti la crema solare prima di uscire.',
          ctx: 'protection solaire',
          linked: [
            { w: 'crème', how: 'KREM' },
            { w: 'solaire', how: 'so-LER' },
            { w: 'sortir', how: 'sor-TEER' },
          ],
        },
        {
          lang: 'fr',
          en: 'Restez dans la zone balisée — la mer est un peu agitée.',
          it: 'Restate nella zona segnalata — il mare è un po\' mosso.',
          ctx: 'sécurité plage',
          linked: [
            { w: 'balisée', how: 'ba-li-ZEH' },
            { w: 'agitée', how: 'a-zhi-TEH' },
          ],
        },
        {
          lang: 'fr',
          en: 'Il a passé une super journée — il a participé à tout.',
          it: 'Ha passato una giornata fantastica — ha partecipato a tutto.',
          ctx: 'bilan de la journée',
          linked: [
            { w: 'Il_a', how: 'eel-A' },
            { w: 'journée', how: 'zhur-NEH' },
            { w: 'participé', how: 'par-ti-si-PEH' },
          ],
        },
        {
          lang: 'fr',
          en: 'Voilà ses affaires — je crois qu\'il ne manque rien.',
          it: 'Ecco le sue cose — credo non manchi niente.',
          ctx: 'récupération',
          linked: [
            { w: 'Voilà', how: 'vwa-LA' },
            { w: 'affaires', how: 'a-FER' },
            { w: 'manque', how: 'MANK' },
          ],
        },
        {
          lang: 'fr',
          en: 'Demain on fait costumes — n\'oubliez pas !',
          it: 'Domani facciamo costumi — non dimenticate!',
          ctx: 'rappel pour demain',
          linked: [
            { w: 'costumes', how: 'kos-TUM' },
            { w: "n'oubliez", how: 'noo-blie-EH' },
          ],
        },
        {
          lang: 'fr',
          en: 'S\'il y a un problème, on vous appelle tout de suite.',
          it: 'Se c\'è un problema, la chiamiamo subito.',
          ctx: 'rassurer le parent',
          linked: [
            { w: "S'il_y_a", how: 'sil-ia' },
            { w: 'problème', how: 'pro-BLEM' },
            { w: 'tout_de_suite', how: 'toot-SWEET' },
          ],
        },
        {
          lang: 'fr',
          en: 'On a fait du théâtre — il était la star du groupe !',
          it: 'Abbiamo fatto teatro — era la star del gruppo!',
          ctx: 'activité spéciale',
          linked: [
            { w: 'théâtre', how: 'te-A-truh' },
            { w: 'était', how: 'e-TEH' },
          ],
        },
        {
          lang: 'fr',
          en: 'Il a eu du mal au début mais il s\'est très bien intégré.',
          it: "All'inizio ha fatto fatica ma poi si è integrato molto bene.",
          ctx: 'intégration',
          linked: [
            { w: 'début', how: 'de-BU' },
            { w: 'intégré', how: 'an-te-GREH' },
          ],
        },
        {
          lang: 'fr',
          en: 'La pension complète inclut le déjeuner, le goûter et les activités.',
          it: 'La pensione completa include pranzo, merenda e attività.',
          ctx: 'information pension',
          linked: [
            { w: 'complète', how: 'kom-PLET' },
            { w: 'les_activités', how: 'le-zak-ti-vi-TEH' },
          ],
        },
        {
          lang: 'fr',
          en: 'J\'ai besoin que vous signiez ce formulaire d\'autorisation.',
          it: "Ho bisogno che firmi questo modulo di autorizzazione.",
          ctx: 'documentation',
          linked: [
            { w: 'signiez', how: 'si-NYEH' },
            { w: 'autorisation', how: 'o-to-ri-sa-SION' },
          ],
        },
        {
          lang: 'fr',
          en: 'Attention aux vagues — restez dans la partie peu profonde !',
          it: 'Attenzione alle onde — restate nella parte bassa!',
          ctx: 'sécurité eau',
          linked: [
            { w: 'vagues', how: 'VAG' },
            { w: 'profonde', how: 'pro-FOND' },
          ],
        },
        {
          lang: 'fr',
          en: 'À demain — bonne soirée !',
          it: 'A domani — buona serata!',
          ctx: 'au revoir',
          linked: [
            { w: 'soirée', how: 'swa-REH' },
          ],
        },
        {
          lang: 'fr',
          en: 'Il s\'est endormi pendant la sieste — il est un peu fatigué.',
          it: 'Si è addormentato durante il riposino — è un po\' stanco.',
          ctx: 'bilan de la journée',
          linked: [
            { w: "s'est", how: 'SEH' },
            { w: 'sieste', how: 'SIEST' },
            { w: 'fatigué', how: 'fa-ti-GEH' },
          ],
        },
        {
          lang: 'fr',
          en: 'Qui veut être chef d\'équipe aujourd\'hui ?',
          it: 'Chi vuole essere il caposquadra oggi?',
          ctx: 'jeu en groupe',
          linked: [
            { w: "d'équipe", how: 'de-KIP' },
            { w: "aujourd'hui", how: 'o-zhur-DWI' },
          ],
        },
      ]

