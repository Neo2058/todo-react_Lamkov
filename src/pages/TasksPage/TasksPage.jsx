import {TasksProvider} from "../../entities/todo";
import ToDo from "../../widgets/ToDo";
import './TasksPage.scss'

const TasksPage = () => {

  return (
    <TasksProvider>
      <ToDo />
    </TasksProvider>
  )
}

export default TasksPage