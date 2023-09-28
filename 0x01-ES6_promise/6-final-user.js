export default function handleProfileSignup(firstName, lastName, fileName) {
    // Create an array to store promise settlement information
    const results = [];
  
    // Use Promise.all to concurrently execute both promises
    return Promise.all([
      signUpUser(firstName, lastName),
      uploadPhoto(fileName)
    ])
      .then(([userResult, photoResult]) => {
        // Handle the results of both promises
        results.push({ status: 'fulfilled', value: userResult });
        results.push({ status: 'fulfilled', value: photoResult });
        return results;
      })
      .catch((error) => {
        // Handle any errors
        results.push({ status: 'rejected', value: error });
        return results;
      });
  }
  