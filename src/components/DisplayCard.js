import React, { Component } from 'react';
import RedditImg from './RedditImg';

class DisplayCard extends Component {
    render() {
      return (
          <div className='display-card'>
            <RedditImg title={this.props.title} url={this.props.url} permalink={this.props.permalink}/>
          </div>
      );
    }
}

export default DisplayCard;
