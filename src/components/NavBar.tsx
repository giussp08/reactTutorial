import React from "react"
import { Link } from "react-router-dom";
import logo from "../img/logo.svg";

const NavBar =()=>  {
    return(
        <div>
             <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <img src={logo} width="30" height="30" alt=""></img>
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
        </div>
    )
}

export default NavBar;