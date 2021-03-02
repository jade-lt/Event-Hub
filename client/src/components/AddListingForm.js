import React, { useState } from "react";

const AddListingForm = (props) => {
  const [formState, setFormState] = useState({
    name: "",
    color: "",
    size: "",
    amount: "",
    cost: "",
  });

  const handleChange = (e) => {
    const newState = { ...formState };
    newState[e.target.name] = e.target.value;
    setFormState(newState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit");
    props.submit(
      formState.name,
      formState.color,
      formState.size,
      formState.amount,
      formState.cost
    );
  };

  return (
    <div>
      <h3>Add a Listing</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            name="name"
            value={formState.name}
            onChange={handleChange}
          ></input>
        </label>
        <label>
          Color
          <input
            name="color"
            value={formState.color}
            onChange={handleChange}
          ></input>
        </label>
        <label>
          Size
          <input
            name="size"
            value={formState.size}
            onChange={handleChange}
          ></input>
        </label>
        <label>
          Amount
          <input
            name="amount"
            value={formState.amount}
            onChange={handleChange}
          ></input>
        </label>
        <label>
          Cost
          <input
            name="cost"
            value={formState.cost}
            onChange={handleChange}
          ></input>
        </label>
        <button type="submit">Add Listing</button>
      </form>
    </div>
  );
};

export { AddListingForm };