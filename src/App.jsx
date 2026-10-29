function Home() {
const [showProductList, setShowProductList] = useState(false);

const handleGetStartedClick = () => {
setShowProductList(true);
};

if (showProductList) {
return ( <div className="app-container">
<button
className="get-started-btn"
onClick={() => setShowProductList(false)}
>
Back to Home </button>

```
    <ProductList />
  </div>
);
```

}

return ( <div className="app-container"> <div className="landing-page background-image"> <div className="landing-content"> <h1>Welcome to Paradise Nursery</h1>

```
      <p>
        Bring nature into your home with our beautiful collection of
        houseplants. Discover your perfect plant and create a greener,
        healthier living space.
      </p>

      <button
        className="get-started-btn"
        onClick={handleGetStartedClick}
      >
        Get Started
      </button>
    </div>
  </div>
</div>
```

);
}
