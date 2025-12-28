import AddTaskForm from "../AddTaskForm/index.js";
import SearchTaskForm from "../SearchTaskForm/index.js";
import ToDoInfo from "../ToDoInfo/index.js";
import ToDoList from "../ToDoList/index.js";
import Button from "../Button/index.js";
import {useContext} from "react";
import {TasksContext} from "../../context/TasksContext.jsx";
import styles from './ToDo.module.scss'

const ToDo = () => {
  const { firstIncompleteTaskRef } = useContext(TasksContext)

  return (
     <div
       className={styles.todo}
     >
       <h1 className={styles.title}>Список задач</h1>
       <AddTaskForm styles={styles} />
       <SearchTaskForm styles={styles} />
       <ToDoInfo styles={styles} />
       <Button onClick={() => firstIncompleteTaskRef.current?.scrollIntoView({behavior: 'smooth'})}>
         К первой не выполненной задаче
       </Button>
       <ToDoList styles={styles} />
     </div>
  )
}

export default ToDo