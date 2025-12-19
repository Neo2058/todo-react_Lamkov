import './AddTaskForm.scss'
import Field from "../Field/index.js";
import Button from "../Button/index.js";
import { useContext } from "react";
import { TasksContext } from "../../context/TasksContext.jsx";

const AddTaskForm = () => {

  const {
    addTask,
    newTaskTitle,
    setNewTaskTitle,
    newTaskInputRef
  } = useContext(TasksContext)

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
        label="Новая задача"
        id="new-task"
        value={newTaskTitle}
        onInput={(event) => setNewTaskTitle(event.target.value)}
        ref={newTaskInputRef}
      />
      <Button
        type="submit"
      >
        Добавить
      </Button>
    </form>
  )
}

export default AddTaskForm