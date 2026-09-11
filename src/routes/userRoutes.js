import { Router } from "express";
import {
  GetAllUsers,
  GetUserById,
} from "../controllers/userController.js";
import authMiddleware from "../middleware/authMiddleware.js";
 const userRouter = Router();

userRouter.get("/", authMiddleware, GetAllUsers);
userRouter.get("/:id", authMiddleware, GetUserById);
export default userRouter;