const express = require("express");
const app = express();
app.use(express.json());
const db = require("./db");

const logger = (req, res, next) => {
  console.log("Host:", req.hostname);
  console.log("Method: ", req.method);
  console.log("Path: ", req.path);
  next();
};

app.use(logger);

const catRoutes = require("./routes/cats");
app.use("/cats", catRoutes);

app.use((err, req, res, next) => {
  res.status(err.status).send(err.msg);
});

const server = app.listen(4444, () =>
  console.log(`server started on port ${server.address().port}`)
);
