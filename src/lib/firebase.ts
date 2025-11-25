import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCMhZ0PqVQEoIjhpuE7DMKJAawPGC64Rrw",
  authDomain: "notenest-191cc.firebaseapp.com",
  projectId: "notenest-191cc",
  storageBucket: "notenest-191cc.firebasestorage.app",
  messagingSenderId: "433511871674",
  appId: "1:433511871674:web:4a97696461c224ea8c3e83",
  measurementId: "G-3QHCGP8J9X"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);