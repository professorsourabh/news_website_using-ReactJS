import React, { Component } from 'react'
import NewsaItem from './NewsaItem';

export class News extends Component {
  render() {
    return (
      <div className='container my-3'>
        <h2>MT News-Top HeadLines</h2>
        <div className="row">
        <div className="col-md-3">
         <NewsaItem title="Umar Akmal Banned" discription="My Description"></NewsaItem>
         </div>
         <div className="col-md-3">
         <NewsaItem title="Umar Akmal Banned" discription="My Description"></NewsaItem>
         </div>
         <div className="col-md-3">
         <NewsaItem title="Umar Akmal Banned" discription="My Description"></NewsaItem>
         </div>
        </div>

        
      </div>
    )
  }
}

export default News
