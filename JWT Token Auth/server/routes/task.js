const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const {
  createTask,
  updateTask,
  getTasksInsideTodo,
  getTask,
  removeTask,
} = require("../controllers/task");

// Middleware
const {
  getProfileById,
  isSignin,
  isAuthenticate,
} = require("../middleware/auth");

const { getTaskById, isTaskCreatedByUser } = require("../middleware/task");
const { isTodoCreatedByUser, getTodoById } = require("../middleware/todo");

router.param("profileId", getProfileById);
router.param("taskId", getTaskById);
router.param("todoId", getTodoById);

router.post(
  "/task/create/:profileId/:todoId",
  isSignin(),
  isAuthenticate,
  isTodoCreatedByUser,
  body("task", "task is required").notEmpty(),
  body("task", "task must be at least 2 chars long").isLength({
    min: 2,
  }),
  createTask
);


router.put(
  "/task/update/:profileId/:taskId",
  isSignin(),
  isAuthenticate,
  isTaskCreatedByUser,
  body("task", "task is required").notEmpty(),
  body("task", "task must be at least 2 chars long").isLength({
    min: 2,
  }),
  updateTask
);

router.get(
  "/task/get/:profileId/:taskId",
  isSignin(),
  isAuthenticate,
  isTaskCreatedByUser,
  getTask
);


router.get(
  "/tasks/get/:profileId/:todoId",
  isSignin(),
  isAuthenticate,
  isTodoCreatedByUser,
  getTasksInsideTodo
);


router.delete(
  "/task/remove/:profileId/:taskId",
  isSignin(),
  isAuthenticate,
  isTaskCreatedByUser,
  removeTask
);


module.exports = router;
