import { MarketplaceContainer } from "./components/MarketplaceContainer";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import { Button } from "react-bootstrap";




const App = () => {
  return (
    <Router>
      <div>
      <Link to="/">
        {/* <button type="button">Home</button> */}
        <Button variant="info" className="mr-2">Home</Button>

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

