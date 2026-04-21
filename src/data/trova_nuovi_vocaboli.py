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

PV_PARTICLES = {'up','down','out','in','on','off','away','back','over','around',
                'through','along','apart','about','after','by','forward','into'}

lemmatizer = WordNetLemmatizer()

# ================= IMPOSTAZIONI =================
DEFAULT_PLAYLIST_EN = "PL_3ObQN81IfO1bGwR-iPErxEhUveu69sB"
# ================================================

parser = argparse.ArgumentParser()
parser.add_argument('--lang', type=str, default='en', choices=['en', 'es', 'fr'],
                    help='Lingua da analizzare: en, es, fr')
parser.add_argument('--playlist', type=str, default=None,
                    help='ID playlist YouTube (obbligatorio per es/fr)')
parser.add_argument('--start', type=int, default=1,
                    help='Numero video da cui ripartire (es. --start 45)')
parser.add_argument('--proxy', type=str, default=None,
                    help='URL proxy (es. http://127.0.0.1:7890)')
args = parser.parse_args()

LANG = args.lang

if args.playlist:
    PLAYLIST_ID = args.playlist
elif LANG == 'en':
    PLAYLIST_ID = DEFAULT_PLAYLIST_EN
else:
    print(f"❌ --playlist obbligatorio per --lang {LANG}")
    sys.exit(1)

FILE_DB = f"vocab-{LANG}.js"
FILE_OUTPUT = f"nuovi_vocaboli_{LANG}.md"

LANG_CODES = {
    'en': ['en', 'en-US', 'en-GB'],
    'es': ['es', 'es-ES', 'es-MX', 'es-419'],
    'fr': ['fr', 'fr-FR', 'fr-BE', 'fr-CA'],
}

if args.proxy:
    proxy_config = GenericProxyConfig(http_url=args.proxy, https_url=args.proxy)
    ytt_api = YouTubeTranscriptApi(proxy_config=proxy_config)
else:
    ytt_api = YouTubeTranscriptApi()

# Carica spaCy solo se necessario
nlp_spacy = None
if LANG in ('es', 'fr'):
    try:
        import spacy
        model = 'es_core_news_sm' if LANG == 'es' else 'fr_core_news_sm'
        nlp_spacy = spacy.load(model)
        print(f"   🧠 spaCy caricato: {model}")
    except Exception as e:
        print(f"❌ spaCy non disponibile: {e}")
        print(f"   Installa con: pip install spacy && python -m spacy download {'es_core_news_sm' if LANG == 'es' else 'fr_core_news_sm'}")
        sys.exit(1)


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


def estrai_verbi_en(testo):
    risultati = set()
    try:
        tokens = word_tokenize(testo.lower())
        tagged = pos_tag(tokens)
        for i, (word, tag) in enumerate(tagged):
            if tag.startswith('VB') and word.isalpha() and len(word) > 3:
                base = lemmatizer.lemmatize(word, 'v')
                risultati.add(base)
                if i + 1 < len(tagged):
                    next_word, next_tag = tagged[i + 1]
                    if next_word in PV_PARTICLES and next_tag in ('RP', 'IN', 'RB'):
                        risultati.add(f"{base} {next_word}")
    except Exception as e:
        print(f"   ⚠️ POS tag error: {e}")
    return risultati


def estrai_verbi_spacy(testo, nlp):
    risultati = set()
    try:
        # spaCy ha limite di 1M chars — tronca se necessario
        doc = nlp(testo[:1_000_000])
        for token in doc:
            if token.pos_ == 'VERB' and token.is_alpha and len(token.lemma_) > 3:
                risultati.add(token.lemma_.lower())
    except Exception as e:
        print(f"   ⚠️ spaCy error: {e}")
    return risultati


# --- ESECUZIONE ---
vocaboli_noti = carica_db_esistente(FILE_DB)
nuovi_scoperti = {}  # parola → titolo video

print(f"🚀 Analisi Playlist [{LANG.upper()}]: {PLAYLIST_ID}")
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
            lang_codes = LANG_CODES[LANG]
            try:
                transcript = transcript_list.find_transcript(lang_codes)
            except NoTranscriptFound:
                transcript = transcript_list.find_generated_transcript(lang_codes)

            t_data = transcript.fetch()
            testo_video = " ".join([r.text for r in t_data])

            if LANG == 'en':
                verbi_video = estrai_verbi_en(testo_video)
            else:
                verbi_video = estrai_verbi_spacy(testo_video, nlp_spacy)

            nuove_trovate = 0
            for v in verbi_video:
                if v not in vocaboli_noti and v not in nuovi_scoperti:
                    nuovi_scoperti[v] = v_titolo
                    nuove_trovate += 1

            print(f"   ✅ ({transcript.language_code}) | Verbi estratti: {len(verbi_video)} | Nuovi: {nuove_trovate}")

        except (TranscriptsDisabled, NoTranscriptFound):
            print(f"   ⚠️ Nessun CC {LANG.upper()} trovato.")
        except Exception as e:
            print(f"   ❌ Errore tecnico: {e}")

        delay = random.uniform(8, 15)
        print(f"   ⏳ pausa {delay:.1f}s...")
        time.sleep(delay)

    if nuovi_scoperti:
        with open(FILE_OUTPUT, 'w', encoding='utf-8') as f:
            f.write(f"# Nuovi Vocaboli [{LANG.upper()}]\n\n")

            if LANG == 'en':
                pv = {k: v for k, v in nuovi_scoperti.items() if ' ' in k}
                verbi = {k: v for k, v in nuovi_scoperti.items() if ' ' not in k}
                f.write(f"## Phrasal Verbs nuovi ({len(pv)})\n\n| PV | Video |\n|---|---|\n")
                for p, t in sorted(pv.items()):
                    f.write(f"| {p} | {t} |\n")
                f.write(f"\n## Verbi nuovi ({len(verbi)})\n\n| Verbo | Video |\n|---|---|\n")
                for p, t in sorted(verbi.items()):
                    f.write(f"| {p} | {t} |\n")
                print(f"\n✨ FINITO! {len(pv)} PV + {len(verbi)} verbi → {FILE_OUTPUT}")
            else:
                f.write(f"## Verbi nuovi ({len(nuovi_scoperti)})\n\n| Verbo | Video |\n|---|---|\n")
                for p, t in sorted(nuovi_scoperti.items()):
                    f.write(f"| {p} | {t} |\n")
                print(f"\n✨ FINITO! {len(nuovi_scoperti)} verbi → {FILE_OUTPUT}")
    else:
        print("\n🤔 Zero voci nuove.")

except Exception as e:
    print(f"❌ Errore Playlist: {e}")
