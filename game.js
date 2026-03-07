// Warehouse Warrior - Game Logic med Eksperter, "Er du sikker?" & Lydindstillinger

class WarehouseWarriorGame {
    constructor() {
        this.playerName = '';
        this.playerCompany = '';
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.correctAnswers = 0;
        this.questions = [];
        this.timer = null;
        this.timeLeft = 60;
        this.maxTime = 60;
        this.answerStartTime = null; // For speed-based scoring
        this.selectedAnswer = null;
        this.pendingAnswer = null; // For "Er du sikker?"
        this.currentShuffle = null;
        this.lifelines = {
            fiftyFifty: false,
            audience: false,
            phone: false,
            extraTime: false
        };
        
        // Sound elements
        this.sounds = {
            click: document.getElementById('clickSound'),
            correct: document.getElementById('correctSound'),
            incorrect: document.getElementById('incorrectSound'),
            applause: document.getElementById('applauseSound'),
            alarm: document.getElementById('alarmSound'),
            whoosh: document.getElementById('whooshSound'),
            bgMusic: document.getElementById('bgMusic'),
            buzzer: document.getElementById('buzzerSound'),
            drumroll: document.getElementById('drumrollSound'),
            crowdCheer: document.getElementById('crowdCheerSound'),
            dramatic: document.getElementById('dramaticSound'),
            explosion: document.getElementById('explosionSound'),
            ding: document.getElementById('dingSound'),
            wahwah: document.getElementById('wahwahSound'),
            crowdGroan: document.getElementById('crowdGroanSound'),
            celebrate: document.getElementById('celebrateSound'),
            checkpointRiser: document.getElementById('checkpointRiserSound')
        };
        
        // Audio settings (load from localStorage)
        this.musicEnabled = localStorage.getItem('ww_music') !== 'false';
        this.sfxEnabled = localStorage.getItem('ww_sfx') !== 'false';
        this.hapticEnabled = localStorage.getItem('ww_haptic') !== 'false';
        this.maxMusicVolume = 0.08; // Max volume cap (8%)
        this.sfxVolume = 0.15; // SFX volume cap (15%)
        const savedVol = parseFloat(localStorage.getItem('ww_volume'));
        this.musicVolume = savedVol >= 0 ? Math.min(savedVol, this.maxMusicVolume) : this.maxMusicVolume;
        this.musicPlaying = false;

        // Awards-musik til highscore
        this.awardsMusic = new Audio('assets/music/Veaceslav Draganov - Awards.mp3');
        this.awardsMusic.loop = true;
        this.awardsMusic.volume = this.musicVolume;
        
        // Expert definitions
        this.experts = [
            {
                id: 'lars',
                name: 'Lars Lagerchef',
                emoji: '🔧',
                image: 'assets/images/experts/31_ven_lagerchef_lars.png',
                specialty: ['Lagerindretning', 'ABC-analyse', 'Plukkestrategi'],
                confidentLines: [
                    'Det er helt sikkert {answer}! Det har jeg arbejdet med i 20 år.',
                    'Ingen tvivl - svaret er {answer}. Det lærer man på dag ét!',
                    '{answer}, 100%! Det er grundlæggende lagerviden.'
                ],
                unsureLines: [
                    'Øhh... det er ikke lige mit felt, men måske {answer}? Spørg hellere en anden.',
                    'Hmm, jeg gætter på {answer}, men tag det med et gran salt...',
                    'Puh, det er svært... {answer}? Jeg er slet ikke sikker.'
                ]
            },
            {
                id: 'pia',
                name: 'Pakke-Pia',
                emoji: '📦',
                image: 'assets/images/experts/32_ven_gaffeltruck_gitte.png',
                specialty: ['Pakkefejl', 'Redskaber', 'Generelt'],
                confidentLines: [
                    'Åh, det ved jeg! Det er {answer}! Jeg pakker jo 500 ordrer om dagen!',
                    '{answer} - det er jeg 100% sikker på! Det er mit speciale!',
                    'Easy peasy! {answer}! Det har jeg styr på.'
                ],
                unsureLines: [
                    'Hmm, det er ikke lige noget med pakning... Måske {answer}?',
                    'Jeg tror det er {answer}, men jeg er bedre til pakke-spørgsmål...',
                    'Uhhh... {answer}? Jeg ved det virkelig ikke.'
                ]
            },
            {
                id: 'dennis',
                name: 'Data-Dennis',
                emoji: '📊',
                image: 'assets/images/experts/33_ven_it_nikolaj.png',
                specialty: ['Lagerstyring', 'Nøgletal', '3PL'],
                confidentLines: [
                    'Ifølge mine data er svaret {answer}. 99.7% konfidens!',
                    '{answer} - det viser alle KPI\'erne tydeligt!',
                    'Svaret er {answer}. Jeg har regnet på det tre gange.'
                ],
                unsureLines: [
                    'Mine data siger... ingenting om det her. Måske {answer}?',
                    'Det er uden for min database... {answer}? Bare et gæt.',
                    'Hmm, jeg har ingen statistik på det. {answer} måske?'
                ]
            },
            {
                id: 'thomas',
                name: 'Truck-Thomas',
                emoji: '🚛',
                image: 'assets/images/experts/35_ven_pakke_peter.png',
                specialty: ['Redskaber', 'Lagerindretning', 'Svind'],
                confidentLines: [
                    'Kammerat, det er {answer}! Det ved enhver truckfører!',
                    '{answer}! Jeg har kørt truck i 15 år - stol på mig!',
                    'Selvfølgelig er det {answer}! Det er basalt lagerstof!'
                ],
                unsureLines: [
                    'Altså... jeg kører mest truck. Måske {answer}?',
                    'Det er ikke lige noget man lærer bag rattet... {answer}?',
                    'Øhh... {answer}? Spørg hellere Pia eller Dennis.'
                ]
            },
            {
                id: 'rita',
                name: 'Retur-Rita',
                emoji: '📋',
                image: 'assets/images/experts/36_ven_regnskab_rikke.png',
                specialty: ['Returer', 'Svind', 'Pakkefejl'],
                confidentLines: [
                    'Det er {answer}! Jeg behandler returer hver eneste dag!',
                    '{answer} - ingen tvivl! Det er mit ekspertområde!',
                    'Helt klart {answer}! Det ser jeg hele tiden i retur-afdelingen.'
                ],
                unsureLines: [
                    'Det handler ikke om returer, vel? Øhm... {answer}?',
                    'Jeg kender mest til returer... Måske {answer}?',
                    'Hmm, det er uden for mit felt. {answer}? Bare et skud i tågen.'
                ]
            }
        ];
        
        // "Er du sikker?" taunts fra værten
        this.areYouSureTaunts = [
            'Er du HELT sikker? 🤔',
            'Hmm, vil du ikke tænke dig om én gang til? 😏',
            'Sikker sikker? Det er mange point på spil! 😈',
            'Vent vent vent... er det dit endelige svar? 🧐',
            'Tør du virkelig satse på det svar? 💀',
            'Min bedstemor ville have valgt anderledes... 👵',
            'Interessant valg... er du sikker? 🎭',
            'Sidste chance for at ændre mening! ⏰'
        ];
        
        // Kapitel-mapping: kategori → kapitel i bogen
        this.chapterMap = {
            'Lagerindretning': { chapter: 'Kapitel 2: Lagerindretning & Flow', url: 'https://www.danskerhverv.dk/branche/digital-handel/#kapitel2' },
            'ABC-analyse': { chapter: 'Kapitel 3: ABC-analyse', url: 'https://www.danskerhverv.dk/branche/digital-handel/#kapitel3' },
            'Plukkestrategi': { chapter: 'Kapitel 4: Plukkestrategier', url: 'https://www.danskerhverv.dk/branche/digital-handel/#kapitel4' },
            'Redskaber': { chapter: 'Kapitel 5: Redskaber & Udstyr', url: 'https://www.danskerhverv.dk/branche/digital-handel/#kapitel5' },
            'Lagerstyring': { chapter: 'Kapitel 6: Lagerstyring', url: 'https://www.danskerhverv.dk/branche/digital-handel/#kapitel6' },
            'Pakkefejl': { chapter: 'Kapitel 7: Pakkefejl & Kvalitet', url: 'https://www.danskerhverv.dk/branche/digital-handel/#kapitel7' },
            'Returer': { chapter: 'Kapitel 8: Returer & Reklamationer', url: 'https://www.danskerhverv.dk/branche/digital-handel/#kapitel8' },
            'Svind': { chapter: 'Kapitel 9: Svind & Forebyggelse', url: 'https://www.danskerhverv.dk/branche/digital-handel/#kapitel9' },
            'Nøgletal': { chapter: 'Kapitel 10: Nøgletal & KPI\'er', url: 'https://www.danskerhverv.dk/branche/digital-handel/#kapitel10' },
            '3PL': { chapter: 'Kapitel 11: 3PL & Outsourcing', url: 'https://www.danskerhverv.dk/branche/digital-handel/#kapitel11' },
            'Fragt': { chapter: 'Kapitel 12: Fragt & Levering', url: 'https://www.danskerhverv.dk/branche/digital-handel/#kapitel12' },
            'Emballage': { chapter: 'Kapitel 13: Emballage', url: 'https://www.danskerhverv.dk/branche/digital-handel/#kapitel13' },
            'Kampagner': { chapter: 'Kapitel 14: Kampagner & Peak', url: 'https://www.danskerhverv.dk/branche/digital-handel/#kapitel14' },
            'Generelt': { chapter: 'Hele bogen', url: 'https://www.danskerhverv.dk/branche/digital-handel/' },
            'Avanceret': { chapter: 'Hele bogen', url: 'https://www.danskerhverv.dk/branche/digital-handel/' },
            'Ekspert': { chapter: 'Hele bogen', url: 'https://www.danskerhverv.dk/branche/digital-handel/' },
            'Super Ekspert': { chapter: 'Hele bogen', url: 'https://www.danskerhverv.dk/branche/digital-handel/' }
        };
        
        // Kategori til ikon-mapping
        this.categoryIcons = {
            'Lagerindretning': 'assets/images/icons/37_kategori_lagerindretning_flow.png',
            'ABC-analyse': 'assets/images/icons/46_kategori_abc_analyse.png',
            'Plukkestrategi': 'assets/images/icons/38_kategori_plukkestrategi.png',
            'Redskaber': 'assets/images/icons/39_kategori_redskaber.png',
            'Lagerstyring': 'assets/images/icons/40_kategori_lagerstyring_minmax.png',
            'Pakkefejl': 'assets/images/icons/41_kategori_pakkefejl_fejllog.png',
            'Returer': 'assets/images/icons/42_kategori_returer_reklamationer.png',
            'Svind': 'assets/images/icons/43_kategori_svind_lageroptaelling.png',
            'Nøgletal': 'assets/images/icons/44_kategori_noegletal.png',
            '3PL': 'assets/images/icons/45_kategori_3pl_skalering.png',
            'Generelt': 'assets/images/icons/02_quiz_spoergsmaalstegn_ikon.png',
            'Avanceret': 'assets/images/icons/02_quiz_spoergsmaalstegn_ikon.png',
            'Ekspert': 'assets/images/icons/02_quiz_spoergsmaalstegn_ikon.png',
            'Super Ekspert': 'assets/images/icons/02_quiz_spoergsmaalstegn_ikon.png'
        };
        
        // Psyk-billeder til "Er du sikker?"
        this.psykImages = [
            'assets/images/icons/62_psyk_taenk_dig_om.png',
            'assets/images/icons/63_psyk_de_fleste_ville_ikke.png',
            'assets/images/icons/64_psyk_er_du_helt_sikker.webp'
        ];
        
        // Streak tracking
        this.streak = 0;
        this.bestStreak = 0;
        
        // Music tracks - normal playlist (level 1-10)
        this.normalTracks = [
            'assets/music/Semo - The Microwave Dance.mp3',
            'assets/music/Ian Post - Super Duper.mp3',
            'assets/music/Matt Evans - Comedy of Errors.mp3',
            'assets/music/Ilona Harpaz - Rabbit Hole.mp3',
            'assets/music/T Bless - Froggy Fraud Adventure.mp3',
            'assets/music/Mac A DeMia - Smoothie Moody.mp3',
            'assets/music/Ian Post - Breaking Point.mp3',
            'assets/music/Dizzy - Lift Me Up.mp3',
            'assets/music/FASSounds - Rock Your Body.mp3',
            'assets/music/Liquify - Sky Dive.mp3',
            'assets/music/Rex Banner - So Fresh.mp3',
            'assets/music/Rex Banner - Turn It Up - No Lead Vocals.mp3'
        ];
        
        // Final round playlist (level 11-15) - dramatisk stemningsskift
        this.finalTracks = [
            'assets/music/Raz Burg - Rushing Earth.mp3',
            'assets/music/Tiko Tiko - Dark Iron - Instrumental version.mp3'
        ];
        
        this.musicTracks = this.normalTracks;
        this.inFinalRound = false;
        this.currentTrackIndex = Math.floor(Math.random() * this.musicTracks.length);
        
        // Auto-skip til næste track når en track slutter
        this.sounds.bgMusic.addEventListener('ended', () => this.nextTrack());
        
        this.init();
    }
    
