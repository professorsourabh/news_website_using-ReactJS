import './App.css';
import loading from './component/loading.gif'
import React, { Component } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';
export default class App extends Component {

  render() {
    return (
      <div>
         <img src={loading} alt="loading"/>
        <NavBar/>
        <News/>
      </div>
    )
  }
}
