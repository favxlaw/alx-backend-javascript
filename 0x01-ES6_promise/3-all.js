// Import functions from utils.js
const { uploadPhoto, createUser } = require('./utils.js');

function handleProfileSignup() {
    // Use Promise.all to collectively resolve promises
    Promise.all([uploadPhoto(), createUser()])
      .then((results) => {
        // The results array contains the resolved values of both promises
        const [photoResponse, userResponse] = results;
        
        // Log the relevant data to the console
        console.log('Photo Body:', photoResponse.body);
        console.log('User First Name:', userResponse.firstName);
        console.log('User Last Name:', userResponse.lastName);
      })
      .catch((error) => {
        // Handle errors
        console.error('Signup system offline');
      });
  }
  
  // Call the handleProfileSignup function
  handleProfileSignup();
  