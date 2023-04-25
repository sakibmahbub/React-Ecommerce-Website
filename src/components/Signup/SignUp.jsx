import React from "react";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div className="form-container">
      <h2 className="form-title">Sign Up</h2>
      <form>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>
        <input className="btn-submit" type="submit" value="Login" />
      </form>
    </div>
  );
};

export default SignUp;