    init() {
        // Event listeners
        document.getElementById('startBtn').addEventListener('click', () => this.startGame());
        document.getElementById('settingsBtn').addEventListener('click', () => this.openSettings());
        document.getElementById('continueBtn').addEventListener('click', () => this.continueFromCheckpoint());
        document.getElementById('wrongRetryBtn').addEventListener('click', () => this.restartSamePlayer());
        document.getElementById('wrongHomeBtn').addEventListener('click', () => this.goHome());
        document.getElementById('wrongReadMoreBtn').addEventListener('click', () => this.openChapterForCurrentQuestion());
        document.getElementById('restartBtn').addEventListener('click', () => this.restartSamePlayer());
        document.getElementById('playAgainBtn').addEventListener('click', () => this.restartSamePlayer());
        
        // Share buttons
        document.getElementById('wrongShareBtn').addEventListener('click', () => this.shareScore());
        document.getElementById('gameoverShareBtn').addEventListener('click', () => this.shareScore());
        document.getElementById('victoryShareBtn').addEventListener('click', () => this.shareScore());
        
        // Highscore save buttons (on wrong/gameover/victory scenes)
        document.getElementById('wrongSaveScoreBtn').addEventListener('click', () => this.saveHighscoreFromScene('wrong'));
        document.getElementById('gameoverSaveScoreBtn').addEventListener('click', () => this.saveHighscoreFromScene('gameover'));
        document.getElementById('victorySaveScoreBtn').addEventListener('click', () => this.saveHighscoreFromScene('victory'));
        
        // Highscore buttons
        document.getElementById('showHighscoreBtn').addEventListener('click', () => this.showHighscore());
        document.getElementById('gameoverHighscoreBtn').addEventListener('click', () => this.showHighscore());
        document.getElementById('gameoverHomeBtn').addEventListener('click', () => this.goHome());
        document.getElementById('victoryHighscoreBtn').addEventListener('click', () => this.showHighscore());
        document.getElementById('victoryHomeBtn').addEventListener('click', () => this.goHome());
        document.getElementById('highscoreHomeBtn').addEventListener('click', () => this.goHome());
        document.getElementById('highscorePlayBtn').addEventListener('click', () => this.startGame());
        
        // Lifeline buttons
        document.getElementById('lifeline5050').addEventListener('click', () => this.useFiftyFifty());
        document.getElementById('lifelineAudience').addEventListener('click', () => this.useAudience());
        document.getElementById('lifelinePhone').addEventListener('click', () => this.usePhone());
        document.getElementById('lifelineTime').addEventListener('click', () => this.useExtraTime());
        
        // Settings toggles
        document.getElementById('musicToggle').addEventListener('change', (e) => this.setMusic(e.target.checked));
        document.getElementById('sfxToggle').addEventListener('change', (e) => this.setSfx(e.target.checked));
        document.getElementById('volumeSlider').addEventListener('input', (e) => this.setVolume(parseFloat(e.target.value)));
        const hapticToggle = document.getElementById('hapticToggle');
        if (hapticToggle) hapticToggle.addEventListener('change', (e) => this.setHaptic(e.target.checked));
        
        // Apply saved settings to checkboxes
        document.getElementById('musicToggle').checked = this.musicEnabled;
        document.getElementById('sfxToggle').checked = this.sfxEnabled;
        if (hapticToggle) hapticToggle.checked = this.hapticEnabled;
        const sliderPos = this.maxMusicVolume > 0 ? this.musicVolume / this.maxMusicVolume : 0;
        document.getElementById('volumeSlider').value = sliderPos;
        document.getElementById('volumeValue').textContent = Math.round(sliderPos * 100) + '%';
        
    }
    
    // ===== AUDIO SYSTEM =====
    
    playSound(soundName) {
        if (!this.sfxEnabled) return;
        const sound = this.sounds[soundName];
        if (sound) {
            sound.volume = this.sfxVolume;
            sound.currentTime = 0;
            sound.play().catch(e => console.log('Sound play failed:', e));
        }
    }
    
    setMusic(enabled) {
        this.musicEnabled = enabled;
        localStorage.setItem('ww_music', enabled);
        if (!enabled && this.musicPlaying) {
            this.sounds.bgMusic.pause();
            this.musicPlaying = false;
        } else if (enabled && !this.musicPlaying) {
            this.sounds.bgMusic.volume = this.musicVolume;
            this.sounds.bgMusic.play().catch(e => console.log('Music play failed:', e));
            this.musicPlaying = true;
        }
    }
    
    switchMusic(trackUrl) {
        if (!this.musicEnabled) return;
        this.sounds.bgMusic.pause();
        this.sounds.bgMusic.src = trackUrl;
        this.sounds.bgMusic.volume = this.musicVolume;
        this.sounds.bgMusic.play().catch(e => console.log('Music switch failed:', e));
    }
    
    nextTrack() {
        this.currentTrackIndex = (this.currentTrackIndex + 1) % this.musicTracks.length;
        this.switchMusic(this.musicTracks[this.currentTrackIndex]);
    }
    



    setSfx(enabled) {
        this.sfxEnabled = enabled;
        localStorage.setItem('ww_sfx', enabled);
    }
    
    setHaptic(enabled) {
        this.hapticEnabled = enabled;
        localStorage.setItem('ww_haptic', enabled);
        // Kort test-vibration når man slår det til
        if (enabled) this.vibrate([30]);
    }
    
    vibrate(pattern) {
        if (!this.hapticEnabled) return;
        if (navigator.vibrate) {
            navigator.vibrate(pattern);
        }
    }
    
    setVolume(sliderVal) {
        // Slider 0-1 maps to 0-maxMusicVolume (0.2 = 20%)
        const actualVol = sliderVal * this.maxMusicVolume;
        this.musicVolume = actualVol;
        localStorage.setItem('ww_volume', actualVol);
        this.sounds.bgMusic.volume = actualVol;
        this.awardsMusic.volume = actualVol;
        document.getElementById('volumeValue').textContent = Math.round(sliderVal * 100) + '%';
    }
    
    openSettings() {
        document.getElementById('settingsPanel').classList.add('active');
    }
    
    closeSettings() {
        document.getElementById('settingsPanel').classList.remove('active');
    }
    
    // ===== GAME FLOW =====
    
    startGame() {
        this.playerName = '';
        this.playerCompany = '';
        
        this.stopAwardsMusic();
        this.playSound('whoosh');
        
        // Reset til normal musik-playlist ved ny quiz
        if (this.inFinalRound) {
            this.inFinalRound = false;
            this.musicTracks = this.normalTracks;
            this.currentTrackIndex = Math.floor(Math.random() * this.normalTracks.length);
        }
        
        // Start music if enabled and not playing
        if (this.musicEnabled && !this.musicPlaying) {
            this.switchMusic(this.musicTracks[this.currentTrackIndex]);
            this.musicPlaying = true;
        } else if (this.musicEnabled && this.musicPlaying) {
            // Skift til normal track hvis vi kom fra finale
            this.switchMusic(this.musicTracks[this.currentTrackIndex]);
        }
        
        // Track spil startet + session data
        this.gameActive = true;
        if (typeof firebaseHighscore !== 'undefined') {
            firebaseHighscore.trackEvent('game_started');
            firebaseHighscore.trackSession();
        }
        
        // Anvend level-overrides fra admin på questionBank (hvis tilgængelige)
        if (typeof firebaseHighscore !== 'undefined' && firebaseHighscore.levelOverrides) {
            const overrides = firebaseHighscore.levelOverrides;
            questionBank.forEach(q => {
                const qId = firebaseHighscore.hashQuestion(q.question);
                const override = overrides[qId];
                if (override && override.newLevel) {
                    q.level = override.newLevel;
                }
            });
        }
        
        // Merge custom spørgsmål fra Firebase ind i questionBank
        if (typeof firebaseHighscore !== 'undefined' && firebaseHighscore.customQuestions) {
            const existing = new Set(questionBank.map(q => q.question));
            firebaseHighscore.customQuestions.forEach(cq => {
                if (!existing.has(cq.question)) {
                    questionBank.push(cq);
                    existing.add(cq.question);
                }
            });
        }
        
        // Generate questions (bruger nu evt. opdaterede levels + custom spørgsmål)
        this.questions = generateQuestionSet();
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.correctAnswers = 0;
        
        // Reset lifelines
        this.lifelines = { fiftyFifty: false, audience: false, phone: false, extraTime: false };
        document.querySelectorAll('.lifeline-btn').forEach(btn => btn.classList.remove('used'));
        
        this.maxTime = 60;
        this.showScene('questionScene');
        this.loadQuestion();
    }
    
    showScene(sceneId) {
        document.querySelectorAll('.scene').forEach(scene => scene.classList.remove('active'));
        // Clear any lingering overlays/modals
        document.querySelectorAll('.speech-overlay').forEach(el => el.classList.remove('active'));
        document.querySelectorAll('.modal-overlay').forEach(el => el.classList.remove('active'));
        // Ryd svar-knapper når vi forlader question scene (fjerner sticky hover/selected states)
        if (sceneId !== 'questionScene') {
            const grid = document.getElementById('answersGrid');
            if (grid) grid.innerHTML = '';
        }
        const el = document.getElementById(sceneId);
        if (el) el.classList.add('active');
    }
    
    // Shuffle answers to randomize positions
    shuffleAnswers(question) {
        const indices = question.answers.map((_, i) => i);
        for (let i = indices.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [indices[i], indices[j]] = [indices[j], indices[i]];
        }
        return {
            answers: indices.map(i => question.answers[i]),
            correctIndex: indices.indexOf(question.correct),
            originalIndices: indices
        };
    }
    
