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
}

// Global instance
const firebaseHighscore = new FirebaseHighscore();
