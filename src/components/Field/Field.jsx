import './Field.scss'

const Field = () => {

  return (
    <div className="todo__field field">
      <label
        htmlFor="new-task"
        className="field__label"
      >
        New Task Title
      </label>
      <input
        className="field__input"
        id="new-task"
        placeholder=" "
        autoComplete="off"
        data-js-todo-new-task-input
      />
    </div>
  )
}

export default Field