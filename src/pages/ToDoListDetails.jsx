import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { ProjectContext } from "../context/project.context";
import EditToDo from '../components/EditToDo'
import TaskCard from "../components/TaskCard";

const ToDoListDetails = () => {
  const [thisList, setThisList] = useState(null);
  const [adding, setAdding] = useState(false);

  const navigate = useNavigate()

  const { tasks, setTasks, toDoLists, setToDoLists } =
    useContext(ProjectContext);

  const { listId } = useParams();

  const handleDelete = (listId) => {
    let lesserList = toDoLists.filter((list) => list.id !== listId)
    setToDoLists(lesserList)
    navigate('/to-do-list')
  }

  useEffect(() => {
    let foundList = toDoLists.find((list) => list.id == listId);
    setThisList(foundList);
  }, [toDoLists]);

  return (
    <div className="containers">
        <div className="to-do-details">

            <h1>To Do List Details</h1>
            {thisList && (
                <div>
                <h2>{thisList.name}</h2>
                <p>{thisList.dueDate}</p>

                <button onClick={() => setAdding(true)}>Edit List</button>

                {
                    adding && <EditToDo 
                    toDoLists={toDoLists}
                    setToDoLists={setToDoLists}
                    adding={adding}
                    setAdding={setAdding}
                    thisId={thisList.id}
                    />
                }

                <button onClick={() => handleDelete(thisList.id)}>Delete To Do List</button>

                {thisList.tasks.length > 0 ? (
                    <>
                    {thisList.tasks.map((task) => {
                        return <TaskCard task={task} />;
                    })}
                    </>
                ) : (
                    <p>No tasks yet...</p>
                )}
                </div>
            )}

        </div>

    </div>
  );
};

export default ToDoListDetails;
