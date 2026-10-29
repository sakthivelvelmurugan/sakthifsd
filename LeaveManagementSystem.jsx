import React, { useState } from 'react';

function App() {
  const [type, setType] = useState('Casual Leave');
  const [leaves, setLeaves] = useState([]);

  return (
    <div>
      <h1>Leave Management System</h1>
      <h2>Available Leave Balance: 12 Days</h2>

      <select value={type} onChange={e => setType(e.target.value)}>
        <option>Casual Leave</option>
        <option>Sick Leave</option>
        <option>Earned Leave</option>
      </select>
      <button onClick={() => setLeaves([...leaves, type])}>Apply Leave</button>

      <h2>Leave History</h2>
      {leaves.map((l, i) => <p key={i}>{l} - Pending</p>)}
    </div>
  );
}

export default App;
