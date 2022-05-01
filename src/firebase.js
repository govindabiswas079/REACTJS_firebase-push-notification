import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyDsIZUlLQWi6wYfSyU4e0FtTdOI8Y-bvTg",
  authDomain: "thekattatest.firebaseapp.com",
  databaseURL: "https://thekattatest-default-rtdb.firebaseio.com",
  projectId: "thekattatest",
  storageBucket: "thekattatest.appspot.com",
  messagingSenderId: "636805281024",
  appId: "1:636805281024:web:7a908329fa372b1e61afe5",
  measurementId: "G-1Q7Y5J2Q7C"
};

firebase.initializeApp(firebaseConfig);

export default firebase;