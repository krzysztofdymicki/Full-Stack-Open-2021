const config = require("./utils/config");
//const logger = require("./utils/logger");
const blogRouter = require("./controllers/blogs");
const userRouter = require('./controllers/users')
const loginRouter = require('./controllers/login')
const { unknownEndpoint, errorHandler } = require('./utils/middleware')
const mongoose = require("mongoose");
const express = require("express");
require('express-async-errors')
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(config.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

app.use('/api/login', loginRouter)
app.use('/api/users', userRouter)
app.use("/api/blogs", blogRouter);

app.use(unknownEndpoint)

app.use(errorHandler)


module.exports = app;
