import express from "express";

import mongoose from "mongoose";

import {
  loginValidation,
  postCreateValidation,
  registerValidation,
} from "./validations/auth.js";

import checkAuth from "./utils/checkAuth.js";
import * as UserController from "./controllers/UserController.js";
import * as PostController from "./controllers/PostController.js";

mongoose
  .connect(
    "mongodb+srv://bimal163:J0kerJ0ker@cluster0.1pzuwto.mongodb.net/blog?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log("Error connecting to DB", err));

const app = express();
app.use(express.json());

app.post("/auth/login", loginValidation, UserController.login);
app.post("/auth/register", registerValidation, UserController.register);
app.get("/auth/me", checkAuth, UserController.getMe);

app.get("/posts", PostController.getAll);
app.get("/posts/:id", PostController.getOne);
app.post("/posts", checkAuth, postCreateValidation, PostController.create);
app.delete("/posts/:id", checkAuth, PostController.remove);
app.patch("/posts/:id", checkAuth, PostController.update);

app.listen(5173, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("Server started on port 5173");
});
