import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth/cordova';
const firebaseConfig = {
  apiKey: 'AIzaSyBEPDcUshTObfy6h1o6VVLGreQaGCGQxXs',
  authDomain: 'nwitter2-f3def.firebaseapp.com',
  projectId: 'nwitter2-f3def',
  storageBucket: 'nwitter2-f3def.appspot.com',
  messagingSenderId: '961576125980',
  appId: '1:961576125980:web:08f97fedd05d33755401d9',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
