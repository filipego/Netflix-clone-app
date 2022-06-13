// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAeZc4g8da2aFFozJ8s51aYv5YFKn2uDHs",
    authDomain: "netflix-clone-app-46a9b.firebaseapp.com",
    projectId: "netflix-clone-app-46a9b",
    storageBucket: "netflix-clone-app-46a9b.appspot.com",
    messagingSenderId: "867930535944",
    appId: "1:867930535944:web:511278fd1094565b7ab9bd"
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }