import React from "react";

const UserLogin = () => {
  return (
    <div className="container">
      <div className="row">
        <div id="user-login" className="col-sm">
          <form>
            <h4 className="section-heading">Login</h4>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your username"
                name="username"
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter your password"
                name="password"
              ></input>
            </div>
            <button type="submit" className="btn btn-outline-info">
              Login
            </button>
          </form>
        </div>
        <div id="register-now" className="col-sm">
          <h4 className="section-heading">Not a member?</h4>
          <button id="user-registration" className="btn btn-outline-info">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export { UserLogin };
