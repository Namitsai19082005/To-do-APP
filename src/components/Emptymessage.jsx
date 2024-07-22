import styles from "./Emptymessage.module.css"
import { useContext } from "react";
import { TodoItemsContext } from "../store/TodoItemsContext";
function Emptymessage()
{
    const {todoitems}=useContext(TodoItemsContext);
    if(todoitems.length==0)
    {
        return (
            <p className={styles.emptymessage}>Welcome to TODO APP<br/>Add some Todo</p>
        );
    }
}

export default Emptymessage;