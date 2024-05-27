import axios from "axios";
import {BACKEND_URL} from "./const"

export function login(data) {
  return new Promise((resolve, reject) => {
    axios.post(`${BACKEND_URL}/auth/login`, data)
      .then(res => {
        const token = res.data.access_token;
        console.log("token...",token)
        if (token) {
          localStorage.setItem("authToken", token);
          resolve(true); // Indicate successful login
        } else {
          reject("Invalid credentials"); // Indicate login failure due to invalid credentials
        }
      })
      .catch(error => {
        console.error("Error occurred during login:", error);
        reject("Login failed"); // Indicate login failure due to error
      });
  });
}


// export function getToken(){
//     const token =localStorage.getItem("authToken");
//     return token;
// }

export function isAuthenticated(){
    const token =localStorage.getItem("authToken");
    return !!token
}














// // api/authService.js

// import axios from 'axios';

// async function loginWithGoogle() {
//   // try {
//   //   // Send a request to your backend server to initiate Google OAuth login
//   //   // const response = await axios.get('http://localhost:4001/auth/google/login', {
//   //     withCredentials: true, // Include credentials for CORS request
//   //   });

//     // Check if the response is successful
//     if (response.status === 200) {
//       // Return the data from the response
//       return response.data;
//     } else {
//       throw new Error('Failed to initiate Google OAuth login');
//     }
//   } catch (error) {
//     throw new Error('Error during Google OAuth login:', error);
//   }
// }

// export { loginWithGoogle };
