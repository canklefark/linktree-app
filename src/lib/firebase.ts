import { initializeApp } from "firebase/app";
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";
import {
  connectAuthEmulator,
  getAuth,
  onAuthStateChanged,
  type User,
} from "firebase/auth";
import { getStorage, connectStorageEmulator } from "firebase/storage";
import { writable } from "svelte/store";

const firebaseConfig = {
  apiKey: "AIzaSyBp5vcQcEyOHpKeevssgxOVrzln5uIHXRw",
  authDomain: "cankletree.firebaseapp.com",
  projectId: "cankletree",
  storageBucket: "cankletree.appspot.com",
  messagingSenderId: "29424998578",
  appId: "1:29424998578:web:f2ff6d212d02ee91dd51ab",
};

//initialize firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
connectFirestoreEmulator(db, "127.0.0.1", 8081);
export const auth = getAuth();
connectAuthEmulator(auth, "http://127.0.0.1:9099");
export const storage = getStorage();
connectStorageEmulator(storage, "127.0.0.1", 9199);

function userStore() {
  let unsubscribe: () => void;

  if (!auth || !globalThis.window) {
    console.warn("Auth is not initialized or not in browser");
    const { subscribe } = writable<User | null>(null);
    return {
      subscribe,
    };
  }

  const { subscribe } = writable(auth?.currentUser ?? null, (set) => {
    unsubscribe = onAuthStateChanged(auth, (user) => {
      set(user);
    });

    return () => unsubscribe();
  });

  return {
    subscribe,
  };
}

export const user = userStore();
