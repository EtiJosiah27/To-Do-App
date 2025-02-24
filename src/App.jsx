import { useState } from 'react'
import { useEffect } from 'react'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import './styles.css'

const App = () => {

  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const removeTask = (index) =>{
    setTasks(tasks.filter((_, i) => i!=index));
  };

  return(
    <div className='app'>
      <h1>Task Manager</h1>
      <TaskForm addTask={addTask}/>
      <TaskList tasks={tasks} removeTask={removeTask} />
    </div>
  );
};

export default App;