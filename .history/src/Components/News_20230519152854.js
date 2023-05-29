// News.js
import React, { Component } from 'react';
import NewsItem from './NewsItem';
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
    };
  }

  async componentDidMount() {
    await this.fetchArticles();
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.category !== this.props.category) {
      await this.fetchArticles();
    }
  }

  fetchArticles = async () => {
    const { country, category } = this.props;
    const apiKey = 'YOUR_NEWSAPI_API_KEY'; // Replace with your NewsAPI API key

    try {
      this.setState({ loading: true });
      const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}`;
      const response = await fetch(url);
      const data = await response.json();
      this.setState({ articles: data.articles, loading: false });
    } catch (error) {
      console.error('Error fetching articles:', error);
      this.setState({ loading: false });
    }
  };

  render() {
    const { articles, loading } = this.state;

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
                <NewsItem
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
      </div>
    );
  }
}

export default News;
