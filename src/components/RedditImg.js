import React, { Component } from 'react';
import './RedditImg.css';

class RedditImg extends Component {
    render() {
      return (
          <a className='reddit-img' href={`https://reddit.com${this.props.permalink}`}>
            <img alt={this.props.title} src={this.props.url} width={500}/>
            <h3 className='post-title'>{this.props.title}</h3>
          </a>
      );
    }
}

export default RedditImg;
