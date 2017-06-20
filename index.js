const express = require("express");
const app = express();

app.get("/:first", function(req, res) {
  let firstName = req.params.first;

  res.send("Your first name is " + firstName + ".");
});

app.get("/:first/:last", function(req, res) {
  let firstName = req.params.first,
      lastName  = req.params.last;

  res.send("Your full name is " + firstName + " " + lastName + ".");
});

app.get("/:first/:last/:age", function(req, res) {
  let firstName = req.params.first,
      lastName  = req.params.last,
      age       = req.params.age;

  age--;

  age = age * 2;

  age = Math.pow(age, 2);



  res.send("Your full name is " + firstName + " " + lastName + " and you are " + age + " years old.");
});


app.listen(3000, function() {
  console.log("App running on localhost:3000");
});
