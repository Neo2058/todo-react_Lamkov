import './ToDo.scss'
import AddTaskForm from "../AddTaskForm/index.js";
import SearchTaskForm from "../SearchTaskForm/index.js";
import ToDoInfo from "../ToDoInfo/index.js";
import ToDoList from "../ToDoList/index.js";

const ToDo = () => {

  const tasks = [

  ]

  return (
    <div
      className="todo"
    >
      <h1 className="todo__title">To Do List</h1>
      <AddTaskForm />
      <SearchTaskForm />
      <ToDoInfo
        total={tasks.length}
        done = {tasks.filter(({ isDone }) => isDone).length}
      />
      <ToDoList />
    </div>
  )
}

export default ToDo