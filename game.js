// Warehouse Warrior - Game Logic

class WarehouseWarrior {
    constructor() {
        this.currentLevel = 1;
        this.totalScore = 0;
        this.currentQuestionScore = 0;
        this.questions = [];
        this.currentQuestion = null;
        this.timer = null;
        this.timeLeft = 10;
        this.maxTime = 10;
        this.selectedAnswer = null;
        this.playerName = "";
        
        // Lifelines
        this.lifelines = {
            fifty: true,
            audience: true,
            friend: true,
            extraTime: true
        };
        
        // Checkpoints
        this.checkpoints = [5, 10, 15];
        this.lastCheckpointScore = 0;
        
        // Point values per level
        this.levelPoints = [
            100, 200, 300, 500, 1000,           // 1-5
            2000, 4000, 8000, 16000, 32000,     // 6-10
            64000, 125000, 250000, 500000, 1000000  // 11-15
        ];
        
        // Friends for "Call a Friend" lifeline
        this.friends = [
            { name: "Lars", icon: "👨‍💼", expertise: "Lagerindretning", confidence: 0.8 },
            { name: "Maria", icon: "👩‍💼", expertise: "ABC-analyse", confidence: 0.75 },
            { name: "Peter", icon: "👨‍🔧", expertise: "Plukkestrategi", confidence: 0.7 },
            { name: "Sophie", icon: "👩‍🏫", expertise: "Fejlhåndtering", confidence: 0.85 },
            { name: "Thomas", icon: "👨‍💻", expertise: "Nøgletal", confidence: 0.65 },
            { name: "Emma", icon: "👩‍🔬", expertise: "Lagerstyring", confidence: 0.9 }
        ];
        
        // Confirmation messages
        this.confirmMessages = [
            "Er det dit endelige svar?",
            "Tænk dig godt om...",
            "De fleste ville ikke vælge det svar...",
            "Du ser lidt nervøs ud...",
            "Er du helt sikker?",
            "Måske skulle du overveje det igen?",
            "Det er et vigtigt spørgsmål..."
        ];
    }
    
