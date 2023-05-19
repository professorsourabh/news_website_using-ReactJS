import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md bg-body-dark bg-dark text-center">
          <div className="container-fluid">
            <a className="navbar-brand text-light" href="/">
              MT News
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/" aria-current="page">
                    Home
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link text-light" to="/Business" aria-current="page">
                    Business
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/Entertainment" aria-current="page">
                    Entertainment
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <Link className="nav-link text-light" to="/General" aria-current="page">
                    General
                  </Link>
                </li> */}
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/Health" aria-current="page">
                    Health
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/Science" aria-current="page">
                    Science
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/Sports" aria-current="page">
                    Sports
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/Technology" aria-current="page">
                    Technology
                  </Link>
                </li>
              </ul>

              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
