// App.js
import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar';
import News from './Components/News';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />

          <Routes>
            <Route path="/" element={<News country="in" category="general" />} />
            <Route path="/business" element={<News country="in" category="business" />} />
            <Route path="/news/Entertainment" element={<News country="in" category="entertainment" />} />
            <Route path="/health" element={<News country="in" category="health" />} />
            <Route path="/science" element={<News country="in" category="science" />} />
            <Route path="/sports" element={<News country="in" category="sports" />} />
            <Route path="/technology" element={<News country="in" category="technology" />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}
