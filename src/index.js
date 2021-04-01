import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import * as firebase from 'firebase'
// import 'firebase/firestore'
import firebase from "firebase"





const firebaseConfig = {
  apiKey: "AIzaSyCOLJ9qlOMWYykIQQb3OUDXWyZpE9bJCZQ",
  authDomain: "shopping-cart-719ee.firebaseapp.com",
  projectId: "shopping-cart-719ee",
  storageBucket: "shopping-cart-719ee.appspot.com",
  messagingSenderId: "138500577417",
  appId: "1:138500577417:web:94443d64ffc2b591604e58"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