    loadQuestion() {
        // Clear previous answer state completely
        this.selectedAnswer = null;
        this.pendingAnswer = null;
        const oldBtns = document.querySelectorAll('.answer-btn');
        oldBtns.forEach(btn => {
            btn.classList.remove('selected', 'correct', 'wrong', 'disabled');
            btn.disabled = false;
            btn.style.cssText = '';
        });
        this.lifelinePromptShown = false; // Nulstil livline-prompt for nyt spørgsmål
        
        const question = this.questions[this.currentQuestionIndex];
        
        document.getElementById('currentLevel').textContent = question.level;
        document.getElementById('currentQuestion').textContent = this.currentQuestionIndex + 1;
        document.getElementById('currentScore').textContent = this.score.toLocaleString();
        // Opdater kategori med ikon
        const categoryIcon = document.getElementById('categoryIcon');
        const categoryText = document.getElementById('categoryText');
        if (categoryIcon && categoryText) {
            categoryText.textContent = question.category;
            categoryIcon.src = this.categoryIcons[question.category] || this.categoryIcons['Generelt'];
        }
        document.getElementById('questionText').textContent = question.question;
        
        // Vis streak-display
        const streakEl = document.getElementById('streakDisplay');
        if (this.streak >= 2) {
            streakEl.style.display = '';
            document.getElementById('streakCount').textContent = this.streak;
            if (this.streak >= 5) streakEl.className = 'streak-display streak-fire';
            else if (this.streak >= 3) streakEl.className = 'streak-display streak-hot';
            else streakEl.className = 'streak-display';
        } else {
            streakEl.style.display = 'none';
        }
        
        // Varier vært-billede baseret på spørgsmålsnummer
        const questionMoods = ['question', 'reading', 'microphone', 'thinking', 'whisper', 'cool'];
        const moodIndex = this.currentQuestionIndex % questionMoods.length;
        this.updateHostImage(questionMoods[moodIndex]);
        
        const answersGrid = document.getElementById('answersGrid');
        answersGrid.innerHTML = '';
        
        // Shuffle answers for random placement
        this.currentShuffle = this.shuffleAnswers(question);
        
        this.currentShuffle.answers.forEach((answer, index) => {
            const btn = document.createElement('button');
            btn.className = 'answer-btn';
            btn.dataset.index = index;
            btn.innerHTML = `
                <span class="answer-letter">${String.fromCharCode(65 + index)}</span>
                <span class="answer-text">${answer}</span>
            `;
            btn.addEventListener('click', () => this.selectAnswer(index));
            answersGrid.appendChild(btn);
        });
        
        // Timer-sværhed baseret på spørgsmålsnummer
        const qNum = this.currentQuestionIndex + 1; // 1-15
        if (qNum <= 5) {
            this.maxTime = 60;
        } else if (qNum <= 10) {
            this.maxTime = 45;
        } else {
            this.maxTime = 20;
        }
        this.timeLeft = this.maxTime;
        this.selectedAnswer = null;
        this.pendingAnswer = null;
        this.answerStartTime = Date.now();
        this.startTimer();

    }
    
    updateHostImage(mood) {
        const hostImage = document.getElementById('hostImage');
        const images = {
            welcome: 'assets/images/host/01_vaert_velkommen_aabne_arme.png',
            question: 'assets/images/host/02_vaert_peger_mod_seer.png',
            thinking: 'assets/images/host/03_vaert_taenker_haand_paa_hage.png',
            excited: 'assets/images/host/04_vaert_begejstret_haender_op.png',
            thumbsup: 'assets/images/host/05_vaert_thumbs_up.png',
            shocked: 'assets/images/host/06_vaert_chokeret_overrasket.png',
            sad: 'assets/images/host/07_vaert_facepalm_skuffet.png',
            shrug: 'assets/images/host/08_vaert_traekker_paa_skuldrene.png',
            trophy: 'assets/images/host/09_vaert_holder_trofae.png',
            whisper: 'assets/images/host/10_vaert_hvisker_hemmelighed.png',
            nervous: 'assets/images/host/11_vaert_nervoes_sveder.png',
            reading: 'assets/images/host/12_vaert_laeser_quiz_kort.png',
            cool: 'assets/images/host/13_vaert_cool_korslagte_arme.png',
            dancing: 'assets/images/host/14_vaert_danser_fejrer.png',
            goodbye: 'assets/images/host/15_vaert_vinker_farvel.png',
            angry: 'assets/images/host/16_vaert_frustreret_vred.png',
            microphone: 'assets/images/host/17_vaert_med_mikrofon_taler.png',
            confused: 'assets/images/host/18_vaert_klor_sig_i_hovedet_forvirret.png',
            strong: 'assets/images/host/19_vaert_flexer_muskler_staerk.png',
            panic: 'assets/images/host/20_vaert_holder_ur_panik.png'
        };
        if (images[mood]) hostImage.src = images[mood];
    }
    
    // ===== TIMER =====
    
    startTimer() {
        this.stopTimer();
        const timerFill = document.getElementById('timerFill');
        const timerText = document.getElementById('timerText');
        const timerBar = document.querySelector('.timer-bar');
        timerFill.style.width = '100%';
        timerFill.classList.remove('warning', 'danger');
        timerText.classList.remove('danger');
        if (timerBar) timerBar.classList.remove('danger-glow');
        
        this.timer = setInterval(() => {
            this.timeLeft--;
            const percentage = (this.timeLeft / this.maxTime) * 100;
            timerFill.style.width = percentage + '%';
            timerText.textContent = this.timeLeft + 's';
            
            if (this.timeLeft <= 5) {
                // DANGER: rød puls + tick-lyd + HELE skærmen
                timerFill.classList.remove('warning');
                timerFill.classList.add('danger');
                timerText.classList.add('danger');
                if (timerBar) timerBar.classList.add('danger-glow');
                document.getElementById('questionScene').classList.add('screen-danger');
                this.playTickSound();
                this.vibrate([40]); // Kort puls hvert sekund under danger
                if (this.timeLeft === 5) this.updateHostImage('panic');
            } else if (this.timeLeft <= 10) {
                // WARNING: orange + rød skærm-vignette
                timerFill.classList.add('warning');
                if (this.timeLeft === 10) this.vibrate([100, 50, 100]); // Advarsel ved 10 sek
                document.getElementById('questionScene').classList.add('screen-warning');
            }
            
            document.getElementById('currentScore').textContent = this.score.toLocaleString();
            
            if (this.timeLeft <= 0) {
                this.stopTimer();
                this.timeUp();
            }
        }, 1000);
    }
    
