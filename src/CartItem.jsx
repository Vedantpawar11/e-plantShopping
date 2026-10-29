import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
updateQuantity,
removeItem,
selectCartCount,
selectCartTotal,
} from './CartSlice';

function CartItem() {
const dispatch = useDispatch();

const cartItems = useSelector((state) => state.cart.items);
const cartCount = useSelector(selectCartCount);
const totalAmount = useSelector(selectCartTotal);

// Increase the quantity of a cart item.
const handleIncrement = (item) => {
dispatch(
updateQuantity({
id: item.id,
quantity: item.quantity + 1,
})
);
};

// Decrease the quantity and remove the item at zero.
const handleDecrement = (item) => {
if (item.quantity <= 1) {
dispatch(removeItem(item.id));
} else {
dispatch(
updateQuantity({
id: item.id,
quantity: item.quantity - 1,
})
);
}
};

// Remove an item from the cart.
const handleRemove = (item) => {
dispatch(removeItem(item.id));
};

return ( <div className="cart-container" style={styles.page}> <nav className="navbar" style={styles.navbar}> <Link to="/" style={styles.brand}>
Paradise Nursery </Link>

```
    <div style={styles.navLinks}>
      <Link to="/" style={styles.navLink}>Home</Link>
      <Link to="/plants" style={styles.navLink}>Plants</Link>
      <Link to="/cart" style={styles.navLink}>
        🛒 Cart
        <span className="cart_quantity_count">{cartCount}</span>
      </Link>
    </div>
  </nav>

  <main style={styles.container}>
    <h1 style={styles.heading}>Shopping Cart</h1>

    {cartItems.length === 0 ? (
      <div style={styles.emptyCart}>
        <h2>Your cart is empty!</h2>
        <p>Discover beautiful plants for your home.</p>

        <Link to="/plants" style={styles.continueButton}>
          Continue Shopping
        </Link>
      </div>
    ) : (
      <>
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item" style={styles.cartItem}>
            <img
              src={item.image}
              alt={item.name}
              style={styles.image}
            />

            <div style={styles.details}>
              <h2>{item.name}</h2>

              <p>
                Unit Price: ₹
                {(item.cost ?? item.price).toFixed(2)}
              </p>

              <p>
                Total: ₹
                {((item.cost ?? item.price) * item.quantity).toFixed(2)}
              </p>

              <div style={styles.quantityControls}>
                <button
                  type="button"
                  onClick={() => handleDecrement(item)}
                  style={styles.quantityButton}
                  aria-label={`Decrease ${item.name} quantity`}
                >
                  −
                </button>

                <span style={styles.quantity}>{item.quantity}</span>

                <button
                  type="button"
                  onClick={() => handleIncrement(item)}
                  style={styles.quantityButton}
                  aria-label={`Increase ${item.name} quantity`}
                >
                  +
                </button>
              </div>

              <button
                type="button"
                className="cart-item-delete"
                onClick={() => handleRemove(item)}
                style={styles.deleteButton}
              >
                Delete
              </button>
            </div>
          </div>
        ))}

        <div style={styles.summary}>
          <h2>Total Plants: {cartCount}</h2>

          <h2>
            Total Amount: ₹{totalAmount.toFixed(2)}
          </h2>

          <div style={styles.actions}>
            <Link to="/plants" style={styles.continueButton}>
              Continue Shopping
            </Link>

            <button
              type="button"
              onClick={() => alert('Checkout Coming Soon!')}
              style={styles.checkoutButton}
            >
              Checkout
            </button>
          </div>
        </div>
      </>
    )}
  </main>
</div>
```

);
}

const styles = {
page: {
minHeight: '100vh',
backgroundColor: '#f5f7f2',
},
navbar: {
display: 'flex',
justifyContent: 'space-between',
alignItems: 'center',
flexWrap: 'wrap',
gap: '15px',
padding: '18px 5%',
backgroundColor: '#1b5e20',
},
brand: {
color: 'white',
fontSize: '24px',
fontWeight: 'bold',
textDecoration: 'none',
},
navLinks: {
display: 'flex',
gap: '20px',
flexWrap: 'wrap',
},
navLink: {
color: 'white',
textDecoration: 'none',
},
container: {
maxWidth: '1000px',
margin: '0 auto',
padding: '30px 20px',
},
heading: {
textAlign: 'center',
color: '#1b5e20',
marginBottom: '30px',
},
emptyCart: {
textAlign: 'center',
padding: '50px 20px',
backgroundColor: 'white',
borderRadius: '10px',
},
cartItem: {
display: 'flex',
alignItems: 'center',
flexWrap: 'wrap',
gap: '25px',
padding: '20px',
marginBottom: '20px',
backgroundColor: 'white',
borderRadius: '10px',
boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
},
image: {
width: '160px',
height: '160px',
objectFit: 'cover',
borderRadius: '8px',
},
details: {
flex: 1,
minWidth: '200px',
},
quantityControls: {
display: 'flex',
alignItems: 'center',
gap: '15px',
margin: '15px 0',
},
quantityButton: {
padding: '7px 15px',
fontSize: '18px',
cursor: 'pointer',
},
quantity: {
fontSize: '18px',
fontWeight: 'bold',
},
deleteButton: {
backgroundColor: '#c62828',
color: 'white',
padding: '9px 18px',
border: 'none',
borderRadius: '5px',
cursor: 'pointer',
},
summary: {
marginTop: '30px',
padding: '25px',
backgroundColor: 'white',
borderRadius: '10px',
textAlign: 'right',
},
actions: {
display: 'flex',
justifyContent: 'flex-end',
flexWrap: 'wrap',
gap: '15px',
marginTop: '20px',
},
continueButton: {
display: 'inline-block',
backgroundColor: '#2e7d32',
color: 'white',
textDecoration: 'none',
padding: '12px 18px',
borderRadius: '5px',
},
checkoutButton: {
backgroundColor: '#1565c0',
color: 'white',
padding: '12px 22px',
border: 'none',
borderRadius: '5px',
cursor: 'pointer',
},
};

export default CartItem;
