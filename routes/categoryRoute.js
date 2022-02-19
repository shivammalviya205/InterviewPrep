const express=require('express')
const router=express.Router()
const Category=require('../models/CategoryModel')

router.post('/create',async(req,res)=>{
    try {
        const newcategory = new Category(req.body);
        await newcategory.save();
        res.send('category is saved succesfully');
      } catch (error) {
        return res.status(400).json(error);
      }
  
  
})


router.get('/getallcategory',async(req,res)=>{
   
    
   
    
    try {
      
           const posts = await Category.find({});
            
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports=router