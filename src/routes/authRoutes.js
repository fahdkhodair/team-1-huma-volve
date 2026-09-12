const  { Router } = require("express");

const {
  Login,
  Register,
  Logout,
  GetCurrentUser,
  RefreshToken,
} = require("../controllers/authController.js");

const authMiddleware =require( "../middleware/authMiddleware.js");

const authRouter = Router();

authRouter.post("/login", Login);

authRouter.post("/register", Register);

authRouter.post("/refresh", RefreshToken);

authRouter.post("/logout", authMiddleware, Logout);

authRouter.get("/me", authMiddleware, GetCurrentUser);

module.exports = authRouter;
