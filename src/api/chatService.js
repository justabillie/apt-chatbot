import axios from 'axios';
import { getMockResponse } from '../mock/responses';

// Set your backend API URL here (use empty string for mock mode)
const API_BASE_URL = ''; // Change to 'http://localhost:8000' when backend is ready

export const sendMessage = async (message) => {
  // Mock mode - returns local responses
  if (!API_BASE_URL) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({ response: getMockResponse(message) });
      }, 1000); // Simulate network delay
    });
  }

  // Real API mode
  try {
    const response = await axios.post(`${API_BASE_URL}/chat`, {
      message: message,
    });
    return response.data;
  } catch (error) {
    console.error('Error connecting to API:', error);
    return {
      response: "⚠️ Connection error. Using simulated responses.\n\n" + 
               getMockResponse(message)
    };
  }
};
