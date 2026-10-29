import React, { useState } from 'react';

function App() {
  const questions = [
    'What is your name?',
    'What is your age?',
    'What is your favourite subject?',
    'Are you satisfied with our service?',
    'Any suggestions?'
  ];

  const [answers, setAnswers] = useState({});

  return (
    <div>
      <h1>Survey Application</h1>
      {questions
        .sort(() => Math.random() - 0.5)
        .slice(0, 5)
        .map(q => (
          <p key={q}>
            {q}<br />
            <input
              onChange={e => setAnswers({ ...answers, [q]: e.target.value })}
            />
          </p>
        ))}
      <button onClick={() => alert(JSON.stringify(answers))}>Submit</button>
    </div>
  );
}

export default App;
