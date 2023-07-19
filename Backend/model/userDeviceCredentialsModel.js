const mongoose = require('mongoose');
const {Schema} = mongoose;

const deviceInfoSchema = new Schema({
    language: {
        type:String,
        required:true
    },
    userAgent:{
        type:String,
        required:true
    },
    platform:{ 
        type:String,
        required:true
    },
    screenWidth: {
        type:Number,
        required:true
    },
    screenHeight: {
        type:Number,
        },
    accessTime:{
       type:String,
       required:true
    },

});
module.exports = mongoose.model('device',deviceInfoSchema);