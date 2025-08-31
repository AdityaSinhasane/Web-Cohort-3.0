const express = require("express");

const app = express();

app.get("/sum/:firstArg/:secondArg", function (req, res) {
  const a = parseInt(req.params.firstArg);
  const b = parseInt(req.params.secondArg);

  res.json({
    Answer: a + b,
  });
});

app.listen(3000);
