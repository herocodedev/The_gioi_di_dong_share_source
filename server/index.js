const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const app = express();
const cloudinary = require("cloudinary");
const port = process.env.PORT || 5000;

dotenv.config();
const corsConfig = {
  credentials: true,
  origin: true,
};

// config cloud
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

// Config
app.use(cookieParser());
app.use(cors(corsConfig));
app.use(express.json());

// CONNECT MONGODB
const { connectMongoDB } = require("./utils/connectDB");
connectMongoDB();

// ROUTES
const authRouter = require("./routes/auth");
const userRouter = require("./routes/user");
const smartPhoneRouter = require("./routes/products/smartPhone");
const tabletRouter = require("./routes/products/tablet");
const laptopRouter = require("./routes/products/laptop");
const accessoryRouter = require("./routes/products/accessory");
const swatchRouter = require("./routes/products/swatch");
const pcRouter = require("./routes/products/pc");
const quantityRouter = require("./routes/quantity");
const uploadImageRouter = require("./routes/uploadFile");
const homePageRouter = require("./routes/homePage");
const smartphonePageRouter = require("./routes/smartphonePage");
const laptopPageRouter = require("./routes/laptopPage");
const tabletPageRouter = require("./routes/tabletPage");
const accessoryPageRouter = require("./routes/accessoryPage");
const swatchPageRouter = require("./routes/swatchPage");
const pcPageRouter = require("./routes/pcPage");
const commentRouter = require("./routes/comment");
const cartRouter = require("./routes/cart");
const historyRouter = require("./routes/history");

app.use("/api/v1/destroyFile", uploadImageRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/smartphone", smartPhoneRouter);
app.use("/api/v1/tablet", tabletRouter);
app.use("/api/v1/laptop", laptopRouter);
app.use("/api/v1/accessory", accessoryRouter);
app.use("/api/v1/swatch", swatchRouter);
app.use("/api/v1/pc", pcRouter);
app.use("/api/v1/quantity", quantityRouter);
app.use("/api/v1/homepage", homePageRouter);
app.use("/api/v1/smartphonePage", smartphonePageRouter);
app.use("/api/v1/laptopPage", laptopPageRouter);
app.use("/api/v1/tabletPage", tabletPageRouter);
app.use("/api/v1/accessoryPage", accessoryPageRouter);
app.use("/api/v1/swatchPage", swatchPageRouter);
app.use("/api/v1/pcPage", pcPageRouter);
app.use("/api/v1/comment", commentRouter);
app.use("/api/v1/cart", cartRouter);
app.use("/api/v1/history", historyRouter);

app.listen(port, () => {
  console.log(`>>>>>>>>>>>>>>>> App listening on port ${port} <<<<<<<<<<<<`);
});
