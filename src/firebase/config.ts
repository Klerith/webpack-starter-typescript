  import firebase from "firebase/app";
  import "firebase/firestore";
  
  const firebaseConfig = {
    apiKey: "AIzaSyCv_1v8Ng1RLE-LfsKk7f6dhaC0B_wb1_Y",
    authDomain: "sql-demos-9e256.firebaseapp.com",
    projectId: "sql-demos-9e256",
    storageBucket: "sql-demos-9e256.appspot.com",
    messagingSenderId: "177103766367",
    appId: "1:177103766367:web:13c1f3e10c0f218691acea",
    measurementId: "G-HCHVMC0WV9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export default firebase.firestore();

