import * as firebase from 'firebase';


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBQhCB8pRT1-v5K1NcXIXOHj8XP3h0357c",
    authDomain: "diaryhood.firebaseapp.com",
    databaseURL: "https://diaryhood.firebaseio.com",
    projectId: "diaryhood",
    storageBucket: "",
    messagingSenderId: "944822203416"
  };
  firebase.initializeApp(config);

  export const database = firebase.database().ref('/notes');