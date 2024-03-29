import axios from 'axios';

const API_URL = '/api/users';

// Register user
const register = async (userData) => {
    const response = await axios.post(`${API_URL}/register`, userData)

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

// Login user
const login = async (userData) => {
    const response = await axios.post(`${API_URL}/login`, userData)

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data
}

// Logout user
const logout = () => {
    localStorage.removeItem('user');
}

// Get user personal data
const getUserPersonalData = async (token) => {
    console.log("Token value: ", token);

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    }

    const response = await axios.get(
        `${API_URL}/me`, 
        config
        );
    // console.log("getUserPersonalData: ", response);

    return response.data;
}

// Update user personal data
const updateUserPersonalData = async (userData, token) => {
    console.log("updateUserPersonalData: ", userData);
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    }
    const response = await axios.put(
        `${API_URL}/me`, 
        userData,
        config
        );

    return response.data;
}

// Get a specific user data.
const getOneUserData = async (userId, token) => {
    console.log(userId);
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    }
    const response = await axios.get(
        `${API_URL}/owner/${userId}`, 
        config
        );

    return response.data;
}

const authService = {
    register, 
    login,
    logout,
    getUserPersonalData,
    updateUserPersonalData, 
    getOneUserData
}

export default authService;
