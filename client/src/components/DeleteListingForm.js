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
      }, [props.listing]);


      const handleChange = (e) => {
        const newState = { ...formState };
        newState[e.target.name] = e.target.value;
        setFormState(newState);
      };
    
      const handleSubmit = (e) => {
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
            <button type="submit">Delete Listing</button>
          </form>
        </div>
      );
}

export { DeleteListingForm };