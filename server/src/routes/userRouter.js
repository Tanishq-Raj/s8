import express from "express";
import {
  addToSavedProperties,
  getProperties,
  getSavedProperties,
  login,
  logout,
  removeFromSavedProperties,
  userRegister,
  verifyOTP,
} from "../controllers/userController.js";
import userAuth from "../middlewares/authUser.js";

const userRouter = express.Router();

userRouter.post("/register", userRegister);
userRouter.post("/otp-verification", verifyOTP);
userRouter.post("login", login);
userRouter.get("/logout", userAuth, logout);
userRouter.get("/get-properties", userAuth, getProperties);
userRouter.get("/add-to-saved-properties", userAuth, addToSavedProperties);
userRouter.get("/get-saved-properties", userAuth, getSavedProperties);
userRouter.get("/remove-from-saved-properties", userAuth, removeFromSavedProperties);

export default userRouter;
