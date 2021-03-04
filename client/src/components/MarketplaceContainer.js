import React from "react";
import { DashboardContainer } from "./DashboardContainer";
import { UserLogin } from "./UserLogin";
import { UserRegister } from "./UserRegister";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

const MarketplaceContainer = () => {
  return (
    <div>
      <h1 className="header-text">The Event Marketplace</h1>

      <Router>
        <div>
          <Link to="/login">
            <button type="button">Login</button>
            
            </Link>
          <Link to="/register">
          <button type="button">Register</button>

          </Link>
          <Link to="/dashboard">
          <button type="button">Dashboard</button>
          </Link>
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
    </div>
  );
};

export { MarketplaceContainer };
