import firebase from "firebase"
require("@firebase/firestore")


  var firebaseConfig = {
    apiKey: "AIzaSyBL1hol44MWqnBIm_d8gborCXv3GBO4xE0",
    authDomain: "book-santa-ddaf2.firebaseapp.com",
    projectId: "book-santa-ddaf2",
    storageBucket: "book-santa-ddaf2.appspot.com",
    messagingSenderId: "764921182161",
    appId: "1:764921182161:web:01f30cfb9bb2487b00d2f0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()