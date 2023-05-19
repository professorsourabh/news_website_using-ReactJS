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
                  <Link className="nav-link text-light" aria-current="page" href="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" aria-current="page" href="/">About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" aria-current="page" href="/">Business</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" aria-current="page" href="/">Entertainment</a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" aria-current="page" href="/">General</a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" aria-current="page" href="/">Health</a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" aria-current="page" href="/">Science</a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" aria-current="page" href="/">Sports</a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" aria-current="page" href="/">Technology</a>
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
