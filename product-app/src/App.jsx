
import Product from './components/Product.jsx'

function App() {
  return (
    <>
      <h1>Welcome to My Tech Store</h1>
      <h3>Find the best tech products at unbeatable prices!</h3>
      <Product name="Laptop" price={999.99} inStock={true} />
      <Product name="Mouse" price={29.99} inStock={false} />
      <Product name="Keyboard" price={49.99} inStock={true} />
      <Product name="Monitor" price={199.99} inStock={true} />
      <Product name="Headphones" price={149.99} inStock={false} />
    </>
  )
}

export default App

