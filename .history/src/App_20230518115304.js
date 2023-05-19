import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  
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
      {/* <News country="in" category="general"/> */}
        <Routes>
        <Route exact path='/' key={} element={<News country="in" category="general" />}/>
      <Route exact path='/Business'key={} element={<News country="in" category="Business" />}/>
      <Route exact path='/Entertainment'key={}element={<News country="in" category="Entertainment" />}/>
      <Route exact path='/General'key={} element={<News country="in" category="General" />}/>
      <Route exact path='/Health' key={}element={<News country="in" category="Health" />}/>
      <Route exact path='/Science' key={}element={<News country="in" category="Science" />}/>
      <Route exact path='/Sports'key={} element={<News country="in" category="Sports" />}/>
      <Route exact path='/Technology'key={} element={<News country="in" category="Technology" />}/>
        </Routes>
      </div>
      </Router>
    )
  }
}

