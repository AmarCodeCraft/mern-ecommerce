import React, { createContext, useContext, useReducer, useEffect } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItem = state.items.find(item => item._id === action.payload._id);
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item => 
            item._id === action.payload._id 
              ? { ...item, qty: item.qty + action.payload.qty } 
              : item
          )
        };
      }
      return { ...state, items: [...state.items, action.payload] };
      
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        items: state.items.filter(item => item._id !== action.payload)
      };
      
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map(item => 
          item._id === action.payload.id 
            ? { ...item, qty: action.payload.qty } 
            : item
        )
      };
      
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  // Load initial state from localStorage
  const initialState = {
    items: JSON.parse(localStorage.getItem('cartItems')) || []
  };

  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Sync to localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(state.items));
  }, [state.items]);

  const addToCart = (product, qty = 1) => {
    dispatch({ type: 'ADD_TO_CART', payload: { ...product, qty } });
  };

  const removeFromCart = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };

  const updateQuantity = (id, qty) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, qty } });
  };

  const cartTotal = state.items.reduce((total, item) => total + item.price * item.qty, 0);
  const cartCount = state.items.reduce((count, item) => count + item.qty, 0);

  return (
    <CartContext.Provider value={{ 
      cartItems: state.items, 
      addToCart, 
      removeFromCart, 
      updateQuantity,
      cartTotal,
      cartCount
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
