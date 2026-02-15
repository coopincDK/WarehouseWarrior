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
