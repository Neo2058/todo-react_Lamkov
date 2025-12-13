import './AddTaskForm.scss'
import Field from "../Field/index.js";
import Button from "../Button/index.js";

const AddTaskForm = () => {

  return (
    <form
      className="todo__form"
      data-js-todo-new-task-form
    >
      <Field />
      <Button />
    </form>
  )
}

export default AddTaskForm