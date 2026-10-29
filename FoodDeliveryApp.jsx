import React, { useState } from 'react';

function App() {
  const [orders, setOrders] = useState([]);
  const foods = ['Pizza', 'Burger', 'Biriyani'];

  return (
    <div>
      <h1>Food Delivery App</h1>

      <h2>Menu</h2>
      {foods.map(food => (
        <p key={food}>
          {food}{' '}
          <button onClick={() => setOrders([...orders, food])}>Order</button>
        </p>
      ))}

      <h2>Order History</h2>
      {orders.map((order, i) => <p key={i}>{order}</p>)}
    </div>
  );
}

export default App;
