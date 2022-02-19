const express = require("express");
const router = express.Router();
const User = require("../models/UserModel")
const bcrypt=require("bcrypt");

router.post("/login", async(req, res) => {

      

      try {
          const user = await User.findOne({UserName:req.body.UserName});
          
         return res.status(200).json(user);
           
         
      } catch (error) {
         return res.status(500).json(error);
      }
  
});

router.post("/create", async(req, res) => {

    

    try {
        const salt=await bcrypt.genSalt(10);
        const hashedPass=await bcrypt.hash(req.body.Password,salt);
        const newUser = new User({
            UserName:req.body.UserName,
            Email:req.body.Email,
            Password:hashedPass,
        });

        const user=await newUser.save();
       return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json(error);
    }

});


module.exports = router