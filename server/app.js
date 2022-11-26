require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");

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
app.use(`/api/v1`, authRouter);
app.use(`/api/v1`, todoRouter);
app.use(`/api/v1`, taskRouter);

module.exports = app;
