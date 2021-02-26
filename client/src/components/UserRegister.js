import React from "react";

const UserRegister = () => {
  return (
    <div>
      <div id="register-header" class="container">
        <h1 class="header-text">Register Now</h1>
      </div>
      <div id="new-user-div">
        <form id="new-user">
          <h4>Register</h4>
          <div class="form-group">
            <label for="username">Username</label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter a username"
              name="username"
            ></input>
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              class="form-control"
              placeholder="Enter a password"
              name="password"
            ></input>
          </div>
          <button type="submit" id="new-user" class="btn btn-outline-info">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export { UserRegister };
