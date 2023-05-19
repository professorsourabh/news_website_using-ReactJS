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
      <News country="in" category="general"/>
        <Routes>
      <Route path='/Business' component={() => (<news country="in" category="Business" />)}/>
      <Route path='/Entertainment'component={() => (<news country="in" category="Entertainment" />)}/>
      <Route path='/General'component={() => (<news country="in" category="General" />)}/>
      <Route path='/Health'component={() => (<news country="in" category="Health" />)}/>
      <Route path='/Science'component={() => (<news country="in" category="Science" />)}/>
      <Route path='/Sports'component={() => (<news country="in" category="Sports" />)}/>
      <Route path='/Technology'component={() => (<news country="in" category="Technology" />)}/>
        
        
        </Routes>
      </div>
      </Router>
    )
  }
}

