import React, { Component } from 'react'

export class News extends Component {
  render() {
    return (
      <div className='container my-3'>
        <h2>MT News Top HeadLines</h2>
        <div className="row">
        <NewsaItem></NewsaItem>
        <NewsaItem></NewsaItem>
        <NewsaItem></NewsaItem>
        <NewsaItem></NewsaItem>
        <NewsaItem></NewsaItem>
        <NewsaItem></NewsaItem>
        </div>

        
      </div>
    )
  }
}

export default News
