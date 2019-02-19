import React, { Component } from 'react';
import './RedditImg.css';

class RedditImg extends Component {
    render() {
      return (
          <a className='reddit-img' target="blank" href={`https://reddit.com${this.props.permalink}`}>
            <img className='post-img' alt={this.props.title} src={this.props.url} width='100%'/>
            <h3 className='post-title'><span className='title-span'>{this.props.title}</span></h3>
          </a>
      );
    }
}

export default RedditImg;
