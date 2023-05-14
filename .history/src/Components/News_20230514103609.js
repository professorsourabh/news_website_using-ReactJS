import React, { Component } from 'react'
import NewsaItem from './NewsaItem';

export class News extends Component {
   
    constructor(){
        super();
        this.state={
          articles:[],
            loading: false,
            page:1
        }
        
    }
   async componentDidMount(){
      
      let url="https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=6de024851937497c9017d3f0f0e104a4";
      let data=await fetch(url);
      let parsedData=await data.json();
      console.log(parsedData);
      this.setState({articles: parsedData.articles})

    }
  render() {
    return (
      <div className='container my-3'>
        <h2>MT News-Top HeadLines</h2>
        <div className="row">
        {this.state.articles.map((element)=>{
        
        return   <div className="col-md-4" key={element.url}>
         <NewsaItem title={element.title?element.title.slice(0,45):""} discription={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage?element.urlToImage:"https://img.etimg.com/thumb/msid-100188906,width-1070,height-580,imgsize-113958,overlay-etmarkets/photo.jpg"} newsUrl={element.url}></NewsaItem>
         </div>
        })}
        </div>
        <div className="container d-flex justify-content-between">
          <button type='button' className='btn btn-info my-2 mx-2'>Previous</button>
        
          <button type='button' className='btn btn-info my-2 mx-2'>Next</button>
        </div>

        
      </div>
    )
  }
}

export default News
