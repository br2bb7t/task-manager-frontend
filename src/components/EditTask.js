import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getTask, updateTask } from '../api/taskApi';

const EditTask = () => {
    const { taskId } = useParams();
    const navigate = useNavigate();
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('pending');

    useEffect(() => {
        const fetchTask = async () => {
            try {
                const task = await getTask(taskId);
                setDescription(task.description);
                setStatus(task.status);
            } catch (error) {
                console.error("Error fetching the task", error);
            }
        };

        fetchTask();
    }, [taskId]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const updatedTask = {
            description,
            status,
        };

        try {
            await updateTask(taskId, updatedTask);
            navigate('/');  // Redirect to the main page after editing the task
        } catch (error) {
            console.error("Error updating the task", error);
        }
    };

    return (
        <div>
            <h2>Edit Task</h2>
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
                <button type="submit">Update Task</button>
            </form>
        </div>
    );
};

export default EditTask;
