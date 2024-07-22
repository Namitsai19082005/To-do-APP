import { useState } from "react";
import styles from "./Addtodo.module.css"
import style from "./Todoitem.module.css"
import { useContext } from "react";
import { TodoItemsContext } from "../store/TodoItemsContext";
function Addtodo()
{
  const {onaddclicked}=useContext(TodoItemsContext);

  const [todoName,settodoName]=useState("");
  const [todoDate,settodoDate]=useState("");


  const handletodochange=(event)=>{
    settodoName(event.target.value);
  };

  const handledatechange=(event)=>{
    settodoDate(event.target.value);
  };

  const handleaddclicked=()=>{
    onaddclicked(todoName,todoDate);
    settodoName("");
    settodoDate("");
  };

    return (
        <div className="container">
                <div className={`row ${style.myRow}`} >
                   <div className="col-6">
                      <input type="text" placeholder="Enter TODO here" className={styles.myInput} onChange={handletodochange} value={todoName}/>
                   </div>
                   <div className="col-4">
                     <input type="date" className={styles.myInput} onChange={handledatechange} value={todoDate}/>
                   </div>
                   <div className="col-2">
                     <button type="text"className={`btn btn-success ${style.myButton}`}  onClick={handleaddclicked}>Add</button>
                   </div>
                </div>
        </div>
    );
}

export default Addtodo;