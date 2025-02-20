const express = require("express");
const { Todo } = require("../mongo");
const router = express.Router();
const { incrAsync } = require("../redis/index");

/* GET todos listing. */
router.get("/", async (_, res) => {
  const todos = await Todo.find({});
  res.send(todos);
});

/* POST todo to listing. */
router.post("/", async (req, res) => {
  try {
    const todo = await Todo.create({
      text: req.body.text,
      done: false,
    });
    await incrAsync("added_todos");
    res.send(todo);
  } catch (error) {
    console.log("failed creating new todo", error);
  }
});

const singleRouter = express.Router();

const findByIdMiddleware = async (req, res, next) => {
  const { id } = req.params;
  try {
    req.todo = await Todo.findById(id);
  } catch (error) {
    console.log("error getting note ", error);
    return res.sendStatus(404);
  }
  next();
};

/* DELETE todo. */
singleRouter.delete("/", async (req, res) => {
  await req.todo.delete();
  res.sendStatus(200);
});

/* GET todo. */
singleRouter.get("/", async (req, res) => {
  res.json(req.todo);
});

/* PUT todo. */
singleRouter.put("/", async (req, res) => {
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(req.todo._id, req.body, {
      new: true,
    });
    res.json(updatedTodo);
  } catch (error) {
    console.log("failed to update todo", error);
  }
});

router.use("/:id", findByIdMiddleware, singleRouter);

module.exports = router;
