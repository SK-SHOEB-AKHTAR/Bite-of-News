import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {title,discription,imageUrl,NewsUrl}=this.props
    return (

      <div className='my-3'>
        <div className="card bg-warning" style={{width: "18rem"}}>
  <img src={imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title"> {title}</h5>
    <p className="card-text">{discription}.</p>
    <a href={NewsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>
        
      </div>
    )
  }
}
