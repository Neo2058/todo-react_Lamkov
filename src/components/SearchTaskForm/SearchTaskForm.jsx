import './SearchTaskForm.scss'
import Field from "../Field/index.js";
import {useContext} from "react";
import {TasksContext} from "../../context/TasksContext.jsx";

const  SearchTaskForm = (props) => {
  const { styles } = props

  const {
    searchQuery,
    setSearchQuery,
  } = useContext(TasksContext);

  return (
    <form
      className={styles.form}
      onSubmit={(event) => event.preventDefault()}
    >
      <Field
        className={styles.field}
        label="Поиск задачи"
        id="search-task"
        type="search"
        value={searchQuery}
        onInput={(event) => setSearchQuery(event.target.value)}
      />
    </form>
  )
}

export default SearchTaskForm