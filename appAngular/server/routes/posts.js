const express = require('express');
const router = express.Router();

//Axios is for handle Http Requests easly
const axios = require('axios');

const PostsAPI = 'https://jsonplaceholder.typicode.com'

// GET posts
router.get('/', (req,res) => {
    // promised based
    axios.get(PostsAPI + '/posts').then(posts => {
        res.status(200).json(posts.data)
    })
    .catch( error =>{
        res.status(500)
    })
})

module.exports = router;