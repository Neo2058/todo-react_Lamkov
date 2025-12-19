import './ToDoList.scss'
import ToDoItem from "../ToDoItem/index.js";
import {useContext} from "react";
import {TasksContext} from "../../context/TasksContext.jsx";

const ToDoList = () => {
  const {
    tasks,
    filteredTasks,
  } = useContext(TasksContext);

  const hasTasks = tasks.length > 0
  const isEmptyFilteredTasks = filteredTasks?.length === 0

  if(!hasTasks) {
    return <div
      className="todo__empty-message"
    >
      Задач пока нет
    </div>
  }

  if(hasTasks && isEmptyFilteredTasks) {
    return <div
      className="todo__empty-message"
    >
      Задача не найдена
    </div>
  }

  return (
    <ul
      className="todo__list"
    >
      {(filteredTasks ?? tasks).map((task) => (
        <ToDoItem
          className="todo__item"
          key={task.id}
          {...task}
        />
      ))}
    </ul>
  )
}

export default ToDoList