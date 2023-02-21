const express = require("express");

const userRouter = express.Router();
const bcrypt = require("bcrypt");
const { UserModel } = require("../models/UserModel");
const { userValidator } = require("../middlewares/userValidator");
const jwt = require("jsonwebtoken");
const { superAdminValidator } = require("../middlewares/superadminValidator");
require("dotenv").config();

userRouter.post("/login", async (req, res) => {
  let { email, password, phone } = req.body;
  if (email && password) {
    try {
      let data = await UserModel.find({ email });
      if (data.length > 0) {
        bcrypt.compare(password, data[0].password, (err, result) => {
          if (err)
            res.send({
              message: "Something went wrong",
              status: 0,
              error: true,
            });

          if (result) {
            let token = jwt.sign(
              { userId: data[0]._id, role: data[0].role },
              process.env.SecretKey
            );
            res.send({
              message: "Login successful",
              status: 1,
              token: token,
              error: false,
            });
          } else {
            res.send({
              message: "Password is incorrect",
              status: 0,
              error: true,
            });
          }
        });
      } else {
        res.send({
          message: "User does not exist , Please Sign up",
          status: 0,
          error: true,
        });
      }
    } catch (error) {
      res.send({
        message: "Something went wrong: " + error.message,
        status: 0,
        error: true,
      });
    }
  } else {
    //for phone
  }
});

userRouter.post("/register", userValidator, async (req, res) => {
  let { email, name, role, password, phone } = req.body;

  if (email && password) {
    bcrypt.hash(password, 5, async (err, hash) => {
      if (err)
        res.send({
          message: "Something went wrong: " + err,
          status: 0,
          error: true,
        });

      try {
        let user = new UserModel({ email, name, role, password: hash });
        await user.save();
        res.send({
          message: "User is regsitered",
          status: 1,
          error: false,
        });
      } catch (error) {
        res.send({
          message: "Somthing went wrong" + error.message,
          status: 0,
          error: true,
        });
      }
    });
  } else {
    try {
      let user = new UserModel({ name, role, phone });
      await user.save();
      res.send({
        message: "User is regsitered",
        status: 1,
        error: false,
      });
    } catch (error) {
      res.send({
        message: "Somthing went wrong" + err,
        status: 0,
        error: true,
      });
    }
  }
});

userRouter.patch("/superadmin/:id", superAdminValidator, async (req, res) => {
  const { id } = req.params;
  try {
    await UserModel.findByIdAndUpdate({ _id: id }, req.body);
    res.send({
      message: "Role changed",
      status: 1,
      error: false,
    });
  } catch (error) {
    res.send({
      message: "Something went wrong: " + error.message,
      status: 0,
      error: true,
    });
  }
});

userRouter.get("/admin", async (req, res) => {
  try {
    let data = await UserModel.find({ role: "admin" });
    res.send({
      message: "All users data",
      status: 1,
      data: data,
      error: false,
    });
  } catch (error) {
    res.send({
      message: "Something went wrong" + error.message,
      status: 0,
      error: true,
    });
  }
});

module.exports = {
  userRouter,
};
