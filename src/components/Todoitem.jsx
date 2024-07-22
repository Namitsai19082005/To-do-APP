import styles from "./Todoitem.module.css"
import { useContext } from "react";
import { TodoItemsContext } from "../store/TodoItemsContext";
function Todoitem({todoname,tododate,deleteitem})
{
   const {ondeleteclicked}=useContext(TodoItemsContext);

   const handledeleteclicked=()=>{
      ondeleteclicked(todoname,tododate)
   };

    return (
        <div className="container">
        <div className={`row ${styles.myRow}`}>
           <div className="col-6">
              {todoname}
           </div>
           <div className="col-4">
              {tododate}
           </div>
           <div className="col-2">
              <button type="button" className={`btn btn-danger ${styles.myButton}`}
              onClick={handledeleteclicked}
              >Delete</button>
           </div>
        </div>
        </div>
    );
}

export default Todoitem;