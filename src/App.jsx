import Appname from "./components/Appname.jsx"
import Addtodo from "./components/Addtodo.jsx"
import Todoitems from "./components/todoitems.jsx"
import Emptymessage from "./components/Emptymessage.jsx"
import TodoItemsContextProvider from "./store/TodoItemsContext.jsx"

function App()
{
    return (
    <TodoItemsContextProvider>
        <center className="todo-container">
            <Appname/>
            <Addtodo></Addtodo>
            <Emptymessage></Emptymessage>
            <Todoitems></Todoitems>
        </center>
    </TodoItemsContextProvider>
    );
}

export default App;