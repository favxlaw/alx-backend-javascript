function getResponseFromAPI() {
    // Simulating an API call with a setTimeout (you would replace this with the actual API call)
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulating a successful API response
        const apiResponse = {
          status: 200,
          body: 'some-data-from-api',
        };
        resolve(apiResponse); // Resolve the Promise with the API response
      }, 1000); // Simulating a 1-second delay, replace with your actual API call
    });
  }
  
  // Usage of the getResponseFromAPI function
  getResponseFromAPI()
    .then((response) => {
      console.log('API Response:', response);
      // You can work with the API response data here
    })
    .catch((error) => {
      console.error('API Request Failed:', error);
      // Handle API request failure here
    });
  