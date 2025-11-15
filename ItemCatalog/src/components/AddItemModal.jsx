import React, { useState } from 'react';

export default function AddItemModal({ onAdd, onClose }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [link, setLink] = useState('');
  const [desc, setDesc] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    onAdd({ name, price, link, desc });
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
