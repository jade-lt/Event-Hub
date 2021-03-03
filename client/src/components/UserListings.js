import React from "react";


const UserListings = (props) => {
    return (
      <ul>
        {props.listings.map((el, index) => (
        <li key={index} onClick={() => props.handleClick(index)}>
          <img class="item-img"src={el.image}></img>
             Name: {el.name} // Color: {el.color} // Size: {el.size} // Amount: {el.amount} // Cost: {el.cost} // Image: {el.image}
          </li>
        ))}
      </ul>
    );
  };

export { UserListings };




