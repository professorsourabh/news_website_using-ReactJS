import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { Component } from 'react';
import NavBar from './Components/NavBar';
import News from './Components/News';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          {/* <News country="in" category="general"/> */}
          <Routes>
            <Route
              exact
              path="/"
              
              element={<News country="in" category="general" />}
            />
            <Route
              exact
              path="/business"
              element={<News country="in" category="business" />}
            />
            <Route
              exact
              path="/entertainment"
              element={<News country="in" category="entertainment" />}
            />
           
            <Route
              exact
              path="/health"
              element={<News country="in" category="health" />}
            />
            <Route
              exact
              path="/science"
              element={<News country="in" category="science" />}
            />
            <Route
              exact
              path="/sports"
              element={<News country="in" category="sports" />}
            />
            <Route
              exact
              path="/technology"
              element={<News country="in" category="technology" />}
            />
          </Routes>
        </div>
      </Router>
    );
  }
}
