const config = require("./utils/config");
//const logger = require("./utils/logger");
const blogRouter = require("./controllers/blogs");
const userRouter = require('./controllers/users')
//const middleware = require('./utils/middleware')
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
require('express-async-errors')
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(config.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

app.use('/api/users', userRouter)
app.use("/api/blogs", blogRouter);
//app.use(middleware.errorHandler)


module.exports = app;
