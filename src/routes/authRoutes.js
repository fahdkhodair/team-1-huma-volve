import { Router } from "express";

import {
  Login,
  Register,
  Logout,
  GetCurrentUser,
  RefreshToken,
} from "../controllers/authController.js";

import authMiddleware from "../middleware/authMiddleware.js";

const authRouter = Router();

authRouter.post("/login", Login);

authRouter.post("/register", Register);

authRouter.post("/refresh", RefreshToken);

authRouter.post("/logout", authMiddleware, Logout);

authRouter.get("/me", authMiddleware, GetCurrentUser);

export default authRouter;
