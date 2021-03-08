import React, { useState } from "react";

const AddUserForm = (props) => {
  const [formState, setFormState] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const newState = { ...formState };
    newState[e.target.name] = e.target.value;
    setFormState(newState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.submit(
      formState.username,
      formState.password
    );
  };

  return (
    <div className="container">
      <div className="row">
        <div id="user-regiter" className="col-sm">
        
      <form onSubmit={handleSubmit}>
      <h3 className="section-heading">Register</h3>

      <div className="form-group">
        <label>
          Username
          <input
            name="username"
            type="text"
            value={formState.username}
            onChange={handleChange}
            placeholder="Enter a username"
            className="form-control"

            
          ></input>
        </label>
        </div>
        <div className="form-group">
        <label>
          Password
          <input
            name="password"
            type="password"
            value={formState.password}
            onChange={handleChange}
            placeholder="Enter a password"
            className="form-control"
          ></input>
        </label>
        </div>
        <button type="submit" className="btn btn-outline-info">
          Register
          </button>
      </form>
    </div>
    </div>
    </div>
  );
};

export { AddUserForm }