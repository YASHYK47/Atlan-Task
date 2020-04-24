const router = require("express").Router();
const { startTask, stopTask, getTask } = require("../module/task");

router.get("/start", (req, res, next) => {
  startTask()
    .then((task) => res.json({ msg: "Starting Task..." }))
    .catch((err) => next(new Error(err)));
});

router.post("/stop", (req, res, next) => {
  stopTask(req.body.id)
    .then((task) => res.json({ msg: "Stopping Task..." }))
    .catch((err) => next(new Error(err)));
});

router.get("/tasks", (req, res, next) => {
  getTask()
    .then((tasks) => {
      res.json({ tasks });
    })
    .catch((err) => next(err));
});
module.exports = router;
