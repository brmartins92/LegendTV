const express = require("express"),
  getLegend = require("./getLegend"),
  app = express();


app.get("/movie/:movie", (req, res) =>{
	getLegend(
    	req.params.movie
	).then(value => res.json(value));
});

app.listen(4000, () => {
  console.log("Crawling data...");
});
