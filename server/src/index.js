const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const cors = require("cors");
const bodyParser = require('body-parser');

const internalRouter = require("./routes/internalRoutes");
const hireItemRouter = require("./routes/hireItemRoutes");
const userRouter = require("./routes/userRoutes");

mongoose.connect("mongodb://localhost/eventMarketplace", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

mongoose.connection.on('connected', () => {
  console.log('Mongoose is connected')
});

mongoose.connection.on('error', (err) => {
  console.log(err, ' mongoose failed to connect')
});

mongoose.connection.on('disconncted', () => {
  console.log('Mongoose is disconnected')
});


const app = express();

// const port = 3000;

app.use(express.json());
app.use(
  session({
    secret: "random secret",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(cors());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use("/internal", internalRouter);
app.use("/api/hire-items", hireItemRouter);
app.use("/api/user", userRouter);

app.listen(process.env.PORT || 9000, () => {
  console.log('listening on port 9000');
});

