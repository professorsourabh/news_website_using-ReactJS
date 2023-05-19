import './App.css';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import React, { Component } from 'react';
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
            <Route path="/news/business" key="business" element={<News country="in" category="Business" />} >
              <Route index element={<News country="in" category="Business" />}/>
              </Route>
            <Route exact path="/news/Entertainment" element={<News country="in" category="Entertainment" />} />
            {/* Add other routes for different categories */}
          </Routes>
        </div>
        </BrowserRouter>
      </div>
    );
  }
}
