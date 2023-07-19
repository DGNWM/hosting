const mongoose = require("mongoose");
const moment = require("moment");

const { Schema } = mongoose;

const OrderSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  orders: [
    {
      name: {
        type: String,
        required: true,
      },
      total: {
        type: Number,
        required: true,
      },
      type: {
        type: String,
        required: true,
      },
      category: {
        type: String,
        required: true,
      },
      quantity: {
        type: Number,
      },
      image: {
        type: String,
      },
      status: {
        type: String,
        default: "non-processing",
      },
      createdAt: {
        type: String,
        default: moment().format("YYYY-DD-MM HH:mm:ss a dddd"),
      },
    },
  ],
  }  
);

OrderSchema.pre('save', function(next) {
    if (this.isNew || this.isModified('orders')) {
      const now = moment().format('YYYY-MM-DD HH:mm:ss A dddd');
      this.details.forEach((detail) => {
        detail.createdAt = now;
      });
    }
    next();
});

module.exports = mongoose.model('order', OrderSchema);
