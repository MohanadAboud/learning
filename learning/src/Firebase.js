'use strict'

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyC4DbfviCJ4nO9tY1DvDEvnSQtKiaFwIkA',
  authDomain: 'e-learning-22de9.firebaseapp.com',
  projectId: 'e-learning-22de9',
  storageBucket: 'e-learning-22de9.firebasestorage.app',
  messagingSenderId: '539198966922',
  appId: '1:539198966922:web:832160097b2b72cb427173',
  measurementId: 'G-GWSL64H710',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export { app, auth }
export default app
