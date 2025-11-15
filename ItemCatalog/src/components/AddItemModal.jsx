import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import axios from 'axios';

export default function AddItemModal({ onAdd, onClose }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [link, setLink] = useState('');
  const [desc, setDesc] = useState('');
  const user = useAuth()

  // console.log(user)

  function handleSubmit(e) {
    e.preventDefault();
      console.log(user.user.username)
    axios.post(`${import.meta.env.VITE_SERVER_URL}` + "/items/addItem", {name: name, description: desc, price: price, site: link, userName: user.user.username}).then(
      (res)=>{
        if (res.status === 200)
        {
          onClose()
        }
    }).catch((err)=>{
        alert(err.response.data.message);
        return false;
    })

  }

  return (
    <div className="modal-bg">
      <div className="modal" style={{ maxWidth: '500px', width: '95%', margin: '0 auto' }}>
        <h2 style={{ margin: 0, marginBottom: '1em', textAlign: 'center' }}>Add Item</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Item Name" value={name} onChange={e => setName(e.target.value)} />
          <input type="text" placeholder="Price" value={price} onChange={e => setPrice(e.target.value)} />
          <input type="text" placeholder="Link" value={link} onChange={e => setLink(e.target.value)} />
          <input type="text" placeholder="Description" value={desc} onChange={e => setDesc(e.target.value)} />
          <div style={{ marginTop: '1.3em', display: 'flex', gap: '1em' }}>
            <button type="submit">Add to Catalog</button>
            <button type="button" style={{ background: '#646cff', color: 'white' }} onClick={onClose}>
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
