// App.js
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar';
import News from './Components/News';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />

          <Routes>
            <Route path="/" element={<News category="general"/>} />
            <Route path="/business" element={<News category="business" />} />
            <Route path="/news/Entertainment" element={<News category="entertainment" />} />
            <Route path="/health" element={<News category="health" />} />
            <Route path="/science" element={<News category="science" />} />
            <Route path="/sports" element={<News category="sports" />} />
            <Route path="/technology" element={<News category="technology" />} />
          </Routes>
        </div>
      </Router>
    );
  }
}
