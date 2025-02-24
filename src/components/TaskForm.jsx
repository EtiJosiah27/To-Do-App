import { useState } from "react";

const TaskForm = ({ addTask }) => {
    const[task, setTask] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!task.trim()) return;
        addTask(task);
        setTask("");
    }

    return(
        <form onSubmit={handleSubmit} className="task-form">
            <input type="text" 
                placeholder="Enter your task here" 
                value={task} 
                onChange={(e) => setTask(e.target.value)}/>
            <button type="submit">Add Task</button>
        </form>
    );
}

export default TaskForm;