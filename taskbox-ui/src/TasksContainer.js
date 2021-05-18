import React , {useState , useEffect } from 'react'
import axios from 'axios'

import TasksList from './TasksList.js'
import AddTask from './AddTask.js'


const TasksContainer = (props) =>{
    const [tasks , setTasks] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:3033/api/tasks')
            .then((response)=>{
                const result = response.data
                //console.log(result)
                setTasks(result)
            }) // success
            .catch((err)=>{
                alert(err.message)
            }) // error
    },[])

    const addItem = (task)=>{
        setTasks([...tasks,task])
    }
    const removeItem = (id)=>{
        const result = tasks.filter((task)=>{
            return task.id!== id
        })
        setTasks(result)
    }
    const editItem = (task)=>{
        const result =tasks.map((t)=>{
            if(task.id===t.id){
                return {...t,...task}
            }else {
                return {...t}
            }
        })
        setTasks(result)
    }
    return (
        <div>
            <TasksList tasks={tasks} removeItem={removeItem} editItem={editItem}/>
            <AddTask addItem={addItem}/>
        </div>
    )
}

export default TasksContainer