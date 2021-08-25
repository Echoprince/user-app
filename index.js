const express = require("express");
const app = express();

app.use(express.json());


//DRY - Don't Repeat Yourself
app.listen(3000, (req, res, next) => {
  console.log("App is running on port 3000");
});