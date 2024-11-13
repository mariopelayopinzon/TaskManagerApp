// components/TaskItem/TaskItem.js
import React from 'react';
import styles from './TaskItem.module.css'; // Asegúrate de que esta línea esté presente

const TaskItem = ({ task, onDelete, onEdit, onToggle }) => {
    return (
        <tr className={task.completed ? styles.completed : ''}>
            <td>{task.id}</td>
            <td>{task.name}</td>
            <td>{task.dueDate}</td>
            <td>
                <button onClick={() => onToggle(task.id)}>✔️</button>
                <button onClick={() => onEdit(task.id)}>✏️</button>
                <button on Click={() => onDelete(task.id)}>❌</button>
            </td>
        </tr>
    );
}

export default TaskItem;
