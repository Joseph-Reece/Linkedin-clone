import firebase from 'firebase'

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_API_KEY,
    projectId: process.env.REACT_APP_FIREBASE_API_KEY,
    storageBucket: process.env.REACT_APP_FIREBASE_API_KEY,
    messagingSenderId: process.env.REACT_APP_FIREBASE_API_KEY,
    appId: process.env.REACT_APP_FIREBASE_API_KEY,
    measurementId: process.env.REACT_APP_FIREBASE_API_KEY
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export {
    db,
    auth
}