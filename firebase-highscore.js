// Firebase Highscore System for Warehouse Warrior
// Uses Firebase Realtime Database for global leaderboard

class FirebaseHighscore {
    constructor() {
        this.db = null;
        this.initialized = false;
        this.fallbackToLocal = false;
    }
    
    async init() {
        try {
            // Check if Firebase is loaded
            if (typeof firebase === 'undefined') {
                console.warn('Firebase SDK not loaded, using local storage');
                this.fallbackToLocal = true;
                return;
            }
            
            const firebaseConfig = {
                apiKey: "AIzaSyD9DM5MHFMiovMxSLJaOBvO0tv4dzPJ9ug",
                authDomain: "warehousewarrior-28109.firebaseapp.com",
                databaseURL: "https://warehousewarrior-28109-default-rtdb.europe-west1.firebasedatabase.app",
                projectId: "warehousewarrior-28109",
                storageBucket: "warehousewarrior-28109.firebasestorage.app",
                messagingSenderId: "745763028734",
                appId: "1:745763028734:web:b1bdc74b8233a68f672faf",
                measurementId: "G-NJ7CM17LZQ"
            };
            
            // Only initialize if not already done
            if (!firebase.apps.length) {
                firebase.initializeApp(firebaseConfig);
            }
            
            this.db = firebase.database();
            this.initialized = true;
            console.log('✅ Firebase Highscore connected!');
        } catch (e) {
            console.warn('Firebase init failed, using local storage:', e);
            this.fallbackToLocal = true;
        }
    }
    
    async saveScore(entry) {
        // Always save locally as backup
        this.saveLocal(entry);
        
        if (this.fallbackToLocal || !this.initialized) return;
        
        try {
            const ref = this.db.ref('highscores');
            await ref.push({
                name: entry.name || 'Anonym',
                company: entry.company || '',
                score: entry.score,
                correctAnswers: entry.correctAnswers,
                totalQuestions: entry.totalQuestions,
                date: new Date().toISOString(),
                timestamp: firebase.database.ServerValue.TIMESTAMP
            });
            console.log('✅ Score saved to Firebase');
        } catch (e) {
            console.warn('Firebase save failed:', e);
        }
    }
    
    async getHighscores(limit = 100) {
        if (this.fallbackToLocal || !this.initialized) {
            return this.getLocal();
        }
        
        try {
            const ref = this.db.ref('highscores');
            const snapshot = await ref.orderByChild('score').limitToLast(limit).once('value');
            
            const scores = [];
            snapshot.forEach(child => {
                scores.push(child.val());
            });
            
            // Sort descending by score
            scores.sort((a, b) => b.score - a.score);
            return scores;
        } catch (e) {
            console.warn('Firebase read failed, using local:', e);
            return this.getLocal();
        }
    }
    
    // Local storage fallback
    saveLocal(entry) {
        try {
            const data = localStorage.getItem('warehouseWarriorHighscores');
            const highscores = data ? JSON.parse(data) : [];
            highscores.push(entry);
            highscores.sort((a, b) => b.score - a.score);
            localStorage.setItem('warehouseWarriorHighscores', JSON.stringify(highscores.slice(0, 200)));
        } catch (e) {
            console.warn('Local save failed:', e);
        }
    }
    
    getLocal() {
        try {
            const data = localStorage.getItem('warehouseWarriorHighscores');
            return data ? JSON.parse(data) : [];
        } catch (e) {
            return [];
        }
    }
    
    // ===== QUESTION ANALYTICS =====
    
