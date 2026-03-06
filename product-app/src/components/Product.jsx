
function Product({ name, price, inStock }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', margin: '1rem', borderRadius: '8px' }}>
      <h2>{name}</h2>
      <p>Price: ${price}</p>
      <p style={{ color: inStock ? 'green' : 'red', fontWeight: 'bold' }}>
        {inStock ? "In Stock" : "Out of Stock"}
      </p>
    </div>
  );
}

export default Product;
