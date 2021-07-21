import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

export default function App() {
return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/pages/login/Login.jsx">Login</Link>
            </li>
            <li>
              <Link to="/pages/registration">Registration</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exect path="/pages/registration/Registration.jsx">
            <Registration />
          </Route>
          <Route exect path="./pages/login/Login.jsx">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Login() {
  return <h2>Login</h2>;
}

function Registration() {
  return <h2>Registration</h2>;
}