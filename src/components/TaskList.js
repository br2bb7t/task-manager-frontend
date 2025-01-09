import React, { useEffect, useState } from 'react';
import { getTasks } from '../api/taskApi';
import TaskItem from './TaskItem';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const tasksData = await getTasks();
                setTasks(tasksData);
            } catch (error) {
                console.error("Error fetching tasks", error);
            }
        };

        fetchTasks();
    }, []);

    return (
        <div>
            <h2>Task List</h2>
            <ul>
                {tasks.map((task) => {
                    return <TaskItem key={task._id} task={task} />;
                })}
            </ul>
        </div>
    );
};

export default TaskList;
