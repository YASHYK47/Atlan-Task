const { start_queue, stop_queue } = require("./queue_init");
const task = require("./schema/task");

const startTask = () => {
  return new Promise((resolve, reject) => {
    new task({
      task: "Parsing Xlsx File",
      status: "Pending",
    })
      .save()
      .then((e) => {
        start_queue.add({ id: e.id }).then(resolve).then(reject);
      })
      .catch((err) => reject(err));
  });
};

const stopTask = (id) => {
  return new Promise((resolve, reject) => {
    if (id) {
      task
        .findById(id)
        .then((e) => {
          if (e)
            stop_queue
              .add({ id: e.id, pid: e.pid })
              .then((e) => resolve(e))
              .catch((err) => reject(err));
          else reject(new Error("Invalid Id"));
        })
        .catch((err) => reject(new Error(err)));
    } else reject(new Error("Invalid Id"));
  });
};

const getTask = () => {
  return new Promise((resolve, reject) => {
    task
      .find()
      .then((e) => {
        resolve(e);
      })
      .catch((err) => {
        return reject(err);
      });
  });
};

module.exports = {
  startTask,
  stopTask,
  getTask,
};
