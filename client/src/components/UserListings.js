import React from "react";

const UserListings = (props) => {

    

    return (
        <div>
            <h1>This is the user listings file</h1>
            <ul>
          {props.listingItems.map((el) => (
            <li >
              Name: {el.name} // Color: {el.itemColor} // Size: {el.dimensions}
            </li>
          ))}
        </ul>
        </div>
        
      );
}

export { UserListings };

