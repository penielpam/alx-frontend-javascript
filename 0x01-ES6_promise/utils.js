// utils.js

// Simulated asynchronous function to upload a photo
export async function uploadPhoto() {
  return new Promise((resolve, reject) => {
    // Simulating a successful upload
    setTimeout(() => {
      resolve({ status: 200, body: 'photo-profile-1' });
    }, 1000); // Simulating a delay of 1 second
  });
}

// Simulated asynchronous function to create a user
export async function createUser() {
  return new Promise((resolve, reject) => {
    // Simulating a successful user creation
    setTimeout(() => {
      resolve({ firstName: 'Guillaume', lastName: 'Salva' });
    }, 1500); // Simulating a delay of 1.5 seconds
  });
}
