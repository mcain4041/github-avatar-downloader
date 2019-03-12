var request = require("request");
var pw = require("./secrets");
var fs = require("fs");
var input = process.argv.slice(2);

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

getRepoContributors(input[0], input[1], function(err, result) {
  for (var i = 0; i < result.length; i++) {
    downloadImageByURL(
      result[i].avatar_url,
      "./listOfAvatars/" + result[i].login + ".jpg"
    );
  }
  console.log("Errors:", err);
});
function downloadImageByURL(url, filePath) {
  request(url).pipe(fs.createWriteStream(filePath));
}

// console.log("Errors:", err);
// console.log("Result:", result);
// });

// 3d99ad55588c550ecd66cf01522d54f0b775

// curl -i -H 'Authorization: 3d99ad55588c550ecd66cf01522d54f0b775' https://api.github.com/repos/jquery/jquery/contributors
