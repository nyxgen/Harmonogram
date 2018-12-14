const serviceAccount = require('./serviceAccountKey.json');
const admin = require('firebase-admin');

    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: 'https://harmonogram-proj.firebaseio.com/'
    });

    const settings = {/* your settings... */ timestampsInSnapshots: true };
    const db = admin.firestore();

    db.settings(settings);
    //const projectRef = db.collection('Projects'); // db.collection -> baza danych (we� db o nazwie Projects)

    module.exports = db; // pozwala innym plikom korzysta� ze zmiennej projectRef
