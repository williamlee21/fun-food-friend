import firebase from "firebase";
const config = {
  apiKey: "AIzaSyAIb1dpnuLuZ4tRxkxxwJnPNWLJpqsc0A0",
  authDomain: "fun-food-friend-87764.firebaseapp.com",
  databaseURL: "https://fun-food-friend-87764.firebaseio.com",
  projectId: "fun-food-friend-87764",
  storageBucket: "fun-food-friend-87764.appspot.com",
  messagingSenderId: "628110407947"
};
firebase.initializeApp(config);
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;
