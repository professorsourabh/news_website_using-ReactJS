import './App.css';
import loading from './loading.gif';
import React, { Component } from 'react';
import NavBar from './Components/NavBar';
import News from './Components/News';
export default class App extends Component {

  render() {
    return (
      <div>
        <loading/>
        <NavBar/>
        <News/>
      </div>
    )
  }
}
