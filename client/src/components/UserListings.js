import React from "react";


const UserListings = (props) => {
    return (
      <div id="listings-container" >
      <h3 id="my-listings-heading">My Listings</h3>
      <ul>
        {props.listings.map((el, index) => (
          <div className="user-items-list">
        <li key={index} onClick={() => props.handleClick(index)}>
        <h5 className="listing-name">{el.name}</h5><br />
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




