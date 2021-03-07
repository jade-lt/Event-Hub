import { MarketplaceContainer } from "./components/MarketplaceContainer";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";



const App = () => {
  return (
    <Router>
      <div>
      <Link to="/">
        <button type="button">Home</button>
        </Link>
          <Switch>
          <Route path="/">
          <MarketplaceContainer />
          </Route>
          </Switch>
          </div>
          </Router>
  )
};

export { App }

