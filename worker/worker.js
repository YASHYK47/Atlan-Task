require("dotenv").config();

const numCPUs = require("os").cpus().length;

const workers = [];
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection
  .once("connected", () => console.log("Connected to DB"))
  .on("error", () => console.log("Error connecting to DB"));

const masterProcess = () => {
  console.log("master is running");

  for (let i = 0; i < numCPUs; i++) {
    workers.push(cluster.fork());
    workers[i].on("message", async (msg) => {
      console.log(msg);
    });
  }

  cluster.on("online", (worker) => {
    console.log("Online");
  });

  cluster.on("exit", (worker, code, signal) => {
    console.log("Exit");
    workers.push(cluster.fork());
    workers[workers.length - 1].on("message", async (msg) => {
      console.log(msg);
    });
  });
};

const childProcess = () => {
  require("./module/exec");
};

if (cluster.isMaster) {
  masterProcess();
} else {
  childProcess();
}
