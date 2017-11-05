/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  fs.readFile(filePath, 'utf-8', function(err, results) {
    //first arg to callback is err, second arg is result
    if (err) { 
      callback(err, null); 
    } else {
      var firstLine = results.split('\n')[0];
      //first arg to callback is err, second arg is result
      callback(null, firstLine);
    }
  });
};

// This function should retrieve the status code of a GET request to `url`

var getStatusCode = function(url, callback) {
  //using the request module, default request is a 'get'
  //url - can be a url OR an options object including keys such as url, method, headers, and form
  //response - node object with associated properties, such as statusCode
  //body - html for requested url
  request(url, function(err, response, body) {
    if (err) { return callback(err, null); }
    // if err is true, return will happen on line 26, otherwise 28 will execute
    callback(null, response.statusCode);
  });
};


// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};

