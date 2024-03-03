import { useContext } from "react";
import { CartContext } from "../contexts/CartProvider";
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { addToCart } = useContext(CartContext);

    return (
        <div className='group h-auto flex flex-col items-center bg-white shadow-2xl'>
            <Link to={`/product/${product.id}`} className='h-full'>
                <img src={product.image} className="transition ease-in h-96 object-cover hover:opacity-75 hover:animate-pulse"/>
            </Link>
            <h3 className="text-sm text-gray-700">{product.title}</h3>
            <p className="text-lg font-medium text-gray-900">${product.price}</p>
            <button className='w-full border border-slate-800 transition ease-in py-2 bg-slate-800 text-slate-300 rounded hover:cursor-pointer hover:bg-slate-300 hover:text-slate-800' onClick={()=>addToCart(product)}>Add to Cart</button>
        </div>
    );
}

export default Product;
