import React, { useState } from 'react';

function App() {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);

  const addTask = () => {
    if (task.trim()) {
      setTodos([...todos, task]);
      setTask('');
    }
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <input
        value={task}
        onChange={e => setTask(e.target.value)}
        placeholder="Enter task"
      />
      <button onClick={addTask}>Add</button>

      {todos.map((t, i) => (
        <p key={i}>
          {t}{' '}
          <button onClick={() => setTodos(todos.filter((_, j) => i !== j))}>
            Delete
          </button>
        </p>
      ))}
    </div>
  );
}

export default App;
