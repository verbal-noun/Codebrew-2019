import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyA8m2vpKldjpnjDwS8ret59quf_FEaH9z4",
    authDomain: "codebrew-2019.firebaseapp.com",
    databaseURL: "https://codebrew-2019.firebaseio.com",
    projectId: "codebrew-2019",
    storageBucket: "codebrew-2019.appspot.com",
    messagingSenderId: "689247009474"
};

firebase.initializeApp(config);

export default firebase;
