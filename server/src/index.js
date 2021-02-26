const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const cors = require("cors");

const internalRouter = require("./routes/internalRoutes");
const hireItemRouter = require("./routes/hireItemRoutes");
const userRouter = require("./routes/userRoutes");

mongoose.connect("mongodb://localhost/HireItems", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

const app = express();

const port = 3000;

app.use(express.json());
app.use(
  session({
    secret: "random secret",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(cors());

app.use("/internal", internalRouter);
app.use("/api/hire-items", hireItemRouter);
app.use("/api/user", userRouter);

app.listen(process.env.PORT || 9000, () => {
  console.log('listening on port 9000');
});
