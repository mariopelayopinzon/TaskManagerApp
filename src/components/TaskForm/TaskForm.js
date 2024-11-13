import React, { useState, useEffect } from 'react';
import styles from './TaskForm.module.css'


const TaskForm = ({ addTask, editingTask, updateTask  }) => {
    const [taskName, setTaskName] = useState('');
    const [dueDate, setDueDate] = useState('');

    useEffect(() => {
        if (editingTask) {
            setTaskName(editingTask.name);
            setDueDate(editingTask.dueDate);
        }
    }, [editingTask]);


    const handleSubmit = (e) => {
        e.preventDefault();
        if (editingTask) {
            updateTask({ ...editingTask, name: taskName, dueDate });
        } else {
            addTask({ name: taskName, dueDate });
        }
        setTaskName('');
        setDueDate('');
    };


    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <input
                type='text'
                placeholder='Nombre de la tarea'
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                required
            />
            <input
                type='date'
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                required
            />
            <button type='submit'>{editingTask ? 'Actualizar Tarea' : 'Agregar Tarea' }</button>
        </form>
    )
}

export default TaskForm
