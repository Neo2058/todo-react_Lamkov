import './SearchTaskForm.scss'

const SearchTaskForm = () => {

  return (
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
  )
}

export default SearchTaskForm