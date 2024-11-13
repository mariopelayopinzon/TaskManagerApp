import React, { useState } from 'react';
import TaskForm from '@/components/TaskForm/TaskForm';
import TaskList from '@/components/TaskList/TaskList';
import '../styles/globals.css'

const index = () => {
    const [ tasks, setTasks] = useState([]);
    const [ editingTask, setEditingTask ] = useState(null);


    const addTask = (task) => {
        setTasks((prevTasks) =>  [...prevTasks, {...task, id: Date.now(), completed: false}]);
    };
    
    const deleteTask = (id) => { 
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    };

    const editTask = (id) => { 
        const taskToEdit = tasks.find((task) => task.id === id); 
        setEditingTask(taskToEdit);
    };

    const updateTask  = (updatedTask) => {
        setTasks((prevTasks) => (
            prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
        ));
        setEditingTask(null);
    }

    const toggleTaskCompletion = (id) => {
        setTasks((prevTasks) => (
            prevTasks.map((task) => 
            task.id === id ? {...task, completed : !task.completed } : task)
        )
    );
    }

  return (
   <div className='container'>
    <h1>Gestor de Tareas</h1>
    <TaskForm addTask={addTask} />
    <TaskList tasks={tasks}
    onDelete={deleteTask}
    onEdit={editTask}
    onToggle={toggleTaskCompletion} />
     </div>
  );
};

export default index
