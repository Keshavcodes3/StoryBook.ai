import { createServiceClient } from '../../../config/apiClient.js';

const API = createServiceClient('/muse');

export const startChat = async () => {
  const response = await API.post('/start');
  return response.data;
};

export const retrieveChat = async () => {
  const response = await API.get('/retrieve');
  return response.data;
};

export const sendMessage = async ({ text, activeMode }) => {
  const response = await API.post('/send', { text, activeMode });
  return response.data;
};

export const getMemoryBank = async () => {
  const response = await API.get('/memory');
  return response.data;
};
