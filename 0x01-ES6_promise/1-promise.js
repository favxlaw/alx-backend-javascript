function getFullResponseFromAPI(success) {
    return new Promise((resolve, reject) => {
      if (success) {
        const response = {
          status: 200,
          body: 'Success',
        };
        resolve(response); // Resolve the promise with a successful response
      } else {
        const error = new Error('The fake API is not working currently');
        reject(error); // Reject the promise with an error message
      }
    });
  }
  
  // Example usage:
  getFullResponseFromAPI(true)
    .then((response) => {
      console.log('API Response:', response);
    })
    .catch((error) => {
      console.error('API Request Failed:', error.message);
    });
  
  getFullResponseFromAPI(false)
    .then((response) => {
      console.log('API Response:', response);
    })
    .catch((error) => {
      console.error('API Request Failed:', error.message);
    });
  