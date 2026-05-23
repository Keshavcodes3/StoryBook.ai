import axios from 'axios';

const API = axios.create({
    baseURL: "https://storybook-ai-bgyd.onrender.com/api/v1/settings",
    withCredentials: true
});

export const updateProfile = async (data) => {
    const response = await API.post('/update', data);
    return response.data;
};


export const logout = async () => {
    const response = await API.post('/logout');
    return response.data;
};

export const deleteAccount = async () => {
    const response = await API.post('/deleteAccount');
    return response.data;
};
