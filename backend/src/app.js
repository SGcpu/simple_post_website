const express = require('express')
const multer = require('multer')
const UploadFile = require('./services/storage.service')
const postModel = require('./model/post.model')
const cors = require('cors');
const app = express();

app.use(cors())
app.use(express.json());

const upload = multer({ storage: multer.memoryStorage()})


app.post('/create-post', upload.single("image") , async (req, res)=>{//the naming used inside uplaod.single() should match with the request key name we have given

    const result = await UploadFile(req.file.buffer)

    const post = await postModel.create({
        image: result.url, // we consoled and saw that the result is an object, and it contains a url key-value
        caption: req.body.caption
    })

    res.status(201).json({
        message: "Post Created sucessfully",
        post: post
    })
})

app.get('/posts', async (req, res)=>{
    const posts = await postModel.find()
    
    
    res.status(200).json({
        message: "Posts displayed",
        posts: posts
    })
})

module.exports = app;