import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from 'react';
import Dashboard from "./pages/Dashboard";
import TaskPage from "./pages/TaskPage";
import Nav from "./components/Nav";

const App = () => {
  // const tasks = [
  //   {
  //     title: 'Finalize kickoff materials',
  //     description: 'make a presentation showcasing how to work with the PERN tech stack',
  //     status: 'Done',
  //     dueDate: '2023-12-05',
  //     priority: 5,
  //     progress: 100,
  //     owner: 'Edlyn',
  //     avatar: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //     id: '2022-02-25T07"36:17+0000',
  //     category: 'This month',
  //   },
  //   {
  //     title: 'Build frontend of to do list',
  //     description: 'Use react, CSS and JavaScript',
  //     status: 'Working on it',
  //     dueDate: '2023-12-10',
  //     priority: 2,
  //     progress: 70,
  //     owner: 'Edlyn',
  //     avatar: 'https://images.unsplash.com/photo-1629425733761-caae3b5f2e50?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //     id: '2022-02-13T07"36:17+0000',
  //     category: 'This month',
  //   },
  //   {
  //     title: 'Write up a listing description',
  //     description: 'Include address, amenities, price, and house description',
  //     status: 'Stuck',
  //     dueDate: '2023-12-08',
  //     priority: 3,
  //     progress: 20,
  //     owner: 'Edlyn',
  //     avatar: 'https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  //     id: '2022-02-15T07"36:17+0000',
  //     category: 'Next month',
  //   },
  // ];

  // const [taskData, setTaskData] = useState({
  //   title: '',
  //   description: '',
  //   status: 'Working on it',
  //   dueDate: new Date(),
  //   priority: 0,
  //   progress: 0,
  //   owner: '',
  //   avatar: '',
  //   id: new Date().toISOString(),
  //   category: '',
  // });
  // const [allTasks, setAllTasks] = useState(tasks);

  // const handleAdd = (e) => {
  //   e.preventDefault();

  //   if (taskData) {
  //     setAllTasks([...allTasks, {
  //       title: taskData.title,
  //       description: taskData.description,
  //       status: taskData.status,
  //       dueDate: taskData.dueDate,
  //       priority: taskData.priority,
  //       progress: taskData.progress,
  //       owner: taskData.owner,
  //       avatar: taskData.avatar,
  //       id: taskData.id,
  //       category: taskData.category
  //     }]);

  //     setTaskData({
  //       title: '',
  //       description: '',
  //       status: 'Working on it',
  //       dueDate: new Date().toISOString(),
  //       priority: 0,
  //       progress: 0,
  //       owner: '',
  //       avatar: '',
  //       id: new Date().toISOString(),
  //       category: '',
  //     });
  //   }
  // };

  // const handleDelete = (taskId) => {
  //   const updatedTasks = allTasks.filter(task => task.id !== taskId);
  //   setAllTasks(updatedTasks);
  // };

  return (
    <div className="app">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route
            path="/"
            element={<Dashboard />}
          />
          <Route
            path="/task"
            element={<TaskPage />}
          />
          <Route path="/task/:id" element={<TaskPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;