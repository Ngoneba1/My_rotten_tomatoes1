// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWyO527SWmcwZRdbvZuou8zt5OqsThzeU",
  authDomain: "my-rotten-tomatoes-b28a1.firebaseapp.com",
  projectId: "my-rotten-tomatoes-b28a1",
  storageBucket: "my-rotten-tomatoes-b28a1.appspot.com",
  messagingSenderId: "842590014272",
  appId: "1:842590014272:web:988ebf30290253253f08a5"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }