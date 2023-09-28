export default function uploadPhoto(fileName) {
    return new Promise((resolve, reject) => {
      // Simulate processing the file
      // You can replace this part with your actual file processing logic
      setTimeout(() => {
        // For the purpose of this example, let's assume processing failed
        const error = new Error(`$${fileName} cannot be processed`);
        reject(error);
      }, 1000); // Simulating a 1-second delay, replace with your processing logic
    });
  }
  