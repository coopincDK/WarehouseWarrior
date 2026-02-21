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
      ".indexOn": ["score", "timestamp"],
      "$entry": {
        ".write": "!data.exists()",
        ".validate": "newData.hasChildren(['name','score','correctAnswers','totalQuestions','timestamp']) && newData.child('name').isString() && newData.child('name').val().length >= 1 && newData.child('name').val().length <= 30 && newData.child('score').isNumber() && newData.child('score').val() >= 0 && newData.child('score').val() <= 150000 && newData.child('correctAnswers').isNumber() && newData.child('correctAnswers').val() >= 0 && newData.child('correctAnswers').val() <= 15 && newData.child('totalQuestions').isNumber() && newData.child('totalQuestions').val() == 15"
      }
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

### Hvad reglerne gør:
- **Highscores kan kun oprettes, IKKE ændres/slettes** (`!data.exists()`)
- **Score max 150.000** (umuligt at nå mere legitimt)
- **Navn max 30 tegn**, mindst 1 tegn
- **correctAnswers 0-15**, totalQuestions skal være 15
- **Alle påkrævede felter** skal være til stede
- Stats/admin-noder er stadig åbne (kan strammes senere)

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
