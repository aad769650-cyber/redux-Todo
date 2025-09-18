import { useDispatch, useSelector } from "react-redux";
import "../App.css"
import { MdOutlineDeleteOutline } from "react-icons/md";

import { useState } from "react";
import { addTask, deleteTask } from "../features/task/taskSlice";
export const Todo=()=>{

console.log("Store");

    const Selector=useSelector((state)=> state.slice.task)
const [task,setTask]=useState("")
    console.log(Selector);
    const dispatch=useDispatch()


// //deleteLogic

const handleDelete=(id)=>{
    console.log(id);
    dispatch(deleteTask(id))
    
}
const handleSubmit=(e)=>{
    e.preventDefault();

dispatch(addTask(task))
setTask("")
}
console.log(task);


// const handleFetch=()=>{
//     console.log("Clicked");
    
//     dispatch(fetchTask())
// }

    return (
        <section className="section">
        {/* <h1>hello</h1> */}
<h1>ToDo List</h1>
        <div className="todo">

     <form action="" onSubmit={(e)=>handleSubmit(e)}>
               <div className="input">
                <input type="text" placeholder="Add a Task..." value={task} onChange={(e)=>{setTask(e.target.value)}} />
                <button className="btn">Add</button>
            </div>

     </form>
 {/* <button className="btn" onClick={handleFetch}>Fetch Task</button> */}

            <ul className="todoUl">
             {
                Selector.map((curr,idx)=>{
                       return (
                    <>
                    <li className="list">{idx}:{curr} <MdOutlineDeleteOutline className="del-icon" onClick={()=>handleDelete(idx)}/></li>
                    </>  
                    
                    )
                })
             }
               
            </ul>

         </div>
         </section>
     )
}