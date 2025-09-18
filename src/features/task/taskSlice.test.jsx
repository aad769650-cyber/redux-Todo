import { store } from "../../store";
import { addTask, deleteTask } from "./taskSlice";

console.log("initial",store.getState());

store.dispatch(addTask("BuySomeThing"));
store.dispatch(addTask("BuyMango"));
store.dispatch(addTask("BuyApple"));
store.dispatch(addTask("Buy Nothing"));
store.dispatch(addTask("BuySomeThing"));

console.log("updated",store.getState());
store.dispatch(deleteTask(1));
console.log("deleted",store.getState());

