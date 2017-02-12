//  Import from firebase module
import firebase from 'firebase';

//  Config
var config = {
  apiKey: "AIzaSyBBlfx9RM_KI05PEOCF3u8eTm_YC-gSWpY",
  authDomain: "react-todo-app-dbd69.firebaseapp.com",
  databaseURL: "https://react-todo-app-dbd69.firebaseio.com",
  storageBucket: "react-todo-app-dbd69.appspot.com",
  messagingSenderId: "912555099878"
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

//  Set data
firebaseRef.set({
  app: {
    name: 'todo app',
    version: 'v6.9'
  },
  isRunning: true,
  user: {
    name: 'quockhanh',
    age: 18
  }
});

//  Update data
firebaseRef.update({
  isRunning: false,
  'app/name': 'Todo Application'
});

firebaseRef.child('app').update({
  name: 'Todo Application'
}).then(() => {
  console.log('update worked.');
}, (e) => {
  console.log('update failed.');
});

//  Remove data
firebaseRef.child('app/version').remove();

firebaseRef.child('user').update({
  name: 'sung hokage',
  age: null
});

//  Fetching data
firebaseRef.once('value').then((snapshot) => {
  console.log('Got entire database', snapshot.val());
}, (e) => {
  console.log('Unable to fetch value', e);
});

//  Event listenner
var logData = (snapshot) => {
  console.log('Got value', snapshot.val());
};

firebaseRef.on('value', logData);

notesRef.on('child_added', (snapshot) => {
  console.log('child_added', snapshot.key, snapshot.val());
});

notesRef.on('child_changed', (snapshot) => {
  console.log('child_changed', snapshot.key, snapshot.val());
});

notesRef.on('child_removed', (snapshot) => {
  console.log('child_removed', snapshot.key, snapshot.val());
});

firebaseRef.off(logData);

//  Working with array
var notesRef = firebaseRef.child('notes');

var newNoteRef = notesRef.push({
  text: 'Walk the dog!'
});
