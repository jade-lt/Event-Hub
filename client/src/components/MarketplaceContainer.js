import React, { useState } from "react";
import { DashboardContainer } from "./DashboardContainer";
import { UserLogin } from "./UserLogin";
import { AddUserForm } from "./UserRegister";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";



const MarketplaceContainer = () => {

  const [users, setUsers] = useState([]);

  const handleAddUserFormSubmit = (username, password) => {
    console.log("the add user button was clicked")
    const newUser = {
      username: username,
      password: password,
    };

    const newUsers = [...users];
    newUsers.push(newUser);
    setUsers(newUsers);

    fetch("http://localhost:9000/api/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser)
  });

};
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
          <Link to="dashboard">
          <button type="button">Dashboard</button>
          </Link>
          <Switch>
            <Route path="/login">
              <UserLogin />
            </Route>
            <Route path="/register">
              <AddUserForm submit={handleAddUserFormSubmit}/>
            </Route>
            <Route path="/dashboard">
              <DashboardContainer />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );

}

export { MarketplaceContainer };
