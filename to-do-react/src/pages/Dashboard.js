import React, { useEffect, useState } from 'react';
import axios from 'axios'
import TaskCard from "../components/TaskCard";
import "../styles/Dashboard.sass";

const Dashboard = () => {
  const [allTasks, setAllTasks] = useState(null);

  const getData = async () => {
    try {
      const response = await axios.get('http://edlynshih.com/api/todos');
      const data = response.data;
      setAllTasks(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  useEffect(() => { 
    getData(); 
  }, []);

  const colors = [
    "#DEDAF4",
    "#D9EDF8",
    "#E4F1EE",
    "#FDFFB6",
    "#FFD6A5",
    "#FFADAD",
  ]

  const handleDelete = async (taskId) => {
    try {
      await axios.delete(`http://edlynshih.com/api/todo/${taskId}`);
      setAllTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  }

  //getting all the unique categories and putting it in an array
  const uniqueCategories = [
    ...new Set(allTasks?.map((task) => task.category))
  ];

  return (
    <div className="dashboard">
      <div className="task-container">
        <h1>My Projects!!</h1>

        {allTasks && uniqueCategories?.map((uniqueCategory, uniqueCategoryIndex) => (
          <div key={uniqueCategoryIndex}>
            <h3>{uniqueCategory}</h3>
            <div className="heading-bar">
              <div></div>
              <div>Owner</div>
              <div>Status</div>
              <div>Description</div>
              <div>Progress</div>
              <div>Due Date</div>
              <div>Priority</div>
            </div>
            {allTasks.filter(task => task.category === uniqueCategory)
              .map((task, taskIndex) => (
                <TaskCard
                  key={taskIndex}
                  color={colors[uniqueCategoryIndex]}
                  task={task}
                  onDelete={() => handleDelete(task.id)}
                />
              ))
            }
          </div>
        ))}
      </div>
    </div>
  )
}

export default Dashboard;