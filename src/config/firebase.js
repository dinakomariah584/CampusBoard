import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBPWbj4aNGTpvq8rpZHFowZiTKaCTSU6FQ",
    authDomain: "campusboard1-23cde.firebaseapp.com",
    projectId: "campusboard1-23cde",
    storageBucket: "campusboard1-23cde.firebasestorage.app",
    messagingSenderId: "942221132296",
    appId: "1:942221132296:web:c231c1bb3679d5853f47bd",
    measurementId: "G-C72BB4XBTK"
  };

let app, auth, db;

// Inisialisasi aman (mencegah error jika config kosong saat development)
try {
  if (firebaseConfig.apiKey) {
    app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    db = getFirestore(app);
  } else {
    console.warn("Firebase Config belum diisi. Aplikasi berjalan dalam Mode Demo Terbatas.");
  }
} catch (e) {
  console.error("Error initializing Firebase:", e);
}

export { auth, db };