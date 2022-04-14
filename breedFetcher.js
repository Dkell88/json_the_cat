
const request = require('request'); //Import the request package
const APIurl = 'https://api.thecatapi.com/v1/breeds/search'; //hhhmmm I don't want to use cat data
//const APIurl = 'https://api.thedogapi./v1/breeds/search'; // Use the dog API URL instead 😏
const breedSearch = process.argv[2]; // Grab the breed to search from the command line
const URL = APIurl + '?q=' + breedSearch; // Add the query search and breed to the URL

// HTTP request from the defined URL
request(URL, (error, response, body) => {

  //If there was an error print it out
  if (error) {
    console.error(error);
    //console.log('error:', error);
    return;
  }
  //If the search didn't provide any data print out search not found
  if (body === '[]') {
    console.log("I'm sorry that breed does not exist");
    return;
  }
  
  //console.log('statusCode:', response && response.statusCode); // Print the
  // console.log('body\n', body); // Print the error if one occurred
  // console.log('\n\ntype of body', typeof(body)); // Print the error if one occurred

  //Convert the JSON string info from the request to an object
  const data = JSON.parse(body);

  // console.log('\n\n',data);
  // console.log('\n\n',typeof data);
  
  //test printing object key/value pairs
  console.log(`The ${data[0].name}'s temperaments are: ${data[0].temperament}`);
});

