/* app.js */

const app = require('express')();

const posts = [
  {
    id: 1,
    author: 'John',
    title: 'Templating with EJS',
    body: 'Blog post number 1'
  },
  {
    id: 2,
    author: 'Drake',
    title: 'Express: Starting from the Bottom',
    body: 'Blog post number 2'
  },
  {
    id: 3,
    author: 'Emma',
    title: 'Streams',
    body: 'Blog post number 3'
  },
  {
    id: 4,
    author: 'Cody',
    title: 'Events',
    body: 'Blog post number 4'
  }
];

// init view engine as ejs
app.set('view engine', 'ejs');

// home page
app.get('/', (req, res) => {
  // render 'home.ejs' with posts
  res.render('home', { posts: posts});
});

//post
app.get('/post/:id', (req, res) => {
  //find post in posts array
  const post = posts.filter((post) => {
    return post.id == req.params.id;
  })[0];

  //render post.ejs template with content
  res.render('post', {
    author: post.author,
    title: post.title,
    body: post.body
  });
});

app.listen(8080);

console.log('listening on port 8080');

