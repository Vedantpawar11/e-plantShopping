import React, { useState } from 'react';
import './App.css';
import ProductList from './ProductList';

function App() {
const [showProducts, setShowProducts] = useState(false);

return ( <div className="App">
{!showProducts ? ( <div className="landing-page"> <h1>Welcome to Paradise Nursery</h1>
      <p>
        Discover beautiful plants and bring nature into your home.
      </p>

      <button onClick={() => setShowProducts(true)}>
        Get Started
      </button>
    </div>
  ) : (
    <div className="product-page">
      <button onClick={() => setShowProducts(false)}>
        Back to Home
      </button>

      <ProductList />
    </div>
  )}
</div>

);
}

export default App;




