const config = require('./utils/config')
const logger = require('./utils/logger')
const blogRouter = require('./controllers/blogs')
const mongoose = require('mongoose')
const express = require("express");
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

app.use('/api/blogs', blogRouter)

module.exports = app

