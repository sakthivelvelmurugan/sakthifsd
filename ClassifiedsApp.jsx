import React, { useState } from 'react';

function App() {
  const [ad, setAd] = useState('');
  const [ads, setAds] = useState([]);
  const [search, setSearch] = useState('');

  const postAd = () => {
    if (ad.trim()) {
      setAds([...ads, ad]);
      setAd('');
    }
  };

  return (
    <div>
      <h1>Classifieds App</h1>
      <input
        placeholder="Product name"
        value={ad}
        onChange={e => setAd(e.target.value)}
      />
      <button onClick={postAd}>Post Ad</button>
      <br /><br />

      <input
        placeholder="Search products"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      <h2>Available Ads</h2>
      {ads
        .filter(a => a.toLowerCase().includes(search.toLowerCase()))
        .map((a, i) => <p key={i}>{a}</p>)}
    </div>
  );
}

export default App;
