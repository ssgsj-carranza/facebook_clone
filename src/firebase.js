import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC1XRujrhd4AVxNl3-hItoxDhDO_LCPfkw",
    authDomain: "facebook-clone-2416a.firebaseapp.com",
    projectId: "facebook-clone-2416a",
    storageBucket: "facebook-clone-2416a.appspot.com",
    messagingSenderId: "498090336201",
    appId: "1:498090336201:web:c0db7309bb9d113bca9218",
    measurementId: "G-J86XS2RWEP"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;