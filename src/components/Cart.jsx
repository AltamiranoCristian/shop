import { useContext } from "react";
import { CartContext } from "../contexts/CartProvider";
import { Link } from "react-router-dom";

const Cart = () => {

    const { cart, addToCart, removeFromCart, removeProductFromCart, clearCart } = useContext(CartContext);
    
    const updateQuantity = (productId, newQuantity) => {
        const updatedCart = cart.map((item) =>
            item.id === productId ? { ...item, quantity: newQuantity } : item);
        cart.setCart(updatedCart);
    };

    const calculateTotal = () => {
        return Math.ceil(cart.reduce((total, product) => total + product.price * product.quantity, 0))
    };

    return (
        <div className='fixed z-50 top-16 right-8 bg-slate-600 text-white p-4 rounded max-w-xs text-sm max-h-96 overflow-y-auto'>
            <div>
                <tbody>
                {cart.map((product) => (
                    <tr key={product.id}>
                        <td className=' text-slate-400 flex flex-col gap-1 my-2'>
                                <button className="transition ease-in border rounded bg-slate-900 text-slate-100 hover:bg-slate-100 hover:text-slate-900" onClick={() => addToCart(product)}>
                                    <i className="bi bi-caret-up"></i>
                                </button>
                                <input type="number" className="text-center rounded text-slate-700 bg-slate-200 w-full"
                                value={product.quantity} 
                                onChange={(e) => updateQuantity(product.id, parseInt(e.target.value, 10))} 
                                min="1"
                                disabled />
                                <button className="transition ease-in border rounded text-slate-100 bg-slate-900 hover:bg-slate-100 hover:text-slate-900" onClick={() => removeFromCart(product.id)}>
                                    <i className="bi bi-caret-down"></i>
                                </button>
                        </td>
                        <td className='border-r border-slate-500 border-l p-1 text-xs text-slate-400'>{product.title}</td>
                        <td className='p-1 text-slate-400'>${product.price}</td>
                        <td>
                            <button className='transition ease-in bg-slate-900 rounded-full p-2 hover:cursor-pointer hover:bg-slate-200 hover:text-slate-950' onClick={() => removeProductFromCart(product.id)}>
                                <i className="bi bi-trash3 text-lg"></i>
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
                <tfoot className='mt-2'>
                    <td align="center">{ calculateTotal()===0 ? <p className='text-slate-400 font-mono'>Empty</p> : (<span className="text-md">Total: ${ calculateTotal() }</span>) }</td>
                    { calculateTotal()!==0 && <td><button onClick={ clearCart } className="bi bi-stars transition ease-in w-full border rounded bg-slate-600 hover:bg-slate-300 hover:text-slate-800 mt-1 py-2"> Clear</button></td> }
                    <td colSpan={ 2 }>{ calculateTotal()!==0 && <Link to="/checkout" >
                            <button className="w-full transition ease-in border rounded mt-1 py-2 bg-slate-900 hover:bg-slate-300 hover:text-slate-800" ><i className="bi bi-bag-fill"></i> Get It!</button>
                        </Link> }</td>
                </tfoot>
            </div>
        </div>
    );
}

export default Cart;
