const express = require('express');
const path = require('path');
const app = express();

const posts = require('./server/routes/posts');

// Middleware to use distribution folder
app.use(express.static(path.join(__dirname, 'dist')));

// Middleware to path posts
app.use('/posts', posts);

//All requests are going to this function
app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname,'dist/index.html'))
})

const port = process.env.port || 4600

app.listen(port, (req,res)=>{
    console.log('server running on port ' + port)
})