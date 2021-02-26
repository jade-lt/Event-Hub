import React from "react";

const UserLogin = () => {
  return (
    <div class="container">
      <div class="row">
        <div id="user-login" class="col-sm">
          <form>
            <h4 class="section-heading">Login</h4>
            <div class="form-group">
              <label for="username">Username</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter your username"
                name="username"
              ></input>
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input
                type="password"
                class="form-control"
                placeholder="Enter your password"
                name="password"
              ></input>
            </div>
            <button type="submit" class="btn btn-outline-info">
              Login
            </button>
          </form>
        </div>
        <div id="register-now" class="col-sm">
          <h4 class="section-heading">Not a member?</h4>
          <button id="user-registration" class="btn btn-outline-info">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export { UserLogin };
