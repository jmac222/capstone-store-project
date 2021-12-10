// imports
require("dotenv").config();
require("express-async-errors");

// main
const express = require("express");
const app = express();
const connectDB = require("./db/connect");

// routes
const uploadRouter = require('./routes/uploadRouter')

//middleware
const notFoundError = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

cloudinary.config({ 
    cloud_name: process.env.cloud_name,
    api_key: process.env.api_key,
    api_secret: process.env.api_secret,
  });

app.use(express.json());

app.use(express.static("./public"));
app.get("/", (req, res) => {
  res.send("<h1>File</h1>");
});

app.use('/api/v1/products', productRouter)
app.use('/api/v1/uploads', uploadRouter)

app.use(notFoundError);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;
const start = async () => {
    try {
        connectDB(process.env.MONGO_URL);
        app.listen(3000, () => {
            console.log(`Server listening at ${port}`);
        });
    } catch (err) {
        console.log(err);
    }
};
start();