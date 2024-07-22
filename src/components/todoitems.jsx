import Todoitem from "./Todoitem.jsx"
import { useContext } from "react";
import { TodoItemsContext } from "../store/TodoItemsContext.jsx";
const Todoitems=({})=>{

    const {todoitems}=useContext(TodoItemsContext);

    return (
        <>
        {todoitems.map((item)=>(<Todoitem todoname={item.todoname} tododate={item.tododate} ></Todoitem>))}
        </>
    );
}

export default Todoitems;