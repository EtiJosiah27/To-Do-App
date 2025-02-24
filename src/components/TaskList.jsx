import TaskItem from "./TaskItem";

const TaskList = ({tasks, removeTask}) => {
    return(
        <div className="task-list">
            {tasks.length === 0 ? 
            (<p>No tasks here</p>) : 
            (tasks.map((task, index) => (
                <TaskItem key={index} index={index} task={task} removeTask={removeTask} />
            )))}
        </div>
    );
};

export default TaskList;