import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD1prhvarQ2Rps9WGSnAV17lDn4DbDVBr8",
  authDomain: "facebook-messenger-clone-34544.firebaseapp.com",
  databaseURL: "https://facebook-messenger-clone-34544.firebaseio.com",
  projectId: "facebook-messenger-clone-34544",
  storageBucket: "facebook-messenger-clone-34544.appspot.com",
  messagingSenderId: "1009875880142",
  appId: "1:1009875880142:web:77c2ce7867bfbf3753a89f",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
