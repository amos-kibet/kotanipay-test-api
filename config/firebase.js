const firebase = require("firebase/app");
require("firebase/auth");
require("firebase/firestore");

// Add Firebase SDK Snippet
const firebaseConfig = {
  apiKey: "AIzaSyDg0A60wtzD0iKV3KbOYvdjdB8ISPbkEl4",
  authDomain: "kotanipay-api-7c7e9.firebaseapp.com",
  databaseURL: "https://kotanipay-api-7c7e9-default-rtdb.firebaseio.com",
  projectId: "kotanipay-api-7c7e9",
  storageBucket: "kotanipay-api-7c7e9.appspot.com",
  messagingSenderId: "309369175389",
  appId: "1:309369175389:web:748e6fecf2e4e89b83bcb4",
  //measurementId: "",
};

firebase.initializeApp(firebaseConfig);

module.exports = firebase;
