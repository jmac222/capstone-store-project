require("dotenv").config();
require("express-async-errors");

const express = require("express");
const app = express();

const connectDB = require("./db/connect");

const notFoundError = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

const port = process.env.PORT || 3000;

app.use(express.json());

app.use(express.static("./public"));
app.get("/", (req, res) => {
  res.send("<h1>File</h1>");
});
// app.use('/api/v1/products', productRouter)
app.use(notFoundError);
app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, console.log("listening at"));
  } catch (error) {
    console.log(error);
  }
};
start();
