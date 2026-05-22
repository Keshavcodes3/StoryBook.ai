import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api/v1/story';
axios.defaults.withCredentials = true;

const storiesService = {
  // Get all stories and poems
  getAllContent: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/all`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Get total stats (total stories and poems count)
  getTotalStats: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/stats`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Get recent works (stories and poems)
  getRecentWorks: async (limit = 10) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/recent`, {
        params: { limit }
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Create new content
  createContent: async (contentData) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/create`, contentData);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Follow up on a story
  followUpStory: async (storyId, followUpMessage) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/follow-up/${storyId}`, {
        followUpMessage
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Delete content
  deleteContent: async (type, id) => {
    try {
      const response = await axios.delete(`${API_BASE_URL}/delete/${type}/${id}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  }
};

export default storiesService;
