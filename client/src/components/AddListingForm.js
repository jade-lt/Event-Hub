import React, { useState } from "react"
import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';
import { Button } from "react-bootstrap";


const AddListingForm = (props) => {
  const [formState, setFormState] = useState({
    name: "",
    color: "",
    size: "",
    amount: "",
    cost: "",
    image: ""
  });

  const handleChange = (e) => {
    const newState = { ...formState };
    newState[e.target.name] = e.target.value;
    setFormState(newState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.submit(
      formState.name,
      formState.color,
      formState.size,
      formState.amount,
      formState.cost,
      formState.image
    );
  };

  return (
    <Popup trigger={
      <Button type ="submit" variant="outline-info" className="mr-2">Add Listing</Button>
    } position="right center">
      
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
        <label>
          Image
          <input
            name="image"
            value={formState.image}
            onChange={handleChange}
          ></input>
        </label>
        {/* <button type="submit">Add Listing</button> */}
        <Button type ="submit" variant="info" className="mr-2">Add Listing</Button>

      </form>
    </div>
    </Popup>
  );
};

export { AddListingForm }