require("dotenv").config();
require("express-async-errors");

const express = require("express");
const app = express();

const connectDB = require("./db/connect");

const notFoundError = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

app.use(express.json());

app.use(express.static("./public"));
app.get("/", (req, res) => {
  res.send("<h1>File</h1>");
});

// app.use('/api/v1/products', productRouter)

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