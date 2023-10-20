import React from 'react';
import './nav.css';
import { Link } from 'react-router-dom';
import logo from "../images/logo.png";
const Nav=()=>{
  return(
    <>
    <nav className="navbar bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
  <a class="navbar-brand" href="#"> <img className="logo" src={logo} alt="logo"/></a>
    <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
    {/* <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous"></link>
    
    <div className='header'>
      
    <nav class="navbar navbar-expand-lg bg-body-dark" data-bs-theme="dark">
  <div class="container-fluid">
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
          <a class="nav-link  bg-light" aria-current="page" href="#" >Back</a>
        </li>
      <li class="nav-item">
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
        </li>
        <li class="nav-item">
          <a class="nav-link  bg-light"  aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link bg-light"  href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link bg-light"  href="#">Cart</a>
        </li>
  
      </ul>
      
    </div>
  </div>
</nav>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossorigin="anonymous"></script> */}
  
    </>
  )
}

export default Nav;