    async trackAnswer(questionText, level, category, isCorrect, chosenAnswer, correctAnswer) {
        if (this.fallbackToLocal || !this.initialized) return;
        
        try {
            // Lav et stabilt ID fra spørgsmålsteksten
            const qId = this.hashQuestion(questionText);
            const ref = this.db.ref('questionStats/' + qId);
            
            // Brug transaction for atomisk opdatering
            await ref.transaction(current => {
                if (current === null) {
                    current = {
                        question: questionText.substring(0, 100),
                        level: level,
                        category: category || '',
                        totalAnswers: 0,
                        correctAnswers: 0,
                        wrongChoices: {},
                        correctAnswerText: (correctAnswer || '').substring(0, 80),
                        lastUpdated: new Date().toISOString()
                    };
                }
                current.totalAnswers = (current.totalAnswers || 0) + 1;
                current.correctAnswers = (current.correctAnswers || 0) + (isCorrect ? 1 : 0);
                current.lastUpdated = new Date().toISOString();
                
                // Gem forkerte svar-valg
                if (!isCorrect && chosenAnswer) {
                    if (!current.wrongChoices) current.wrongChoices = {};
                    const safeKey = chosenAnswer.substring(0, 60).replace(/[.#$/\[\]]/g, '_');
                    current.wrongChoices[safeKey] = (current.wrongChoices[safeKey] || 0) + 1;
                }
                
                // Opdater korrekt svar-tekst (hvis ikke sat)
                if (!current.correctAnswerText && correctAnswer) {
                    current.correctAnswerText = correctAnswer.substring(0, 80);
                }
                
                return current;
            });
        } catch (e) {
            console.warn('Analytics track failed:', e);
        }
    }
    
    // Simpel hash af spørgsmålstekst til Firebase-key
    hashQuestion(text) {
        let hash = 0;
        for (let i = 0; i < text.length; i++) {
            const char = text.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash; // Convert to 32bit integer
        }
        return 'q_' + Math.abs(hash).toString(36);
    }
    
    async getQuestionStats() {
        if (this.fallbackToLocal || !this.initialized) return [];
        
        try {
            const ref = this.db.ref('questionStats');
            const snapshot = await ref.once('value');
            const stats = [];
            
            snapshot.forEach(child => {
                const data = child.val();
                const ratio = data.totalAnswers > 0 
                    ? Math.round((data.correctAnswers / data.totalAnswers) * 100) 
                    : 0;
                stats.push({
                    id: child.key,
                    ...data,
                    correctRatio: ratio,
                    suggestedLevel: this.ratioToLevel(ratio, data.totalAnswers)
                });
            });
            
            // Sortér efter sværhedsgrad (lavest ratio = sværest)
            stats.sort((a, b) => a.correctRatio - b.correctRatio);
            return stats;
        } catch (e) {
            console.warn('Failed to get question stats:', e);
            return [];
        }
    }
    
    // Foreslå level baseret på korrekt-ratio
    ratioToLevel(ratio, totalAnswers) {
        // Kræv mindst 10 svar for at foreslå
        if (totalAnswers < 10) return null;
        
        // Høj ratio = let spørgsmål = lavt level
        // Lav ratio = svært spørgsmål = højt level
        if (ratio >= 90) return 1;   // Meget let
        if (ratio >= 80) return 3;   // Let
        if (ratio >= 70) return 5;   // Medium-let
        if (ratio >= 60) return 7;   // Medium
        if (ratio >= 50) return 9;   // Medium-svær
        if (ratio >= 40) return 11;  // Svær
        if (ratio >= 30) return 13;  // Meget svær
        return 15;                    // Ekstremt svær
    }
    // ===== EVENT TRACKING =====
    
    async trackEvent(eventName, data = {}) {
        if (this.fallbackToLocal || !this.initialized) return;
        
        try {
            const ref = this.db.ref('events/' + eventName);
            await ref.transaction(current => {
                if (!current) current = { count: 0 };
                current.count = (current.count || 0) + 1;
                current.lastOccurred = new Date().toISOString();
                // Gem ekstra data som sub-counts
                if (data.subKey) {
                    if (!current.breakdown) current.breakdown = {};
                    current.breakdown[data.subKey] = (current.breakdown[data.subKey] || 0) + 1;
                }
                return current;
            });
        } catch (e) {
            console.warn('Event tracking failed:', e);
        }
    }
    
    // ===== SESSION TRACKING =====
    
    async trackSession() {
        if (this.fallbackToLocal || !this.initialized) return;
        
        try {
            const isMobile = /Android|iPhone|iPad|iPod|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
            const device = isMobile ? 'mobile' : 'desktop';
            const hour = new Date().getHours();
            let timeSlot = 'nat';
            if (hour >= 6 && hour < 12) timeSlot = 'morgen';
            else if (hour >= 12 && hour < 17) timeSlot = 'eftermiddag';
            else if (hour >= 17 && hour < 22) timeSlot = 'aften';
            
            // Referrer/UTM
            const params = new URLSearchParams(window.location.search);
            const source = params.get('utm_source') || params.get('ref') || document.referrer || 'direkte';
            let refKey = 'direkte';
            if (source.includes('linkedin')) refKey = 'linkedin';
            else if (source.includes('facebook')) refKey = 'facebook';
            else if (source.includes('mail') || source.includes('outlook')) refKey = 'email';
            else if (source.includes('google')) refKey = 'google';
            else if (source !== 'direkte' && source !== '') refKey = 'andet';
            
            const ref = this.db.ref('sessions');
            await ref.transaction(current => {
                if (!current) current = {};
                // Enheder
                if (!current.devices) current.devices = {};
                current.devices[device] = (current.devices[device] || 0) + 1;
                // Tidspunkt
                if (!current.timeSlots) current.timeSlots = {};
                current.timeSlots[timeSlot] = (current.timeSlots[timeSlot] || 0) + 1;
                // Referrer
                if (!current.referrers) current.referrers = {};
                current.referrers[refKey] = (current.referrers[refKey] || 0) + 1;
                // Total
                current.totalSessions = (current.totalSessions || 0) + 1;
                return current;
            });
        } catch (e) {
            console.warn('Session tracking failed:', e);
        }
    }
    
    // ===== ANSWER TIME TRACKING =====
    
    async trackAnswerTime(questionIndex, timeTakenMs, isCorrect) {
        if (this.fallbackToLocal || !this.initialized) return;
        
        try {
            const ref = this.db.ref('answerTimes');
            await ref.transaction(current => {
                if (!current) current = { totalTime: 0, totalAnswers: 0, byQuestion: {} };
                current.totalTime = (current.totalTime || 0) + timeTakenMs;
                current.totalAnswers = (current.totalAnswers || 0) + 1;
                // Per spørgsmålsnummer (1-15)
                const qKey = 'q' + (questionIndex + 1);
                if (!current.byQuestion[qKey]) current.byQuestion[qKey] = { totalTime: 0, count: 0, correctTime: 0, correctCount: 0 };
                current.byQuestion[qKey].totalTime += timeTakenMs;
                current.byQuestion[qKey].count += 1;
                if (isCorrect) {
                    current.byQuestion[qKey].correctTime += timeTakenMs;
                    current.byQuestion[qKey].correctCount += 1;
                }
                return current;
            });
        } catch (e) {
            console.warn('Answer time tracking failed:', e);
        }
    }
    
    // ===== ARE YOU SURE TRACKING =====
    
    async trackAreYouSure(action, originalWasCorrect) {
        if (this.fallbackToLocal || !this.initialized) return;
        
        try {
            const ref = this.db.ref('areYouSure');
            await ref.transaction(current => {
                if (!current) current = { shown: 0, confirmed: 0, changed: 0, confirmedCorrect: 0, changedSavedIt: 0 };
                current.shown = (current.shown || 0) + 1;
                if (action === 'confirmed') {
                    current.confirmed = (current.confirmed || 0) + 1;
                    if (originalWasCorrect) current.confirmedCorrect = (current.confirmedCorrect || 0) + 1;
                } else {
                    current.changed = (current.changed || 0) + 1;
                    if (!originalWasCorrect) current.changedSavedIt = (current.changedSavedIt || 0) + 1;
                }
                return current;
            });
        } catch (e) {
            console.warn('AreYouSure tracking failed:', e);
        }
    }
    
    // ===== GAME COMPLETION TRACKING =====
    
    async trackGameCompletion(score, correctAnswers, bestStreak, questionReached) {
        if (this.fallbackToLocal || !this.initialized) return;
        
        try {
            const dateKey = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
            const ref = this.db.ref('gameCompletions/' + dateKey);
            await ref.transaction(current => {
                if (!current) current = { games: 0, totalScore: 0, totalCorrect: 0, victories: 0, scores: {}, streaks: {}, dropOff: {} };
                current.games = (current.games || 0) + 1;
                current.totalScore = (current.totalScore || 0) + score;
                current.totalCorrect = (current.totalCorrect || 0) + correctAnswers;
                if (correctAnswers >= 12) current.victories = (current.victories || 0) + 1;
                // Score-fordeling (buckets: 0-999, 1000-2999, 3000-5999, 6000-9999, 10000+)
                let bucket = '0_999';
                if (score >= 10000) bucket = '10000_plus';
                else if (score >= 6000) bucket = '6000_9999';
                else if (score >= 3000) bucket = '3000_5999';
                else if (score >= 1000) bucket = '1000_2999';
                if (!current.scores) current.scores = {};
                current.scores[bucket] = (current.scores[bucket] || 0) + 1;
                // Streak-fordeling
                const streakBucket = 's' + Math.min(bestStreak, 15);
                if (!current.streaks) current.streaks = {};
                current.streaks[streakBucket] = (current.streaks[streakBucket] || 0) + 1;
                // Drop-off (hvilket spørgsmål de tabte på)
                if (correctAnswers < 12) {
                    const dropKey = 'q' + questionReached;
                    if (!current.dropOff) current.dropOff = {};
                    current.dropOff[dropKey] = (current.dropOff[dropKey] || 0) + 1;
                }
                return current;
            });
        } catch (e) {
            console.warn('Game completion tracking failed:', e);
        }
    }
    
    // ===== CLICK TRACKING =====
    
    async trackClick(linkName) {
        if (this.fallbackToLocal || !this.initialized) return;
        
        try {
            const ref = this.db.ref('clickStats/' + linkName);
            await ref.transaction(current => {
                if (!current) current = { totalClicks: 0 };
                current.totalClicks = (current.totalClicks || 0) + 1;
                current.lastClicked = new Date().toISOString();
                return current;
            });
        } catch (e) {
            console.warn('Click tracking failed:', e);
        }
    }
}

// Global instance
const firebaseHighscore = new FirebaseHighscore();
