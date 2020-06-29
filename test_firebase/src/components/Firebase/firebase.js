import firebase from 'firebase/app'
import "firebase/auth";
import "firebase/firestore";


const config = {
    apiKey: "AIzaSyAHtc2Hb0Z_PUESae12kIh1OVhm2qAjRR8",
    authDomain: "nice-tiger-125109.firebaseapp.com",
    databaseURL: "https://nice-tiger-125109.firebaseio.com",
    projectId: "nice-tiger-125109",
    storageBucket: "nice-tiger-125109.appspot.com",
    messagingSenderId: "620646723946",
    appId: "1:620646723946:web:22b7f089e9db4d35427513"
};

class Firebase{
  constructor(){
    firebase.initializeApp(config)
  }
}

export default Firebase