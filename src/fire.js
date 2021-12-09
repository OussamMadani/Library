import firebase from 'firebase';


// Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyA2NpzJI4BQKzK8TK96MD5FrobIhhgOGgY",
    authDomain: "mosque-f3025.firebaseapp.com",
    projectId: "mosque-f3025",
    storageBucket: "mosque-f3025.appspot.com",
    messagingSenderId: "1071821674822",
    appId: "1:1071821674822:web:5fa4f550d9827f29e2ed47"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
  
  export default fire;