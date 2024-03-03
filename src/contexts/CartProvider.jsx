import React, { createContext, useEffect, useReducer } from 'react';
import CartReducer from '../reducer/cartreducer';

const CartContext = createContext();

const CartProvider = ({children}) => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    const [cart, dispatch] = useReducer(CartReducer, storedCart);

    useEffect(()=>{
        localStorage.setItem('cart', JSON.stringify(cart))
    },[cart])

    const addToCart = (product) => {
        dispatch({ type: 'ADD_TO_CART', payload: product });
    };

    const removeFromCart = (productId) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
    };

    const removeProductFromCart = (product) => {
        dispatch({type: 'REMOVE_PRODUCT_FROM_CART', payload: product})
    }

    const clearCart = () =>{
        dispatch({type: 'CLEAR_CART'})
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, removeProductFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
}

export { CartProvider, CartContext };
