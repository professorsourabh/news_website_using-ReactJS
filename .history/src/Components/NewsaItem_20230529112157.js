// NewsItem.js
import React from 'react';

const NewsItem = ({ title,source,date,author,description, imageUrl, newsUrl }) => (
  <div>
    <div className="card my-3">
      <img src={imageUrl} className="card-img-top" style={{ height: '205px' }} alt="News" />
      <div className="card-body">
        
        <h5 className="card-title">{title}
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{source}</span>  <span className="visually-hidden">unread messages</span>     </h5>
        <p className="card-text">{description}</p>
        <p className="card-text"><small className="text-muted">By {author} | on {new Date(date).toGMTString()}</small></p>

        <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-danger">
          Read More
        </a>
      </div>
    </div>
  </div>
);

export default NewsItem;
