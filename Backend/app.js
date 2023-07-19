const express = require("express");
const dotenv =require("dotenv");
// const mongoose = require("mongoose");
const app = express();
const apiRouter = require('./routes/auth');
// const path = require('path');
const cors = require('cors');
const  orderAuth = require('./routes/orderRoutes');
const itemAuth = require('./routes/itemAuth');
const deviceInformation = require('./routes/userDeviceAuth');
const deliveryDetails = require('./routes/deliveryDetailsAuth');

const multer = require('multer');
const fs = require('fs');
const upload = multer({ dest: 'uploads/' });

dotenv.config({path:"./config.env"});

require("./DB/conn");
app.use(express.json());
app.use(express.urlencoded({
  extended:true
}));

app.use(cors());
app.use(require('./routes/auth'));
app.use('/api',apiRouter);
app.use('/order',orderAuth);
app.use('/item',itemAuth);
app.use('/device',deviceInformation);
app.use('/delivery',deliveryDetails);



// const middleware = (req, res, next) => {
//   console.log("middleware");
//   next();
// };


app.listen(3030, () => {
  console.log(`server listening on port ${process.env.PORT}`);
});
