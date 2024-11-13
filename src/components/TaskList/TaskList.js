// components/TaskList/TaskList.js
import TaskItem from '../TaskItem/TaskItem';
import styles from './TaskList.module.css';

const TaskList = ({ tasks, onDelete, onEdit, onToggle }) => {
  if (!Array.isArray(tasks)) {
    return <div>No hay tareas disponibles.</div>;
  }

  return (
    <table className={styles.taskList}>
      <thead>
        <tr>
          <th className={styles.th}>Nombre de la Tarea</th>
          <th className={styles.th}>Fecha de Cumplimiento</th>
          <th className={styles.th}>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onDelete={onDelete}
            onEdit={onEdit}
            onToggle={onToggle}
          />
        ))}
      </tbody>
    </table>
  );
};

export default TaskList;