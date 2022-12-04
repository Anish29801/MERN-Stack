require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const ver = `v1`;

// Import router
const authRouter = require("./routes/auth");
const todoRouter = require("./routes/todo");
const taskRouter = require("./routes/task");

// Middleware
app.use(cookieParser());
app.use(cors({ credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes middleware
app.use(`/api/${ver}`, authRouter);
app.use(`/api/${ver}`, todoRouter);
app.use(`/api/${ver}`, taskRouter);

module.exports = app;
