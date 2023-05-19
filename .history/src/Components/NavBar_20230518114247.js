import React, { Component } from 'react';

import { Link } from "react-router-dom";
export class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md bg-body-dark bg-dark text-center">
          <div className="container-fluid">
            <a className="navbar-brand text-light" href="/">MT News</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link text-light" aria-current="page" to="/">Home</Link>
                </li>
                
                <li className="nav-item">
                  <Link className="nav-link text-light" aria-current="page" to="/Business">Business</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" aria-current="page" to="/Entertainment">Entertainment</Link>
                </li>
                {/* <li className="nav-item">
                  <Link className="nav-link text-light" aria-current="page" to="/General">General</Link>
                </li> */}
                <li className="nav-item">
                  <Link className="nav-link text-light" aria-current="page" to="/Health">Health</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" aria-current="page" to="/Science">Science</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" aria-current="page" to="/Sports">Sports</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" aria-current="page" to="/Technology">Technology</Link>
                </li>
                
              </ul>
              
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
