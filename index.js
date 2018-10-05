const express = require("express"),
  getTitles = require("./getTitles"),
  getSeason = require("./getSeason"),
  app = express();

app.get("/title/:title", (req, res) => {
  getTitles(req.params.movie).then(value => res.json(value));
});

app.get("/season/:season", (req, res) => {
  getSeason(req.params.season).then(value => res.json(value));
});

app.listen(3000, () => {
  console.log("Crawling data...");
});
