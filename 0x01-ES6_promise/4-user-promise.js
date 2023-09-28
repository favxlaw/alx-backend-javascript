function signUpUser(firstName, lastName) {
    const user = {
      firstName: firstName,
      lastName: lastName,
    };
  
    return Promise.resolve(user);
  }
  
  // Example usage:
  signUpUser('John', 'Doe')
    .then((user) => {
      console.log('User:', user);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  