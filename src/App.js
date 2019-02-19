import React, { Component } from 'react';
import './App.css';
import DisplayCard from './components/DisplayCard';

class App extends Component {
  state = {
    last: undefined,
    posts: [],
    loading: false
  }

  fetchMore = () => {
    fetch(`/.netlify/functions/reddit-query-async?last=${this.state.last}`)
      .then(response => response.json())
      .then(json => 
        {
          
          if(json.msg){
            console.log(json.msg);
            return;
          }
          this.setState({ last: json.last, posts: this.state.posts.concat(json.posts), loading: false});
        });
  }


  componentWillMount(){
    window.onscroll = () => {
      if (window.innerHeight + Math.ceil(window.pageYOffset || document.documentElement.scrollTop) === document.documentElement.offsetHeight) {
        console.log('hey');
        if(!this.state.loading){
          this.setState({loading: true});
          this.fetchMore();
        }
        
      }
    }
  }
  

  componentDidMount(){
    fetch('/.netlify/functions/reddit-query-async')
      .then(response => response.json())
      .then(json => this.setState({ last: json.last, posts: json.posts}));
  }

  render() {
    return (
      <div className="app">
        <div className="grid">
         {this.state.posts.map(post => <DisplayCard title={post.title} url={post.url} permalink={post.permalink} key={post.name}/>)}
        </div>
      </div>
    );
  }
}

export default App;
