import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutUs from './AboutUs';
import ProductList from './ProductList';
import CartItem from './CartItem';

function Home() {
const [showProducts, setShowProducts] = useState(false);

if (showProducts) {
return ( <div>
<button
className="get-started-btn"
onClick={() => setShowProducts(false)}
>
Back to Home </button>
    <ProductList />
  </div>
);

}

return ( <div className="landing-page"> <div className="landing-content"> <h1>Welcome to Paradise Nursery</h1>
    <p>
      Bring nature into your home with our beautiful collection of
      houseplants. Discover your perfect plant and create a greener,
      healthier living space.
    </p>

    <button
      className="get-started-btn"
      onClick={() => setShowProducts(true)}
    >
      Get Started
    </button>
  </div>
</div>


);
}

function App() {
return ( <BrowserRouter> <Routes>
<Route path="/" element={<Home />} />
<Route path="/about" element={<AboutUs />} />
<Route path="/plants" element={<ProductList />} />
<Route path="/cart" element={<CartItem />} /> </Routes> </BrowserRouter>
);
}

export default App;
