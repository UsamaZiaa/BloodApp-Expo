import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDOVIcawRLFOay8rvwY6mAC4wYFcktmJzg",
    authDomain: "bloodapp-479d4.firebaseapp.com",
    projectId: "bloodapp-479d4",
    storageBucket: "bloodapp-479d4.appspot.com",
    messagingSenderId: "142230938726",
    appId: "1:142230938726:web:b330405dfde22e52a6f9a7"
  };

const Firebase = firebase.initializeApp(firebaseConfig)

export default Firebase