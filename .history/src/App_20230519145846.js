import './App.css';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import React, { Component } from 'react';
import NavBar from './Components/NavBar';
import News from './Components/News';

export default class App extends Component {
  render() {
    return (
      <div>
      

        <div>
          <NavBar />

          <Routes>
          <Route  path="/" key="general" element={<News country="in" category="general" />} />
            <Route path="/news/business" key="business" element={<News country="in" category="general" />} >
              <Route index element={<News country="in" category="Business" />}/>
              <Route  path="/news/Entertainment" element={<News country="in" category="Entertainment" />} />
              
              </Route>
           
            {/* Add other routes for different categories */}
          </Routes>
        </div>
        
      </div>
    );
  }
}
