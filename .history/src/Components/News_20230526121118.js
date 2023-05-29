// News.js
import React, { Component } from 'react';
import NewsaItem from './NewsaItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';

export class News extends Component {
  static defaultProps = {
    country: 'in',
    category: 'general',
  };

  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page:1
    };
  }

  async componentDidMount() {
    await this.fetchArticles();
  }
  handlePrevious = async () => {
    const { country, category } = this.props;
    const { page } = this.state;
    const prevPage = page - 1;
    await this.fetchArticles(country, category, prevPage);
  };
  
  handleNext = async () => {
    const { country, category } = this.props;
    const { page } = this.state;
    const nextPage = page + 1;
    await this.fetchArticles(country, category, nextPage);
  };
  
  
  async componentDidUpdate(prevProps) {
    if (prevProps.category !== this.props.category) {
      await this.fetchArticles();
    }
  }

  fetchArticles = async (country, category, page) => {
    const apiKey = '6de024851937497c9017d3f0f0e104a4'; // Replace with your NewsAPI API key
    try {
      this.setState({ loading: true });
      const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page}`;
      const response = await fetch(url);
      const data = await response.json();
      this.setState({ articles: data.articles, loading: false, page });
    } catch (error) {
      console.error('Error fetching articles:', error);
      this.setState({ loading: false });
    }
  };
  

  render() {
    const { articles, loading, page } = this.state;
  
    return (
      <div className="container my-3">
        <h1 className="text-center" style={{ margin: '35px 0px' }}>
          MT News - Top Headlines
        </h1>
  
        {loading ? (
          <Spinner />
        ) : (
          <div className="row">
            {articles.map((article) => (
              <div className="col-md-4" key={article.url}>
                <NewsaItem
                  title={article.title ? article.title : ''}
                  description={article.description ? article.description.slice(0, 88) : ''}
                  imageUrl={
                    article.urlToImage ||
                    'https://img.etimg.com/thumb/msid-100188906,width-1070,height-580,imgsize-113958,overlay-etmarkets/photo.jpg'
                  }
                  newsUrl={article.url}
                />
              </div>
            ))}
          </div>
        )}
  
        <div className="container d-flex justify-content-between">
          <button
            disabled={page <= 1}
            type="button"
            className="btn btn-primary"
            onClick={this.handlePrevious}
          >
            &larr; Previous
          </button>
          <button
            disabled={articles.length === 0} // Disable next button when no articles are loaded
            type="button"
            className="btn btn-primary"
            onClick={this.handleNext}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
  
}

export default News;
