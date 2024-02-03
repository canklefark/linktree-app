import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
	apiKey: 'AIzaSyBp5vcQcEyOHpKeevssgxOVrzln5uIHXRw',
	authDomain: 'cankletree.firebaseapp.com',
	projectId: 'cankletree',
	storageBucket: 'cankletree.appspot.com',
	messagingSenderId: '29424998578',
	appId: '1:29424998578:web:f2ff6d212d02ee91dd51ab'
};

//initialize firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();
