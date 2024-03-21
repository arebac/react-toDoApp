import { createContext, useEffect, useState } from "react";

import tasksData from '../task.json'

const ProjectContext = createContext()

const ProjectProvider = ({ children }) => {

    const [toDoLists, setToDoLists] = useState([])
    const [listIds, setListIds] = useState(1)

    const [tasks, setTasks] = useState(tasksData)
    const [taskId, setTaskId] = useState(tasksData.length + 1)

    return (
        <ProjectContext.Provider value={{ tasks, setTasks, toDoLists, setToDoLists, taskId, setTaskId, listIds, setListIds }}>
            {children}
        </ProjectContext.Provider>

    )
}

export { ProjectContext, ProjectProvider }