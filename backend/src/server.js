const express = require("express");
const app = express();
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

//initialize environment variables
dotenv.config();

//routes
const authRoutes = require("./routes/auth");

//MongoDB Connection
mongoose
  .connect(`mongodb://localhost:27017/${process.env.MONGO_DB_NAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("MongoDB Connected!");
  });

//bodyParser Middleware to recognize json
app.use(bodyParser.json());

//routeMiddleware
app.use("/api", authRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running at port: ${process.env.PORT}`);
});
