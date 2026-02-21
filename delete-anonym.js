// Kør dette i browser-konsollen på Warehouse Warrior-siden
// Sletter alle highscores med navnet "Anonym"

(async () => {
    const db = firebase.database();
    const ref = db.ref('highscores');
    const snapshot = await ref.once('value');
    
    let count = 0;
    const deletes = [];
    
    snapshot.forEach(child => {
        const data = child.val();
        if (!data.name || data.name === 'Anonym' || data.name.trim() === '') {
            deletes.push(child.key);
            count++;
        }
    });
    
    console.log(`Fandt ${count} anonyme scores. Sletter...`);
    
    for (const key of deletes) {
        await ref.child(key).remove();
        console.log(`Slettet: ${key}`);
    }
    
    console.log(`✅ Færdig! ${count} anonyme scores slettet.`);
})();
