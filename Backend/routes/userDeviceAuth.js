const router = require('express').Router();
const deviceInformationModel = require('./../model/userDeviceCredentialsModel');


// router.post('/deviceCredential',async (req,res)=>{
//     try {
//         await userDeviceCredentialModel.create({
//       language: req.body.language,
//       userAgent: req.body.userAgent,
//       platform: req.body.platform,
//       screenWidth: req.body.screenWidth,
//       screenHeight: req.body.screenHeight,
//       accessTime: req.body.accessTime

//         });
//         res.json({success:true});
//     } catch (error) {
//         res.send('device credential insertion failed');
//     }
// });
router.post('/device_information', (req, res) => {
    const savedDeviceInfo = req.body;
  
    const deviceInfo = new deviceInformationModel(savedDeviceInfo);
  
    deviceInfo.save()
      .then(savedDeviceInfo => {
        console.log('User info saved:', savedDeviceInfo);
        res.json({ message: 'Data saved successfully' });
      })
      .catch(error => {
        console.error('Failed to save user info:', error);
        res.status(500).json({ error: 'Failed to save data' });
      });
  });
  
module.exports= router;