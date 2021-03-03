import React from "react";
import { DashboardContainer } from "./DashboardContainer";
import { UserLogin } from "./UserLogin";
import { UserRegister } from "./UserRegister";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

const MarketplaceContainer = () => {
    return (
        <Router>
<div>
            <h1 class="header-text">The Event Marketplace</h1>
<Link to="/login">Login</Link>
<Link to="/register">Register</Link>
<Link to="/dashboard">Dashboard</Link>
<Switch>
  <Route path="/login">
  <UserLogin />
  </Route>
  <Route path="/register">
  <UserRegister />
  </Route>
  <Route path="/dashboard">
  <DashboardContainer />
  </Route>
</Switch>
</div>
        </Router>
    )
};

export { MarketplaceContainer };
