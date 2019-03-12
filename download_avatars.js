var request = require("request");
var pw = require("./secrets");

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
      "User-Agent": "Cain310",
      Authorization: pw.GITHUB_TOKEN
    }
  };
  request(options, function(err, res, body) {
    var data = JSON.parse(body);
    cb(err, data);
  });
}

getRepoContributors("jquery", "jquery", function(err, result) {
  for (var i = 0; i < result.length; i++) {
    console.log("Result:", result[i].avatar_url);
  }
  // console.log("Errors:", err);
  // console.log("Result:", result);
});

// 3d99ad55588c550ecd66cf01522d54f0b775

// curl -i -H 'Authorization: 3d99ad55588c550ecd66cf01522d54f0b775' https://api.github.com/repos/jquery/jquery/contributors
