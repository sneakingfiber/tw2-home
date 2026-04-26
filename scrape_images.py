import os
import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse
import time

BASE_URL = "https://www.tw2.eu/"
IMAGE_DIR = "immagini_tw2"

os.makedirs(IMAGE_DIR, exist_ok=True)

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
}

print(f"📥 Inizio scraping da {BASE_URL}")
print(f"📂 Cartella: {IMAGE_DIR}\n")

try:
    response = requests.get(BASE_URL, headers=headers, timeout=10)
    response.raise_for_status()
    soup = BeautifulSoup(response.content, 'html.parser')
    
    images = soup.find_all('img')
    print(f"✓ Trovate {len(images)} immagini\n")
    
    downloaded = 0
    
    for idx, img in enumerate(images, 1):
        try:
            src = img.get('src') or img.get('data-src')
            if not src:
                continue
            
            img_url = urljoin(BASE_URL, src)
            parsed_url = urlparse(img_url)
            filename = os.path.basename(parsed_url.path)
            
            if not filename or '.' not in filename:
                filename = f"image_{idx}.jpg"
            
            filepath = os.path.join(IMAGE_DIR, filename)
            
            img_response = requests.get(img_url, headers=headers, timeout=10)
            img_response.raise_for_status()
            
            with open(filepath, 'wb') as f:
                f.write(img_response.content)
            
            print(f"✓ {filename}")
            downloaded += 1
            time.sleep(0.2)
            
        except Exception as e:
            pass
    
    print(f"\n✅ Scaricate {downloaded} immagini")

except Exception as e:
    print(f"❌ Errore: {e}")
