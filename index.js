const { fetchBreedDescription } = require('./breedFetcher');
const breedSearch = process.argv[2];

fetchBreedDescription(breedSearch, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log('\nThis is the desc:', desc);
  }
});
