const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const router = express.Router();
const User = require("../model/userSchema");
// const itemRouter = require('./../items/item.router')

// router.use('/item',require('./../items/item.router'));

router.get("/", (req, res) => {
  res.send("Welcome");
});
router.get("/about", (req, res) => {
  res.send("this is about to be");
});
router.get("/contact", (req, res) => {
  res.send("Welcome");
});
router.get("/signin", (req, res) => {
  res.send("Welcome");
});
router.get("/singup", (req, res) => {
  res.send("Welcome");
});


router.post("/createUser", async (req, res) => {
  const { name, email, phone, password, confirmPass, address } = req.body;
  console.log(req.body);
  try {
    if (!name || !email || !phone || !password || !confirmPass ) {
      return res.json({ error: "Please enter the field data properly" });
      // console.log(req.body)
    }
    const userExist =  await User.findOne({ email: email });
    if (userExist) {
      return res.json({ error: "User already exists" });
    } else if(password !== confirmPass)
    {
      return res.json({ error: "Password doesnot match" }); 
    }
    const user = new User({ name, email, phone, password, confirmPass ,address});

    const userregistered = await user.save();
    if (userregistered) {
      res.json({ message: "user registered successful" });
    }
  } catch (error) {
    res.json({ error: "failed to register" });
  }
});

router.post("/signin", async (req, res) => {
  
  try{
    let token;
    const { email, password}=req.body;
    
    if(!email || !password) {
      return res.json({error: "Fill up the section to continue"});
    }
    const userCheck =  await User.findOne({email: email});

    
    
    if(userCheck)
    {
    const is_match = await bcrypt.compare(password,userCheck.password);
     token = await userCheck.generateAuthToken();
    console.log(token);
    res.cookie("jwttoken",token,{expires: new Date(Date.now()+25892000000),httpOnly: true});

      if(!is_match)
      {
        return res.json({error: "Credential doesnot match"});
      }
      res.json({success:"Success"});
      
    }else
    {
      return res.json({error: " Usernot resgistered"});
    }
   
  }
  catch(error) {
    return res.json({error: " Usernot is resgistered"});
  }
  });
  router.get('/getUsers',async(req,res)=>{
    try {
      let Users=await User.find({})
      .sort({_id:-1});
        res.json({getAlladta:Users});
    } catch (error) {
      res.sendStatus(500).json('user empty');
    }
  });

  router.get('/getSingleUsers/:email',async(req,res)=>{
    try {
      const emailId = req.params.email;
      let singleUser = await User.findOne({email:emailId});
        if(singleUser){
          res.json({singleUser:singleUser});
        }else{
          res.json('User not found');
        }

    } catch (error) {
      res.json('error occured while fetching data');
    }
  
  });
  
  module.exports = router;
  