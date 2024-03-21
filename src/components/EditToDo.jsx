import { useState, useEffect } from "react";

const EditToDo = ({ toDoLists, setToDoLists, setAdding, thisId }) => {
  const [newToDo, setNewToDo] = useState({
    name: "",
    dueDate: "",
    tasks: [],
    id: 0,
  });

  const [thisIndex, setThisIndex] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()
    let newToDos = [...toDoLists]
    newToDos[thisIndex] = newToDo
    setToDoLists(newToDos)
    setAdding(false)
  }

  const handleChange = (e) => {
    setNewToDo((prev) => ({...prev, [e.target.name]: e.target.value}))
  }

  useEffect(() => {
    let thisToDo = toDoLists.find((item, i) => {
      setThisIndex(i)
      return item.id == thisId})
    setNewToDo(thisToDo)
  }, [thisId])

  return (
    <div>
      <h3>Edit To Do List</h3>
      <form onSubmit={handleSubmit}>
        <label>
            Name
            <input name="name" type="text" value={newToDo.name} onChange={handleChange}/>
        </label>

        <label>
            Due Date
            <input name="dueDate" type="date" onChange={handleChange}/>
        </label>

        <button type="submit">Edit List</button>
      </form>

      <button onClick={() => setAdding(false)}>Cancel</button>
    </div>
  );
};

export default EditToDo;