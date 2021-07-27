/* 

 * title: Firebase config
 * description: Firebase configuration here
 * author: Mojmul Haque
 * Date: 7/22/2021
 

*/

/// dependencies
import firebase from "firebase/app";

// firebase app name = firebase-recap
const firebaseConfig = {
  apiKey: "AIzaSyA2vzxqBc88cRc_GP_AFqfpj94U7gcw29Q",
  authDomain: "fir-recap-627ed.firebaseapp.com",
  projectId: "fir-recap-627ed",
  storageBucket: "fir-recap-627ed.appspot.com",
  messagingSenderId: "95705942868",
  appId: "1:95705942868:web:3d23952365a50bb4f896c1",
};
// Initialize Firebase
// export const initializeApp = firebase.initializeApp(firebaseConfig);
export default !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
console.dir(firebase.app());
console.log(firebase.app());
