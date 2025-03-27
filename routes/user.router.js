


const express = require("express");

const userRouter = express.Router();

const userController = require("../controllers/userController");

userRouter.get("/allUsers", userController.getAllUsers);
userRouter.post("/signup", userController.signup);
userRouter.post("/login", userController.login);
userRouter.get("/getUserProfile", userController.getUserProfile);
userRouter.put("/updateUserProfile", userController.updateUserProfile);
userRouter.delete("/deleteUserProfile", userController.deleteUserProfile);






