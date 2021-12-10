require("dotenv").config();
require("express-async-errors");

const express = require("express");
const app = express();
const fileUpload = require('express-fileupload')
const connectDB = require("./db/connect");

const productRouter = require('./routes/productsRouter')
const cartRouter = require('./routes/cartRouter')
const uploadRouter = require('./routes/uploadRouter')
const notFoundError = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

const port = process.env.PORT || 3000;
const cloudinary = require('cloudinary')

cloudinary.config({ 
    cloud_name: process.env.cloud_name, 
    api_key: process.env.api_key, 
    api_secret: process.env.api_secret 
  });
// cloudinary.config({ 
//   cloud_name: 'doqjigmo3', 
//   api_key: '867629679516259', 
//   api_secret: 'wdj-GYVMplGyik3tDFHlhv_wyJs' 
// });
app.use(express.json());

app.use(express.static("./public"));
app.use(fileUpload({useTempFiles: true}))
app.get("/", (req, res) => {
  res.send("<h1>File</h1>");
});
app.use('/api/v1/products', productRouter)
app.use('/api/v1/cart', cartRouter)
app.use('/api/v1/upload', uploadRouter)
app.use(notFoundError);
// app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, console.log("listening at"));
  } catch (error) {
    console.log(error);
  }
};
start();
