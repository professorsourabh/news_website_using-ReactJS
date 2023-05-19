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
          <Route  path="/" key="general" element={<News country="in" category="general" />} >
          <Route  index key="general" element={<News country="in" category="general" />} />
          <Route  path="news/bussiness" key="" element={<News country="in" category="business" />} />

          </Route>
            
           
            {/* Add other routes for different categories */}
          </Routes>
        </div>
        
      </div>
    );
  }
}
