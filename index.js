require("dotenv/config");

const express = require("express");
const cors = require("cors");
const tasksRouter = require("./routes/tasks");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.use(express.json());

app.use("/", tasksRouter)

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT} http://localhost:${PORT}`);
  });
  