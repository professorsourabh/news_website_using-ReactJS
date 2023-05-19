import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
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
        <Routes>
      <Route path='/Business'><News country="in" category="Business"/></Route>
      <Route path='/Entertainment'><News country="in" category="Entertainment"/></Route>
      <Route path='/General'><News country="in" category="General"/></Route>
      <Route path='/Health'><News country="in" category="Health"/></Route>
      <Route path='/Science'><News country="in" category="Science"/></Route>
      <Route path='/Sports'><News country="in" category="Sports"/></Route>
      <Route path='/Technology'><News country="in" category="Technology"/></Route>
        
        
        </Routes>
      </div>
      </Router>
    )
  }
}

