import React, { useState, useEffect } from "react";
import { AddListingForm } from "./AddListingForm";
import { EditListingForm } from "./EditListingForm";
import { DeleteListingForm } from "./DeleteListingForm";
import { UserListings } from "./UserListings";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

const DashboardContainer = () => {
  const [hireItemsList, setHireItemsList] = useState([]);
  const [hireItemsListEdit, setHireItemsListEdit] = useState({
    name: "",
    color: "",
    size: "",
    amount: "",
    cost: "",
    image: "",
  });
  const [hireItemsListDelete, setHireItemsListDelete] = useState({
    name: "",
    color: "",
    size: "",
    amount: "",
    cost: "",
    image: "",
  });

  const handleListingClick = (listingIndex) => {
    const listing = hireItemsList[listingIndex];
    setHireItemsListEdit(listing);
    setHireItemsListDelete(listing);
  };

  const handleAddListingFormSubmit = (name, color, size, amount, cost, image) => {
    const newListing = {
      name: name,
      color: color,
      size: size,
      amount: amount,
      cost: cost,
      imgUrl: image,
    };

    const newListings = [...hireItemsList];
    newListings.push(newListing);
    setHireItemsList(newListings);

    fetch("http://localhost:9000/api/hire-items/new-hire-item", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newListing),
    }).then((response) => {});
  };

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
    });
  };

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
    });
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
    <Router>
      <div>
        <h1>Welcome Back!</h1>
        <UserListings
          listings={hireItemsList}
          handleClick={handleListingClick}
        />

        <Link to="/dashboard/listing/add">Add a Listing</Link>
        <Link to="/dashboard/listing/edit">Edit a Listing</Link>
        <Link to="/dashboard/listing/delete">Delete a Listing</Link>
        <Switch>
          <Route path="/dashboard/listing/add">
            <AddListingForm submit={handleAddListingFormSubmit} />
          </Route>
          <Route path="/dashboard/listing/edit">
            <EditListingForm
              submit={handleEditListingFormSubmit}
              listing={hireItemsListEdit}
            />
          </Route>
          <Route path="/dashboard/listing/delete">
            <DeleteListingForm
              submit={handleDeleteListingFormSubmit}
              listing={hireItemsListDelete}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export { DashboardContainer };
