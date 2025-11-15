import React from 'react';

export default function ItemCard({ name, price, link, desc }) {
  return (
    <div className="item-card">
      <h4>{name}</h4>
      <div>Price: {price}</div>
      {link && <div><a href={link} target="_blank" rel="noopener noreferrer">Link</a></div>}
      <div>{desc}</div>
    </div>
  );
}
