import axios from "axios";

const API_URL = 'http://localhost:5000/api/auth';

export const signup = (data: {name: string; email: string; password: string; role: string }) => {
    return axios.post(`${API_URL}/register`, data);
};

export const login = (data: { email: string; password: string }) => {
    return axios.post(`${API_URL}/login`, data)
}