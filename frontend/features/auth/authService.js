import axios from 'axios';
const API_URL = '/api/users/';

// register user
const register = async (userData) => {
    const {data} = await axios.post(API_URL, userData);
    if(data){
        localStorage.setItem('user', JSON.stringify(data))
    }
    return data;
}

const login = async (userData) => {
    const {data} = await axios.post(API_URL + 'login', userData);
    if(data){
        localStorage.setItem('user', JSON.stringify(data))
    }
    return data;
}

// logout user
const logout = async () => {
    localStorage.removeItem('user');
}
// http only cookie


const authService = {
    register, logout, login
}

export default authService;