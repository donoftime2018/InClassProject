import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import AddItemModal from './AddItemModal';
import ItemCard from './ItemCard';

export default function Dashboard() {
  const { user, logout } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const [items, setItems] = useState([]);

  function addItem(item) {
    setItems([...items, item]);
    setShowModal(false);
  }

  return (
    <div>
      <div className="navbar">
        <span>Welcome, <b>{user?.username}</b></span>
        <button onClick={logout}>Logout</button>
      </div>
      <button onClick={() => setShowModal(true)}>Add an Item</button>
      <h3>Items:</h3>
      {items.map((item, idx) => <ItemCard key={idx} {...item} />)}
      {showModal && <AddItemModal onAdd={addItem} onClose={() => setShowModal(false)} />}
    </div>
  );
}
