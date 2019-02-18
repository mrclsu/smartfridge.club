import React, { Component } from 'react';

class RedditEmbed extends Component {

    render() {
      return (
        <div>
        <blockquote class="reddit-card"><a href="https://www.reddit.com/r/smartfridgemasterrace/comments/aprsxx/smart_fridges_are_better_than_computers/">
        Smart fridges are better than computers</a> from <a href="http://www.reddit.com/r/smartfridgemasterrace">r/smartfridgemasterrace</a></blockquote>
        <script async src="//embed.redditmedia.com/widgets/platform.js" charset="UTF-8"></script>
    </div>
      );
    }
}

export default RedditEmbed;
