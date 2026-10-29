import React, { useState } from 'react';

function App() {
  const [title, setTitle] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (title.trim()) {
      setTasks([...tasks, { title, status: 'Pending' }]);
      setTitle('');
    }
  };

  const updateStatus = (i, status) =>
    setTasks(tasks.map((t, j) => (i === j ? { ...t, status } : t)));

  return (
    <div>
      <h1>Project Management Dashboard</h1>
      <input
        placeholder="Task Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>

      {tasks.map((task, i) => (
        <p key={i}>
          {task.title}{' '}
          <select
            value={task.status}
            onChange={e => updateStatus(i, e.target.value)}
          >
            <option>Pending</option>
            <option>InProgress</option>
            <option>Completed</option>
          </select>
        </p>
      ))}
    </div>
  );
}

export default App;
