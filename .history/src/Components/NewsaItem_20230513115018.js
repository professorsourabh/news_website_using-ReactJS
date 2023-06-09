import React, { Component } from 'react'

export class NewsaItem extends Component {
    render() {
        let { title,imageUrl,description } = this.props;
        return (
            <div>
                <div className="card mx-2" style={{ width: "18rem" }}>
                    <img src={imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href="/" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsaItem
