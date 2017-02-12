import firebase from 'firebase';

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

var notesRef = firebaseRef.child('notes');

notesRef.on('child_added', (snapshot) => {
  console.log('child_added', snapshot.key, snapshot.val());
});

notesRef.on('child_changed', (snapshot) => {
  console.log('child_changed', snapshot.key, snapshot.val());
});

notesRef.on('child_removed', (snapshot) => {
  console.log('child_removed', snapshot.key, snapshot.val());
});

var newNoteRef = notesRef.push({
  text: 'Walk the dog!'
});
