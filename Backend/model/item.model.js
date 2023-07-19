
const  mongoose = require('mongoose');
const {Schema} = mongoose;

const itemSchema = new Schema({
    name : {
        type:String,
        required:true
    },
    price:{
        type: Number,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    quantity:{
        type:Number
    },
    ratings:{
        type:Number
        
    },
    image:{
        type:[String]
    }

});
module.exports = mongoose.model('item',itemSchema);