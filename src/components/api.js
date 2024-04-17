import axios from "axios";

const BASE_URL = "http://localhost:3001/auth/login";

export const loginUser = async ({ email, password }) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/login`, { email, password });
    return response.data; // Assuming your API returns data upon successful login
  } catch (error) {
    throw error; // Propagate the error if login fails
  }
};