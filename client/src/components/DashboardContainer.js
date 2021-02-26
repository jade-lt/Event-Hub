import React from "react";
import { EditListingForm } from "./EditListingForm";
import { UserListings } from "./UserListings";

const DashboardContainer = () => {
  return (
    <div>
        <h1>Welcome Back!</h1>
      <UserListings />
      <EditListingForm />
    </div>
  );
};

export { DashboardContainer };
