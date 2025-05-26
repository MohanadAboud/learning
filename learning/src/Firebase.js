// Firebase.js
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
  apiKey: 'AIzaSyC4DbfviCJ4nO9tY1DvDEvnSQtKiaFwIkA',
  authDomain: 'e-learning-22de9.firebaseapp.com',
  projectId: 'e-learning-22de9',
  storageBucket: 'e-learning-22de9.firebasestorage.app',
  messagingSenderId: '539198966922',
  appId: '1:539198966922:web:832160097b2b72cb427173',
  measurementId: 'G-GWSL64H710',
  databaseURL: 'https://e-learning-22de9-default-rtdb.europe-west1.firebasedatabase.app',
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)
const rtdb = getDatabase(app)

export { auth, db, app, rtdb }
