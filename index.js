require("dotenv").config({});
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const mainRouter = require('./src/routes');
const path = require('path')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', mainRouter);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
