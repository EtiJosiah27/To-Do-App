const TaskItem = ({ task, index, removeTask }) => {
    return(
        <div className="task-item">
            <span>{task}</span>
            <button onClick={() => removeTask(index)}>Remove Task</button>
        </div>
    );
};

export default TaskItem;