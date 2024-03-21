
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ProjectContext } from "../context/project.context";

import AddToDo from "../components/AddToDo";

const TodoList = () => {
  const { tasks, setTasks, toDoLists, setToDoLists, listIds, setListIds } = useContext(ProjectContext);

  const [adding, setAdding] = useState(false);

  return (
    <div className="containers">
      <div className="lists">
        <h1>To-do Lists</h1>

        <button onClick={() => setAdding(true)}>Add List</button>

        {adding &&
        (
          <AddToDo
            toDoLists={toDoLists}
            setToDoLists={setToDoLists}
            listIds={listIds}
            setListIds={setListIds}
            adding={adding}
            setAdding={setAdding}
          />
        )}

        {toDoLists.length > 0 ? (
          toDoLists.map((item) => {
            return (
              <Link to={`/list-details/${item.id}`}>
                <h3>{item.name}</h3>
              </Link>
            );
          })
        ) : (
          <div>No To Do Lists yet...</div>
        )}
      </div>
    </div>
  );
};

export default TodoList;
