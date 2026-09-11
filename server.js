import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import  connectDB  from "./src/config/db.js";
import  authRouter  from "./src/routes/authRoutes.js";
import  userRouter  from "./src/routes/userRoutes.js";
import errormiddleware from "./src/middleware/errorMiddleware.js";

dotenv.config();
connectDB();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);

app.use(errormiddleware);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
