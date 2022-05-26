import React from 'react';

const CartContext = React.createContext({
  items: [],
  totalAmount: 0, // 總金額
  addItem: (item) => { },
  removeItem: (id) => { },
  clearCart: () => { },
});

export default CartContext;