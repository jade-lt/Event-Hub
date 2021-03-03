import React, { useEffect, useState } from "react";


const DeleteListingForm = (props) => {

  const [formState, setFormState] = useState({
    name: "",
    color: "",
    size: "",
    amount: "",
    cost: "",
  });

      useEffect(() => {
        setFormState(props.listing)
        console.log('useEffect delete')
      }, [props.listing]);


      const handleChange = (e) => {
        const newState = { ...formState };
        newState[e.target.name] = e.target.value;
        setFormState(newState);
      };
    
      const handleSubmit = (e) => {
        console.log("handleSubmit");
        props.submit(formState);
      };


      return (
        <div>
          <h3>Delete a Listing</h3>
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
            <button type="submit">Delete Listing</button>
          </form>
        </div>
      );
}

export { DeleteListingForm };