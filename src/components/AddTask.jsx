import { useState, useContext } from 'react'
import { ProjectContext } from '../context/project.context'

const AddTask = ({ setAdding }) => {

  const { tasks, setTasks, taskId, setTaskId } = useContext(ProjectContext)

  const [ newTask, setNewTask ] = useState({
    task: "",
    completed: false,
    id: taskId
  })

  const handleChange = (e) => {
    setNewTask((prev) => ({...prev, [e.target.name]: e.target.value}))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let newTasks = [ newTask, ...tasks]
    setTasks(newTasks)
    setTaskId((prev) => prev + 1)
    setAdding(false)
  }

  return (
    <div>

        <h2>AddTask</h2>

        <form onSubmit={handleSubmit}>
          <label>
              Task
            <input type='text' name='task' value={newTask.task} onChange={handleChange} />
          </label>

          <button type='sumbit'>Add Task</button>

        </form>

        <button onClick={() => setAdding(false)}>Cancel</button>
    </div>

  )
}

export default AddTask