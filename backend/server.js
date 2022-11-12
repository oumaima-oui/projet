import express  from "express";
import mongoose from "mongoose";
import cors from 'cors';
import morgan from "morgan";
import userRouter from "./routes/user.js";
import tourRouter from "./routes/tour.js";
import dotenv from "dotenv";

const app = express();
dotenv.config();

app.use(morgan("dev"));
app.use(express.json({limit: "30mb", extended: true}));
app.use(express.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

//api route

//user route api
app.use("/users",userRouter);
//tour route api
app.use("/tour",tourRouter);


//port
const port = process.env.PORT || 8000;
//port && mongodb
const MONGODB_URL ="mongodb+srv://user-0703:user-0703@tourapp.7rpxi.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(MONGODB_URL)
  .then(() => {
    app.listen(port, () => console.log(`Server running on port ${port}`));
  })
  .catch((error) => console.log(`${error} did not connect`));