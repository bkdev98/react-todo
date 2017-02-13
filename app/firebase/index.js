import firebase from 'firebase';

try {
  var config = {
    apiKey: "AIzaSyBBlfx9RM_KI05PEOCF3u8eTm_YC-gSWpY",
    authDomain: "react-todo-app-dbd69.firebaseapp.com",
    databaseURL: "https://react-todo-app-dbd69.firebaseio.com",
    storageBucket: "react-todo-app-dbd69.appspot.com",
    messagingSenderId: "912555099878"
  };
  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
