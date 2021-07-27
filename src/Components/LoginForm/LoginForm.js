import React, { useState } from "react";
import "firebase/auth";
import "firebase/firestore";
import firebase from "firebase/app";
import { initializeApp } from "../../lib/firebaseConfig";
import { userAuth } from "../../lib/firebase";
const LoginForm = () => {
  const [userInformation, setUserInformation] = useState({
    name: "",
    email: "",
    signIn: false,
  });

  //create account with email & password in firebse
  // const initialize_app = initializeApp;
  // google signIn with email
  const continueWithGoogle = () => {
    userAuth.googleSingIn().then((res) => {
      console.log(res);
    });
  };

  console.log(userInformation);
  return (
    <div>
      {userInformation.signIn && (
        <div>
          <h2>
            Welcome <span className="text-success">{userInformation.name}</span>{" "}
            from <span className="text-success">{userInformation.email}</span>
          </h2>
        </div>
      )}
      <input
        type="text"
        className="form-control my-2 d-none"
        placeholder="Your Name"
        required
      />
      <input
        type="text"
        className="form-control my-2"
        placeholder="Your Email"
        required
      />
      <input
        type="text"
        className="form-control my-2"
        placeholder="Your Password"
        required
      />
      <button className="btn btn-success">Login</button>
      <button onClick={continueWithGoogle} className="btn btn-primary">
        Continue With Google
      </button>
    </div>
  );
};

export default LoginForm;
