import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Router
} from "react-router-dom";
import React, { Component } from 'react';
import NavBar from './Components/NavBar';
import News from './Components/News';
export default class App extends Component {

  render() {
    return (
      <Router>
      <div>
        
        <NavBar/>
        <News country="in" category="general"/>
      </div>
      </Router>
    )
  }
}

