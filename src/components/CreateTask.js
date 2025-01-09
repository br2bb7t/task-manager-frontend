import React, { useState } from 'react';
import { createTask } from '../api/taskApi';
import { useNavigate } from 'react-router-dom';

const CreateTask = () => {
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('pending');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newTask = {
            description,
            status,
        };

        try {
            await createTask(newTask);
            navigate('/');
        } catch (error) {
            console.error("Error creating the task", error);
        }
    };

    return (
        <div>
            <h2>Create New Task</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Task description"
                    required
                />
                <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    required
                >
                    <option value="Pending">Pending</option>
                    <option value="Completed">Completed</option>
                    <option value="In Progress">In Progress</option>
                </select>
                <button type="submit">Create Task</button>
            </form>
        </div>
    );
};

export default CreateTask;
