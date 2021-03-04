import React from "react";


const UserListings = (props) => {
    return (
      <div id="listings-container">
        <h2 className="sub-heading">My Listings</h2>
      <ul>
        {props.listings.map((el, index) => (
          <div className="user-items-list">
        <li key={index} onClick={() => props.handleClick(index)}>
        <h3 className="listing-name">{el.name}</h3><br />
          <img className="item-img"src={el.image} alt=""></img>
          <div className="listing-info">
             Color: {el.color}<br />
             Size: {el.size}<br />
             Amount: {el.amount}<br />
             Cost: {el.cost} 
             </div>
          </li>
          </div>
        ))}
      </ul>
      </div>
    );
  };

export { UserListings };




