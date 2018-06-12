const express = require('express');
const router = express.Router();

//Axios is for handle Http Requests easly
const axios = require('axios');

const PostsAPI = 'https://jsonplaceholder.typicode.com'

// GET posts
router.get('/', (req,res) => {
    res.send('POST Works')
    // promised based
    axios.get(PostsAPI + '/posts').then(posts => {
        console.log(posts.data)
    })
})

module.exports = router;