import firebase from 'firebase';

firebase.initializeApp({
    apiKey:             process.env.ATTENGO_FIREBASE_API_KEY,
    authDomain:         process.env.ATTENGO_FIREBASE_AUTH_DOMAIN,
    databaseURL:        process.env.ATTENGO_FIREBASE_DATABASE_URL,
    projectId:          process.env.ATTENGO_FIREBASE_PROJECT_ID,
    storageBucket:      process.env.ATTENGO_FIREBASE_STORAGE_BUCKET,
    messagingSenderId:  process.env.ATTENGO_FIREBASE_MESSAGING_SENDER_ID,
});

export default firebase;
