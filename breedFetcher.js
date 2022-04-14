//const APIurl = 'https://api.thedogapi./v1/breeds/search?q=' + breedSearch; // Use the dog API URL instead 😏

const request = require('request'); //Import the request package

const fetchBreedDescription = function(breedSearch, callback) {

  const APIurl = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedSearch;
    
  request(APIurl, (reqError, response, body) => {

    if (reqError) {
      callback(reqError, null);
      return;
    }
    if (!breedSearch) {
      callback("Enter a breed", null);
      return;
    }

    if (body === '[]') {
      callback("Search had zero results", null);
      return;
    }
    const desc = JSON.parse(body);
    callback(null, desc[0].description);
    
  });

};
module.exports = { fetchBreedDescription };