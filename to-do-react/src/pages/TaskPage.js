import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Rating } from 'primereact/rating';
import { InputTextarea } from 'primereact/inputtextarea';
import { InputText } from 'primereact/inputtext';
import { Slider } from 'primereact/slider';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { useNavigate, useParams } from 'react-router-dom';
import "../styles/TaskPage.sass";

const TaskPage = () => {
  const [editMode, setEditMode] = useState(true);
  const [taskData, setTaskData] = useState({
    title: '',
    description: '',
    status: 'Working on it',
    duedate: new Date(),
    priority: 0,
    progress: 0,
    owner: '',
    avatar: '',
    id: 0,
    category: '',
  });

  const navigate = useNavigate();
  const { id } = useParams();
  
  const handleChange = ({ target }) => {
    const { value, name } = target;
    
    const updatedValue = name === 'duedate' ? new Date(value) : value;
    
    setTaskData((prev) => ({
      ...prev,
      [name]: updatedValue,
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editMode) {
      try {
        const response = await axios.put(`http://edlynshih.com/api/todo/${id}`, taskData);
        const success = response.status === 200;
        if (success) {
          navigate('/');
        }
      } catch (err) {
        console.log(err)
      }
    } else {
      try {
        const response = await axios.post('http://edlynshih.com/api/todos', taskData);
        const success = response.status === 200;
        if (success) {
          navigate('/');
        }
      } catch (err) {
        console.log(err)
      }
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://edlynshih.com/api/todo/${id}`);
      setTaskData(response.data[0]);
    } catch (error) {
      console.error('Error fetching task data:', error);
    }
  };

  useEffect(() => {
    setEditMode(!!id);

    if (id) {
      fetchData()
    } else {
      setTaskData({
        title: '',
        description: '',
        status: 'Working on it',
        duedate: new Date(),
        priority: 0,
        progress: 0,
        owner: '',
        avatar: '',
        id: 0,
        category: '',
      })
    }
  }, [id])

  const handleProgressChange = (e) => {
    const value = e.value;

    setTaskData((prev) => ({
      ...prev,
      progress: value
    }));
  };

  const categories = ['This month', 'Next month'];

  const statusOptions = [
    { label: "Done", value: "Done" },
    { label: "Working on it", value: "Working on it" },
    { label: "Stuck", value: "Stuck" },
  ];

  return (
    <div className="task-page">
      <h1>{editMode ? 'Update your Task' : 'Create a Task'}</h1>
      <div className="task-container">
        <form onSubmit={handleSubmit}>
          <section>
            <label htmlFor="title">Title</label>
            <InputText
              id="title"
              name="title"
              type="text"
              onChange={handleChange}
              required
              value={taskData.title}
            />

            <label htmlFor="description">Description</label>
            <InputTextarea
              id="description"
              name="description"
              type="text"
              onChange={handleChange}
              required
              value={taskData.description}
            />

            <label htmlFor='category'>Category</label>
            <Dropdown
              id='category'
              name="category"
              value={taskData.category}
              onChange={handleChange}
              options={categories?.map((category) => (
                category
              ))}
              editable
            />

            <label htmlFor="priority">Priority</label>
            <Rating
              id='priority'
              name='priority'
              value={taskData.priority}
              onChange={handleChange}
              cancel={false}
              required
            />

            <label htmlFor="duedate">Due Date</label>
            <Calendar
              id="duedate"
              name="duedate"
              value={taskData.duedate}
              onChange={handleChange}
            />

            {editMode &&
              <>
                <label htmlFor="progress">Progress</label>
                <InputText
                  id='progress'
                  name='progress'
                  value={taskData.progress}
                  onChange={handleChange}
                />
                <Slider
                  id='progress'
                  name='progress'
                  value={taskData.progress}
                  onChange={handleProgressChange}
                />

                <label htmlFor="status">Status</label>
                <Dropdown
                  id='status'
                  name='status'
                  value={taskData.status}
                  onChange={handleChange}
                  options={statusOptions}
                />
              </>
            }
            <div>
              <input className='submit-button' type='submit' />
              <button className='cancel-button' onClick={() => { navigate('/') }} type='cancel'>Cancel</button>
            </div>
          </section>
          <section>
            <label htmlFor='owner'>Owner</label>
            <InputText
              id='owner'
              name='owner'
              value={taskData.owner}
              onChange={handleChange}
              required
            />

            <label htmlFor='avatar'>Avatar</label>
            <InputText
              id='avatar'
              name='avatar'
              value={taskData.avatar}
              onChange={handleChange}
              type='url'
            />
            <div className='img-preview'>
              {taskData.avatar && (
                <img src={taskData.avatar} alt='profile preview' />
              )}
            </div>
          </section>
        </form>
      </div>
    </div >
  )
}

export default TaskPage;