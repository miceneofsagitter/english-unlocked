import sys
import argparse
import time
import random
import scrapetube
from youtube_transcript_api import YouTubeTranscriptApi, TranscriptsDisabled, NoTranscriptFound
from youtube_transcript_api.proxies import GenericProxyConfig
import re
import nltk
from nltk import pos_tag, word_tokenize
from nltk.stem import WordNetLemmatizer

# Particelle tipiche dei phrasal verbs
PV_PARTICLES = {'up','down','out','in','on','off','away','back','over','around',
                'through','along','apart','about','after','by','forward','into'}

lemmatizer = WordNetLemmatizer()

# ================= IMPOSTAZIONI =================
PLAYLIST_ID = "PL_3ObQN81IfO1bGwR-iPErxEhUveu69sB"
FILE_DB = "vocab-en.js"
FILE_OUTPUT = "nuovi_vocaboli.md"
# ================================================

parser = argparse.ArgumentParser()
parser.add_argument('--start', type=int, default=1, help='Numero video da cui ripartire (es. --start 45)')
parser.add_argument('--proxy', type=str, default=None, help='URL proxy per aggirare IP ban (es. http://127.0.0.1:7890 o socks5://127.0.0.1:1080)')
args = parser.parse_args()

if args.proxy:
    proxy_config = GenericProxyConfig(http_url=args.proxy, https_url=args.proxy)
    ytt_api = YouTubeTranscriptApi(proxy_config=proxy_config)
else:
    ytt_api = YouTubeTranscriptApi()

def carica_db_esistente(nome_file):
    esistenti = set()
    try:
        with open(nome_file, 'r', encoding='utf-8') as f:
            contenuto = f.read()
            verbi = re.findall(r'verb:\s*["\'](.*?)["\']', contenuto)
            verbi += re.findall(r'["\']verb["\']:\s*["\'](.*?)["\']', contenuto)
            for v in verbi:
                esistenti.add(v.strip().lower())
        print(f"   📚 DB caricato: {len(esistenti)} voci note")
        return esistenti
    except Exception as e:
        print(f"❌ Errore DB: {e}")
        return set()

def estrai_verbi_e_pv(testo):
    """Estrae verbi (forma base) e potenziali phrasal verbs dal testo."""
    risultati = set()
    try:
        tokens = word_tokenize(testo.lower())
        tagged = pos_tag(tokens)

        for i, (word, tag) in enumerate(tagged):
            # Filtra solo verbi (VB=base, VBZ=3rd sing, VBD=past, VBG=gerund, VBN=participle, VBP=non-3rd)
            if tag.startswith('VB') and word.isalpha() and len(word) > 3:
                base = lemmatizer.lemmatize(word, 'v')
                risultati.add(base)

                # Controlla se il token successivo è una particella → phrasal verb candidato
                if i + 1 < len(tagged):
                    next_word, next_tag = tagged[i + 1]
                    if next_word in PV_PARTICLES and next_tag in ('RP', 'IN', 'RB'):
                        risultati.add(f"{base} {next_word}")

    except Exception as e:
        print(f"   ⚠️ POS tag error: {e}")
    return risultati

# --- ESECUZIONE ---
vocaboli_noti = carica_db_esistente(FILE_DB)
nuovi_scoperti = {}  # parola → titolo video

print(f"🚀 Analisi Playlist: {PLAYLIST_ID}")
if args.start > 1:
    print(f"⏩ Salto ai primi {args.start - 1} video")

try:
    videos = scrapetube.get_playlist(PLAYLIST_ID)

    for i, video in enumerate(videos, 1):
        if i < args.start:
            continue

        v_id = video['videoId']
        v_titolo = video['title']['runs'][0]['text']
        print(f"\n[{i}] {v_titolo[:50]}")

        try:
            transcript_list = ytt_api.list(v_id)
            try:
                transcript = transcript_list.find_transcript(['en', 'en-US', 'en-GB'])
            except NoTranscriptFound:
                transcript = transcript_list.find_generated_transcript(['en', 'en-US', 'en-GB'])

            t_data = transcript.fetch()
            testo_video = " ".join([r.text for r in t_data])

            verbi_video = estrai_verbi_e_pv(testo_video)
            nuove_trovate = 0
            for v in verbi_video:
                if v not in vocaboli_noti and v not in nuovi_scoperti:
                    nuovi_scoperti[v] = v_titolo
                    nuove_trovate += 1

            print(f"   ✅ ({transcript.language_code}) | Verbi estratti: {len(verbi_video)} | Nuovi: {nuove_trovate}")

        except (TranscriptsDisabled, NoTranscriptFound):
            print(f"   ⚠️ Nessun CC inglese trovato.")
        except Exception as e:
            print(f"   ❌ Errore tecnico: {e}")

        delay = random.uniform(8,15)
        print(f"   ⏳ pausa {delay:.1f}s...")
        time.sleep(delay)

    if nuovi_scoperti:
        # Separa phrasal verbs (contengono spazio) da verbi semplici
        pv = {k: v for k, v in nuovi_scoperti.items() if ' ' in k}
        verbi = {k: v for k, v in nuovi_scoperti.items() if ' ' not in k}

        with open(FILE_OUTPUT, 'w', encoding='utf-8') as f:
            f.write(f"# Nuovi Vocaboli\n\n")
            f.write(f"## Phrasal Verbs nuovi ({len(pv)})\n\n| PV | Video |\n|---|---|\n")
            for p, t in sorted(pv.items()):
                f.write(f"| {p} | {t} |\n")
            f.write(f"\n## Verbi nuovi ({len(verbi)})\n\n| Verbo | Video |\n|---|---|\n")
            for p, t in sorted(verbi.items()):
                f.write(f"| {p} | {t} |\n")

        print(f"\n✨ FINITO! {len(pv)} PV + {len(verbi)} verbi → {FILE_OUTPUT}")
    else:
        print("\n🤔 Zero voci nuove.")

except Exception as e:
    print(f"❌ Errore Playlist: {e}")
