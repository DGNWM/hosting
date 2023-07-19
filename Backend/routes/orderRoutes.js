const router = require('express').Router();
const Order = require('./../model/orderSchema');
const User = require('./../model/userSchema');
const multer = require('multer');
// const fs = require('fs');
const upload = multer({ dest: 'uploads/' });

router.post('/orderData', upload.single('image'), async (req, res) => {
    console.log("Received order data:", req.body);
  
    try {
      const orders = req.body;
  
      for (const order of orders) {
        const { email, name, total, quantity, type, category, image, status,createdAt } = order;
  
        const existingOrder = await Order.findOne({ email });
        if (existingOrder) {
          // Order with the same email already exists, update the existing order
          await Order.findOneAndUpdate(
            { email },
            { $push: { orders: order } }
          );
        } else {
          // Order with the email does not exist, create a new order
          const newOrder = new Order({
            email,
            orders: [
              {
                name,
                total,
                type,
                category,
                image,
                quantity,
                status: status || 'non-processing',
                createdAt
              },
            ],
          });
  
          await newOrder.save();
        }
      }
  
      res.status(200).json({ success: true });
    } catch (error) {
      console.error(error);
      res.status(500).send('Server Error');
    }
  });

router.get('/getAllData',async(req,res)=>{
    try {
    let myData = await Order.find({});
    res.send({orderData:myData});   
   } catch (error) {
       console.log(error.message);
       res.send("Server Error", error.message);  
   }
});


router.get('/getUsers', async (req,res)=>{
 try {
    let allUsers = await User.find({});
    res.send({userData:allUsers});
 } catch (error) {
    console.log('error occuredd',error.message);
 }
});


module.exports= router;