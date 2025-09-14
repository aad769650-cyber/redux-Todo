// import { createStore } from "redux";

import { composeWithDevTools } from "@redux-devtools/extension";
import { applyMiddleware, createStore } from "redux";
import { thunk } from "redux-thunk";
// import { composeWithDevTools } from 'redux-devtools-extension';
// //  const Store=()=>{
//     console.log("hello redux");
    

// const initialState={
//     task:[],
// }

// const Add_task="task/add";
// const Delete_task="task/delete";
// //creator function
// const addTask=(data)=>{
// return({
//     type:Add_task,
//     payload:data,
// })
// }
// const deleteTask=(data)=>{
//     return(
//         {
//             type:Delete_task,
//             payload:data

//         }
//     )
// }










// //reducer fun


//     const reducer=(state=initialState,action)=>{
//         // console.log(state);
// const updated=state.task.filter((curr,idx)=>{
//     return(idx!==action.payload)
// })        
// switch(action.type){
//     case Add_task:
//         return (
//             {
//                 ...state,task:[...state.task,action.payload]
//             }
//         )
     
       

//         case Delete_task:

//         // const updated=state.task.filter((curr,idx)=>{return(idx!==action.payload)})

//         return(
// {
//     task:updated,
// }
//         )
//         // break;
// // console.log(updated);


      

//         default:
//             return state;
// }

//     };



//  export const store=createStore(reducer);

// console.log("initial",store.getState());


// store.dispatch(addTask("Buy Something"))
// console.log("updated",store.getState());


// store.dispatch({
//     type:Add_task,
//     payload:"Buy Apple"
// })
// console.log("updated",store.getState());



// store.dispatch(deleteTask(1))
// console.log("delete",store.getState());


// // }
const initialState={
    task:[]
}

const Add_Task="task/add";
const Delete_Task="task/delete";
const Fetch_Data="task/fetch";
const reducer=(state=initialState,action)=>{

const updated=state.task.filter((curr,idx)=>{
    console.log("l",action.payload);
    
    return idx!==action.payload;
})


switch(action.type){
    case Add_Task:
        return (
            {
                ...state,task:[...state.task,action.payload]
            }
        )

            case Delete_Task:
        return (
{task:updated}

        );


        case Fetch_Data:
            return(
                {...state,task:[...state.task,...action.payload]}
            )
        default:
            return state
}


}


export const addTask=(data)=>{
    return ({
        type:Add_Task,
        payload:data,
    })
}

export const deleteTask=(id)=>{
    return ({
        type:Delete_Task,
        payload:id,
    })
}


export const store=createStore(reducer,composeWithDevTools(applyMiddleware(thunk)))



export const fetchTask=()=>{
return async (dispatch) => {
    try {
        
const res=await fetch(` https://jsonplaceholder.typicode.com/posts?_limit=3`)
const data=await res.json();
console.log(data);

console.log(data.map((curr)=>curr.title));

dispatch({type:Fetch_Data,payload:data.map((curr)=>curr.title)})

    } catch (error) {
        console.log(error);
        
    }
}
}










// console.log("initial",store.getState());

// store.dispatch(addTask("BuySomeThing"));
// store.dispatch(addTask("BuyMango"));
// store.dispatch(addTask("BuyApple"));
// store.dispatch(addTask("Buy Nothing"));
// store.dispatch(addTask("BuySomeThing"));

// console.log("updated",store.getState());
// store.dispatch(deleteTask(0));
// console.log("deleted",store.getState());

