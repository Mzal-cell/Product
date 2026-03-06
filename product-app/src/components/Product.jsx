import React, { useState } from 'react';

function Product({ name, price, inStock }) {
  const [count, setCount] = useState(0);

  return (
    <div style={{ border: '1px solid #383232', padding: '1rem', margin: '1rem', borderRadius: '5px', flexWrap: 'wrap', width: '260px', backgroundColor: '#b39e72', height: '160px', }}>
      
      <h2>{name}</h2>
      <p>Price: ksh{price}</p>
      <p style={{ color: inStock ? 'green' : 'red', fontWeight: 'bold' }}>
        {inStock ? "In Stock" : "Out of Stock"}
      </p>
      <button onClick={() => setCount(count + 1)}>
        Add to Cart ({count})
      </button>
    </div>
  );
}