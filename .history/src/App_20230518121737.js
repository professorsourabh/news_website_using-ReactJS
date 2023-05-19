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
              path="/Business"
              element={<News country="in" category="Business" />}
            />
            <Route
              exact
              path="/Entertainment"
              element={<News country="in" category="Entertainment" />}
            />
            <Route
              exact
              path="/General"
              element={<News country="in" category="General" />}
            />
            <Route
              exact
              path="/Health"
              element={<News country="in" category="Health" />}
            />
            <Route
              exact
              path="/Science"
              element={<News country="in" category="Science" />}
            />
            <Route
              exact
              path="/Sports"
              element={<News country="in" category="Sports" />}
            />
            <Route
              exact
              path="/Technology"
              element={<News country="in" category="Technology" />}
            />
          </Routes>
        </div>
      </Router>
    );
  }
}
