import React from "react";
import "./navbar.css";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";
const navbar = () => {
  return (
    <div id="head">
    <div className="stic">
      <nav class="navbar navbar-expand-lg sticky-top bg-body-tertiary" data-bs-theme="dark">
        <div class="container-fluid">
        <a class="navbar-brand" href="#"> <img className="logo" src={logo} alt="logo"/></a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav ms-auto">
        <AnchorLink class="nav-link active" aria-current="page" href="/head" offset={150} >Home</AnchorLink>
        <AnchorLink class="nav-link active" href="/aboutt" offset={150}>About</AnchorLink>
        <Link class="nav-link active" to="/signup" offset={150}>Sign in</Link>
        <Link class="nav-link active" to='/cart' offset={150} >Cart</Link>
        <Link class="nav-link active" to='/sell' offset={150} >Sell</Link>
        {/* <Link class="nav-link active" to='/profile' offset={150} >Profile</Link> */}
        <AnchorLink class="nav-link active"href='/contact' offset={150} >Contact</AnchorLink>
      </div>
          </div>
        </div>
      </nav>
    </div>
    </div>
  );
};

export default navbar;
