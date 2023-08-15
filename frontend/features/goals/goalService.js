import axios from "axios";

const API_URL = '/api/goals/';

// Create new goal
const createGoal = async (goalData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const {data} = await axios.post(API_URL, goalData, config);
    return data;
}

// Get user goals
const getGoals = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const {data} = await axios.get(API_URL, config);
    return data;
}

// Delete a goal
const deleteGoal = async (id, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const {data} = await axios.delete(API_URL + id, config);
    return data;
}

// update a goal
const updateGoal = async (id, updatedData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const {data} = await axios.put(API_URL + id, updatedData, config);
    return data;
}


const goalService = {
    createGoal,
    getGoals,
    deleteGoal,
    updateGoal
};

export default goalService;