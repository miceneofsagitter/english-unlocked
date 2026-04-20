import scrapetube
import ast # Aggiungi questo import in alto nel file
from youtube_transcript_api import YouTubeTranscriptApi
import re
import json

# ================= IMPOSTAZIONI =================
URL_CANALE = "https://www.youtube.com/@PracticeEasyEnglish" # <-- INSERISCI QUI IL CANALE
LINGUA = 'en' # Lasciamo inglese per il tuo DB
LIMITE_VIDEO = 5 # Metti None per farli tutti
FILE_DB = "vocab-en.js" # Il nome del tuo file
# ================================================

def carica_db_da_js(nome_file):
    """Estrae i verbi usando RegEx riga per riga. Metodo ultra-robusto."""
    vocaboli = []
    try:
        with open(nome_file, 'r', encoding='utf-8') as file:
            for riga in file:
                # Cerchiamo il pattern: verb: "parola" oppure "verb": "parola"
                # Gestisce sia apici singoli che doppi
                match = re.search(r'verb:\s*["\'](.*?)["\']', riga)
                if not match:
                    # Prova anche la versione con "verb" tra virgolette
                    match = re.search(r'["\']verb["\']:\s*["\'](.*?)["\']', riga)
                
                if match:
                    verbo = match.group(1).strip().lower()
                    if verbo:
                        vocaboli.append(verbo)
        
        # Rimuove i duplicati
        risultato = list(set(vocaboli))
        print(f"✅ Successo! Estratti {len(risultato)} vocaboli unici dal file.")
        return risultato
        
    except Exception as e:
        print(f"Errore critico durante la lettura: {e}")
        return []

def estrai_sottotitoli(video_id, lingua):
    """Scarica i sottotitoli e li restituisce come un'unica stringa."""
    try:
        trascrizione = YouTubeTranscriptApi.get_transcript(video_id, languages=[lingua])
        # Unisce tutto e mette in minuscolo
        testo_completo = " ".join([riga['text'] for riga in trascrizione]).lower()
        return testo_completo
    except Exception:
        # Nessun sottotitolo trovato per questo video
        return ""

# --- INIZIO PROGRAMMA ---
print("Lettura del tuo database vocab-en.js in corso...")
miei_vocaboli = carica_db_da_js(FILE_DB)

if not miei_vocaboli:
    print("DB vuoto o non caricato. Interruzione.")
else:
    print(f"✅ DB caricato con successo: trovati {len(miei_vocaboli)} vocaboli/frasi da cercare.\n")
    print(f"Cerco i video dal canale: {URL_CANALE}...")
    
    videos = scrapetube.get_channel(channel_url=URL_CANALE, limit=LIMITE_VIDEO)
    
    risultati_totali = {vocabolo: 0 for vocabolo in miei_vocaboli}
    video_analizzati = 0
    
    for video in videos:
        video_id = video['videoId']
        titolo = video['title']['runs'][0]['text']
        print(f"Analizzando: {titolo[:50]}...")
        
        testo_video = estrai_sottotitoli(video_id, LINGUA)
        
        if testo_video:
            video_analizzati += 1
            # Check con il tuo DB
            for vocabolo in miei_vocaboli:
                # Usiamo le word boundary (\b) di RegEx per cercare la frase esatta
                # Es: cerchiamo "go on" e NON "going on" o "dragon"
                # Gestiamo anche le espressioni con apostrofi e punteggiatura
                pattern = r'\b' + re.escape(vocabolo) + r'\b'
                if re.search(pattern, testo_video):
                    risultati_totali[vocabolo] += 1
    
    # --- REPORT FINALE ---
    print("\n" + "="*50)
    print("📊 REPORT FINALE DELL'ANALISI")
    print("="*50)
    print(f"Video analizzati con successo: {video_analizzati}")
    print("Ecco la frequenza dei tuoi vocaboli nei video:\n")
    
    # Ordina dal più trovato al meno trovato
    risultati_ordinati = sorted(risultati_totali.items(), key=lambda x: x[1], reverse=True)
    
    trovati = False
    for vocabolo, conteggio in risultati_ordinati:
        if conteggio > 0:
            print(f"🟢 '{vocabolo}' -> Presente in {conteggio} video")
            trovati = True
            
    if not trovati:
        print("Nessuno dei tuoi vocaboli è stato menzionato in questi video.")
        
    print("\n" + "-"*50)
    print("Vocaboli NON trovati (ottimi per futuri video):")
    for vocabolo, conteggio in risultati_ordinati:
        if conteggio == 0:
            print(f"🔴 '{vocabolo}'")