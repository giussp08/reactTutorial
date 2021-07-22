import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  Redirect
} from "react-router-dom";
import Login from "./pages/login/Login";
import Registration from "./pages/registration/Registration";
import Home from "./pages/home/Home";
import logo from "./logo.svg";

export default function App() {
return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <img src="./logo.svg" width="30" height="30" alt=""></img>
        <a className="navbar-brand" href="#">Site</a>
          <ul  className="navbar-nav mr-auto">
            <li className="nav-item active">
              < Link to="/login" className="nav-link">Login</Link>
            </li>
            <li className="nav-item active">
              <Link to="/registration" className="nav-link">Registration</Link>
            </li>
          </ul>
        </nav>

        
        <Switch>
          <Route exact path="/" render={() =>{ return <Redirect to="/login"/>}}/>
          <Route exact path="/registration">
            <Registration />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Redirect to="/login" />
        </Switch>
      </div>
    </Router>
  );
}