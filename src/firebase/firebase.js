import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyAmKxyOdIW3U3_mG-se-5MQFlaLT2lhTxI",
    authDomain: "bright-n-beautiful-bath-bombs.firebaseapp.com",
    projectId: "bright-n-beautiful-bath-bombs",
    storageBucket: "bright-n-beautiful-bath-bombs.appspot.com",
    messagingSenderId: "765899191526",
    appId: "1:765899191526:web:3baf27718fd23813d4f727",
    measurementId: "G-H3Z0MG2XNL"
};

firebase.initializeApp(config);
firebase.firestore();
export default firebase;