
var request = require("request");
var pw = require('./secrets')

console.log("Welcome to the GitHub Avatar Downloader!");

function getRepoContributors(repoOwner, repoName, cb) {
  var options = {
    url:
      "https://api.github.com/repos/" +
      repoOwner +
      "/" +
      repoName +
      "/contributors",
    headers: {
      "User-Agent": "Cain310"
      "Authorization": ""
    }
  };
  request(options, function(err, res, body) {
    cb(err, body);
  });
}

getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});


// 3d99ad55588c550ecd66cf01522d54f0b775

// curl -i -H 'Authorization: 3d99ad55588c550ecd66cf01522d54f0b775' https://api.github.com/repos/jquery/jquery/contributors
