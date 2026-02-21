# 🖥️ Hosting Guide - Warehouse Warrior

## Krav
- En webserver (Nginx, Apache, IIS, eller lignende)
- HTTPS-certifikat (påkrævet for PWA/Service Worker)
- Ingen database, ingen backend, ingen Node.js — det er 100% statisk

## Mappestruktur
Upload HELE `WarehouseWarrior/`-mappen til din webserver:

```
/var/www/warehouse-warrior/     (eller din valgte sti)
├── index.html
├── style-new.css
├── game.js
├── questions.js
├── firebase-highscore.js
├── sw.js
├── manifest.json
└── assets/
    ├── images/
    ├── sounds/
    └── music/
```

---

## Nginx Konfiguration

```nginx
server {
    listen 443 ssl http2;
    server_name warehouse-warrior.ditdomæne.dk;

    ssl_certificate     /etc/letsencrypt/live/warehouse-warrior.ditdomæne.dk/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/warehouse-warrior.ditdomæne.dk/privkey.pem;

    root /var/www/warehouse-warrior;
    index index.html;

    # Caching for statiske assets (billeder, lyd, musik)
    location ~* \.(png|jpg|jpeg|gif|mp3|aac|wav|ico|svg)$ {
        expires 30d;
        add_header Cache-Control "public, immutable";
    }

    # CSS/JS — cache men tillad opdatering
    location ~* \.(css|js)$ {
        expires 7d;
        add_header Cache-Control "public";
    }

    # Service Worker — ALDRIG cache (skal altid være frisk)
    location = /sw.js {
        expires -1;
        add_header Cache-Control "no-cache, no-store, must-revalidate";
    }

    # manifest.json
    location = /manifest.json {
        expires 1d;
        add_header Cache-Control "public";
    }

    # MIME-types (de fleste servere har dette allerede)
    types {
        application/manifest+json  json;
    }

    # Gzip komprimering
    gzip on;
    gzip_types text/html text/css application/javascript application/json;
    gzip_min_length 1000;

    # SPA fallback (ikke strengt nødvendigt, men godt at have)
    location / {
        try_files $uri $uri/ /index.html;
    }
}

# HTTP → HTTPS redirect
server {
    listen 80;
    server_name warehouse-warrior.ditdomæne.dk;
    return 301 https://$host$request_uri;
}
```

---

## Apache Konfiguration (.htaccess)

Læg denne fil i roden af WarehouseWarrior-mappen:

```apache
# HTTPS redirect (hvis ikke håndteret af vhost)
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Caching
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType image/png "access plus 30 days"
    ExpiresByType image/jpeg "access plus 30 days"
    ExpiresByType audio/mpeg "access plus 30 days"
    ExpiresByType audio/aac "access plus 30 days"
    ExpiresByType text/css "access plus 7 days"
    ExpiresByType application/javascript "access plus 7 days"
</IfModule>

# Service Worker — aldrig cache
<Files "sw.js">
    Header set Cache-Control "no-cache, no-store, must-revalidate"
</Files>

# Gzip
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html text/css application/javascript application/json
</IfModule>
```

---

## IIS (Windows Server)

Tilføj `web.config` i roden:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<configuration>
    <system.webServer>
        <staticContent>
            <mimeMap fileExtension=".json" mimeType="application/json" />
            <mimeMap fileExtension=".mp3" mimeType="audio/mpeg" />
            <mimeMap fileExtension=".aac" mimeType="audio/aac" />
        </staticContent>
        <httpProtocol>
            <customHeaders>
                <add name="Cache-Control" value="public, max-age=604800" />
            </customHeaders>
        </httpProtocol>
        <rewrite>
            <rules>
                <rule name="HTTPS Redirect">
                    <match url="(.*)" />
                    <conditions>
                        <add input="{HTTPS}" pattern="off" />
                    </conditions>
                    <action type="Redirect" url="https://{HTTP_HOST}/{R:1}" redirectType="Permanent" />
                </rule>
            </rules>
        </rewrite>
    </system.webServer>
</configuration>
```

---

## ⚠️ VIGTIGT: Efter deploy

### 1. Opdater OG-billede URL (LinkedIn preview)
Åbn `index.html` og erstat de relative OG-image URLs med absolutte:

```html
<meta property="og:image" content="https://warehouse-warrior.ditdomæne.dk/assets/images/og-share-image.jpg">
<meta name="twitter:image" content="https://warehouse-warrior.ditdomæne.dk/assets/images/og-share-image.jpg">
```

### 2. Opdater Firebase-regler
Se `FIREBASE-SETUP.md` for de korrekte database-regler.

### 3. Test
- [ ] Åbn siden i browser — spillet loader
- [ ] Spil en runde — score gemmes
- [ ] Slå flytilstand til — spillet virker offline
- [ ] Del score — LinkedIn viser preview-billede
- [ ] Test på mobil — PWA install-prompt vises

### 4. HTTPS er PÅKRÆVET
Service Worker (offline-support) og Web Share API virker KUN over HTTPS.
Brug Let's Encrypt for gratis certifikat: `certbot --nginx -d warehouse-warrior.ditdomæne.dk`

---

## Filstørrelser (ca.)
| Type | Antal | Størrelse |
|---|---|---|
| HTML/CSS/JS | 5 filer | ~300 KB |
| Billeder | ~75 filer | ~65 MB |
| Lydeffekter | 16 filer | ~700 KB |
| Musik | 11 filer | ~80 MB |
| **Total** | **~105 filer** | **~146 MB** |

Musik-filerne er de største. Overvej at konvertere til lavere bitrate (128kbps) for at spare ~50%.
