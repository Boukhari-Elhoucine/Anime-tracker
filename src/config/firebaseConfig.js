import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
export const Config = {
  apiKey: "AIzaSyDZVyjraI6MmVOtEV9JWXNzwQXLdRhk198",
  authDomain: "myanimelist-879e7.firebaseapp.com",
  databaseURL: "https://myanimelist-879e7.firebaseio.com",
  projectId: "myanimelist-879e7",
  storageBucket: "myanimelist-879e7.appspot.com",
  messagingSenderId: "76724960312",
  appId: "1:76724960312:web:feb953a99075f7a8b97acd",
  measurementId: "G-BX097K4TWW",
};
firebase.initializeApp(Config);
firebase.firestore();
const storage = firebase.storage();
export { storage };
export default firebase;
