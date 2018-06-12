const express = require('express');
const path = require('path');
const app = express();

const posts = require('./server/routes/posts');

// Middleware to use distribution folder
app.use(express.static(path.join(__dirname, 'dist')));

// Middleware to path posts

app.use('/posts', posts);

app.listen(4600, (req,res)=>{
    console.log('server running')
})