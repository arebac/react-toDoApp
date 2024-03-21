import { useState } from "react";

const AddToDo = ({ toDoLists, setToDoLists, listIds, setListIds, setAdding }) => {
  const [newToDo, setNewToDo] = useState({
    name: "",
    dueDate: "",
    tasks: [],
    id: listIds,
  });

  const handleSubmit = (e) => {
    e.preventDefault()
    let newToDos = [newToDo, ...toDoLists]
    setToDoLists(newToDos)
    setListIds((prev) => prev + 1)
    setAdding(false)
  }

  const handleChange = (e) => {
    setNewToDo((prev) => ({...prev, [e.target.name]: e.target.value}))
  }

  return (
    <div>
      <h3>Add To Do List</h3>
      <form onSubmit={handleSubmit}>
        <label>
            Name
            <input name="name" type="text" value={newToDo.name} onChange={handleChange}/>
        </label>

        <label>
            Due Date
            <input name="dueDate" type="date" onChange={handleChange}/>
        </label>

        <button type="submit">Create New List</button>
      </form>

      <button onClick={() => setAdding(false)}>Cancel</button>
    </div>
  );
};

export default AddToDo;
