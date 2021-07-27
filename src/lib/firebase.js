/*
 * title: Firebase config
 * description: Firebase configuration here
 * author: Mojmul Haque
 * Date: 7/22/2021
 */

//dependencies

import firebase from "firebase/app";

// firebase app  module scafolding
export const userAuth = {};

// google signIn methods
userAuth.googleSingIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      // get userInformation & return it
      return result;
    })
    .catch((error) => {
      // Handle Errors here.
      console.log(error);
      return error;
      // ...
    });
};

// in firebase create user with email and password
userAuth.createUserWithEmailAndPassword = (email, password) => {
  return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in and return user-credential

      var user = userCredential.user;
      console.log(user);
      return userCredential;
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(error);
      return error;
    });
};
//  default createUserWithEmailAndPassword;
