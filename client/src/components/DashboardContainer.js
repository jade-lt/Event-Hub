import React, { useState, useEffect } from "react";
import { AddListingForm } from "./AddListingForm";

import { EditListingForm } from "./EditListingForm";
import { UserListings } from "./UserListings";

const DashboardContainer = () => {

  const [hireItemsList, setHireItemsList] = useState([]);

  const handleAddListingFormSubmit = (itemName, itemColor, dimensions, numberAvailable, costPerHire, imgUrl) => {
    const newListing = { itemName: itemName, itemColor: itemColor, dimensions: dimensions, numberAvailable: numberAvailable, costPerHire: costPerHire, imgUrl: imgUrl };

    // moviesList => state variable
    // setMoviesList => function to set your state variable
    const newListings = [...hireItemsList];
    newListings.push(newListing);

    // this.setState({ moviesList: newMovies });
    setHireItemsList(newListings);

    fetch("http://localhost:9000/api/hire-items/new-hire-item", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newListing),
    }).then((response) => {
      console.log("response:", response);
    });
  }

  //   const handleMovieFormSubmit = (title, genre, description) => {
  //   // Read title and genre state and put in a temp variable which is Obj literal
  //   const newMovie = { genre: genre, title: title, description: description };

  //   // moviesList => state variable
  //   // setMoviesList => function to set your state variable
  //   const newMovies = [...moviesList];
  //   newMovies.push(newMovie);

  //   // this.setState({ moviesList: newMovies });
  //   setMoviesList(newMovies);

  //   fetch("http://localhost:9000/api/v1/movies", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(newMovie),
  //   }).then((response) => {
  //     console.log("use clases: response:", response);
  //   });
  // };

  const handleEditListingSubmit = (listing) => {
    console.log("handleEditListing:", listing);
    const foundListing = hireItemsList.findIndex((listingEl) => {
      console.log("listingEl:", listingEl);
      return listingEl._id === listing._id;
    });
    console.log("foundListing:", foundListing);
    const newListings = [...hireItemsList];
    newListings[foundListing] = listing;
    setHireItemsList(newListings);
    fetch(`http://localhost:9000/api/hire-items/update-item/${listing._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(listing),
    }).then((response) => {
      console.log("PUT response:", response);
    });
  }

  // const handleEditMovie = (movie) => {
  //   console.log("handleEditMovie:", movie);
  //   const foundMovie = moviesList.findIndex((movieEl) => {
  //     console.log("movieEl:", movieEl);
  //     return movieEl._id === movie._id;
  //   });
  //   console.log("foundMovie:", foundMovie);
  //   const newMovies = [...moviesList];
  //   newMovies[foundMovie] = movie;
  //   setMoviesList(newMovies);
  //   fetch(`http://localhost:9000/api/v1/movies/${movie._id}`, {
  //     method: "PUT",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(movie),
  //   }).then((response) => {
  //     console.log("PUT response:", response);
  //   });
  // };



  useEffect(() => {
    fetch("http://localhost:9000/api/hire-items/my-items", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log("these are the items", response);
        return response.json();
      })
      .then((listingData) => {
        console.log("listingData:", listingData);
        setHireItemsList(listingData.data);
      });
  }, []);

  return (
    <div>
      <h1>Welcome Back!</h1>
      <UserListings listingItems={[]} />
      <EditListingForm submit={handleEditListingSubmit} />
      <AddListingForm submit={handleAddListingFormSubmit} />
    </div>
  );
};

export { DashboardContainer };
