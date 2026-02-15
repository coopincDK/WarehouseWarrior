# 🖼️ Grafik Optimering — Warehouse Warrior

## 📊 Status Nu
- **Total**: 90.8 MB fordelt på 75 billeder
- **51 filer** er over 1 MB (!)
- Alle billeder er **PNG** (ukomprimmeret/lossless)

## 🚨 Største Syndere (over 2 MB)

| Fil | Størrelse | Anbefaling |
|---|---|---|
| scenes/06_korrekt_svar_scene_desktop.png | 2.2 MB | → WebP (~300KB) |
| scenes/01_velkomst_scene_mobil.png | 2.2 MB | → WebP (~300KB) |
| scenes/09_sejr_champion_scene_mobil.png | 2.1 MB | → WebP (~300KB) |
| scenes/04_checkpoint_scene_desktop.png | 2.1 MB | → WebP (~300KB) |
| scenes/02_spoergsmaal_scene_desktop.png | 2.1 MB | → WebP (~300KB) |
| scenes/01_velkomst_scene_desktop.png | 2.1 MB | → WebP (~300KB) |
| scenes/04_checkpoint_scene_mobil.png | 2.0 MB | → WebP (~300KB) |
| scenes/08_game_over_scene_desktop.png | 2.0 MB | → WebP (~300KB) |
| scenes/07_forkert_svar_scene_mobil.png | 2.0 MB | → WebP (~300KB) |
| icons/45_kategori_3pl_skalering.png | 2.0 MB | → WebP (~200KB) |

## 📁 Kategori-oversigt

### 🎬 Scenes (18 filer = ~35 MB)
Baggrundsbilleder til desktop + mobil. Disse er de STØRSTE.
- **Anbefaling**: Konverter til **WebP** (quality 80) → sparer ~85%
- Alternativt: Resize til max 1920px bred (mange er sikkert større)

### 🤖 Host/Carsten (20 filer = ~22 MB)
Carsten i forskellige poser.
- **Anbefaling**: Konverter til **WebP** med transparency (quality 85)
- Resize til max 800px bred (vises aldrig større)

### 🏷️ Icons (30 filer = ~30 MB)
Kategori-ikoner, badges, psyk-billeder, lifelines.
- **Anbefaling**: Konverter til **WebP** (quality 80)
- Resize til max 512px (de fleste vises under 200px)

### 👥 Experts (5 filer = ~4.5 MB)
Ven-karakterer til "Ring en ven".
- **Anbefaling**: Konverter til **WebP** (quality 85)
- Resize til max 400px

## 🎯 Forventet Besparelse

| Kategori | Nu | Efter WebP | Besparelse |
|---|---|---|---|
| Scenes | ~35 MB | ~5 MB | ~86% |
| Host | ~22 MB | ~4 MB | ~82% |
| Icons | ~30 MB | ~4 MB | ~87% |
| Experts | ~4.5 MB | ~1 MB | ~78% |
| **Total** | **~91 MB** | **~14 MB** | **~85%** |

## 🛠️ Sådan gør du

### Option 1: Online (nemmest)
1. Gå til **squoosh.app** (Googles gratis tool)
2. Træk billeder ind
3. Vælg **WebP**, quality **80**
4. Download

### Option 2: Bulk med Sharp (Node.js)
```bash
npm install sharp
node optimize.js
```

### Option 3: TinyPNG.com
- Gratis op til 500 billeder/måned
- Komprimerer PNG uden kvalitetstab

## ⚠️ Vigtig Note
Når billeder konverteres til WebP, skal HTML opdateres:
- Enten: Brug `<picture>` tag med PNG fallback
- Eller: Bare skift `.png` → `.webp` (alle moderne browsere understøtter WebP)

## 📱 Effekt på Load-tid
- **Nu**: ~91 MB billeder = 15-30 sek på 4G
- **Efter**: ~14 MB = 2-5 sek på 4G
- **Forskel**: Op til **6x hurtigere** load! 🚀
