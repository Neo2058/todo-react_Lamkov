import './ToDoInfo.scss'

const ToDoInfo = () => {

  return (
    <div className="todo__info">
      <div className="todo__total-tasks">
        Total Tasks: <span data-js-todo-total-tasks>0</span>
      </div>
      <button
        className="todo__delete-all-button"
        type="button"
        data-js-todo-delete-all-button
      >
        Delete All
      </button>
    </div>
  )
}

export default ToDoInfo