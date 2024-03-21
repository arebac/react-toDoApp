function TaskCard({ task, toggleTask }) {


    return (
      <div className="task-card">
        <div className="task-card-half">
          <h1>{task.task}</h1>
          {
              task.completed
            ? <span>DONE </span>
            : <span>PENDING ⌛</span>
          }
  
          <h2>Task Description</h2>
          <p>{task.description}</p>
  
          <button className="add" onClick={() => toggleTask(task.task)}>
            {
              task.completed
              ? <span>UNDO </span> 
              : <span>✔️</span>
            }
          </button>
        </div>
      </div>
    );
  }
  
  export default TaskCard;