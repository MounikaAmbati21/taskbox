import React , {useState }from 'react'
import axios from 'axios'

import TaskForm from './TaskForm.js'

 const AddTask = (props) =>{
     const {addItem} = props
     const [isSaved , setIsSaved] = useState(false)

    const formSubmit = (task)=>{
        //console.log(task)
        axios.post('http://localhost:3033/api/tasks',task)
            .then((response)=>{
                const result = response.data
                //console.log(result)
                addItem(result)
                setIsSaved(true)
            }) //success
            .catch((err)=>{
                alert(err.message)
            }) //error
    }

    const toogleIsSaved = ()=>{
        setIsSaved(false)
    }

    return (
        <div>
            <h2>Add Task</h2>
            <TaskForm formSubmit={formSubmit} isSaved={isSaved} toggleIsSaved={toogleIsSaved}/>
        </div>
    )
 }
 export default AddTask