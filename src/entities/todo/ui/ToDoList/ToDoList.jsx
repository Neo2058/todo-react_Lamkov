import ToDoItem from "../ToDoItem/index.js";
import {useContext} from "react";
import {TasksContext} from "../../model/TasksContext.jsx";
import styles from './ToDoList.module.scss'

const ToDoList = (props) => {
  const { styles } = props

  const {
    tasks,
    filteredTasks,
  } = useContext(TasksContext);

  const hasTasks = tasks.length > 0
  const isEmptyFilteredTasks = filteredTasks?.length === 0

  if(!hasTasks) {
    return <div
      className={styles.emptyMessage}
    >
      Задач пока нет
    </div>
  }

  if(hasTasks && isEmptyFilteredTasks) {
    return <div
      className={styles.emptyMessage}
    >
      Задача не найдена
    </div>
  }

  return (
    <ul
      className={styles.list}
    >
      {(filteredTasks ?? tasks).map((task) => (
        <ToDoItem
          className={styles.item}
          key={task.id}
          {...task}
        />
      ))}
    </ul>
  )
}

export default ToDoList