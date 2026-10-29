import React from 'react';

function App() {
  return (
    <div>
      <h1>My Portfolio</h1>

      <h2>About Me</h2>
      <p>I am a Full Stack Developer.</p>

      <h2>Skills</h2>
      <p>HTML, CSS, JavaScript, React, Node.js, MongoDB</p>

      <h2>Projects</h2>
      <p>Personal Portfolio Website</p>

      <h2>Contact</h2>
      <form>
        <input placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Message" required />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default App;
