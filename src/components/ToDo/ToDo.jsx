import './ToDo.scss'
import AddTaskForm from "../AddTaskForm/index.js";
import SearchTaskForm from "../SearchTaskForm/index.js";
import ToDoInfo from "../ToDoInfo/index.js";
import ToDoList from "../ToDoList/index.js";

const ToDo = () => {

  const tasks = [

  ]

  const deleteAllTasks = () => {
  }

  const deleteTask = (taskId) => {

  }

  const toggleTaskComplete = (taskId, isDone) => {

  }

  const filterTask = (query) => {
    console.log(`Поиск: ${query}`)
  }

  const addTask = () => {
    console.log("Task added")
  }

  return (
    <div
      className="todo"
    >
      <h1 className="todo__title">To Do List</h1>
      <AddTaskForm addTask={addTask} />
      <SearchTaskForm onSearchInput={filterTask} />
      <ToDoInfo
        total={tasks.length}
        done = {tasks.filter(({ isDone }) => isDone).length}
        onDeleteAllButtonClick={deleteAllTasks}
      />
      <ToDoList
        task={tasks}
        onDeleteTaskButtonClick={deleteTask}
        onTaskCompleteChange={toggleTaskComplete}
      />
    </div>
  )
}

export default ToDo