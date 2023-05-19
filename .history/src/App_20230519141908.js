import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { Component } from 'react';
import BrowserRouter from 'react-router-dom';
import NavBar from './Components/NavBar';
import News from './Components/News';

export default class App extends Component {
  render() {
    return (
      <div>
      <BrowserRouter>
        <div>
          <NavBar />

          <Routes>
            <Route exact path="/" key="general" element={<News country="in" category="general" />} />
            <Route exact path="/business" key="business" element={<News country="in" category="Business" />} />
            <Route exact path="/Entertainment" element={<News country="in" category="Entertainment" />} />
            {/* Add other routes for different categories */}
          </Routes>
        </div>
      </BrowserRouter>
      </div>
    );
  }
}
