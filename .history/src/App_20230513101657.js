import './App.css';

import React, { Component } from 'react'
import NavBar from './Components/NavBar';
import NewsaItem from './Components/NewsaItem';
export default class App extends Component {

  render() {
    return (
      <div>
        <NavBar/>
        this is my news
         <NewsaItem title="Umar Akmal Banned" discription="My Description"></NewsaItem>
         <NewsaItem></NewsaItem>
         <NewsaItem></NewsaItem>
         <NewsaItem></NewsaItem>
      </div>
    )
  }
}
