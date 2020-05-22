import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase

var firebaseConfig = {
  apiKey: "AIzaSyDEC7_w2ruYpzYDkJgAeI6Ul9f8UUOLPxg",
  authDomain: "myjournal-87199.firebaseapp.com",
  databaseURL: "https://myjournal-87199.firebaseio.com",
  projectId: "myjournal-87199",
  storageBucket: "myjournal-87199.appspot.com",
  messagingSenderId: "33712364813",
  appId: "1:33712364813:web:6861e4ef8bea3b9bad2444",
  measurementId: "G-C8VM65YMY4",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
