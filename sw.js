const CACHE_NAME = 'warehouse-warrior-v3.87';

// Alle filer der skal pre-caches for offline-brug
// Musik udeladt (for store) — caches on-demand
const PRECACHE_FILES = [
    './',
    './index.html',
    './style-new.css',
    './game.js',
    './questions.js',
    './firebase-highscore.js',
    './manifest.json',
    // Scene-baggrunde
    './assets/images/scenes/01_velkomst_scene_desktop.png',
    './assets/images/scenes/01_velkomst_scene_mobil.png',
    './assets/images/scenes/02_spoergsmaal_scene_desktop.png',
    './assets/images/scenes/02_spoergsmaal_scene_mobil.png',
    './assets/images/scenes/04_checkpoint_scene_desktop.png',
    './assets/images/scenes/04_checkpoint_scene_mobil.png',
    './assets/images/scenes/05_highscore_scene_desktop.png',
    './assets/images/scenes/05_highscore_scene_mobil.png',
    './assets/images/scenes/06_korrekt_svar_scene_desktop.png',
    './assets/images/scenes/06_korrekt_svar_scene_mobil.png',
    './assets/images/scenes/07_forkert_svar_scene_desktop.png',
    './assets/images/scenes/07_forkert_svar_scene_mobil.png',
    './assets/images/scenes/08_game_over_scene_desktop.png',
    './assets/images/scenes/08_game_over_scene_mobil.png',
    './assets/images/scenes/09_sejr_champion_scene_desktop.png',
    './assets/images/scenes/09_sejr_champion_scene_mobil.png',
    // Vært-billeder
    './assets/images/host/01_vaert_velkommen_aabne_arme.png',
    './assets/images/host/02_vaert_peger_mod_seer.png',
    './assets/images/host/03_vaert_taenker_haand_paa_hage.png',
    './assets/images/host/04_vaert_begejstret_haender_op.png',
    './assets/images/host/05_vaert_thumbs_up.png',
    './assets/images/host/06_vaert_chokeret_overrasket.png',
    './assets/images/host/07_vaert_facepalm_skuffet.png',
    './assets/images/host/08_vaert_traekker_paa_skuldrene.png',
    './assets/images/host/09_vaert_holder_trofae.png',
    './assets/images/host/10_vaert_hvisker_hemmelighed.png',
    './assets/images/host/11_vaert_nervoes_sveder.png',
    './assets/images/host/12_vaert_laeser_quiz_kort.png',
    './assets/images/host/13_vaert_cool_korslagte_arme.png',
    './assets/images/host/14_vaert_danser_fejrer.png',
    './assets/images/host/15_vaert_vinker_farvel.png',
    './assets/images/host/16_vaert_frustreret_vred.png',
    './assets/images/host/17_vaert_med_mikrofon_taler.png',
    './assets/images/host/18_vaert_klor_sig_i_hovedet_forvirret.png',
    './assets/images/host/19_vaert_flexer_muskler_staerk.png',
    './assets/images/host/20_vaert_holder_ur_panik.png',
    './assets/images/host/vaert_dobbelt_tommel_op.png',
    // Ikoner
    './assets/images/icons/01_warehouse_warrior_logo.png',
    './assets/images/icons/02_quiz_spoergsmaalstegn_ikon.png',
    './assets/images/icons/03_tidsbombe_timer_ikon.png',
    './assets/images/icons/05_neon_stjerne_point.png',
    './assets/images/icons/06_lifeline_50_50_ikon.png',
    './assets/images/icons/07_lifeline_spoerg_publikum_ikon.png',
    './assets/images/icons/08_lifeline_ring_en_ven_ikon.png',
    './assets/images/icons/09_lifeline_ekstra_tid_ikon.png',
    './assets/images/icons/12_guld_medalje.png',
    './assets/images/icons/21_checkpoint_niveau_5_badge.png',
    './assets/images/icons/22_checkpoint_niveau_10_badge.png',
    './assets/images/icons/23_checkpoint_niveau_15_badge.png',
    './assets/images/icons/24_korrekt_svar_checkmark.png',
    './assets/images/icons/25_forkert_svar_kryds.png',
    './assets/images/icons/27_highscore_tavle_ikon.png',
    './assets/images/icons/60_spil_over_skilt.png',
    './assets/images/icons/61_du_vandt_sejr_skilt.png',
    './assets/images/icons/62_taenk_dig_om.png',
    './assets/images/icons/63_psyk_de_fleste_ville_ikke.png',
    './assets/images/icons/64_psyk_er_du_helt_sikker.png',
    './assets/images/icons/77_indstillinger_tandhjul.png',
    './assets/images/icons/80_krone_champion.png',
    './assets/images/icons/DE logo.png',
    './assets/images/icons/smartpack_logo.png',
    './assets/images/og-share-image.jpg',
    // Kategori-ikoner
    './assets/images/icons/37_kategori_lagerindretning_flow.png',
    './assets/images/icons/38_kategori_plukkestrategi.png',
    './assets/images/icons/39_kategori_redskaber.png',
    './assets/images/icons/40_kategori_lagerstyring_minmax.png',
    './assets/images/icons/41_kategori_pakkefejl_fejllog.png',
    './assets/images/icons/42_kategori_returer_reklamationer.png',
    './assets/images/icons/43_kategori_svind_lageroptaelling.png',
    './assets/images/icons/44_kategori_noegletal.png',
    './assets/images/icons/45_kategori_3pl_skalering.png',
    './assets/images/icons/46_kategori_abc_analyse.png',
    // Eksperter
    './assets/images/experts/31_ven_lagerchef_lars.png',
    './assets/images/experts/32_ven_gaffeltruck_gitte.png',
    './assets/images/experts/33_ven_it_nikolaj.png',
    './assets/images/experts/35_ven_pakke_peter.png',
    './assets/images/experts/36_ven_regnskab_rikke.png',
    // Lydeffekter (små filer)
    './assets/sounds/Click - Single.MP3',
    './assets/sounds/Correct - Synthetic Chime.MP3',
    './assets/sounds/Sad Trombone 1.MP3',
    './assets/sounds/Applause - Large Crowd 1.MP3',
    './assets/sounds/Alert - Tense.MP3',
    './assets/sounds/Whoosh - Achievement.MP3',
    './assets/sounds/Buzzer 1.MP3',
    './assets/sounds/Drumroll 1.mp3',
    './assets/sounds/Crowd - Cheering - Large 1.MP3',
    './assets/sounds/Dramatic Buildup 1.MP3',
    './assets/sounds/Explosion 1.MP3',
    './assets/sounds/Ding - Single - Bright.MP3',
    './assets/sounds/Wah Wah Waah.MP3',
    './assets/sounds/Crowd - Disappointed Groans.MP3',
    './assets/sounds/Celebratory Jingle 1.MP3',
    './assets/sounds/Checkpoint Riser.aac'
];

