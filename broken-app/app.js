const express = require('express');
const axios = require('axios');
const ExpressError = require('./expressError');
const app = express();

//take in a JSON body (Github usernames) > convert it into an array first
//should return {name, bio}
//JSON.parse

app.use(express.json());

app.post('/', async function(req, res, next) {
	try {
		let results = [];

		for (let dev of req.body.developers) {
			let resp = await axios.get(` https://api.github.com/users/${dev}`);
			results.push(resp);
		}
			let out = results.map((r) => ({ name: r.data.name, bio: r.data.bio }));
		return res.send(JSON.stringify(out));
	} catch (err) {
		return next(err);
	}
});


// 404 handler
app.use(function (req, res, next) {
  const notFoundError = new ExpressError("Not Found", 404);
  return next(notFoundError);
});

// end generic handler
app.listen(3000, function (err) {
  if (err) {
    console.log(`Error starting server: ${err}`);
  } else {
    console.log(`Server starting on port 3000`);
  }
});

module.exports = app;

