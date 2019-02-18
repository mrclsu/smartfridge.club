import React, { Component } from 'react';
import './App.css';
import DisplayCard from './components/DisplayCard';

class App extends Component {
  
  state = {
    last: undefined,
    posts: []
  }


  componentDidMount(){
    fetch('/.netlify/functions/reddit-query-async')
      .then(response => response.json())
      .then(json => this.setState({ last: json.last, posts: json.posts}));
  }

  render() {
    return (
      <div className="App">
        {this.state.posts.map(post => <DisplayCard title={post.title} url={post.url} permalink={post.permalink}/>)}
      </div>
    );
  }
}

export default App;
