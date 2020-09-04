import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import registers from "./Register";
import login from "./Login";

const Routers = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Register</Link>
            </li>
            <li>
              <Link to="/Login">Login</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/login" component={login} />
          <Route path="/" component={registers} />
        </Switch>
      </div>
    </Router>
  );
};
export default Routers;