// Install - pre-cache alle essentielle filer
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            // Cache filer én ad gangen så én fejl ikke stopper alt
            return Promise.all(
                PRECACHE_FILES.map(url =>
                    cache.add(url).catch(err => {
                        console.warn('SW: Kunne ikke cache:', url, err);
                    })
                )
            );
        })
    );
    self.skipWaiting();
});

// Activate - slet gamle caches
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
            );
        })
    );
    self.clients.claim();
});

// Fetch strategi:
// - Firebase/API: network-only (skip cache)
// - Musik: cache-first (store filer, cache on-demand)
// - Alt andet: stale-while-revalidate (hurtig fra cache, opdater i baggrunden)
self.addEventListener('fetch', (event) => {
    const url = new URL(event.request.url);
    
    // Firebase og eksterne API'er: altid netværk
    if (url.hostname.includes('firebase') || 
        url.hostname.includes('gstatic') ||
        url.hostname.includes('googleapis')) {
        event.respondWith(
            fetch(event.request).catch(() => caches.match(event.request))
        );
        return;
    }
    
    // Musik: cache-first (store filer, undgå re-download)
    if (url.pathname.includes('/music/')) {
        event.respondWith(
            caches.match(event.request).then(cached => {
                if (cached) return cached;
                return fetch(event.request).then(response => {
                    if (response.ok) {
                        const clone = response.clone();
                        caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
                    }
                    return response;
                }).catch(() => new Response('', { status: 404 }));
            })
        );
        return;
    }
    
    // Alt andet: stale-while-revalidate
    // Svar hurtigt fra cache, opdater i baggrunden
    event.respondWith(
        caches.match(event.request).then(cached => {
            const fetchPromise = fetch(event.request).then(response => {
                if (response.ok) {
                    const clone = response.clone();
                    caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
                }
                return response;
            }).catch(() => {
                // Offline — returner cached version eller fejl
                if (cached) return cached;
                // Fallback for navigation requests
                if (event.request.mode === 'navigate') {
                    return caches.match('./index.html');
                }
                return new Response('Offline', { status: 503 });
            });
            
            // Returner cached version med det samme, eller vent på netværk
            return cached || fetchPromise;
        })
    );
});
