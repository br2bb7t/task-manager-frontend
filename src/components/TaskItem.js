import React from 'react';
import { Link } from 'react-router-dom';

const TaskItem = ({ task }) => {
    return (
        <li>
            <p>{task.description} - {task.status}</p>
            <Link to={`/edit/${task._id}`}>Editar</Link>
        </li>
    );
};

export default TaskItem;
