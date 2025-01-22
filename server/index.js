import express from "express";
import multer from "multer";
import fs from "fs";

// import mongoose from "mongoose";

import {
  loginValidation,
  postCreateValidation,
  registerValidation,
} from "./validations/auth.js";

import checkAuth from "./utils/checkAuth.js";
import * as UserController from "./controllers/userController.js";
import * as PostController from "./controllers/postController.js";
import validatorError from "./utils/validatorError.js";

// mongoose
//   .connect(
//     ""
//   )
//   .then(() => console.log("Connected to DB"))
//   .catch((err) => console.log("Error connecting to DB", err));


const app = express();
app.use(express.json());

const storage = multer.diskStorage({
  destination: (_, __, cb) => {
    cb(null, "uploads");
  },
  filename: (_, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });
app.use("/uploads", express.static("uploads"));

app.post("/auth/login", loginValidation, validatorError, UserController.login);
app.post(
  "/auth/register",
  registerValidation,
  validatorError,
  UserController.register
);
app.get("/auth/me", checkAuth, UserController.getMe);

app.post("/upload", checkAuth, upload.single("image"), (req, res) => {
  res.json({
    url: `/uploads/${req.file.originalname}`,
  });
});

app.get("/posts", PostController.getAll);
app.get("/posts/:id", PostController.getOne);
app.post(
  "/posts",
  // checkAuth,
  postCreateValidation,
  validatorError,
  PostController.create
);
app.delete("/posts/:id", checkAuth, PostController.remove);
app.patch("/posts/:id", checkAuth, validatorError, PostController.update);

app.listen(3000, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("Server started on port 3000");
});
