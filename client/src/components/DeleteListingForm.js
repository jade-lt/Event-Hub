import React, { useEffect, useState } from "react";
import Popup from "reactjs-popup";
import { Button } from "react-bootstrap";




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
    <Popup trigger={<Button type ="submit" variant="outline-info" className="mr-2">Delete a Listing</Button>
  } position="right center">
        
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
            <Button type ="submit" variant="outline-info" className="mr-2">Delete Listing</Button>

          </form>
        </div>
        </Popup>
      );
}

export { DeleteListingForm };