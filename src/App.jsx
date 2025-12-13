const App = () => {
  return (
    <div
      className="todo"
      data-js-todo
    >
      <div className="todo__title">To Do List</div>
      <form
        className="todo__form"
        data-js-todo-new-task-form
      >
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
        <button
          className="button"
          type="submit"
        >
          Add
        </button>
      </form>
      <form
        className="todo__form"
        data-js-todo-search-task-form
      >
        <div className="todo__field field">
          <label
            htmlFor="search-task"
            className="field__label"
          >
            Search Task
          </label>
          <input
            className="field__input"
            id="search-task"
            placeholder=" "
            autoComplete="off"
            type="search"
            data-js-todo-search-task-input
          />
        </div>
      </form>
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
      <ul
        className="todo__list"
        data-js-todo-list
      >

      </ul>
      <div
        className="todo__empty-message"
        data-js-todo-empty-message
      ></div>
    </div>
  )
}

export default App