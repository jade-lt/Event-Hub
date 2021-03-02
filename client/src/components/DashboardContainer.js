import React, { useState, useEffect } from "react";
import { AddListingForm } from "./AddListingForm";
import { EditListingForm } from "./EditListingForm";
import { DeleteListingForm } from "./DeleteListingForm";
import { UserListings } from "./UserListings";

const DashboardContainer = () => {

  const [hireItemsList, setHireItemsList] = useState([]);
  const [hireItemsListEdit, setHireItemsListEdit] = useState({
    name: "",
    color: "",
    size: "",
    amount: "",
    cost: "",
  });
  const [hireItemsListDelete, setHireItemsListDelete] = useState({
    name: "",
    color: "",
    size: "",
    amount: "",
    cost: "",
  });

  const handleListingClick = (listingIndex) => {
    // console.log("listingIndex:", listingIndex);
    const listing = hireItemsList[listingIndex];
    // console.log("listing:", listing);
    setHireItemsListEdit(listing);
    setHireItemsListDelete(listing);
  };

  const handleAddListingFormSubmit = (name, color, size, amount, cost) => {
    const newListing = { name: name, color: color, size: size, amount: amount, cost: cost };

    const newListings = [...hireItemsList];
    newListings.push(newListing);
    setHireItemsList(newListings);

    fetch("http://localhost:9000/api/hire-items/new-hire-item", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newListing),
    }).then((response) => {
      // console.log("response:", response);
    });
  }


  const handleEditListingFormSubmit = (listing) => {
    const foundListing = hireItemsList.findIndex((listingEl) => {
      return listingEl._id === listing._id;
    });
    const newListings = [...hireItemsList];
    newListings[foundListing] = listing;

    setHireItemsList(newListings);
    fetch(`http://localhost:9000/api/hire-items/update-item/${listing._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(listing),
    })
  }

  const handleDeleteListingFormSubmit = (listing) => {
    const foundListing = hireItemsList.findIndex((listingEl) => {
      return listingEl._id === listing._id;
    });
    const newListings = [...hireItemsList];
    newListings[foundListing] = listing;
    setHireItemsList(newListings);
    fetch(`http://localhost:9000/api/hire-items/delete-item/${listing._id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
  };


  useEffect(() => {
    fetch("http://localhost:9000/api/hire-items/my-items", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setHireItemsList(response);
      });
  }, [hireItemsList]);

  return (
    <div>
      <h1>Welcome Back!</h1>
      <UserListings listings={hireItemsList} handleClick={handleListingClick}/>
      <AddListingForm submit={handleAddListingFormSubmit} listing={hireItemsListEdit} />
      <EditListingForm submit={handleEditListingFormSubmit} listing={hireItemsListDelete}/>
      <DeleteListingForm submit={handleDeleteListingFormSubmit} />
    </div>
  );
};

export { DashboardContainer };
