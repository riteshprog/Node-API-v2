require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const productRoute = require("./routes/productRoute");
const errorMiddleware = require("./middleware/errorMiddleware");
const FRONTEND = process.env.FRONTEND;
const corsOptions = {
  origin: FRONTEND,
  // origin: ["http://example.com", "http://127.0.0.1:5173"],
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

const app = express();
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL;

// Routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello Node Api!");
});
app.get("/blog", (req, res) => {
  res.send("Hello Blog my app!");
});
app.use(errorMiddleware);

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("Connected to mongodb database!");
    app.listen(PORT, () => {
      console.log(`Node Api is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
