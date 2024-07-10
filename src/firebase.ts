import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDJ-bOc5PtF-fekzLmAuwMFnrNA2d4aFBM',
  authDomain: 'nwitter-reloaded-d362f.firebaseapp.com',
  projectId: 'nwitter-reloaded-d362f',
  storageBucket: 'nwitter-reloaded-d362f.appspot.com',
  messagingSenderId: '497510104810',
  appId: '1:497510104810:web:e892b68bacaa1af16d2193',
  measurementId: 'G-QNY8SCK0CV',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage(app);

export const db = getFirestore(app);
