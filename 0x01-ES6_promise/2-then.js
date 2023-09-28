function handleResponseFromAPI(promise) {
    promise
      .then((response) => {
        console.log('Got a response from the API');
        return {
          status: 200,
          body: 'success',
        };
      })
      .catch((error) => {
        console.log('Got a response from the API');
        return new Error();
      });
  }
  
  // Example usage:
  const successPromise = Promise.resolve('Some data');
  const failurePromise = Promise.reject('Error message');
  
  handleResponseFromAPI(successPromise)
    .then((result) => {
      console.log('Result:', result);
    });
  
  handleResponseFromAPI(failurePromise)
    .then((result) => {
      console.log('Result:', result);
    });
  