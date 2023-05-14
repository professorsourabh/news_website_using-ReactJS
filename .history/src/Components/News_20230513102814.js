import React, { Component } from 'react'
import NewsaItem from './Components/NewsaItem';

export class News extends Component {
  render() {
    return (
      <div className='container my-3'>
        <h2>MT News-Top HeadLines</h2>
        <div className="row">
        this is my News.
         <NewsaItem title="Umar Akmal Banned" discription="My Description"></NewsaItem>
         <NewsaItem></NewsaItem>
         <NewsaItem></NewsaItem>
         <NewsaItem></NewsaItem>
        </div>

        
      </div>
    )
  }
}

export default News
