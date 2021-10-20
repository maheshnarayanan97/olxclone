import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA9Qy8QBlomkKdRREAGNcx9jjsF9yUpfAM",
    authDomain: "olxclone-dd652.firebaseapp.com",
    projectId: "olxclone-dd652",
    storageBucket: "olxclone-dd652.appspot.com",
    messagingSenderId: "197802331995",
    appId: "1:197802331995:web:205b4b1976bc38ac2d547e",
    measurementId: "G-12YXBLW2NX"
};
export default firebase.initializeApp(firebaseConfig)