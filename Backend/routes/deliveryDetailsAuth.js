
const express = require('express');
const router = express.Router();
const DeliveryDetails = require('./../model/deliverydetailsSchema');

// Route to handle creating or updating delivery details
router.post('/deliveryDetails', async (req, res) => {
  try {
    const email = req.body.email;
    const detail = {
      fullName: req.body.fullName,
      city: req.body.city,
      mobileNumber: req.body.mobileNumber,
      area: req.body.area,
      address: req.body.address,
      landmark: req.body.landmark
    };
    let deliveryDetails = await DeliveryDetails.findOne({ email });

    if (!deliveryDetails) {
      // Create a new document if email is not found
      deliveryDetails = await DeliveryDetails.create({ email, details: [detail] });
    } else {
      // Push the detail object into the existing document
      deliveryDetails.details.push(detail);
      await deliveryDetails.save();
    }
    res.status(200).json('Details added successfully');
  } catch (error) {
    console.log(error);
    res.status(500).json('Failed to receive/update details');
  }
});

module.exports = router;