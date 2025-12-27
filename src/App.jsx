import TasksPage from "./pages/TasksPage/index.js";
import TaskPage from "./pages/TaskPage/index.js";
import Router from "./Router.jsx";

const App = () => {
  const routes = {
    '/': TasksPage,
    '/tasks/:id': TaskPage,
    '*': () => <div>404 Page Not Found</div>,
  }

  return (
    <Router routes={routes} />
  )
}

export default App