import React, { Component } from 'react';
import RedditImg from './RedditImg';
import './DisplayCard.css'

class DisplayCard extends Component {
    //todo implement reddit embeds
    render() {
      return (
          <div className='display-card'>
            <RedditImg title={this.props.title} url={this.props.url} permalink={this.props.permalink}/>
          </div>
      );
    }
}

export default DisplayCard;
