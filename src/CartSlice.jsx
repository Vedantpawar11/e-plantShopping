import { createSlice } from '@reduxjs/toolkit';

const initialState = {
items: []
};

const CartSlice = createSlice({
name: 'cart',
initialState,

reducers: {
addItem: (state, action) => {
const newItem = action.payload;


  const existingItem = state.items.find(
    item => item.id === newItem.id
  );

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    state.items.push({
      ...newItem,
      quantity: 1
    });
  }
},

removeItem: (state, action) => {
  state.items = state.items.filter(
    item => item.id !== action.payload
  );
},

updateQuantity: (state, action) => {
  const { id, quantity } = action.payload;

  const existingItem = state.items.find(
    item => item.id === id
  );

  if (existingItem) {
    if (quantity <= 0) {
      state.items = state.items.filter(
        item => item.id !== id
      );
    } else {
      existingItem.quantity = quantity;
    }
  }
}

}
});

export const { addItem, removeItem, updateQuantity } =
CartSlice.actions;

export default CartSlice.reducer;
