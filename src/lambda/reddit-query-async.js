import fetch from 'node-fetch';

const base_url = 'https://api.reddit.com/search?q=smart%20fridge';

export async function handler(event, context) {

  try {
    console.log(event)
    console.log(event.queryStringParameters)
    const after = event.queryStringParameters.last;
    
    console.log(after ? `${base_url}&after=${after}` : base_url)

    const response = await fetch(after ? `${base_url}&after=${after}` : base_url);

    if (!response.ok) {
      // NOT res.status >= 200 && res.status < 300
      return { statusCode: response.status, body: response.statusText };
    }
    const data = await response.json();


    let resArr = [];
    let last = "";
    data.data.children.forEach(post => {
        let postToAdd = {
            'title': post.data.title,
            'url': post.data.url,
            'permalink': post.data.permalink,
            'name': post.data.name
        };
        if(postToAdd.url) resArr.push(postToAdd);
    });

    last = resArr[resArr.length-1].name;

    return {
      statusCode: 200,
      body: JSON.stringify({posts: resArr, last: last})
    };
  } catch (err) {
    console.log(err); // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }) // Could be a custom message or object i.e. JSON.stringify(err)
    };
  }

}