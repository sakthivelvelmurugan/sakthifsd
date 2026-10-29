import React, { useState } from 'react';

function App() {
  const [post, setPost] = useState('');
  const [posts, setPosts] = useState([]);

  const addPost = () => {
    if (post.trim()) {
      setPosts([post, ...posts]);
      setPost('');
    }
  };

  return (
    <div>
      <h1>Microblog</h1>
      <input
        value={post}
        onChange={e => setPost(e.target.value)}
        placeholder="Write a post"
      />
      <button onClick={addPost}>Post</button>

      <h2>Timeline</h2>
      {posts.map((p, i) => <p key={i}>{p}</p>)}
    </div>
  );
}

export default App;