    // Screen management
    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        document.getElementById(screenId).classList.add('active');
    }
    
    showStart() {
        this.showScreen('startScreen');
    }
    
    showNameInput() {
        this.showScreen('nameScreen');
        document.getElementById('playerName').focus();
    }
    
    showScoreboard() {
        this.showScreen('scoreboardScreen');
        this.displayScoreboard();
    }
    
    // Game initialization
    startGame() {
        const nameInput = document.getElementById('playerName');
        this.playerName = nameInput.value.trim() || "Anonym Warrior";
        
        // Reset game state
        this.currentLevel = 1;
        this.totalScore = 0;
        this.lastCheckpointScore = 0;
        this.lifelines = {
            fifty: true,
            audience: true,
            friend: true,
            extraTime: true
        };
        
        // Generate questions
        this.questions = generateQuestionSet();
        
        // Start first question
        this.showScreen('gameScreen');
        this.loadQuestion();
    }
    
    // Question loading
    loadQuestion() {
        if (this.currentLevel > 15) {
            this.victory();
            return;
        }
        
        // Check for checkpoint
        if (this.checkpoints.includes(this.currentLevel) && this.currentLevel > 1) {
            this.showCheckpoint();
            return;
        }
        
        this.currentQuestion = this.questions[this.currentLevel - 1];
        this.currentQuestionScore = this.levelPoints[this.currentLevel - 1];
        this.timeLeft = this.maxTime;
        this.selectedAnswer = null;
        
        // Update UI
        document.getElementById('levelNumber').textContent = this.currentLevel;
        document.getElementById('totalScore').textContent = this.totalScore.toLocaleString('da-DK');
        document.getElementById('currentScore').textContent = this.currentQuestionScore.toLocaleString('da-DK');
        document.getElementById('question').textContent = this.currentQuestion.question;
        
        // Update lifeline buttons
        this.updateLifelineButtons();
        
        // Generate answers
        this.generateAnswers();
        
        // Start timer
        this.startTimer();
    }
    
    generateAnswers() {
        const container = document.getElementById('answersContainer');
        container.innerHTML = '';
        
        this.currentQuestion.answers.forEach((answer, index) => {
            const button = document.createElement('button');
            button.className = 'answer';
            button.textContent = answer;
            button.onclick = () => this.selectAnswer(index);
            button.dataset.index = index;
            container.appendChild(button);
        });
    }
    
    // Timer
    startTimer() {
        const timerBar = document.getElementById('timerBar');
        const timerText = document.getElementById('timerText');
        
        timerBar.style.width = '100%';
        timerBar.classList.remove('warning');
        
        this.timer = setInterval(() => {
            this.timeLeft -= 0.1;
            
            if (this.timeLeft <= 0) {
                this.timeLeft = 0;
                clearInterval(this.timer);
                this.gameOver();
                return;
            }
            
            // Update current score (countdown)
            const percentage = this.timeLeft / this.maxTime;
            this.currentQuestionScore = Math.floor(this.levelPoints[this.currentLevel - 1] * percentage);
            document.getElementById('currentScore').textContent = this.currentQuestionScore.toLocaleString('da-DK');
            
            // Update timer bar
            timerBar.style.width = (percentage * 100) + '%';
            timerText.textContent = Math.ceil(this.timeLeft);
            
            // Warning animation
            if (this.timeLeft <= 3) {
                timerBar.classList.add('warning');
            }
        }, 100);
    }
    
    stopTimer() {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
    }
    
    // Answer selection
    selectAnswer(index) {
        if (this.selectedAnswer !== null) return;
        
        this.selectedAnswer = index;
        
        // Highlight selected answer
        document.querySelectorAll('.answer').forEach((btn, i) => {
            if (i === index) {
                btn.classList.add('selected');
            }
        });
        
        // Random confirmation dialog (30% chance)
        if (Math.random() < 0.3) {
            this.showConfirmation();
        } else {
            this.lockAnswer();
        }
    }
    
    showConfirmation() {
        const randomMessage = this.confirmMessages[Math.floor(Math.random() * this.confirmMessages.length)];
        document.getElementById('confirmText').textContent = randomMessage;
        this.stopTimer();
        this.showScreen('confirmDialog');
    }
    
    confirmAnswer() {
        this.showScreen('gameScreen');
        this.lockAnswer();
    }
    
    cancelAnswer() {
        // Remove selection
        document.querySelectorAll('.answer').forEach(btn => {
            btn.classList.remove('selected');
        });
        this.selectedAnswer = null;
        
        // Resume game
        this.showScreen('gameScreen');
        this.startTimer();
    }
    
    lockAnswer() {
        this.stopTimer();
        
        const correct = this.currentQuestion.correct;
        const answers = document.querySelectorAll('.answer');
        
        // Disable all answers
        answers.forEach(btn => btn.classList.add('disabled'));
        
        // Show correct/wrong
        if (this.selectedAnswer === correct) {
            answers[this.selectedAnswer].classList.add('correct');
            setTimeout(() => this.correctAnswer(), 1500);
        } else {
            answers[this.selectedAnswer].classList.add('wrong');
            answers[correct].classList.add('correct');
            setTimeout(() => this.showExplanation(), 1500);
        }
    }
    
    correctAnswer() {
        this.totalScore += this.currentQuestionScore;
        this.currentLevel++;
        this.loadQuestion();
    }
    
    showExplanation() {
        const explanation = this.currentQuestion.explanation || "Det rigtige svar er: " + this.currentQuestion.answers[this.currentQuestion.correct];
        const correctAnswer = this.currentQuestion.answers[this.currentQuestion.correct];
        
        document.getElementById('explanationText').innerHTML = `
            <div style="margin-bottom: 20px;">
                <strong style="color: #00ff88; font-size: 1.2rem;">✓ Rigtigt svar:</strong><br>
                <span style="font-size: 1.1rem;">${correctAnswer}</span>
            </div>
            <div style="line-height: 1.6; color: #e0e0e0;">
                ${explanation}
            </div>
        `;
        
        this.showScreen('explanationScreen');
    }
    
    continueAfterExplanation() {
        this.gameOver();
    }
    
    // Checkpoints
    showCheckpoint() {
        this.lastCheckpointScore = this.totalScore;
        document.getElementById('checkpointLevel').textContent = this.currentLevel;
        document.getElementById('checkpointScore').textContent = this.totalScore.toLocaleString('da-DK');
        this.showScreen('checkpointScreen');
    }
    
    continueFromCheckpoint() {
        this.showScreen('gameScreen');
        this.loadQuestion();
    }
    
    stopAtCheckpoint() {
        this.saveScore();
        this.showVictoryScreen(true);
    }
    
    // Lifelines
    updateLifelineButtons() {
        document.getElementById('lifeline50').disabled = !this.lifelines.fifty;
        document.getElementById('lifelineAudience').disabled = !this.lifelines.audience;
        document.getElementById('lifelineFriend').disabled = !this.lifelines.friend;
        document.getElementById('lifelineTime').disabled = !this.lifelines.extraTime;
    }
    
    use5050() {
        if (!this.lifelines.fifty || this.selectedAnswer !== null) return;
        
        this.lifelines.fifty = false;
        this.updateLifelineButtons();
        
        const correct = this.currentQuestion.correct;
        const answers = document.querySelectorAll('.answer');
        let removed = 0;
        
        // Remove 2 wrong answers
        answers.forEach((btn, index) => {
            if (index !== correct && removed < 2) {
                btn.classList.add('hidden');
                removed++;
            }
        });
    }
    
    useAudience() {
        if (!this.lifelines.audience || this.selectedAnswer !== null) return;
        
        this.lifelines.audience = false;
        this.updateLifelineButtons();
        this.stopTimer();
        
        // Generate audience votes
        const correct = this.currentQuestion.correct;
        const votes = [0, 0, 0, 0];
        
        // Correct answer gets 40-70%
        votes[correct] = 40 + Math.random() * 30;
        
        // Distribute remaining votes
        let remaining = 100 - votes[correct];
        for (let i = 0; i < 4; i++) {
            if (i !== correct) {
                const vote = Math.random() * remaining;
                votes[i] = vote;
                remaining -= vote;
            }
        }
        
        // Normalize to 100%
        const sum = votes.reduce((a, b) => a + b, 0);
        votes.forEach((v, i) => votes[i] = (v / sum) * 100);
        
        // Display chart
        const chart = document.getElementById('audienceChart');
        chart.innerHTML = '';
        
        this.currentQuestion.answers.forEach((answer, index) => {
            const barContainer = document.createElement('div');
            barContainer.className = 'audience-bar';
            
            const bar = document.createElement('div');
            bar.className = 'bar';
            bar.style.height = votes[index] + '%';
            
            const percentage = document.createElement('div');
            percentage.className = 'bar-percentage';
            percentage.textContent = Math.round(votes[index]) + '%';
            
            const label = document.createElement('div');
            label.className = 'bar-label';
            label.textContent = String.fromCharCode(65 + index); // A, B, C, D
            
            bar.appendChild(percentage);
            barContainer.appendChild(bar);
            barContainer.appendChild(label);
            chart.appendChild(barContainer);
        });
        
        this.showScreen('audienceScreen');
    }
    
    closeAudience() {
        this.showScreen('gameScreen');
        this.startTimer();
    }
    
    useFriend() {
        if (!this.lifelines.friend || this.selectedAnswer !== null) return;
        
        this.lifelines.friend = false;
        this.updateLifelineButtons();
        this.stopTimer();
        
        // Show friend selection
        const container = document.getElementById('friendsContainer');
        container.innerHTML = '';
        
        this.friends.forEach((friend, index) => {
            const card = document.createElement('div');
            card.className = 'friend-card';
            card.onclick = () => this.callFriend(index);
            
            card.innerHTML = `
                <div class="friend-icon">${friend.icon}</div>
                <div class="friend-name">${friend.name}</div>
                <div class="friend-expertise">${friend.expertise}</div>
            `;
            
            container.appendChild(card);
        });
        
        this.showScreen('friendScreen');
    }
    
    callFriend(friendIndex) {
        const friend = this.friends[friendIndex];
        const correct = this.currentQuestion.correct;
        
        document.getElementById('friendName').textContent = friend.name;
        document.getElementById('friendThinking').textContent = "Tænker...";
        document.getElementById('friendResponse').style.display = 'none';
        document.getElementById('friendContinueBtn').style.display = 'none';
        
        this.showScreen('friendAnswerScreen');
        
        // Simulate thinking
        setTimeout(() => {
            let answer;
            const letters = ['A', 'B', 'C', 'D'];
            
            // Friend gives correct answer based on confidence
            if (Math.random() < friend.confidence) {
                answer = `Jeg er ret sikker på, at det er ${letters[correct]}. Det lyder rigtigt ud fra min erfaring med ${friend.expertise.toLowerCase()}.`;
            } else {
                // Friend is unsure or gives wrong answer
                const wrongAnswers = [0, 1, 2, 3].filter(i => i !== correct);
                const guess = wrongAnswers[Math.floor(Math.random() * wrongAnswers.length)];
                
                const uncertainPhrases = [
                    `Æææh... måske er det ${letters[guess]}... eller var det ${letters[correct]}? Jeg er ikke helt sikker.`,
                    `Hmm, det er svært. Jeg tror måske ${letters[guess]}, men jeg er ikke 100% sikker.`,
                    `Det kunne være ${letters[correct]}, men jeg er lidt i tvivl. Måske ${letters[guess]}?`,
                    `Jeg er ikke helt sikker, men jeg ville nok gætte på ${letters[guess]} eller ${letters[correct]}.`
                ];
                
                answer = uncertainPhrases[Math.floor(Math.random() * uncertainPhrases.length)];
            }
            
            document.getElementById('friendThinking').style.display = 'none';
            document.getElementById('friendResponse').style.display = 'block';
            document.getElementById('friendText').textContent = answer;
            document.getElementById('friendContinueBtn').style.display = 'block';
        }, 2000);
    }
    
    closeFriend() {
        this.showScreen('gameScreen');
        this.startTimer();
    }
    
    useExtraTime() {
        if (!this.lifelines.extraTime || this.selectedAnswer !== null) return;
        
        this.lifelines.extraTime = false;
        this.updateLifelineButtons();
        
        // Add 2 minutes (120 seconds)
        this.timeLeft += 120;
        this.maxTime += 120;
    }
    
    // Game end
    gameOver() {
        this.stopTimer();
        
        // If at checkpoint, use checkpoint score
        if (this.lastCheckpointScore > 0) {
            this.totalScore = this.lastCheckpointScore;
        }
        
        this.saveScore();
        
        document.getElementById('finalLevel').textContent = this.currentLevel;
        document.getElementById('finalScore').textContent = this.totalScore.toLocaleString('da-DK');
        
        // Show correct answer
        const correctAnswerText = this.currentQuestion.answers[this.currentQuestion.correct];
        document.getElementById('correctAnswerText').textContent = correctAnswerText;
        
        this.showScreen('gameOverScreen');
    }
    
    victory() {
        this.saveScore();
        this.showVictoryScreen(false);
    }
    
    showVictoryScreen(fromCheckpoint) {
        document.getElementById('victoryScore').textContent = this.totalScore.toLocaleString('da-DK');
        this.showScreen('victoryScreen');
        
        if (!fromCheckpoint) {
            this.createConfetti();
        }
    }
    
    createConfetti() {
        const confetti = document.querySelector('.confetti');
        const colors = ['#8a2be2', '#ff00ff', '#00ffff', '#FFD700'];
        
        for (let i = 0; i < 100; i++) {
            const piece = document.createElement('div');
            piece.style.position = 'absolute';
            piece.style.width = '10px';
            piece.style.height = '10px';
            piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            piece.style.left = Math.random() * 100 + '%';
            piece.style.top = '-10px';
            piece.style.opacity = Math.random();
            piece.style.transform = `rotate(${Math.random() * 360}deg)`;
            
            confetti.appendChild(piece);
            
            // Animate
            const duration = 2000 + Math.random() * 2000;
            const delay = Math.random() * 1000;
            
            setTimeout(() => {
                piece.style.transition = `top ${duration}ms linear, left ${duration}ms ease-in-out`;
                piece.style.top = '100vh';
                piece.style.left = (parseFloat(piece.style.left) + (Math.random() * 40 - 20)) + '%';
            }, delay);
            
            setTimeout(() => piece.remove(), delay + duration);
        }
    }
    
    // Scoreboard
    saveScore() {
        const scores = this.getScores();
        scores.push({
            name: this.playerName,
            score: this.totalScore,
            level: this.currentLevel,
            date: new Date().toISOString()
        });
        
        // Sort by score
        scores.sort((a, b) => b.score - a.score);
        
        // Keep top 10
        const top10 = scores.slice(0, 10);
        
        localStorage.setItem('warehouseWarriorScores', JSON.stringify(top10));
    }
    
    getScores() {
        const stored = localStorage.getItem('warehouseWarriorScores');
        return stored ? JSON.parse(stored) : [];
    }
    
    displayScoreboard() {
        const scores = this.getScores();
        const container = document.getElementById('scoreboardList');
        
        if (scores.length === 0) {
            container.innerHTML = '<div class="no-scores">Ingen scores endnu. Vær den første!</div>';
            return;
        }
        
        container.innerHTML = '';
        
        scores.forEach((score, index) => {
            const item = document.createElement('div');
            item.className = 'score-item';
            
            if (index === 0) item.classList.add('top1');
            else if (index === 1) item.classList.add('top2');
            else if (index === 2) item.classList.add('top3');
            
            const medal = index < 3 ? ['🥇', '🥈', '🥉'][index] : '';
            
            item.innerHTML = `
                <div class="score-rank">${medal || (index + 1)}</div>
                <div class="score-name">${score.name}</div>
                <div class="score-points">${score.score.toLocaleString('da-DK')}</div>
                <div class="score-level">Niveau ${score.level}</div>
            `;
            
            container.appendChild(item);
        });
    }
    
    restart() {
        this.showNameInput();
    }
}

// Initialize game
const game = new WarehouseWarrior();

// Enter key support for name input
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('playerName').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            game.startGame();
        }
    });
});
