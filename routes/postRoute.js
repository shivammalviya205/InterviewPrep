const { response, request } = require('express');
const express=require('express')
const router=express.Router()
const Post=require('../models/postModel')


router.post('/create',async(req,res)=>{
    try {
        const newpost = new Post(req.body);
        await newpost.save();
        res.send('post is saved succesfully');
      } catch (error) {
        return res.status(400).json(error);
      }
  
  
})

router.get('/getallposts',async(req,res)=>{
   
    
    let username = req.query.username;
    let category = req.query.category;
    let posts;
    try {
        if(username) 
            posts = await Post.find({ username: username });
        else if (category) 
            posts = await Post.find({ categories: category });
        else 
            posts = await Post.find({});

            
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json(error)
    }
})


router.get('/getpost/:id',async(req,res)=>{
    try {
        
        const post=await Post.findById(req.params.id)
        res.send(post);
    } catch (error) {
        res.status(500).json(error)
    }
})

router.post('/update/:id',async(req,res)=>{

    try {
       await Post.findByIdAndUpdate(req.params.id,{ $set:req.body}) 
       response.status(200).response('blog updates succesfully')
    } catch (error) {
        res.status(500).json(error)
    }
    }
)


router.delete('/delete/:id',async(req,res)=>{

    try {
      const post= await Post.findById(req.params.id) 
        await post.delete();  
       response.status(200).response('blog updates succesfully')
    } catch (error) {
        res.status(500).json(error)
    }
    }
)




module.exports=router