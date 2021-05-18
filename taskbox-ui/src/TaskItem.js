import React , {useState} from 'react'
import axios from 'axios'
import EditTask from './EditTask.js'

const TaskItem = (props)=>{
    const {id , title, status ,removeItem , editItem} = props
    const [toggle , setToggle] = useState(false)

    const handleToggle= ()=>{
        setToggle(!toggle)
    }

    const handleRemove = ()=>{
        const confirmRemove= window.confirm('are you sure you want to remove??')
        if(confirmRemove){
            axios.delete(`http://localhost:3033/api/tasks/${id}`)
                .then((response)=>{
                    const result = response.data
                    //console.log(result) 
                    removeItem(result.id)
                })
                .catch((err)=>{
                    alert(err.message)
                })
        }
    }
    
    return (
        <div>
            {
                toggle ? (
                    <div>
                        <EditTask id={id} title={title} status={status} editItem={editItem} handleToggle={handleToggle}/>
                        <button onClick={handleToggle}>cancel</button>
                    </div>
                ) :(
                    <div>
                        <h3>{title}</h3>
                        <button onClick={handleToggle}>edit</button>
                        <button onClick={handleRemove}>remove</button>  {/* onClick={()=>{handleRemove(id)}} and invoke func as handleRemove(id)*/}
                    </div>
                )
            }
        </div>
    )
}
export default TaskItem