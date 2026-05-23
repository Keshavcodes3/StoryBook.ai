import { createServiceClient } from '../../../config/apiClient.js';

const API = createServiceClient('/story');

export const createNewContent = async (Data) => {
  const response = await API.post('/create', Data);
  return response.data;
};

export const takeFollowUp = async ({ storyId, followUpMessage }) => {
  const response = await API.post(`/follow-up/${storyId}`, { followUpMessage });
  return response.data;
};

export const getAllContent = async () => {
  const response = await API.get('/all');
  return response.data;
};

export const deleteContent = async ({ type, id }) => {
  const response = await API.delete(`/delete/${type}/${id}`);
  return response.data;
};
