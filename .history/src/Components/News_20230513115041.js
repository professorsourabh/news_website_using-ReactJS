import React, { Component } from 'react'
import NewsaItem from './NewsaItem';

export class News extends Component {
  render() {
    return (
      <div className='container my-3'>
        <h2>MT News-Top HeadLines</h2>
        <div className="row">
        <div className="col-md-4">
         <NewsaItem title="Umar Akmal Banned" discription="My Description" imageUrl="https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg"></NewsaItem>
         </div>
         <div className="col-md-4">
         <NewsaItem title="Umar Akmal Banned" discription="My Description"></NewsaItem>
         </div>
         <div className="col-md-4">
         <NewsaItem title="Umar Akmal Banned" discription="My Description"></NewsaItem>
         </div>
        </div>

        
      </div>
    )
  }
}

export default News
