
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyAl6n_cIGZItQQlsGMHD0QuDkD8J28vvy4",
  authDomain: "synbasket.firebaseapp.com",
  projectId: "synbasket",
  storageBucket: "synbasket.appspot.com",
  messagingSenderId: "933664889941",
  appId: "1:933664889941:web:31ea23f782eef0624c48dc",
  measurementId: "G-D65CXJJP3M"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);

}


export { firebase } 