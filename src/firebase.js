import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBp9jaAEOhklW9hp4b36swrVV9Dkc_vXdU",
  authDomain: "netflix-clone-c73c5.firebaseapp.com",
  projectId: "netflix-clone-c73c5",
  storageBucket: "netflix-clone-c73c5.appspot.com",
  messagingSenderId: "298501238922",
  appId: "1:298501238922:web:76987d4ab5ff9279463d73",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
