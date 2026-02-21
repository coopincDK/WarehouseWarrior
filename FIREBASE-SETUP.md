# 🔥 Firebase Highscore - Sidste 2 trin!

## ✅ Allerede gjort:
- Firebase-projekt oprettet
- Config indsat i koden
- Firebase SDK tilføjet

## ⚠️ Du mangler kun dette:

### Trin 1: Opret Realtime Database
1. Gå til **https://console.firebase.google.com/project/warehousewarrior-28109**
2. I venstre menu: klik **"Build"** → **"Realtime Database"**
3. Klik **"Create Database"**
4. Vælg lokation: **europe-west1** (Belgium) ← VIGTIGT!
5. Vælg **"Start in test mode"** → **Enable**

### Trin 2: Sæt sikkerhedsregler
1. I Realtime Database, klik på **"Rules"** fanen
2. Erstat alt med:

```json
{
  "rules": {
    "highscores": {
      ".read": true,
      ".write": true,
      ".indexOn": ["score", "timestamp"]
    },
    "questionStats": {
      ".read": true,
      ".write": true
    },
    "clickStats": {
      ".read": true,
      ".write": true
    },
    "events": {
      ".read": true,
      ".write": true
    },
    "sessions": {
      ".read": true,
      ".write": true
    },
    "answerTimes": {
      ".read": true,
      ".write": true
    },
    "areYouSure": {
      ".read": true,
      ".write": true
    },
    "gameCompletions": {
      ".read": true,
      ".write": true
    },
    "levelOverrides": {
      ".read": true,
      ".write": true
    },
    "companyAliases": {
      ".read": true,
      ".write": true
    },
    "hiddenPlayers": {
      ".read": true,
      ".write": true
    }
  }
}
```

3. Klik **"Publish"**

---

## ✅ Test
- Åbn spillet i browseren
- Tryk F12 → Console
- Du bør se: `✅ Firebase Highscore connected!`
- Spil og gem score → den vises nu for ALLE spillere! 🌍

## ⚠️ Bemærk
- Test mode regler udløber efter 30 dage
- Herefter skal du forny reglerne eller sætte permanente regler
