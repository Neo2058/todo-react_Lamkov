import './AddTaskForm.scss'
import Field from "../Field/index.js";
import Button from "../Button/index.js";

const AddTaskForm = (props) => {

  const {
    addTask,
    newTaskTitle,
    setNewTaskTitle,
  } = props

  const onSubmit = (event) => {
    event.preventDefault()
    addTask()
  }

  return (
    <form
      className="todo__form"
      onSubmit={onSubmit}
    >
      <Field
        className="todo__field"
        label="New Task Title"
        id="new-task"
        value={newTaskTitle}
        onInput={(event) => setNewTaskTitle(event.target.value)}
      />
      <Button
        type="submit"
      >
        Add
      </Button>
    </form>
  )
}

export default AddTaskForm