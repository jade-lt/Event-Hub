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
    <div>
      <h3>Register</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Username
          <input
            name="username"
            type="text"
            value={formState.username}
            onChange={handleChange}
          ></input>
        </label>
        <label>
          Password
          <input
            name="password"
            type="password"
            value={formState.password}
            onChange={handleChange}
          ></input>
        </label>
        
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export { AddUserForm };