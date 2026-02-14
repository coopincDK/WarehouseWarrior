// Warehouse Warrior - Game Logic med Eksperter, "Er du sikker?" & Lydindstillinger

class WarehouseWarriorGame {
    constructor() {
        this.playerName = '';
        this.playerCompany = '';
        this.currentQuestionIndex = 0;
        this.score = 10000;
        this.correctAnswers = 0;
        this.questions = [];
        this.timer = null;
        this.timeLeft = 30;
        this.maxTime = 30;
        this.selectedAnswer = null;
        this.pendingAnswer = null; // For "Er du sikker?"
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
            bgMusic: document.getElementById('bgMusic')
        };
        
        // Audio settings (load from localStorage)
        this.musicEnabled = localStorage.getItem('ww_music') !== 'false';
        this.sfxEnabled = localStorage.getItem('ww_sfx') !== 'false';
        this.musicPlaying = false;
        
        // Expert definitions
        this.experts = [
            {
                id: 'lars',
                name: 'Lars Lagerchef',
                emoji: '🔧',
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
            'Lagerindretning': { chapter: 'Kapitel 2: Lagerindretning & Flow', url: 'https://smartpack.dk/lagerhaandbog#kapitel2' },
            'ABC-analyse': { chapter: 'Kapitel 3: ABC-analyse', url: 'https://smartpack.dk/lagerhaandbog#kapitel3' },
            'Plukkestrategi': { chapter: 'Kapitel 4: Plukkestrategier', url: 'https://smartpack.dk/lagerhaandbog#kapitel4' },
            'Redskaber': { chapter: 'Kapitel 5: Redskaber & Udstyr', url: 'https://smartpack.dk/lagerhaandbog#kapitel5' },
            'Lagerstyring': { chapter: 'Kapitel 6: Lagerstyring', url: 'https://smartpack.dk/lagerhaandbog#kapitel6' },
            'Pakkefejl': { chapter: 'Kapitel 7: Pakkefejl & Kvalitet', url: 'https://smartpack.dk/lagerhaandbog#kapitel7' },
            'Returer': { chapter: 'Kapitel 8: Returer & Reklamationer', url: 'https://smartpack.dk/lagerhaandbog#kapitel8' },
            'Svind': { chapter: 'Kapitel 9: Svind & Forebyggelse', url: 'https://smartpack.dk/lagerhaandbog#kapitel9' },
            'Nøgletal': { chapter: 'Kapitel 10: Nøgletal & KPI\'er', url: 'https://smartpack.dk/lagerhaandbog#kapitel10' },
            '3PL': { chapter: 'Kapitel 11: 3PL & Outsourcing', url: 'https://smartpack.dk/lagerhaandbog#kapitel11' },
            'Generelt': { chapter: 'Hele bogen', url: 'https://smartpack.dk/lagerhaandbog' }
        };
        
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
        
        // Highscore buttons
        document.getElementById('showHighscoreBtn').addEventListener('click', () => this.showHighscore());
        document.getElementById('gameoverHighscoreBtn').addEventListener('click', () => this.showHighscore());
        document.getElementById('gameoverHomeBtn').addEventListener('click', () => this.goHome());
        document.getElementById('victoryHighscoreBtn').addEventListener('click', () => this.showHighscore());
        document.getElementById('victoryHomeBtn').addEventListener('click', () => this.goHome());
        document.getElementById('highscoreHomeBtn').addEventListener('click', () => this.goHome());
        document.getElementById('highscorePlayBtn').addEventListener('click', () => this.goHome());
        
        // Lifeline buttons
        document.getElementById('lifeline5050').addEventListener('click', () => this.useFiftyFifty());
        document.getElementById('lifelineAudience').addEventListener('click', () => this.useAudience());
        document.getElementById('lifelinePhone').addEventListener('click', () => this.usePhone());
        document.getElementById('lifelineTime').addEventListener('click', () => this.useExtraTime());
        
        // Settings toggles
        document.getElementById('musicToggle').addEventListener('change', (e) => this.setMusic(e.target.checked));
        document.getElementById('sfxToggle').addEventListener('change', (e) => this.setSfx(e.target.checked));
        
        // Apply saved settings to checkboxes
        document.getElementById('musicToggle').checked = this.musicEnabled;
        document.getElementById('sfxToggle').checked = this.sfxEnabled;
        
        // Enter key to start
        document.getElementById('playerName').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.startGame();
        });
        document.getElementById('playerCompany').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.startGame();
        });
    }
    
    // ===== AUDIO SYSTEM =====
    
    playSound(soundName) {
        if (!this.sfxEnabled) return;
        const sound = this.sounds[soundName];
        if (sound) {
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
            this.sounds.bgMusic.play().catch(e => console.log('Music play failed:', e));
            this.musicPlaying = true;
        }
    }
    
    setSfx(enabled) {
        this.sfxEnabled = enabled;
        localStorage.setItem('ww_sfx', enabled);
    }
    
    openSettings() {
        document.getElementById('settingsPanel').classList.add('active');
    }
    
    closeSettings() {
        document.getElementById('settingsPanel').classList.remove('active');
    }
    
    // ===== GAME FLOW =====
    
    startGame() {
        const nameInput = document.getElementById('playerName');
        const companyInput = document.getElementById('playerCompany');
        this.playerName = nameInput.value.trim() || 'Spiller';
        this.playerCompany = companyInput.value.trim() || '';
        
        this.playSound('whoosh');
        
        // Start music if enabled and not playing
        if (this.musicEnabled && !this.musicPlaying) {
            this.sounds.bgMusic.play().catch(e => console.log('Music play failed:', e));
            this.musicPlaying = true;
        }
        
        // Generate questions
        this.questions = generateQuestionSet();
        this.currentQuestionIndex = 0;
        this.score = 10000;
        this.correctAnswers = 0;
        
        // Reset lifelines
        this.lifelines = { fiftyFifty: false, audience: false, phone: false, extraTime: false };
        document.querySelectorAll('.lifeline-btn').forEach(btn => btn.classList.remove('used'));
        
        this.maxTime = 30;
        this.showScene('questionScene');
        this.loadQuestion();
    }
    
    showScene(sceneId) {
        document.querySelectorAll('.scene').forEach(scene => scene.classList.remove('active'));
        setTimeout(() => {
            document.getElementById(sceneId).classList.add('active');
        }, 100);
    }
    
    loadQuestion() {
        const question = this.questions[this.currentQuestionIndex];
        
        document.getElementById('playerNameDisplay').textContent = this.playerName;
        document.getElementById('currentQuestion').textContent = this.currentQuestionIndex + 1;
        document.getElementById('currentScore').textContent = this.score.toLocaleString();
        document.getElementById('questionCategory').textContent = question.category;
        document.getElementById('questionText').textContent = question.question;
        
        // Varier vært-billede baseret på spørgsmålsnummer
        const questionMoods = ['question', 'reading', 'microphone', 'thinking', 'whisper', 'cool'];
        const moodIndex = this.currentQuestionIndex % questionMoods.length;
        this.updateHostImage(questionMoods[moodIndex]);
        
        const answersGrid = document.getElementById('answersGrid');
        answersGrid.innerHTML = '';
        
        question.answers.forEach((answer, index) => {
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
        
        this.timeLeft = this.maxTime;
        this.selectedAnswer = null;
        this.pendingAnswer = null;
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
        timerFill.style.width = '100%';
        timerFill.classList.remove('warning');
        
        this.timer = setInterval(() => {
            this.timeLeft--;
            const percentage = (this.timeLeft / this.maxTime) * 100;
            timerFill.style.width = percentage + '%';
            timerText.textContent = this.timeLeft + 's';
            
            if (this.timeLeft <= 10) {
                timerFill.classList.add('warning');
                if (this.timeLeft <= 5) this.playSound('alarm');
            }
            
            if (this.score > 0) {
                this.score = Math.max(0, this.score - 10);
                document.getElementById('currentScore').textContent = this.score.toLocaleString();
            }
            
            if (this.timeLeft <= 0) {
                this.stopTimer();
                this.timeUp();
            }
        }, 1000);
    }
    
    stopTimer() {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
    }
    
    timeUp() {
        this.playSound('incorrect');
        this.updateHostImage('panic');
        
        const question = this.questions[this.currentQuestionIndex];
        const answerBtns = document.querySelectorAll('.answer-btn');
        answerBtns.forEach((btn, index) => {
            btn.disabled = true;
            if (index === question.correct) btn.classList.add('correct');
        });
        
        setTimeout(() => this.showWrongScene(), 1500);
    }
    
    // ===== ANSWER SELECTION & "ER DU SIKKER?" =====
    
    selectAnswer(index) {
        if (this.selectedAnswer !== null) return;
        
        this.playSound('click');
        
        // Highlight selected
        const answerBtns = document.querySelectorAll('.answer-btn');
        answerBtns.forEach((btn, i) => {
            if (i === index) btn.classList.add('selected');
        });
        
        // Check if "Er du sikker?" should trigger
        // Chance increases with question number: 0% for Q1-3, then 15% base + 3% per question
        const questionNum = this.currentQuestionIndex + 1;
        let areYouSureChance = 0;
        if (questionNum > 3) {
            areYouSureChance = 0.15 + (questionNum - 3) * 0.03;
        }
        
        if (Math.random() < areYouSureChance) {
            // Show "Er du sikker?" - pause timer
            this.pendingAnswer = index;
            this.stopTimer();
            this.showAreYouSure();
        } else {
            // Normal flow
            this.selectedAnswer = index;
            setTimeout(() => this.checkAnswer(), 500);
        }
    }
    
    showAreYouSure() {
        const taunt = this.areYouSureTaunts[Math.floor(Math.random() * this.areYouSureTaunts.length)];
        document.getElementById('areYouSureText').textContent = taunt;
        document.getElementById('areYouSureModal').classList.add('active');
        this.playSound('whoosh');
    }
    
    confirmAnswer(confirmed) {
        document.getElementById('areYouSureModal').classList.remove('active');
        this.playSound('click');
        
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
        const answerBtns = document.querySelectorAll('.answer-btn');
        
        answerBtns.forEach((btn, index) => {
            btn.disabled = true;
            if (index === question.correct) {
                btn.classList.add('correct');
            } else if (index === this.selectedAnswer) {
                btn.classList.add('wrong');
            }
        });
        
        if (this.selectedAnswer === question.correct) {
            this.correctAnswers++;
            this.playSound('correct');
            // Vary host reactions for correct answers
            const correctMoods = ['excited', 'thumbsup', 'dancing', 'strong', 'cool'];
            const randomMood = correctMoods[Math.floor(Math.random() * correctMoods.length)];
            this.updateHostImage(randomMood);
            setTimeout(() => this.showCorrectScene(), 1500);
        } else {
            this.playSound('incorrect');
            // Vary host reactions for wrong answers
            const wrongMoods = ['sad', 'angry', 'confused', 'shocked'];
            const randomWrongMood = wrongMoods[Math.floor(Math.random() * wrongMoods.length)];
            this.updateHostImage(randomWrongMood);
            // Forkert svar = spillet slutter!
            this.saveHighscore();
            setTimeout(() => this.showWrongScene(), 1500);
        }
    }
    
    // ===== SCENES =====
    
    showCorrectScene() {
        document.getElementById('correctMessage').textContent = 'Godt klaret!';
        document.getElementById('pointsEarned').textContent = this.score.toLocaleString();
        this.showScene('correctScene');
        this.createConfetti('confettiContainer');
        setTimeout(() => this.nextQuestion(), 3000);
    }
    
    showWrongScene() {
        const question = this.questions[this.currentQuestionIndex];
        document.getElementById('correctAnswerText').textContent = question.answers[question.correct];
        document.getElementById('explanationText').textContent = question.explanation || 'Ingen forklaring tilgængelig.';
        
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
        
        this.showScene('wrongScene');
    }
    
    openChapterForCurrentQuestion() {
        const question = this.questions[this.currentQuestionIndex];
        const chapterInfo = this.chapterMap[question.category];
        if (chapterInfo) {
            window.open(chapterInfo.url, '_blank');
        } else {
            window.open('https://smartpack.dk/lagerhaandbog', '_blank');
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
        document.getElementById('checkpointQuestion').textContent = this.currentQuestionIndex;
        document.getElementById('checkpointScore').textContent = this.score.toLocaleString();
        this.showScene('checkpointScene');
        this.playSound('applause');
    }
    
    continueFromCheckpoint() {
        this.playSound('click');
        this.showScene('questionScene');
        this.loadQuestion();
    }
    
    gameComplete() {
        this.saveHighscore();
        if (this.correctAnswers >= 12) {
            this.victory();
        } else {
            this.gameOver();
        }
    }
    
    gameOver() {
        document.getElementById('finalQuestion').textContent = this.correctAnswers;
        document.getElementById('finalScore').textContent = this.score.toLocaleString();
        this.showScene('gameOverScene');
        this.playSound('incorrect');
    }
    
    victory() {
        document.getElementById('victoryScore').textContent = this.score.toLocaleString();
        this.showScene('victoryScene');
        this.playSound('applause');
        this.createConfetti('victoryConfetti');
    }
    
    restartSamePlayer() {
        this.playSound('click');
        this.questions = generateQuestionSet();
        this.currentQuestionIndex = 0;
        this.score = 10000;
        this.correctAnswers = 0;
        this.maxTime = 30;
        this.lifelines = { fiftyFifty: false, audience: false, phone: false, extraTime: false };
        document.querySelectorAll('.lifeline-btn').forEach(btn => btn.classList.remove('used'));
        this.showScene('questionScene');
        this.loadQuestion();
    }
    
    goHome() {
        this.playSound('click');
        this.stopTimer();
        document.getElementById('playerName').value = '';
        document.getElementById('playerCompany').value = '';
        this.showScene('welcomeScene');
    }
    
    // ===== HIGHSCORE =====
    
    getHighscores() {
        try {
            const data = localStorage.getItem('warehouseWarriorHighscores');
            return data ? JSON.parse(data) : [];
        } catch (e) {
            return [];
        }
    }
    
    saveHighscore() {
        const highscores = this.getHighscores();
        highscores.push({
            name: this.playerName,
            company: this.playerCompany,
            score: this.score,
            correctAnswers: this.correctAnswers,
            totalQuestions: this.questions.length,
            date: new Date().toISOString()
        });
        highscores.sort((a, b) => b.score - a.score);
        localStorage.setItem('warehouseWarriorHighscores', JSON.stringify(highscores.slice(0, 50)));
    }
    
    showHighscore() {
        this.playSound('click');
        const highscores = this.getHighscores();
        const tbody = document.getElementById('highscoreBody');
        tbody.innerHTML = '';
        
        if (highscores.length === 0) {
            tbody.innerHTML = '<tr><td colspan="5" class="no-scores">Ingen highscores endnu. Spil et spil!</td></tr>';
        } else {
            highscores.slice(0, 10).forEach((entry, index) => {
                const tr = document.createElement('tr');
                let rankDisplay;
                if (index === 0) rankDisplay = '<span class="rank-medal">🥇</span>';
                else if (index === 1) rankDisplay = '<span class="rank-medal">🥈</span>';
                else if (index === 2) rankDisplay = '<span class="rank-medal">🥉</span>';
                else rankDisplay = (index + 1);
                
                tr.innerHTML = `
                    <td>${rankDisplay}</td>
                    <td>${this.escapeHtml(entry.name)}</td>
                    <td>${entry.company ? this.escapeHtml(entry.company) : '-'}</td>
                    <td>${entry.score.toLocaleString()}</td>
                    <td>${entry.correctAnswers}/${entry.totalQuestions}</td>
                `;
                tbody.appendChild(tr);
            });
        }
        this.showScene('highscoreScene');
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
            if (index !== question.correct) wrongAnswers.push(index);
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
        const correctIndex = question.correct;
        
        for (let i = 0; i < 100; i++) {
            if (Math.random() < 0.6) {
                votes[correctIndex]++;
            } else {
                votes[Math.floor(Math.random() * 4)]++;
            }
        }
        
        const total = votes.reduce((a, b) => a + b, 0);
        const percentages = votes.map(v => Math.round((v / total) * 100));
        
        question.answers.forEach((answer, index) => {
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
        this.updateHostImage('thinking');
    }
    
    closeAudienceModal() {
        this.playSound('click');
        document.getElementById('audienceModal').classList.remove('active');
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
        
        // Build expert cards with match indicators
        this.experts.forEach(expert => {
            const isMatch = expert.specialty.includes(question.category);
            const matchLevel = isMatch ? 'high' : (Math.random() < 0.4 ? 'medium' : 'low');
            const matchText = isMatch ? '⭐ Ekspert!' : (matchLevel === 'medium' ? '🤷 Måske' : '❓ Usikker');
            
            const card = document.createElement('div');
            card.className = 'expert-card';
            card.innerHTML = `
                <span class="expert-emoji">${expert.emoji}</span>
                <div class="expert-info">
                    <div class="expert-name">${expert.name}</div>
                    <div class="expert-specialty">Speciale: ${expert.specialty.join(', ')}</div>
                </div>
                <span class="expert-match ${matchLevel}">${matchText}</span>
            `;
            card.addEventListener('click', () => this.callExpert(expert, question));
            grid.appendChild(card);
        });
        
        document.getElementById('expertModal').classList.add('active');
        this.updateHostImage('thinking');
    }
    
    callExpert(expert, question) {
        // Close expert selection
        document.getElementById('expertModal').classList.remove('active');
        this.playSound('click');
        
        const isMatch = expert.specialty.includes(question.category);
        const correctLetter = String.fromCharCode(65 + question.correct);
        
        let suggestedAnswer;
        let lines;
        
        if (isMatch) {
            // Expert knows their stuff - 90% chance correct
            suggestedAnswer = Math.random() < 0.9 ? correctLetter : String.fromCharCode(65 + Math.floor(Math.random() * 4));
            lines = expert.confidentLines;
        } else {
            // Expert is out of their depth - 40% chance correct
            suggestedAnswer = Math.random() < 0.4 ? correctLetter : String.fromCharCode(65 + Math.floor(Math.random() * 4));
            lines = expert.unsureLines;
        }
        
        const line = lines[Math.floor(Math.random() * lines.length)].replace('{answer}', suggestedAnswer);
        
        document.getElementById('expertAnswerEmoji').textContent = expert.emoji;
        document.getElementById('expertAnswerName').textContent = expert.name;
        document.getElementById('expertAnswerText').textContent = line;
        document.getElementById('expertAnswerModal').classList.add('active');
    }
    
    closeExpertAnswer() {
        this.playSound('click');
        document.getElementById('expertAnswerModal').classList.remove('active');
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
        const colors = ['#ffd700', '#ff6b6b', '#4ecdc4', '#45b7d1', '#f7b731', '#5f27cd'];
        
        for (let i = 0; i < 50; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDelay = Math.random() * 2 + 's';
            confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
            container.appendChild(confetti);
        }
        
        setTimeout(() => { container.innerHTML = ''; }, 5000);
    }
}

// Initialize game when DOM is loaded
let game;
document.addEventListener('DOMContentLoaded', () => {
    game = new WarehouseWarriorGame();
});
