import './SearchTaskForm.scss'
import Field from "../Field/index.js";

const SearchTaskForm = () => {

  return (
    <form
      className="todo__form"
    >
      <Field
        className="todo__field"
        label="Search Task"
        id="search-task"
        type="search"
      />
    </form>
  )
}

export default SearchTaskForm