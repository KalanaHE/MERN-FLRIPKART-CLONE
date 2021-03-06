const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

//initialize environment variables
dotenv.config();

//routes
const authRoutes = require("./routes/auth");
const adminRoutes = require("./routes/admin/auth");
const categoryRoutes = require("./routes/category");

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
app.use(express.json());

//routeMiddleware
app.use("/api", authRoutes);
app.use("/api", adminRoutes);
app.use("/api", categoryRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running at port: ${process.env.PORT}`);
});
