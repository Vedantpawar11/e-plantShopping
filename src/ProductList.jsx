import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from './CartSlice';

const plantCategories = [
{
category: 'Air Purifying Plants',
plants: [
{ id: 1, name: 'Snake Plant', price: 299, image: 'https://images.unsplash.com/photo-1593482892290-f54927ae1bb6?w=400' },
{ id: 2, name: 'Peace Lily', price: 349, image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=400' },
{ id: 3, name: 'Spider Plant', price: 249, image: 'https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=400' },
{ id: 4, name: 'Areca Palm', price: 499, image: 'https://images.unsplash.com/photo-1597055181300-1c9b4b7b7c84?w=400' },
{ id: 5, name: 'Rubber Plant', price: 399, image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400' },
{ id: 6, name: 'Boston Fern', price: 279, image: 'https://images.unsplash.com/photo-1459156212016-c812468e2115?w=400' },
],
},
{
category: 'Succulents and Cacti',
plants: [
{ id: 7, name: 'Aloe Vera', price: 199, image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400' },
{ id: 8, name: 'Jade Plant', price: 249, image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400' },
{ id: 9, name: 'Echeveria', price: 179, image: 'https://images.unsplash.com/photo-1459156212016-c812468e2115?w=400' },
{ id: 10, name: 'Golden Barrel Cactus', price: 299, image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400' },
{ id: 11, name: 'Haworthia', price: 229, image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400' },
{ id: 12, name: 'String of Pearls', price: 349, image: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=400' },
],
},
{
category: 'Flowering and Decorative Plants',
plants: [
{ id: 13, name: 'Orchid', price: 599, image: 'https://images.unsplash.com/photo-1566926004489-cc6b5e6b3b2f?w=400' },
{ id: 14, name: 'Anthurium', price: 449, image: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=400' },
{ id: 15, name: 'African Violet', price: 299, image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400' },
{ id: 16, name: 'Calathea', price: 399, image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400' },
{ id: 17, name: 'Monstera', price: 549, image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400' },
{ id: 18, name: 'Pothos', price: 249, image: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=400' },
],
},
];

function ProductList() {
const dispatch = useDispatch();

const cartItems = useSelector((state) => state.cart.items);

const cartCount = cartItems.reduce(
(total, item) => total + item.quantity,
0
);

const handleAddToCart = (plant) => {
dispatch(addToCart(plant));
};

return ( <div className="product-page"> <nav style={styles.navbar}> <Link to="/" style={styles.brand}>
Paradise Nursery </Link>

```
    <div style={styles.navLinks}>
      <Link to="/" style={styles.link}>Home</Link>
      <Link to="/plants" style={styles.link}>Plants</Link>
      <Link to="/cart" style={styles.cartLink}>
        🛒 Cart ({cartCount})
      </Link>
    </div>
  </nav>

  <header style={styles.header}>
    <h1>Our Houseplant Collection</h1>
    <p>Bring nature home with our beautiful collection of plants.</p>
  </header>

  {plantCategories.map((category) => (
    <section key={category.category} style={styles.category}>
      <h2 style={styles.categoryTitle}>{category.category}</h2>

      <div style={styles.grid}>
        {category.plants.map((plant) => {
          const alreadyAdded = cartItems.some(
            (item) => item.id === plant.id
          );

          return (
            <article key={plant.id} style={styles.card}>
              <img
                src={plant.image}
                alt={plant.name}
                style={styles.image}
              />

              <h3>{plant.name}</h3>

              <p style={styles.price}>₹{plant.price}</p>

              <button
                type="button"
                disabled={alreadyAdded}
                onClick={() => handleAddToCart(plant)}
                style={{
                  ...styles.button,
                  backgroundColor: alreadyAdded ? '#888' : '#2e7d32',
                  cursor: alreadyAdded ? 'not-allowed' : 'pointer',
                }}
              >
                {alreadyAdded ? 'Added to Cart' : 'Add to Cart'}
              </button>
            </article>
          );
        })}
      </div>
    </section>
  ))}
</div>
```

);
}

const styles = {
navbar: {
display: 'flex',
justifyContent: 'space-between',
alignItems: 'center',
flexWrap: 'wrap',
gap: '15px',
padding: '18px 5%',
backgroundColor: '#1b5e20',
color: 'white',
},
brand: {
color: 'white',
fontSize: '24px',
fontWeight: 'bold',
textDecoration: 'none',
},
navLinks: {
display: 'flex',
alignItems: 'center',
flexWrap: 'wrap',
gap: '20px',
},
link: {
color: 'white',
textDecoration: 'none',
},
cartLink: {
color: 'white',
textDecoration: 'none',
fontWeight: 'bold',
},
header: {
textAlign: 'center',
padding: '35px 15px',
backgroundColor: '#e8f5e9',
},
category: {
padding: '25px 5%',
},
categoryTitle: {
color: '#1b5e20',
marginBottom: '20px',
},
grid: {
display: 'grid',
gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
gap: '22px',
},
card: {
border: '1px solid #ddd',
borderRadius: '10px',
padding: '15px',
textAlign: 'center',
boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
},
image: {
width: '100%',
height: '180px',
objectFit: 'cover',
borderRadius: '8px',
},
price: {
fontSize: '18px',
fontWeight: 'bold',
color: '#2e7d32',
},
button: {
width: '100%',
padding: '10px',
color: 'white',
border: 'none',
borderRadius: '5px',
marginTop: '10px',
},
};

export default ProductList;
