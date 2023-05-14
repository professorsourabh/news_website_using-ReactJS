import React, { Component } from 'react'

export class NewsaItem extends Component {
   
    render() {
        let { title,imageUrl,discription,newsUrl } = this.props;
        return (
            <div>
                <div className="card my-3" style={{ width: "18rem" }}>
                    <img src={imageUrl} className="card-img-top" style={{height:"225px"}} alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{discription}...</p>
                         <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsaItem
