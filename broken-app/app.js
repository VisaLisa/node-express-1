const express = require('express');
let axios = require('axios');
var app = express();

//take in a JSON body (Github usernames)
//should return {name, bio}
//


app.post('/', function(req, res, next) {
  try {
    let results = req.body.developers.map(async d => {
      return await axios.get(`https://api.github.com/users/${d}`);
    });
    let out = results.map(r => ({ name: r.data.name, bio: r.data.bio }));

    return res.send(JSON.stringify(out));
  } catch {
    next(err);
  }
});


// 404 handler
app.use(function (req, res, next) {
  const notFoundError = new ExpressError("Not Found", 404);
  return next(notFoundError)
});

// end generic handler
app.listen(3000, function (err) {
  if (err) {
    console.log(`Error starting server: ${err}`);
  } else {
    console.log(`Server starting on port 3000`);
  }
});

