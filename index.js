const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const mongoose = require('mongoose')
const cors = require('cors');
const bodyParser = require('body-parser');

const path = require('path')

require('dotenv').config()

const routes = require('./routes')

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true
}, console.log('connected database'))

app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));

app.use(routes)

app.listen(PORT, () => {
  console.log('server is running on port: ' + PORT);
});
