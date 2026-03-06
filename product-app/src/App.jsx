
import Product from './component/Product';

function App() {
  const productData = [
    { id: 1, name: "Mechanical Keyboard", price: 120, inStock: true },
    { id: 2, name: "Ergonomic Mouse", price: 85, inStock: false },
    { id: 3, name: "Ultrawide Monitor", price: 450, inStock: true },
    { id: 4, name: "USB-C Hub", price: 45, inStock: true },
  ];

  return (
    <div style={{ padding: '2rem' }}>
      <h1>My Tech Shop</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {productData.map((item) => (
          <Product 
            key={item.id} 
            name={item.name} 
            price={item.price} 
            inStock={item.inStock} 
          />
        ))}
      </div>
    </div>
  );
}

export default Product;

