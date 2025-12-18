import './ToDo.scss'
import AddTaskForm from "../AddTaskForm/index.js";
import SearchTaskForm from "../SearchTaskForm/index.js";
import ToDoInfo from "../ToDoInfo/index.js";
import ToDoList from "../ToDoList/index.js";
import {useEffect, useRef, useState} from "react";
import Button from "../Button/index.js";

const ToDo = () => {

  const [tasks, setTasks] = useState(() => {
      const savedTasks = localStorage.getItem('tasks')

      if (savedTasks) {
        return JSON.parse(savedTasks)
      }

      return [
        {id: 1, title: 'Teach React', isDone: false},
        {id: 2, title: 'Write documents your padovan', isDone: true},
      ]
    })

  const [newTaskTitle, setNewTaskTitle] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  const newTaskInputRef = useRef(null)
  const firstIncompleteTaskRef = useRef(null)
  const firstIncompleteTaskId = tasks.find(({ isDone }) => !isDone)?.id

  const deleteAllTasks = () => {
    const isConfirmed = confirm('Are you sure you want to delete all tasks?')

    if (isConfirmed) {
      setTasks([])
    }
  }

  const deleteTask = (taskId) => {
    setTasks(
      tasks.filter((task) => task.id !== taskId)
    )
  }

  const toggleTaskComplete = (taskId, isDone) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return {...task, isDone}
        }
        return task
      })
    )
  }

  const addTask = () => {

    if(newTaskTitle.trim().length > 0){
      const newTask = {
        id: crypto?.randomUUID() ?? Date.now().toString(),
        title: newTaskTitle,
        isDone: false,
      }

      setTasks([...tasks, newTask])
      setNewTaskTitle('')
      setSearchQuery('')
      if (newTaskInputRef.current) {
        newTaskInputRef.current.focus()
      }
    }
  }

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  },[tasks])

  useEffect(() => {
    if (newTaskInputRef.current) {
      newTaskInputRef.current.focus()
    }
  }, [])

  const clearSearchQuery = searchQuery.trim().toLowerCase()
  const filteredTasks = clearSearchQuery.length > 0
    ? tasks.filter(({ title }) => title.toLowerCase().includes(clearSearchQuery))
    : null

  return (
    <div
      className="todo"
    >
      <h1 className="todo__title">Список задач</h1>
      <AddTaskForm
        addTask={addTask}
        newTaskTitle={newTaskTitle}
        setNewTaskTitle={setNewTaskTitle}
        newTaskInputRef={newTaskInputRef}
      />
      <SearchTaskForm
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <ToDoInfo
        total={tasks.length}
        done = {tasks.filter(({ isDone }) => isDone).length}
        onDeleteAllButtonClick={deleteAllTasks}
      />
      <Button onClick={() => firstIncompleteTaskRef.current?.scrollIntoView({behavior: 'smooth'})}>
        К первой не выполненной задаче
      </Button>
      <ToDoList
        tasks={tasks}
        filteredTasks={filteredTasks}
        firstIncompleteTaskRef={firstIncompleteTaskRef}
        firstIncompleteTaskId={firstIncompleteTaskId}
        onDeleteTaskButtonClick={deleteTask}
        onTaskCompleteChange={toggleTaskComplete}
      />
    </div>
  )
}

export default ToDo