import { createContext } from "react";
import { useReducer } from "react"

export const TodoItemsContext=createContext({
    todoItems: [],
    onaddclicked: ()=>{},
    ondeleteclicked:()=>{},
});


const TodoItemsContextProvider=({children})=>{

    const todoItemsreducer=(currtodoItems,action)=>{
        let newtodoItems=currtodoItems;
        if(action.type==="NEW_ITEM")
        {
            let newtodoitem={
                todoname: action.payload.todoName,
                tododate: action.payload.todoDate
            };
            newtodoItems=[...currtodoItems,newtodoitem];
        }
        else if(action.type==="DELETE_ITEM")
        {
            let newdeleteitem={
                todoname: action.payload.todoName,
                tododate: action.payload.todoDate
             };
             newtodoItems=currtodoItems.filter(item=>!(item.todoname===newdeleteitem.todoname && item.tododate===newdeleteitem.tododate));
        }
        return newtodoItems;
    }
    


    const [todoItems,dispatchtodoItems]=useReducer(todoItemsreducer,[]);


    const onaddclicked=(todoName,todoDate)=>{

        const addnewitem={
            type:"NEW_ITEM",
            payload:
            {
                todoName,
                todoDate
            }
        };
        dispatchtodoItems(addnewitem);
    }

   const ondeleteclicked=(todoName,todoDate)=>{

    const deleteitem={
       type:"DELETE_ITEM",
       payload:
       {
            todoName,
            todoDate
       }
    }
    dispatchtodoItems(deleteitem);
   };


   return (
    <TodoItemsContext.Provider value={{
        todoitems:todoItems,
        onaddclicked,
        ondeleteclicked
    }}>{children}</TodoItemsContext.Provider>
   );

};

export default TodoItemsContextProvider;