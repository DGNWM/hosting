const mongoose = require('mongoose');
const moment = require('moment');

const deliveryDetailsSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    details: [{
        fullName: {
            type: String,
            required: true
        },
        city: {
         type:String,
         required:true
        },
        mobileNumber: {
         type:Number,
         required:true
        },
        area: {
        type:String,
        required:true
        },
        address: {
        type:String,
        required:true
        },
        landmark: {
        type:String,
        required:true
        },
        createdAt: {
            type: String,
            default: moment().format('YYYY-MM-DD HH:mm:ss A dddd')
          }
    }]
});
deliveryDetailsSchema.pre('save', function(next) {
    if (this.isNew || this.isModified('details')) {
      const now = moment().format('YYYY-MM-DD HH:mm:ss A dddd');
      this.details.forEach((detail) => {
        detail.createdAt = now;
      });
    }
    next();
});
module.exports=mongoose.model('orders_details',deliveryDetailsSchema);