import firebase from "firebase/app";
import 'firebase/storage';
import 'firebase/firestore';

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyD0SvGgMnnFQpzzrEFFabETcRwHmbmYa78",
    authDomain: "mygram-b0643.firebaseapp.com",
    projectId: "mygram-b0643",
    storageBucket: "mygram-b0643.appspot.com",
    messagingSenderId: "887800386535",
    appId: "1:887800386535:web:512e4858335eb34c9b6342"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {projectFirestore,projectStorage,timestamp};