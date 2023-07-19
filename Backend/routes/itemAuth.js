const itemModel= require('./../model/item.model');
const router = require('express').Router();

router.post('/createItem',async (req,res)=>{
     try {
        await itemModel.create({
            foodName:req.body.foodName,
            price:req.body.price,
            type:req.body.type,
            category:req.body.category,
            image:req.body.image,
            quantity:req.body.quantity,
            ratings:req.body.ratings
        });
        // console.log('success')
        res.json({success:true});
     } catch (error) {
        console.log(error);
        res.json({success:false});
     }
});
module.exports = router;