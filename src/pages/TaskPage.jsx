import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ProjectContext } from "../context/project.context";
import AddTask from "../components/AddTask";

const TaskPage = () => {
  const [adding, setAdding] = useState(false);

  const [addingToList, setAddingToList] = useState(false);

  const [toAdd, setToAdd] = useState(0);

  const [completed, setCompleted] = useState([]);

  const [unassigned, setUnassigned] = useState([]);

  const [assigned, setAssigned] = useState([]);

  const { tasks, setTasks, toDoLists, setToDoLists } =
    useContext(ProjectContext);

  const navigate = useNavigate();

  const handleSubmit = (e, thisTask) => {
    e.preventDefault();
    let thisList = toDoLists.find((list) => list.id == toAdd);
    thisList.tasks.push(thisTask);
    setAddingToList(false);
    navigate(`/list-details/${thisList.id}`);
  };

  const handleChange = (e) => {
    setToAdd(e.target.value);
  };

  useEffect(() => {
    let completed = tasks.filter((task) => task.completed);
    setCompleted(completed);

    let listedTasks = toDoLists
      .map((list) => list.tasks.map((task) => task.id))
      .flat();

    console.log("These are listed tasks", listedTasks);

    let theseAssigned = tasks.filter((task) => {
      console.log("This is task id", task.id);

      return listedTasks.includes(task.id)
    });

    setAssigned(theseAssigned);

    let theseUnAssigned = tasks.filter((task) => {
    //   console.log("This is the task", task);

      return !listedTasks.includes(task.id)
    });

    setUnassigned(theseUnAssigned);
    console.log("these are unassigned tasks ===>", theseUnAssigned);
  }, []);

  return (
    <div className="task-page-container">
      <div className="tasks-container">
        <div className="task-column unassigned">
          <h1>Unassigned Tasks</h1>
          <button
            style={{ height: "3vh", width: "10vw" }}
            onClick={() => setAdding(true)}
          >
            Add New Task
          </button>

          {adding && <AddTask setAdding={setAdding} />}
          {unassigned.map((task) => {
            return (
              // <TaskCard key={task.task} task={task} toggleTask={toggleTask}  />
              <div key={task.task}>
                <h3>{task.task}</h3>
                <>
                  {toDoLists.length > 0 && (
                    <button onClick={() => setAddingToList(true)}>
                      Add to To Do List
                    </button>
                  )}

                  {addingToList && (
                    <>
                      <form onSubmit={(e) => handleSubmit(e, task)}>
                        <select onChange={handleChange}>
                          <option value={null}>Choose List</option>

                          {toDoLists.map((list) => {
                            return <option value={list.id}>{list.name}</option>;
                          })}
                        </select>

                        <button type="submit">Add To List</button>
                      </form>
                      <button
                        onClick={() => {
                          setAddingToList(false);
                        }}
                      >
                        Cancel
                      </button>
                    </>
                  )}
                </>
              </div>
            );
          })}
        </div>

        <div className="task-column assigned">
          <h1>Assigned Tasks</h1>
          {assigned.map((task) => {
            return (
              // <TaskCard key={task.task} task={task} toggleTask={toggleTask}  />
              <div key={task.task}>
                <h3>{task.task}</h3>
                <p>{task.completed ? "Completed" : "Uncompleted"}</p>
              </div>
            );
          })}
        </div>

        <div className="task-column completed">
          <h1>Completed Tasks</h1>
          {completed.map((task) => {
            return (
              // <TaskCard key={task.task} task={task} toggleTask={toggleTask}  />
              <div key={task.task}>
                <h3>{task.task}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TaskPage;
