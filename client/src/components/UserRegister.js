import React from "react";

const UserRegister = () => {
  return (
    <div>
      <div id="register-header" name="container">
        <h1 className="header-text">Register Now</h1>
      </div>
      <div id="new-user-div">
        <form id="register-new-user">
          <h4>Register</h4>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter a username"
              name="username"
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter a password"
              name="password"
            ></input>
          </div>
          <button type="submit" id="new-user" className="btn btn-outline-info">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export { UserRegister };