    // Syntetisk tick-lyd via Web Audio API (genbruger AudioContext)
    playTickSound() {
        if (!this.sfxEnabled) return;
        try {
            // Genbrug AudioContext (mobil kræver det)
            if (!this._audioCtx) {
                this._audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            }
            const ctx = this._audioCtx;
            if (ctx.state === 'suspended') ctx.resume();
            
            // Tick lyd
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.frequency.value = 800;
            osc.type = 'square';
            gain.gain.setValueAtTime(0.3, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.15);
            osc.start(ctx.currentTime);
            osc.stop(ctx.currentTime + 0.15);
            // Tock lyd (lidt dybere, kort efter)
            const osc2 = ctx.createOscillator();
            const gain2 = ctx.createGain();
            osc2.connect(gain2);
            gain2.connect(ctx.destination);
            osc2.frequency.value = 600;
            osc2.type = 'square';
            gain2.gain.setValueAtTime(0.2, ctx.currentTime + 0.08);
            gain2.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.2);
            osc2.start(ctx.currentTime + 0.08);
            osc2.stop(ctx.currentTime + 0.2);
        } catch(e) {
            // Fallback: brug alarm lyd
            this.playSound('alarm');
        }
    }
    
    stopTimer() {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
        // Ryd danger-effekter
        const timerFill = document.getElementById('timerFill');
        const timerText = document.getElementById('timerText');
        const timerBar = document.querySelector('.timer-bar');
        if (timerFill) timerFill.classList.remove('warning', 'danger');
        if (timerText) timerText.classList.remove('danger');
        if (timerBar) timerBar.classList.remove('danger-glow');
        // Ryd skærm-effekter
        const questionScene = document.getElementById('questionScene');
        if (questionScene) questionScene.classList.remove('screen-warning', 'screen-danger');
    }
    
    timeUp() {
        this.playSound('explosion');
        this.playSound('buzzer');
        if (typeof firebaseHighscore !== 'undefined') firebaseHighscore.trackEvent('time_up', { subKey: 'q' + (this.currentQuestionIndex + 1) });
        this.updateHostImage('panic');
        
        const question = this.questions[this.currentQuestionIndex];
        const shuffledCorrect = this.currentShuffle ? this.currentShuffle.correctIndex : question.correct;
        const answerBtns = document.querySelectorAll('.answer-btn');
        answerBtns.forEach((btn, index) => {
            btn.disabled = true;
            if (index === shuffledCorrect) btn.classList.add('correct');
        });
        
        setTimeout(() => this.showWrongScene(), 1500);
    }
    
    // ===== ANSWER SELECTION & "ER DU SIKKER?" =====
    
    selectAnswer(index) {
        if (this.selectedAnswer !== null) return;
        
        this.playSound('click');
        
        // Highlight det valgte svar
        const answerBtns = document.querySelectorAll('.answer-btn');
        answerBtns.forEach(btn => btn.classList.remove('selected'));
        answerBtns[index].classList.add('selected');
        
        // Fortsæt med normal flow
        this.afterRoulette(index, answerBtns);
    }
    

    
    afterRoulette(index, answerBtns) {
        // Genaktiver knapper (så checkAnswer kan disable dem igen)
        answerBtns.forEach(btn => btn.disabled = false);
        
        const questionNum = this.currentQuestionIndex + 1;
        const hasLifelinesLeft = this.getAvailableLifelines().length > 0;
        const question = this.questions[this.currentQuestionIndex];
        const isWrongAnswer = index !== this.currentShuffle.correctIndex;
        
        // Livline-prompt: KUN ved forkert svar
        let showLifelinePrompt = false;
        if (isWrongAnswer && !this.lifelinePromptShown) {
            if (questionNum <= 3) {
                showLifelinePrompt = true;
            } else {
                showLifelinePrompt = Math.random() < 0.05;
            }
        }
        
        if (showLifelinePrompt) {
            this.pendingAnswer = index;
            this.lifelinePromptShown = true;
            if (hasLifelinesLeft) {
                this.showLifelinePrompt();
            } else {
                this.showAreYouSure();
            }
        } else {
            // Normal flow - evt "Er du sikker?" psyk
            let areYouSureChance = 0;
            if (questionNum > 3) {
                areYouSureChance = 0.15 + (questionNum - 3) * 0.03;
            }
            if (Math.random() < areYouSureChance) {
                this.pendingAnswer = index;
                this.showAreYouSure();
            } else {
                this.selectedAnswer = index;
                setTimeout(() => this.checkAnswer(), 300);
            }
        }
    }
    
    getAvailableLifelines() {
        const available = [];
        if (!this.lifelines.fiftyFifty) available.push({ id: 'fiftyFifty', label: '50/50', icon: 'assets/images/icons/06_lifeline_50_50_ikon.png' });
        if (!this.lifelines.audience) available.push({ id: 'audience', label: 'Se andre', icon: 'assets/images/icons/07_lifeline_spoerg_publikum_ikon.png' });
        if (!this.lifelines.phone) available.push({ id: 'phone', label: 'Ring', icon: 'assets/images/icons/08_lifeline_ring_en_ven_ikon.png' });
        if (!this.lifelines.extraTime) available.push({ id: 'extraTime', label: '+15s', icon: 'assets/images/icons/09_lifeline_ekstra_tid_ikon.png' });
        return available;
    }
    
    showLifelinePrompt() {
        const taunts = [
            'Hov hov! Vil du ikke bruge en livline først? \ud83e\udd14',
            'Vent lige! Du har stadig livliner tilbage! \ud83d\udca1',
            'Er du sikker? Måske en livline kunne hjælpe? \ud83e\udd37',
            'Psst! Glem ikke dine livliner! \ud83d\ude09',
            'Tænk dig om... en livline måske? \ud83e\uddd0'
        ];
        document.getElementById('useLifelineText').textContent = taunts[Math.floor(Math.random() * taunts.length)];
        
        // Byg livline-knapper
        const container = document.getElementById('lifelinePromptBtns');
        container.innerHTML = '';
        this.getAvailableLifelines().forEach(ll => {
            const btn = document.createElement('button');
            btn.className = 'btn-lifeline-prompt';
            btn.innerHTML = `<img src="${ll.icon}" alt="${ll.label}"> ${ll.label}`;
            btn.addEventListener('click', () => this.useLifelineFromPrompt(ll.id));
            container.appendChild(btn);
        });
        
        this.updateHostImage('whisper');
        document.getElementById('useLifelineModal').classList.add('active');
        this.stopTimer(); // Pause timer mens spilleren vælger
        this.playSound('dramatic');
    }
    
    useLifelineFromPrompt(lifelineId) {
        document.getElementById('useLifelineModal').classList.remove('active');
        // Fjern pending - spilleren bruger livline i stedet
        const answerBtns = document.querySelectorAll('.answer-btn');
        answerBtns.forEach(btn => btn.classList.remove('selected'));
        this.pendingAnswer = null;
        this.startTimer();
        
        // Track livline brug
        if (typeof firebaseHighscore !== 'undefined') firebaseHighscore.trackEvent('lifeline_used', { subKey: lifelineId });
        
        // Aktiver den valgte livline
        switch(lifelineId) {
            case 'fiftyFifty': this.useFiftyFifty(); break;
            case 'audience': this.useAudience(); break;
            case 'phone': this.usePhone(); break;
            case 'extraTime': this.useExtraTime(); break;
        }
    }
    
    skipLifelinePrompt() {
        document.getElementById('useLifelineModal').classList.remove('active');
        this.playSound('click');
        // Fortsæt med svaret
        this.selectedAnswer = this.pendingAnswer;
        this.pendingAnswer = null;
        this.startTimer();
        setTimeout(() => this.checkAnswer(), 300);
    }
    
    showAreYouSure() {
        const taunt = this.areYouSureTaunts[Math.floor(Math.random() * this.areYouSureTaunts.length)];
        document.getElementById('areYouSureText').textContent = taunt;
        
        // Tilfældig psyk-billede
        const psykImg = document.getElementById('psykImage');
        if (psykImg) {
            psykImg.src = this.psykImages[Math.floor(Math.random() * this.psykImages.length)];
        }
        
        document.getElementById('areYouSureModal').classList.add('active');
        this.stopTimer(); // Pause timer mens spilleren tænker
        this.playSound('dramatic');
    }
    
    confirmAnswer(confirmed) {
        document.getElementById('areYouSureModal').classList.remove('active');
        this.playSound('click');
        
        // Track "Er du sikker?" effekt
        const pendingWasCorrect = this.pendingAnswer === this.currentShuffle.correctIndex;
        if (typeof firebaseHighscore !== 'undefined') {
            firebaseHighscore.trackAreYouSure(confirmed ? 'confirmed' : 'changed', pendingWasCorrect);
        }
        
        if (confirmed) {
            // Player sticks with their answer
            this.selectedAnswer = this.pendingAnswer;
            this.pendingAnswer = null;
            this.startTimer(); // Resume timer briefly
            setTimeout(() => this.checkAnswer(), 300);
        } else {
            // Player wants to change - deselect and resume
            this.pendingAnswer = null;
            const answerBtns = document.querySelectorAll('.answer-btn');
            answerBtns.forEach(btn => btn.classList.remove('selected'));
            this.startTimer(); // Resume timer
        }
    }
    
    checkAnswer() {
        this.stopTimer();
        
        const question = this.questions[this.currentQuestionIndex];
        const shuffledCorrect = this.currentShuffle.correctIndex;
        const answerBtns = document.querySelectorAll('.answer-btn');
        
        answerBtns.forEach((btn, index) => {
            btn.disabled = true;
            btn.classList.remove('selected', 'correct', 'wrong');
            if (index === shuffledCorrect) {
                btn.classList.add('correct');
            } else if (index === this.selectedAnswer && index !== shuffledCorrect) {
                btn.classList.add('wrong');
            }
        });
        
        // Track analytics
        const isCorrect = this.selectedAnswer === shuffledCorrect;
        const chosenAnswerText = this.currentShuffle.answers[this.selectedAnswer] || '';
        const correctAnswerText = this.currentShuffle.answers[shuffledCorrect] || '';
        const answerTimeMs = Date.now() - this.answerStartTime;
        if (typeof firebaseHighscore !== 'undefined') {
            firebaseHighscore.trackAnswer(question.question, question.level, question.category, isCorrect, chosenAnswerText, correctAnswerText);
            firebaseHighscore.trackAnswerTime(this.currentQuestionIndex, answerTimeMs, isCorrect);
        }
        
        if (isCorrect) {
            this.correctAnswers++;
            this.streak++;
            if (this.streak > this.bestStreak) this.bestStreak = this.streak;
            
            // Streak-baserede lyde
            if (this.streak >= 5) {
                this.playSound('celebrate');
            } else if (this.streak >= 3) {
                this.playSound('crowdCheer');
            } else {
                this.playSound('correct');
            }
            
            // Speed-based scoring: faster = more points
            const timeTaken = (Date.now() - this.answerStartTime) / 1000; // seconds
            const maxPoints = 1000;
            const minPoints = 100;
            const timeLimit = this.maxTime;
            // Linear: full points at 0s, min points at timeLimit
            let speedBonus = Math.round(Math.max(minPoints, maxPoints - (timeTaken / timeLimit) * (maxPoints - minPoints)));
            
            // Point multiplier: Runde 1 (1-5) = x1, Runde 2 (6-10) = x3, Runde 3 (11-15) = x5
            const currentLevel = this.questions[this.currentQuestionIndex].level;
            const multiplier = currentLevel >= 11 ? 5 : currentLevel >= 6 ? 3 : 1;
            let totalPoints = speedBonus * multiplier;
            
            // Streak-bonus: +200 per streak over 2
            let streakBonus = 0;
            if (this.streak >= 3) {
                streakBonus = (this.streak - 2) * 200;
                totalPoints += streakBonus;
            }
            
            this.score += totalPoints;
            document.getElementById('currentScore').textContent = this.score.toLocaleString();
            this.lastRoundPoints = totalPoints;
            this.lastStreakBonus = streakBonus;
            
            // Byg points-tekst
            let pointsText = '';
            if (multiplier > 1) {
                pointsText = '+' + speedBonus + ' \u00d7 ' + multiplier;
            } else {
                pointsText = '+' + (speedBonus * multiplier);
            }
            if (streakBonus > 0) {
                pointsText += ' +' + streakBonus + ' streak';
            }
            pointsText += ' = ' + totalPoints;
            document.getElementById('pointsEarned').textContent = pointsText;
            
            // Vary host reactions for correct answers
            const correctMoods = ['excited', 'thumbsup', 'dancing', 'strong', 'cool'];
            const randomMood = correctMoods[Math.floor(Math.random() * correctMoods.length)];
            this.updateHostImage(randomMood);
            this.vibrate([50, 30, 50]); // Kort dobbelt-puls ved korrekt
            setTimeout(() => this.showCorrectScene(), 1500);
        } else {
            this.streak = 0;
            this.playSound('buzzer');
            this.vibrate([200, 100, 200]); // Lang dobbelt-vibration ved forkert
            setTimeout(() => this.playSound('wahwah'), 500);
            // Vary host reactions for wrong answers
            const wrongMoods = ['sad', 'angry', 'confused', 'shocked'];
            const randomWrongMood = wrongMoods[Math.floor(Math.random() * wrongMoods.length)];
            this.updateHostImage(randomWrongMood);
            // Forkert svar = spillet slutter!
            this.saveHighscore();
            setTimeout(() => this.showWrongScene(), 2000);
        }
    }
    
    // ===== SCENES =====
    
    showCorrectScene() {
        // Streak-baserede beskeder
        let message = 'Godt klaret!';
        if (this.streak >= 5) message = '🔥🔥🔥 UTROLIGT! ' + this.streak + ' i streg!';
        else if (this.streak >= 3) message = '⚡ ' + this.streak + ' rigtige i streg! Flot!';
        else if (this.streak >= 2) message = '✨ ' + this.streak + ' i streg! Fortsæt!';
        
        document.getElementById('correctMessage').textContent = message;
        document.getElementById('pointsEarned').textContent = '+' + (this.lastRoundPoints || 0);
        document.getElementById('pointsTotal').textContent = this.score.toLocaleString();
        // Vis én tilfældig callout ved korrekt svar (for variation/replay)
        const correctQ = this.questions[this.currentQuestionIndex];
        const correctExplEl = document.getElementById('correctExplanation');
        const correctExplText = document.getElementById('correctExplanationText');
        const correctProTipEl = document.getElementById('correctProTip');
        const correctWmsFactEl = document.getElementById('correctWmsFact');
        
        // Saml tilgængelige callouts
        const callouts = [];
        if (correctQ.explanation) callouts.push('explanation');
        if (correctQ.proTip) callouts.push('proTip');
        if (correctQ.wmsFact) callouts.push('wmsFact');
        
        // Vælg én tilfældig
        const chosen = callouts.length > 0 ? callouts[Math.floor(Math.random() * callouts.length)] : null;
        
        // Vis kun den valgte
        if (chosen === 'explanation') {
            correctExplText.textContent = correctQ.explanation;
            correctExplEl.style.display = 'block';
        } else {
            correctExplEl.style.display = 'none';
        }
        
        if (chosen === 'proTip') {
            correctProTipEl.innerHTML = '<span class="pro-tip-bulb">💡</span><strong>Pro Tip:</strong> ' + correctQ.proTip;
            correctProTipEl.style.display = 'block';
            setTimeout(() => this.playSound('ding'), 400);
        } else {
            correctProTipEl.style.display = 'none';
        }
        
        if (chosen === 'wmsFact') {
            correctWmsFactEl.innerHTML = '<span class="wms-fact-icon">💻</span><strong>WMS-boost:</strong> ' + correctQ.wmsFact.replace(/^WMS-boost:\s*/i, '');
            correctWmsFactEl.style.display = 'block';
        } else {
            correctWmsFactEl.style.display = 'none';
        }
        this.loadFunFact('correctFunFact', true);
        this.showScene('correctScene');
        this.createConfetti('confettiContainer');
        
        // Sidste spørgsmål? Gå direkte til gameComplete efter kort pause
        const isLastQuestion = this.currentQuestionIndex >= this.questions.length - 1;
        if (isLastQuestion) {
            const btnEl = document.getElementById('btnNextQuestion');
            if (btnEl) {
                btnEl.style.display = 'inline-block';
                btnEl.onclick = () => {
                    if (this.nextCountdownTimer) { clearInterval(this.nextCountdownTimer); this.nextCountdownTimer = null; }
                    if (this.nextAutoTimer) { clearTimeout(this.nextAutoTimer); this.nextAutoTimer = null; }
                    this.playSound('click');
                    this.nextQuestion();
                };
            }
            // Countdown til "Se resultat"
            const totalSecs = 6;
            let remaining = totalSecs;
            const countdownEl = document.getElementById('nextCountdown');
            if (btnEl) btnEl.innerHTML = 'Se resultat <span id="nextCountdown">(' + remaining + ')</span>';
            this.nextCountdownTimer = setInterval(() => {
                remaining--;
                const cdEl = document.getElementById('nextCountdown');
                if (cdEl) cdEl.textContent = remaining > 0 ? '(' + remaining + ')' : '';
                if (remaining <= 0) {
                    clearInterval(this.nextCountdownTimer);
                    this.nextCountdownTimer = null;
                }
            }, 1000);
            this.nextAutoTimer = setTimeout(() => {
                this.nextQuestion();
            }, totalSecs * 1000);
        } else {
            // Normal countdown til næste spørgsmål
            const btnEl = document.getElementById('btnNextQuestion');
            if (btnEl) {
                btnEl.innerHTML = 'Næste spørgsmål <span id="nextCountdown"></span>';
                btnEl.onclick = () => game.skipToNext();
            }
            const hasExtra = correctQ.explanation || correctQ.proTip || correctQ.wmsFact;
            const totalSecs = hasExtra ? 6 : 3;
            this.startNextCountdown(totalSecs);
        }
    }
    
    startNextCountdown(seconds) {
        // Ryd evt. eksisterende countdown
        if (this.nextCountdownTimer) clearInterval(this.nextCountdownTimer);
        if (this.nextAutoTimer) clearTimeout(this.nextAutoTimer);
        
        let remaining = seconds;
        const countdownEl = document.getElementById('nextCountdown');
        const btnEl = document.getElementById('btnNextQuestion');
        if (countdownEl) countdownEl.textContent = '(' + remaining + ')';
        if (btnEl) btnEl.style.display = 'inline-block';
        
        this.nextCountdownTimer = setInterval(() => {
            remaining--;
            if (countdownEl) countdownEl.textContent = remaining > 0 ? '(' + remaining + ')' : '';
            if (remaining <= 0) {
                clearInterval(this.nextCountdownTimer);
                this.nextCountdownTimer = null;
            }
        }, 1000);
        
        this.nextAutoTimer = setTimeout(() => {
            this.skipToNext();
        }, seconds * 1000);
    }
    
    skipToNext() {
        // Ryd timers
        if (this.nextCountdownTimer) { clearInterval(this.nextCountdownTimer); this.nextCountdownTimer = null; }
        if (this.nextAutoTimer) { clearTimeout(this.nextAutoTimer); this.nextAutoTimer = null; }
        this.playSound('click');
        this.nextQuestion();
    }
    
    showWrongScene() {
        const question = this.questions[this.currentQuestionIndex];
        // Brug shuffled svar-tekst (ikke original index) så det rigtige svar vises korrekt
        const correctAnswerText = this.currentShuffle
            ? this.currentShuffle.answers[this.currentShuffle.correctIndex]
            : question.answers[question.correct];
        document.getElementById('correctAnswerText').textContent = correctAnswerText;
        document.getElementById('explanationText').textContent = question.explanation || 'Ingen forklaring tilgængelig.';
        // Vis én tilfældig bonus-callout ved forkert svar (proTip eller wmsFact)
        const wrongProTipEl = document.getElementById('wrongProTip');
        const bonusOptions = [];
        if (question.proTip) bonusOptions.push('proTip');
        if (question.wmsFact) bonusOptions.push('wmsFact');
        const wrongBonus = bonusOptions.length > 0 ? bonusOptions[Math.floor(Math.random() * bonusOptions.length)] : null;
        
        if (wrongBonus === 'proTip') {
            wrongProTipEl.innerHTML = '<span class="pro-tip-bulb">💡</span><strong>Pro Tip:</strong> ' + question.proTip;
            wrongProTipEl.style.display = 'block';
            setTimeout(() => this.playSound('ding'), 400);
        } else if (wrongBonus === 'wmsFact') {
            wrongProTipEl.innerHTML = '<span class="wms-fact-icon">💻</span><strong>WMS-boost:</strong> ' + question.wmsFact.replace(/^WMS-boost:\s*/i, '');
            wrongProTipEl.style.display = 'block';
        } else {
            wrongProTipEl.style.display = 'none';
        }
        
        // Vis score og spørgsmålsnummer
        document.getElementById('wrongQuestionNum').textContent = this.currentQuestionIndex + 1;
        document.getElementById('wrongFinalScore').textContent = this.score.toLocaleString();
        
        // Opdater "Læs mere" knap med kapitel-info
        const chapterInfo = this.chapterMap[question.category];
        const readMoreBtn = document.getElementById('wrongReadMoreBtn');
        if (chapterInfo) {
            readMoreBtn.textContent = `📖 Læs mere: ${chapterInfo.chapter}`;
            readMoreBtn.style.display = 'block';
        } else {
            readMoreBtn.style.display = 'none';
        }
        
        // Vælg en passende vært-reaktion
        const wrongHostImages = [
            'assets/images/host/07_vaert_facepalm_skuffet.png',
            'assets/images/host/16_vaert_frustreret_vred.png',
            'assets/images/host/18_vaert_klor_sig_i_hovedet_forvirret.png',
            'assets/images/host/08_vaert_traekker_paa_skuldrene.png'
        ];
        const wrongHostImg = document.getElementById('wrongHostImage');
        if (wrongHostImg) {
            wrongHostImg.src = wrongHostImages[Math.floor(Math.random() * wrongHostImages.length)];
        }
        
        this.loadFunFact('wrongFunFact', false);
        this.showScene('wrongScene');
    }
    
    // ===== FUN FACTS =====
    
    async loadFunFact(elementId, wasCorrect) {
        const el = document.getElementById(elementId);
        if (!el) return;
        el.textContent = '';
        el.style.display = 'none';
        
        if (typeof firebaseHighscore === 'undefined' || !firebaseHighscore.initialized) return;
        
        try {
            const question = this.questions[this.currentQuestionIndex];
            const qId = firebaseHighscore.hashQuestion(question.question);
            const ref = firebaseHighscore.db.ref('questionStats/' + qId);
            const snapshot = await ref.once('value');
            const data = snapshot.val();
            
            if (!data || data.totalAnswers < 3) return;
            
            const total = data.totalAnswers;
            const correct = data.correctAnswers;
            const wrongPct = Math.round(((total - correct) / total) * 100);
            const correctPct = 100 - wrongPct;
            
            const fact = this.generateFunFact(wrongPct, correctPct, total, wasCorrect, question);
            if (fact) {
                el.innerHTML = fact;
                el.style.display = 'block';
            }
        } catch (e) {
            console.warn('Fun fact load failed:', e);
        }
    }
    
    generateFunFact(wrongPct, correctPct, total, wasCorrect, question) {
        const facts = [];
        
        if (wasCorrect) {
            // Spilleren svarede rigtigt
            if (wrongPct >= 70) {
                facts.push('\ud83e\udde0 Kun ' + correctPct + '% svarer rigtigt på dette, du er skarp!');
                facts.push('\ud83d\udcaa ' + wrongPct + '% falder i fælden her. Ikke dig!');
                facts.push('\ud83c\udfaf Et af de sværeste spørgsmål, ' + wrongPct + '% svarer forkert!');
            } else if (wrongPct >= 50) {
                facts.push('\ud83d\udcca ' + wrongPct + '% svarer forkert på dette spørgsmål');
                facts.push('\u2696\ufe0f Halvdelen fejler her. Godt klaret!');
            } else if (wrongPct >= 30) {
                facts.push('\ud83d\udcca ' + correctPct + '% svarer rigtigt, du er med i flertallet!');
            } else {
                facts.push('\u2705 ' + correctPct + '% klarer dette spørgsmål. Godt gået!');
            }
            
            // Streak-baserede facts
            if (this.streak >= 5) {
                facts.push('\ud83d\udd25 ' + this.streak + ' i streg! Kun de bedste holder det niveau!');
            }
            if (this.correctAnswers === this.currentQuestionIndex + 1 && this.currentQuestionIndex >= 4) {
                facts.push('\ud83c\udfc6 Perfekt score indtil videre: ' + this.correctAnswers + '/' + (this.currentQuestionIndex + 1) + '!');
            }
        } else {
            // Spilleren svarede forkert
            if (wrongPct >= 60) {
                facts.push('\ud83d\ude2c ' + wrongPct + '% svarer også forkert her, du er ikke alene!');
                facts.push('\ud83d\udcca Et af de sværeste! ' + wrongPct + '% fejler dette spørgsmål');
            } else if (wrongPct >= 40) {
                facts.push('\ud83d\udcca ' + wrongPct + '% falder også i denne fælde');
            } else {
                facts.push('\ud83d\ude33 Kun ' + wrongPct + '% svarer forkert her. Et sjældent fejltrin!');
                facts.push('\ud83d\udcda ' + correctPct + '% klarer dette, tid til at læse op!');
            }
        }
        
        // Total-baserede facts
        if (total >= 50) {
            facts.push('\ud83d\udcc8 ' + total + ' spillere har svaret på dette spørgsmål');
        } else if (total >= 20) {
            facts.push('\ud83d\udc65 ' + total + ' har prøvet dette spørgsmål før dig');
        }
        
        // Kategori-fact
        if (question.category) {
            const catFacts = {
                'Lagerstyring': '\ud83d\udce6 Lagerstyring er fundamentet for en effektiv webshop',
                'Returer': '\ud83d\udd04 Returer koster i snit 2-3x mere end den originale forsendelse',
                'Svind': '\ud83d\udd0d Svind kan koste op til 3-5% af omsætningen hvis det ignoreres',
                'Fragt': '\ud83d\ude9a Fragt er ofte den største variable omkostning for webshops',
                'Emballage': '\ud83d\udce6 God emballage reducerer returer med op til 30%',
                '3PL': '\ud83c\udfe2 Over 60% af e-commerce virksomheder overvejer 3PL',
                'Kampagner': '\ud83c\udf1f Black Friday kan give 5-10x normal volumen på lageret'
            };
            if (catFacts[question.category] && Math.random() < 0.3) {
                facts.push(catFacts[question.category]);
            }
        }
        
        // Vælg en tilfældig fact
        if (facts.length === 0) return null;
        return facts[Math.floor(Math.random() * facts.length)];
    }
    
    openChapterForCurrentQuestion() {
        const question = this.questions[this.currentQuestionIndex];
        const chapterInfo = this.chapterMap[question.category];
        if (typeof firebaseHighscore !== 'undefined') firebaseHighscore.trackClick('ebook_chapter');
        if (chapterInfo) {
            window.open(chapterInfo.url, '_blank');
        } else {
            window.open('https://www.danskerhverv.dk/branche/digital-handel/', '_blank');
        }
    }
    
    nextQuestion() {
        this.playSound('whoosh');
        this.currentQuestionIndex++;
        
        if (this.currentQuestionIndex % 5 === 0 && this.currentQuestionIndex < this.questions.length) {
            this.showCheckpoint();
        } else if (this.currentQuestionIndex >= this.questions.length) {
            this.gameComplete();
        } else {
            this.showScene('questionScene');
            this.loadQuestion();
        }
    }
    
    showCheckpoint() {
        if (typeof firebaseHighscore !== 'undefined') firebaseHighscore.trackEvent('checkpoint_reached', { subKey: 'q' + this.currentQuestionIndex });
        document.getElementById('checkpointQuestion').textContent = this.currentQuestionIndex;
        document.getElementById('checkpointScore').textContent = this.score.toLocaleString();
        
        // Opdater checkpoint badge baseret på niveau (currentQuestionIndex er allerede incrementeret)
        const badge = document.getElementById('checkpointBadge');
        if (badge) {
            if (this.currentQuestionIndex >= 15) {
                badge.src = 'assets/images/icons/23_checkpoint_niveau_15_badge.png';
            } else if (this.currentQuestionIndex >= 10) {
                badge.src = 'assets/images/icons/22_checkpoint_niveau_10_badge.png';
            } else {
                badge.src = 'assets/images/icons/21_checkpoint_niveau_5_badge.png';
            }
        }
        
        // Carsten tale-boks med random citater
        const speechEl = document.getElementById('checkpointSpeech');
        const speechText = document.getElementById('checkpointSpeechText');
        if (speechEl && speechText) {
            if (this.currentQuestionIndex >= 10) {
                // Checkpoint 10 — finale-runde! Dramatisk Carsten.
                const finalQuotes = [
                    '😱 Hånden på hjertet, nu bliver det SVÆRT! Men dine point er også ×5 herfra. Så giv den gas! 🚀',
                    '💪 Nu gælder det! De sidste 5 spørgsmål giver ×5 point. Intet er for stort og intet er for småt, undtagen dine point! 💰',
                    '🔥 Dugfriske nyheder: Du er i FINALEN! Point ×5, men spørgsmålene tapper ind i det sværeste stof. Klar? 🎯',
                    '⚡ Med ro i maven: Du har klaret 10 spørgsmål. Men nu kommer der modvind på cykelstien, og ×5 point som belønning! 🚴‍♂️',
                    '🏆 For god ordens skyld: Herfra er ALLE point ganget med 5! Men det kræver også at du virkelig kender dit lager-stof. Let\'s go! 💪',
                    '🚀 Okay, nu er det alvor! ×5 point på ALLE rigtige svar. Det er kommet for at blive, så vis hvad du kan! 🔥'
                ];
                speechText.innerHTML = finalQuotes[Math.floor(Math.random() * finalQuotes.length)];
                speechEl.style.display = 'block';
                speechEl.classList.add('final-round-speech');
                speechEl.classList.remove('mid-round-speech');
            } else if (this.currentQuestionIndex >= 5) {
                // Checkpoint 5 — point x3!
                const midQuotes = [
                    '💡 Godt gået! Og her er en krølle på den: Fra nu af er dine point ganget med 3! ×3 på ALT! 🌟',
                    '✨ Flot arbejde! Og gode nyheder: dine point er nu ×3! Så svar hurtigt og korrekt, så flyver scoren! 🚀',
                    '🎯 5 spørgsmål i kassen! Nu øger vi indsatsen: ×3 point på alle rigtige svar herfra. Kan du føle det?! 💪',
                    '📈 Dugfrisk update: Du har klaret runde 1! Herfra giver hvert rigtigt svar TREDOBBELTE point. Giv den gas! 🔥',
                    '🏃‍♂️ Stærkt løbet! Og nu med en ekstra bonus: ×3 point på alle svar. Tænk på det som en #RunNTalk, bare hurtigere! 😅',
                    '💰 For god ordens skyld: Dine point er nu ganget med 3! Det er som at få turbo på din lager-viden. Kør på! 🚀'
                ];
                speechText.innerHTML = midQuotes[Math.floor(Math.random() * midQuotes.length)];
                speechEl.style.display = 'block';
                speechEl.classList.add('mid-round-speech');
                speechEl.classList.remove('final-round-speech');
            } else {
                speechEl.style.display = 'none';
            }
        }
        
        // Skift til finale-musik ved checkpoint 10
        if (this.currentQuestionIndex >= 10 && !this.inFinalRound) {
            this.inFinalRound = true;
            this.musicTracks = this.finalTracks;
            this.currentTrackIndex = Math.floor(Math.random() * this.finalTracks.length);
            this.playSound('dramatic');
            // Stop nuværende musik og start finale-track efter kort dramatisk pause
            this.sounds.bgMusic.pause();
            this.sounds.bgMusic.volume = 0;
            setTimeout(() => {
                this.switchMusic(this.finalTracks[this.currentTrackIndex]);
                this.musicPlaying = true;
            }, 1500); // 1.5 sek pause så dramatic-lyden høres først
        }
        
        // Skift Carsten-billede: nervøs ved runde 3, begejstret ved runde 2
        const checkpointHost = document.getElementById('checkpointHostImage');
        if (checkpointHost) {
            checkpointHost.src = this.currentQuestionIndex >= 10
                ? 'assets/images/host/11_vaert_nervoes_sveder.png'
                : 'assets/images/host/vaert_dobbelt_tommel_op.png';
        }
        
        this.showScene('checkpointScene');
        this.playSound('checkpointRiser');
    }
    
    continueFromCheckpoint() {
        this.playSound('click');
        this.showScene('questionScene');
        this.loadQuestion();
    }
    
    showWelcomeQuote() {
        const quotes = [
            '🎯 “Klar til at teste din lager-viden? Hånden på hjertet, det bliver sjovt!” 🚀',
            '📦 “Tør du tage udfordringen? 15 spørgsmål, 3 runder, og point der stiger! Lad os se hvad du kan” 💪',
            '🏆 “Dugfrisk quiz klar! Vis at du er en ægte Warehouse Warrior. Tryk Start!” 🔥',
            '💡 “Vidste du at de bedste lagre kører med struktur og disciplin? Test om DU har styr på det!” 📋',
            '🇩🇰 “Velkommen! Små, løbende forbedringer skaber den største værdi, også i en quiz. Klar?” ⚡',
            '🎮 “Nysgerrig på hvor god du er til lager? Der er kun én måde at finde ud af det på! Tryk Start” 🚀',
            '📊 “Fun fact: De fleste fejl på lageret skyldes manglende struktur. Lad os se om DU kender løsningerne!” 💡',
            '🏃‍♂️ “Tænk på det som en #RunNTalk, bare uden løbeskoene. Klar til at give den gas?” 😅',
            '🔥 “Intet er for stort og intet er for småt, heller ikke din lager-viden. Bevis det!” 🎯',
            '⭐ “Med ro i maven: Det her bliver fedt. 15 spørgsmål, stigende sværhedsgrad, og DU i hovedrollen!” 🎬'
        ];
        const el = document.getElementById('welcomeSpeechText');
        if (el) el.innerHTML = quotes[Math.floor(Math.random() * quotes.length)];
    }
    
    gameComplete() {
        if (this.correctAnswers >= 12) {
            this.victory();
        } else {
            this.gameOver();
        }
    }
    
    gameOver() {
        this.gameActive = false;
        if (typeof firebaseHighscore !== 'undefined') {
            firebaseHighscore.trackEvent('game_over', { subKey: 'q' + (this.currentQuestionIndex + 1) });
            firebaseHighscore.trackGameCompletion(this.score, this.correctAnswers, this.bestStreak, this.currentQuestionIndex + 1);
        }
        document.getElementById('finalQuestion').textContent = this.correctAnswers;
        document.getElementById('finalScore').textContent = this.score.toLocaleString();
        this.showScene('gameOverScene');
        this.playSound('crowdGroan');
        
        // Skift til game over musik (brug eksisterende track - Game Over fil mangler)
        this.switchMusic('assets/music/Raz Burg - Rushing Earth.mp3');
    }
    
    victory() {
        this.gameActive = false;
        if (typeof firebaseHighscore !== 'undefined') {
            firebaseHighscore.trackEvent('game_victory');
            firebaseHighscore.trackGameCompletion(this.score, this.correctAnswers, this.bestStreak, 15);
        }
        document.getElementById('victoryScore').textContent = this.score.toLocaleString();
        this.showScene('victoryScene');
        this.playSound('celebrate');
        this.playSound('crowdCheer');
        this.createConfetti('victoryConfetti');
    }
    
    restartSamePlayer() {
        this.playSound('click');
        this.questions = generateQuestionSet();
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.correctAnswers = 0;
        this.streak = 0;
        this.bestStreak = 0;
        this.maxTime = 60;
        this.lastRoundPoints = 0;
        this.lifelines = { fiftyFifty: false, audience: false, phone: false, extraTime: false };
        document.querySelectorAll('.lifeline-btn').forEach(btn => btn.classList.remove('used'));
        
        // Reset til normal musik-playlist hvis vi var i finale
        if (this.inFinalRound) {
            this.inFinalRound = false;
            this.musicTracks = this.normalTracks;
        }
        this.currentTrackIndex = Math.floor(Math.random() * this.musicTracks.length);
        if (this.musicEnabled) {
            this.switchMusic(this.musicTracks[this.currentTrackIndex]);
        }
        
        this.showScene('questionScene');
        this.loadQuestion();
    }
    
    goHome() {
        this.playSound('click');
        this.stopTimer();
        this.stopAwardsMusic();
        this.showWelcomeQuote();
        // Track at spilleren forlod spillet frivilligt
        if (this.gameActive && typeof firebaseHighscore !== 'undefined') {
            firebaseHighscore.trackEvent('game_abandoned', { subKey: 'q' + (this.currentQuestionIndex + 1) });
        }
        this.gameActive = false;
        
        // Reset til normal musik-playlist
        if (this.inFinalRound) {
            this.inFinalRound = false;
            this.musicTracks = this.normalTracks;
            this.currentTrackIndex = Math.floor(Math.random() * this.normalTracks.length);
        }
        
        this.showScene('welcomeScene');
    }
    
    // ===== HIGHSCORE =====
    
    async getHighscores() {
        if (typeof firebaseHighscore === 'undefined') return [];
        try {
            return await firebaseHighscore.getHighscores();
        } catch (e) {
            return [];
        }
    }
    
    async saveHighscoreFromScene(scene) {
        const nameInput = document.getElementById(scene + 'HighscoreName');
        const companyInput = document.getElementById(scene + 'HighscoreCompany');
        const btn = document.getElementById(scene === 'wrong' ? 'wrongSaveScoreBtn' : scene === 'gameover' ? 'gameoverSaveScoreBtn' : 'victorySaveScoreBtn');
        
        const name = nameInput.value.trim();
        
        // Kræv et navn
        if (!name) {
            nameInput.style.border = '2px solid #ff4444';
            nameInput.placeholder = 'Skriv dit navn først!';
            nameInput.focus();
            setTimeout(() => {
                nameInput.style.border = '';
                nameInput.placeholder = 'Dit navn';
            }, 2000);
            return;
        }
        
        this.playerName = name;
        this.playerCompany = companyInput.value.trim() || '';
        
        await this.saveHighscore();
        
        // Find placering
        let placement = '';
        try {
            const allScores = await this.getHighscores();
            const rank = allScores.findIndex(s => s.score <= this.score) + 1;
            if (rank > 0 && rank <= 100) {
                placement = ` — Du er nr. ${rank} på listen! 🏆`;
            } else if (rank > 100) {
                placement = ` — Du er nr. ${rank}`;
            }
        } catch(e) { /* ignore */ }
        
        // Show confirmation
        btn.textContent = `✅ Gemt!${placement}`;
        btn.style.fontSize = placement ? '0.85rem' : '';
        btn.disabled = true;
        nameInput.disabled = true;
        companyInput.disabled = true;
    }
    
    shareScore() {
        this.playSound('click');
        if (typeof firebaseHighscore !== 'undefined') firebaseHighscore.trackClick('share_score');
        
        const questionsAnswered = this.currentQuestionIndex + (this.selectedAnswer !== null ? 1 : 0);
        const isVictory = this.correctAnswers >= 15;
        
        let text;
        if (isVictory) {
            text = `\ud83c\udfc6 Jeg klarede ALLE 15 sp\u00f8rgsm\u00e5l i Warehouse Warrior og fik ${this.score.toLocaleString()} point!`;
        } else {
            text = `\ud83d\udce6 Jeg n\u00e5ede sp\u00f8rgsm\u00e5l ${questionsAnswered} af 15 i Warehouse Warrior med ${this.score.toLocaleString()} point!`;
        }
        if (this.bestStreak >= 3) {
            text += ` \ud83d\udd25 Bedste streak: ${this.bestStreak} i streg!`;
        }
        text += `\n\nTest din lager-viden her: ${window.location.origin}${window.location.pathname}`;
        text += `\n\n#WarehouseWarrior #DanskErhverv #DigitalHandel #Lager`;
        
        // Pr\u00f8v Web Share API f\u00f8rst (mobil), ellers clipboard
        if (navigator.share) {
            navigator.share({
                title: 'Warehouse Warrior - Min Score',
                text: text
            }).catch(() => {});
        } else {
            // Fallback: kopier til clipboard + \u00e5bn LinkedIn
            navigator.clipboard.writeText(text).then(() => {
                const btn = event.target.closest('.btn-share');
                const original = btn.textContent;
                btn.textContent = '\u2705 Kopieret! Inds\u00e6t p\u00e5 LinkedIn';
                setTimeout(() => { btn.textContent = original; }, 3000);
            }).catch(() => {});
            // \u00c5bn LinkedIn share
            const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`;
            window.open(linkedInUrl, '_blank', 'width=600,height=500');
        }
    }
    
    async saveHighscore() {
        if (typeof firebaseHighscore === 'undefined') return;
        const entry = {
            name: this.playerName || 'Anonym',
            company: this.playerCompany,
            score: this.score,
            correctAnswers: this.correctAnswers,
            totalQuestions: this.questions.length,
            bestStreak: this.bestStreak || 0,
            date: new Date().toISOString()
        };
        try {
            await firebaseHighscore.saveScore(entry);
        } catch(e) {
            console.warn('Highscore save failed (Firebase not configured):', e);
        }
    }
    
    async showHighscore() {
        this.playSound('click');
        if (typeof firebaseHighscore === 'undefined') {
            // Firebase ikke konfigureret - vis tom highscore
            this.cachedHighscores = [];
            this.showHighscoreView('top10');
            this.showScene('highscoreScene');
            return;
        }
        let allScores = await this.getHighscores();
        // Hent firma-aliaser + skjulte spillere
        try {
            if (firebaseHighscore.db) {
                const [aliasSnap, hiddenSnap] = await Promise.all([
                    firebaseHighscore.db.ref('companyAliases').once('value'),
                    firebaseHighscore.db.ref('hiddenPlayers').once('value')
                ]);
                this.companyAliases = aliasSnap.val() || {};
                const hidden = hiddenSnap.val() || {};
                // Filtrer skjulte spillere
                allScores = allScores.filter(p => {
                    const key = ((p.name || 'Anonym') + '|' + (p.score || 0) + '|' + (p.date || '')).replace(/[.#$/\[\]]/g, '_');
                    return !hidden[key];
                });
            }
        } catch(e) { this.companyAliases = {}; }
        // Skjul anonyme spillere
        allScores = allScores.filter(p => p.name && p.name.trim() !== '' && p.name !== 'Anonym');
        this.cachedHighscores = allScores;
        this.showHighscoreView('top10');
        this.showScene('highscoreScene');
        
        // Spil awards-musik
        if (this.musicEnabled) {
            this.sounds.bgMusic.pause();
            this.awardsMusic.volume = this.musicVolume;
            this.awardsMusic.currentTime = 0;
            this.awardsMusic.play().catch(e => console.log('Awards music failed:', e));
        }
    }
    
    stopAwardsMusic() {
        this.awardsMusic.pause();
        this.awardsMusic.currentTime = 0;
        // Genstart normal baggrundsmusik hvis musik er slået til
        if (this.musicEnabled && this.musicPlaying) {
            this.sounds.bgMusic.volume = this.musicVolume;
            this.sounds.bgMusic.play().catch(e => console.log('Resume music failed:', e));
        }
    }
    
    resolveCompany(name) {
        if (!name) return '';
        const trimmed = name.trim();
        const key = trimmed.toLowerCase().replace(/[.#$/\[\]]/g, '_');
        return (this.companyAliases && this.companyAliases[key]) || trimmed;
    }
    
    showHighscoreView(view) {
        const tbody = document.getElementById('highscoreBody');
        const thead = document.querySelector('#highscoreTable thead tr');
        const title = document.getElementById('highscoreListTitle');
        tbody.innerHTML = '';
        
        const highscores = this.cachedHighscores || [];
        
        if (view === 'company') {
            // Bedste score per virksomhed
            title.textContent = '🏢 Bedste score pr. virksomhed';
            thead.innerHTML = '<th>#</th><th>Virksomhed</th><th>Bedste spiller</th><th>Score</th><th>Spillere</th>';
            
            const companies = {};
            highscores.forEach(entry => {
                const company = (entry.company || '').trim();
                if (!company) return;
                const resolved = this.resolveCompany(company);
                const key = resolved.toLowerCase();
                if (!companies[key]) companies[key] = { name: resolved, bestScore: 0, bestPlayer: '', players: new Set(), games: 0 };
                companies[key].games++;
                companies[key].players.add((entry.name || 'Anonym').toLowerCase());
                if (entry.score > companies[key].bestScore) {
                    companies[key].bestScore = entry.score;
                    companies[key].bestPlayer = entry.name || 'Anonym';
                }
            });
            
            const sorted = Object.values(companies).sort((a, b) => b.bestScore - a.bestScore);
            
            if (sorted.length === 0) {
                tbody.innerHTML = '<tr><td colspan="5" class="no-scores">Ingen virksomheder registreret endnu</td></tr>';
            } else {
                sorted.forEach((c, i) => {
                    const tr = document.createElement('tr');
                    let rank = i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : (i + 1);
                    tr.innerHTML = `
                        <td>${rank}</td>
                        <td><strong>${this.escapeHtml(c.name)}</strong></td>
                        <td>${this.escapeHtml(c.bestPlayer)}</td>
                        <td>${c.bestScore.toLocaleString()}</td>
                        <td>${c.players.size} (${c.games} spil)</td>
                    `;
                    tbody.appendChild(tr);
                });
            }
        } else {
            // Top 10 eller Top 100
            const showCount = view === 'top100' ? 100 : 10;
            title.textContent = `🏆 Highscore Top ${showCount}`;
            thead.innerHTML = '<th>#</th><th>Navn</th><th>Virksomhed</th><th>Score</th><th>Spørgsmål</th>';
            
            if (highscores.length === 0) {
                tbody.innerHTML = '<tr><td colspan="5" class="no-scores">Ingen highscores endnu. Spil et spil!</td></tr>';
            } else {
                highscores.slice(0, showCount).forEach((entry, index) => {
                    const tr = document.createElement('tr');
                    let rankDisplay;
                    if (index === 0) rankDisplay = '<span class="rank-medal">🥇</span>';
                    else if (index === 1) rankDisplay = '<span class="rank-medal">🥈</span>';
                    else if (index === 2) rankDisplay = '<span class="rank-medal">🥉</span>';
                    else rankDisplay = (index + 1);
                    
                    const resolvedCo = this.resolveCompany(entry.company);
                    const companyLine = resolvedCo ? `<span class="hs-company">${this.escapeHtml(resolvedCo)}</span>` : '';
                    tr.innerHTML = `
                        <td>${rankDisplay}</td>
                        <td>${this.escapeHtml(entry.name)}${companyLine}</td>
                        <td>${resolvedCo ? this.escapeHtml(resolvedCo) : '-'}</td>
                        <td>${entry.score.toLocaleString()}</td>
                        <td>${entry.correctAnswers}/${entry.totalQuestions}</td>
                    `;
                    tbody.appendChild(tr);
                });
            }
        }
    }
    
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
    
    // ===== LIFELINES =====
    
    useFiftyFifty() {
        if (this.lifelines.fiftyFifty || this.selectedAnswer !== null) return;
        
        this.playSound('whoosh');
        this.lifelines.fiftyFifty = true;
        document.getElementById('lifeline5050').classList.add('used');
        
        const question = this.questions[this.currentQuestionIndex];
        const answerBtns = document.querySelectorAll('.answer-btn');
        
        const wrongAnswers = [];
        answerBtns.forEach((btn, index) => {
            if (index !== this.currentShuffle.correctIndex) wrongAnswers.push(index);
        });
        
        const toDisable = wrongAnswers.sort(() => Math.random() - 0.5).slice(0, 2);
        toDisable.forEach(index => answerBtns[index].classList.add('disabled'));
        
        this.updateHostImage('thinking');
    }
    
    useAudience() {
        if (this.lifelines.audience || this.selectedAnswer !== null) return;
        
        this.playSound('whoosh');
        this.lifelines.audience = true;
        document.getElementById('lifelineAudience').classList.add('used');
        
        const question = this.questions[this.currentQuestionIndex];
        const resultsDiv = document.getElementById('audienceResults');
        resultsDiv.innerHTML = '';
        
        const votes = [0, 0, 0, 0];
        const correctIndex = this.currentShuffle.correctIndex;
        const qNum = this.currentQuestionIndex + 1;
        
        if (qNum <= 5) {
            // RUNDE 1 (Q1-5): Publikum er MEGET sikre — korrekt svar dominerer tydeligt
            const wrongIndices = [0,1,2,3].filter(i => i !== correctIndex);
            
            for (let i = 0; i < 100; i++) {
                const r = Math.random();
                if (r < 0.75) {
                    votes[correctIndex]++;      // 75% korrekt — helt tydeligt
                } else {
                    // 25% spredt på de forkerte
                    const randomWrong = wrongIndices[Math.floor(Math.random() * wrongIndices.length)];
                    votes[randomWrong]++;
                }
            }
        } else if (qNum <= 10) {
            // RUNDE 2 (Q6-10): Publikum er lidt mere usikre
            const wrongIndices = [0,1,2,3].filter(i => i !== correctIndex);
            const popularWrong = wrongIndices[Math.floor(Math.random() * wrongIndices.length)];
            
            for (let i = 0; i < 100; i++) {
                const r = Math.random();
                if (r < 0.35) {
                    votes[correctIndex]++;      // 35% korrekt
                } else if (r < 0.65) {
                    votes[popularWrong]++;       // 30% populært forkert
                } else {
                    // 35% spredt på alle 4
                    votes[Math.floor(Math.random() * 4)]++;
                }
            }
        } else {
            // RUNDE 3 (Q11-15): Fælde! De 3 mest oplagte har næsten lige mange
            // Det korrekte svar har SJÆLDENT flest stemmer
            const wrongIndices = [0,1,2,3].filter(i => i !== correctIndex);
            
            // Vælg det forkerte svar der skal "vinde" afstemningen
            const winningWrong = wrongIndices[Math.floor(Math.random() * wrongIndices.length)];
            const otherWrongs = wrongIndices.filter(i => i !== winningWrong);
            
            // 80% chance: forkert svar vinder. 20% chance: korrekt vinder alligevel
            const correctWins = Math.random() < 0.2;
            
            for (let i = 0; i < 100; i++) {
                const r = Math.random();
                if (correctWins) {
                    // Sjælden: korrekt vinder med lille margin
                    if (r < 0.28) votes[correctIndex]++;
                    else if (r < 0.54) votes[winningWrong]++;
                    else if (r < 0.78) votes[otherWrongs[0]]++;
                    else votes[otherWrongs[1]]++;
                } else {
                    // Normal: forkert svar vinder, korrekt er #2 eller #3
                    if (r < 0.30) votes[winningWrong]++;
                    else if (r < 0.55) votes[otherWrongs[0]]++;
                    else if (r < 0.78) votes[correctIndex]++;
                    else votes[otherWrongs[1]]++;
                }
            }
        }
        
        const total = votes.reduce((a, b) => a + b, 0);
        const percentages = votes.map(v => Math.round((v / total) * 100));
        
        this.currentShuffle.answers.forEach((answer, index) => {
            const barDiv = document.createElement('div');
            barDiv.className = 'audience-bar';
            barDiv.innerHTML = `
                <span class="audience-label">${String.fromCharCode(65 + index)}</span>
                <div class="audience-bar-fill">
                    <div class="audience-bar-inner" style="width: ${percentages[index]}%"></div>
                </div>
                <span class="audience-percent">${percentages[index]}%</span>
            `;
            resultsDiv.appendChild(barDiv);
        });
        
        document.getElementById('audienceModal').classList.add('active');
        this.stopTimer(); // Pause timer mens spilleren ser resultater
        this.updateHostImage('thinking');
    }
    
    closeAudienceModal() {
        this.playSound('click');
        document.getElementById('audienceModal').classList.remove('active');
        this.startTimer(); // Genstart timer efter publikum-svar
    }
    
    // ===== EXPERT SYSTEM (Ring til en Ekspert) =====
    
    usePhone() {
        if (this.lifelines.phone || this.selectedAnswer !== null) return;
        
        this.playSound('whoosh');
        this.lifelines.phone = true;
        document.getElementById('lifelinePhone').classList.add('used');
        
        const question = this.questions[this.currentQuestionIndex];
        const grid = document.getElementById('expertGrid');
        grid.innerHTML = '';
        
        // Build expert cards - no match indicators, player must use logic
        this.experts.forEach(expert => {
            const card = document.createElement('div');
            card.className = 'expert-card';
            card.innerHTML = `
                <img src="${expert.image}" alt="${expert.name}" class="expert-avatar">
                <div class="expert-info">
                    <div class="expert-name">${expert.name}</div>
                    <div class="expert-specialty">${expert.specialty.join(' • ')}</div>
                </div>
            `;
            card.addEventListener('click', () => this.callExpert(expert, question));
            grid.appendChild(card);
        });
        
        document.getElementById('expertModal').classList.add('active');
        this.stopTimer(); // Pause timer mens spilleren vælger ekspert
        this.updateHostImage('thinking');
    }
    
    callExpert(expert, question) {
        // Close expert selection
        document.getElementById('expertModal').classList.remove('active');
        this.playSound('click');
        
        const isMatch = expert.specialty.includes(question.category);
        const correctLetter = String.fromCharCode(65 + this.currentShuffle.correctIndex);
        const wrongLetters = [0,1,2,3].filter(i => i !== this.currentShuffle.correctIndex).map(i => String.fromCharCode(65 + i));
        const randomWrong = wrongLetters[Math.floor(Math.random() * wrongLetters.length)];
        const qNum = this.currentQuestionIndex + 1;
        
        let suggestedAnswer;
        let lines;
        
        if (qNum <= 10) {
            // RUNDE 1-2: Ekspert er hjælpsom
            if (isMatch) {
                // Rigtig ekspert: 90% korrekt
                suggestedAnswer = Math.random() < 0.9 ? correctLetter : randomWrong;
                lines = expert.confidentLines;
            } else {
                // Forkert ekspert: 50% korrekt
                suggestedAnswer = Math.random() < 0.5 ? correctLetter : randomWrong;
                lines = expert.unsureLines;
            }
        } else {
            // RUNDE 3 (Q11-15): Ekspert er meget mere usikker
            if (isMatch) {
                // Rigtig ekspert: kun 60% korrekt
                suggestedAnswer = Math.random() < 0.6 ? correctLetter : randomWrong;
                lines = expert.confidentLines;
            } else {
                // Forkert ekspert: kun 20% korrekt — næsten altid forkert!
                suggestedAnswer = Math.random() < 0.2 ? correctLetter : randomWrong;
                lines = expert.unsureLines;
            }
        }
        
        const line = lines[Math.floor(Math.random() * lines.length)].replace('{answer}', suggestedAnswer);
        
        document.getElementById('expertAnswerEmoji').textContent = expert.emoji;
        document.getElementById('expertAnswerName').textContent = expert.name;
        document.getElementById('expertAnswerText').textContent = line;
        document.getElementById('expertAnswerModal').classList.add('active');
        // Timer forbliver pauset fra usePhone() — genstartes når spilleren lukker
    }
    
    closeExpertAnswer() {
        this.playSound('click');
        document.getElementById('expertAnswerModal').classList.remove('active');
        this.startTimer(); // Genstart timer efter ekspert-svar
    }
    
    // ===== EXTRA TIME =====
    
    useExtraTime() {
        if (this.lifelines.extraTime || this.selectedAnswer !== null) return;
        
        this.playSound('whoosh');
        this.lifelines.extraTime = true;
        document.getElementById('lifelineTime').classList.add('used');
        
        this.timeLeft += 15;
        this.maxTime += 15;
        this.updateHostImage('excited');
    }
    
    // ===== CONFETTI =====
    
    createConfetti(containerId) {
        const container = document.getElementById(containerId);
        container.innerHTML = '';
        
        const canvas = document.createElement('canvas');
        canvas.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:10;';
        container.appendChild(canvas);
        
        const ctx = canvas.getContext('2d');
        const rect = container.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;
        
        const colors = ['#ffd700','#ff6b6b','#4ecdc4','#45b7d1','#f7b731','#5f27cd','#ff9ff3','#00d2d3','#ff6348','#7bed9f'];
        const shapes = ['rect','circle','star','ribbon'];
        const particles = [];
        const PARTICLE_COUNT = 120;
        
        for (let i = 0; i < PARTICLE_COUNT; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: -20 - Math.random() * canvas.height * 0.5,
                vx: (Math.random() - 0.5) * 6,
                vy: Math.random() * 3 + 2,
                w: Math.random() * 10 + 5,
                h: Math.random() * 6 + 3,
                color: colors[Math.floor(Math.random() * colors.length)],
                shape: shapes[Math.floor(Math.random() * shapes.length)],
                rotation: Math.random() * 360,
                rotSpeed: (Math.random() - 0.5) * 12,
                gravity: 0.04 + Math.random() * 0.04,
                wobble: Math.random() * Math.PI * 2,
                wobbleSpeed: 0.03 + Math.random() * 0.05,
                opacity: 1
            });
        }
        
        let frame = 0;
        const maxFrames = 300; // ~5 sek ved 60fps
        
        function drawStar(ctx, cx, cy, r) {
            ctx.beginPath();
            for (let i = 0; i < 5; i++) {
                const angle = (i * 4 * Math.PI) / 5 - Math.PI / 2;
                const method = i === 0 ? 'moveTo' : 'lineTo';
                ctx[method](cx + r * Math.cos(angle), cy + r * Math.sin(angle));
            }
            ctx.closePath();
            ctx.fill();
        }
        
        function animate() {
            if (frame >= maxFrames) {
                container.innerHTML = '';
                return;
            }
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            let alive = 0;
            for (const p of particles) {
                p.vy += p.gravity;
                p.x += p.vx;
                p.y += p.vy;
                p.rotation += p.rotSpeed;
                p.wobble += p.wobbleSpeed;
                p.x += Math.sin(p.wobble) * 0.5;
                
                // Fade ud i slutningen
                if (frame > maxFrames * 0.7) {
                    p.opacity = Math.max(0, 1 - (frame - maxFrames * 0.7) / (maxFrames * 0.3));
                }
                
                if (p.y < canvas.height + 50 && p.opacity > 0) {
                    alive++;
                    ctx.save();
                    ctx.translate(p.x, p.y);
                    ctx.rotate(p.rotation * Math.PI / 180);
                    ctx.globalAlpha = p.opacity;
                    ctx.fillStyle = p.color;
                    
                    if (p.shape === 'rect') {
                        ctx.fillRect(-p.w/2, -p.h/2, p.w, p.h);
                    } else if (p.shape === 'circle') {
                        ctx.beginPath();
                        ctx.arc(0, 0, p.w/2, 0, Math.PI * 2);
                        ctx.fill();
                    } else if (p.shape === 'star') {
                        drawStar(ctx, 0, 0, p.w/2);
                    } else {
                        // Ribbon - lang tynd form
                        ctx.fillRect(-p.w, -p.h/3, p.w * 2, p.h/1.5);
                    }
                    ctx.restore();
                }
            }
            
            frame++;
            if (alive > 0) {
                requestAnimationFrame(animate);
            } else {
                container.innerHTML = '';
            }
        }
        
        requestAnimationFrame(animate);
    }
}

// Initialize game when DOM is loaded
let game;
document.addEventListener('DOMContentLoaded', async () => {
    // Init Firebase highscore (fejl må ikke stoppe spillet)
    try {
        if (typeof firebaseHighscore !== 'undefined') {
            await firebaseHighscore.init();
        }
    } catch(e) {
        console.warn('Firebase init failed - spillet kører uden highscore:', e);
    }
    game = new WarehouseWarriorGame();
    game.showWelcomeQuote();
    
    // Track abandon ved browser-luk/navigation
    window.addEventListener('beforeunload', () => {
        if (game && game.gameActive && typeof firebaseHighscore !== 'undefined') {
            // sendBeacon er mere pålidelig ved page unload
            const data = JSON.stringify({ q: game.currentQuestionIndex + 1 });
            navigator.sendBeacon && navigator.sendBeacon('about:blank', ''); // trigger
            firebaseHighscore.trackEvent('game_abandoned', { subKey: 'q' + (game.currentQuestionIndex + 1) });
        }
    });
    
    // Track abandon ved tab-skift på mobil (app lukkes)
    document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'hidden' && game && game.gameActive && typeof firebaseHighscore !== 'undefined') {
            firebaseHighscore.trackEvent('game_backgrounded', { subKey: 'q' + (game.currentQuestionIndex + 1) });
        }
    });
});
