import axios from "axios";

const API_URL = "https://storybook-ai-bgyd.onrender.com/api/v1/editor";

export const syncStoryContent = async (storyId, fullStoryContent, title, type) => {
    try {
        const response = await axios.put(`${API_URL}/sync`, { storyId, fullStoryContent, title, type }, {
            withCredentials: true,
        });
        return response.data;
    } catch (error) {
        throw error.response?.data?.message || "Failed to sync story";
    }
};

export const processAiAction = async (data) => {
    try {
        const response = await axios.post(`${API_URL}/ai-action`, data, {
            withCredentials: true,
        });
        return response.data;
    } catch (error) {
        throw error.response?.data?.message || "Failed to process AI action";
    }
};
