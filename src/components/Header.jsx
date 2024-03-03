import { useState } from 'react';
import { useContext } from "react";
import { CartContext } from "../contexts/CartProvider";
import Cart from './Cart';
import react from '../assets/react.svg'

const Header = () => {
    const {cart} = useContext(CartContext);

    const [activar, setActivar] = useState();
    
    const getTotalQuantity = () => {
        return cart.reduce((total, product) => total + product.quantity, 0);
    };
    
    const toggleactive = () =>{
        return setActivar(!activar)
    }

    return (
        <header className='w-full fixed z-40 bg-slate-950 h-12 flex items-center justify-around shadow-2xl'>
            <a href='/' className='text-slate-50 hover:cursor-pointer flex hover:animate-pulse'>
                <img src={react} alt="logo" />
                <h1 className='text-xl'>R-Shop</h1>
            </a>
            <nav className='text-slate-50 flex lg:gap-2 items-center sm:gap-1'>
                <a className='transition ease-in p-3 hover:bg-slate-100 hover:text-slate-950' href="/">home</a>
                <button className="py-2 w-20 bg-slate-600 text-white rounded-md transition ease-in hover:bg-slate-100 hover:text-slate-950" onClick={toggleactive}>
                    <i className="bi bi-cart hover:animate-pulse"> Cart</i>
                    { getTotalQuantity() !== 0 && 
                    <span className='mx-1 px-1 bg-slate-300 text-slate-950 text-xs rounded-full'>{getTotalQuantity()}</span>}
                </button>
            </nav>
            {activar && <Cart/>}
        </header>
    );
}

export default Header;
