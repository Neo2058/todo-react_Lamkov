import './ToDoList.scss'
import ToDoItem from "../ToDoItem/index.js";

const ToDoList = (props) => {
  const {
    tasks = [],
    onDeleteTaskButtonClick,
    onTaskCompleteChange,
  } = props

  const hasTasks = true

  if(!hasTasks) {
    return <div
      className="todo__empty-message"
    ></div>
  }

  return (
    <ul
      className="todo__list"
    >
      {tasks.map((task) => (
        <ToDoItem
          className="todo__item"
          key={task.id}
          onDeleteTaskButtonClick={onDeleteTaskButtonClick}
          {...task}
        />
      ))}
    </ul>
  )
}

export default ToDoList