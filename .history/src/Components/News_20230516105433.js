import React, { Component } from 'react'
import NewsaItem from './NewsaItem';
import Spinner from './Spinner';
import PropTypes  from 'prop-types';
export class News extends Component {
  static defaultProps = {
    country: 'in',
    category: "genral"
  }  
  static propTypes ={
    country:PropTypes.string,
    category:PropTypes.string
  }

    constructor(){
        super();
        this.state={
          articles:[],
            loading: false,
            page:1
        }
    }

   async componentDidMount(){
      
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6de024851937497c9017d3f0f0e104a4&page=1&pagesize=18`;
      this.setState({loading: true});
      let data=await fetch(url);
      let parsedData=await data.json();
      console.log(parsedData);
      this.setState({articles: parsedData.articles,totalResults:parsedData.totalResults,
        loading: false})
  }
  handlePreviousClick=async()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6de024851937497c9017d3f0f0e104a4&page=${this.state.page - 1}&pagesize=18`;

    this.setState({loading: true});
      let data=await fetch(url);
      let parsedData=await data.json();
      console.log(parsedData);
      this.setState({
        page: this.state.page - 1,
        articles: parsedData.articles,
        loading: false
      })
  }
  handleNextClick=async()=>{
    if(!(this.state.page+1>Math.ceil(this.state.totalResults/18))){
    
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6de024851937497c9017d3f0f0e104a4&page=${this.state.page + 1}&pagesize=18`;

    this.setState({loading: true});
      let data=await fetch(url);
      let parsedData=await data.json();
      console.log(parsedData);
      
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading: false
      })
    }
  }
  render() {
    return (
      <div className='container my-3'>
        <h1 className='text-center'> MT News-Top HeadLines</h1>
       {this.state.loading && <Spinner/>}
       
        <div className="row">
        {!this.state.loading && this.state.articles.map((element)=>{
        
        return   <div className="col-md-4" key={element.url}>
         <NewsaItem title={element.title?element.title:""} discription={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage?element.urlToImage:"https://img.etimg.com/thumb/msid-100188906,width-1070,height-580,imgsize-113958,overlay-etmarkets/photo.jpg"} newsUrl={element.url}></NewsaItem>
         </div>
         })}
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type='button' className='btn btn-primary my-2 mx-2' onClick={this.handlePreviousClick} >&#8592; Previous</button>
        
  <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/18)} type='button' className='btn btn-primary my-2 mx-2' onClick={this.handleNextClick}>Next &#8594;</button>
        </div>

        
      </div>
    )
  }
}

export default News
