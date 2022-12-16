import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBPGyPbdFzIZKC4LoMBDBW9vIoKxNHAaA0",
  authDomain: "chatme-2-dec45.firebaseapp.com",
  projectId: "chatme-2-dec45",
  storageBucket: "chatme-2-dec45.appspot.com",
  messagingSenderId: "513826774514",
  appId: "1:513826774514:web:c5af3e13d1703746601f6b"
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };