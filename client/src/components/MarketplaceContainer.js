import React from "react";
import { DashboardContainer } from "./DashboardContainer";
// import { UserListings } from "./UserListings";
import { UserLogin } from "./UserLogin";
import { UserRegister } from "./UserRegister";

const MarketplaceContainer = () => {

    

    

    return (
        <div>
            <h1 class="header-text">The Event Marketplace</h1>
            <UserLogin />
            <UserRegister />
            <DashboardContainer />
            
        </div>
        
    )
};

export { MarketplaceContainer };
