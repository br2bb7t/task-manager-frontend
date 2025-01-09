import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000/api/tasks/';

// Obtain all tasks
export const getTasks = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error("Error fetching tasks", error);
        throw error;
    }
};

// Obtain a task by ID
export const getTask = async (taskId) => {
    try {
        const response = await axios.get(`${API_URL}${taskId}/`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching task with ID ${taskId}`, error);
        throw error;
    }
};

// Create a task
export const createTask = async (task) => {
    try {
        const response = await axios.post(API_URL, task);
        return response.data;
    } catch (error) {
        console.error("Error creating task", error);
        throw error;
    }
};

// Update a task
export const updateTask = async (taskId, updatedTask) => {
    try {
        const response = await axios.put(`${API_URL}${taskId}/`, updatedTask);
        return response.data;
    } catch (error) {
        console.error("Error updating task", error);
        throw error;
    }
};

// Delete a task
export const deleteTask = async (taskId) => {
    try {
        const response = await axios.patch(`${API_URL}${taskId}/`, { is_deleted: true });
        return response.data;
    } catch (error) {
        console.error("Error deleting task", error);
        throw error;
    }
};
