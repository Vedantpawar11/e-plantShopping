function Home() {
const [showProducts, setShowProducts] = useState(false);

if (showProducts) {
return ( <div className="app-container">
<button
className="get-started-btn"
onClick={() => setShowProducts(false)}
>
Back to Home </button>

    <ProductList />
  </div>
);


}

return ( <div className="app-container"> <div className="landing-page"> <div className="landing-content"> <h1>Welcome to Paradise Nursery</h1>

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
</div>

);
}
