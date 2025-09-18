import { createSlice } from "@reduxjs/toolkit";

 const initialState={
    task:[]
}

 export const slice=createSlice({
    name:"task",
    initialState,
    reducers:{
        addTask(state,action){
            console.log(state.task,action);
            
        state.task.push(action.payload)    
        },
        deleteTask(state,action){
                        console.log(state.task,action.payload);
            
            
          state.task=state.task.filter((curr,idx)=>{
            console.log(idx!==action.payload);
            
                return idx!==action.payload})
        }
        
    
    
    }
})

console.log("slice",slice);

export const {addTask,deleteTask}=slice.actions
console.log(addTask,deleteTask);

