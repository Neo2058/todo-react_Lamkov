import './ToDo.scss'
import AddTaskForm from "../AddTaskForm/index.js";
import SearchTaskForm from "../SearchTaskForm/index.js";
import ToDoInfo from "../ToDoInfo/index.js";
import ToDoList from "../ToDoList/index.js";
import Button from "../Button/index.js";
import {useContext} from "react";
import {TasksContext} from "../../context/TasksContext.jsx";

const ToDo = () => {
  const { firstIncompleteTaskRef } = useContext(TasksContext)

  return (
     <div
       className="todo"
     >
       <h1 className="todo__title">Список задач</h1>
       <AddTaskForm />
       <SearchTaskForm />
       <ToDoInfo />
       <Button onClick={() => firstIncompleteTaskRef.current?.scrollIntoView({behavior: 'smooth'})}>
         К первой не выполненной задаче
       </Button>
       <ToDoList />
     </div>
  )
}

export default ToDo