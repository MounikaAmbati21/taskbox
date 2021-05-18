import React from 'react'
import TaskForm from './TaskForm'
import axios from 'axios'

const EditTask = (props)=>{
    const {id , title , status , editItem , handleToggle} = props
    
    const formSubmit = (task)=>{
        axios.put(`http://localhost:3033/api/tasks/${task.id}`, task)
            .then((response)=>{
                const result = response.data
                //console.log(result)
                editItem(result)
                handleToggle()
            })
            .catch((err)=>{
                alert(err.message)
            })
    }

    return (
        <div>
            <h2>Edit Task</h2>
            <TaskForm id={id} title={title} status={status} formSubmit={formSubmit}/>
        </div>
    )
}
export default EditTask