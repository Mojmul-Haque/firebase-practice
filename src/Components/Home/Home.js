import React from "react";
import LoginForm from "../LoginForm/LoginForm";

const Home = () => {
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-lg-7">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Home;
