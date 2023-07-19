const mongoose = require("mongoose");

const DB = process.env.DATABASE 

mongoose.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
    console.log("connnection established");
})
.catch((err) => console.log("error connecting", err));

