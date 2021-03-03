import { MarketplaceContainer } from "./components/MarketplaceContainer";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";



const App = () => {
  return (
    <Router>
      <Link to="/home">Event Marketplace</Link>
        <Switch>
          <Route path="/home">
          <MarketplaceContainer />
          </Route>
        </Switch>
      

    </Router>
  
  )
};

export { App }
