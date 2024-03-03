import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../contexts/CartProvider";

const Checkout = () => {
    const { cart } = useContext(CartContext);
    const storedCart = localStorage.getItem('cart');
    const CartArray = JSON.parse(storedCart) || [];

    const calculateTotal = () => {
        return Math.ceil(cart.reduce((total, product) => total + product.price * product.quantity, 0));
    };

    const partialTotal = (price, quantity) =>{
        return price * quantity;
    }

    return (
        <>
            <div className="mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:max-w-5xl lg:px-8 h-full">
                <Link to="/"><i className="bi bi-arrow-left-circle text-2xl"></i></Link>
                <h1 className='text-4xl mb-4'>Checkout</h1>
                <div className="lg:grid grid-cols-1 sm:flex max-h-96">
                    <table>
                        <tr className="bg-slate-600 text-slate-200">
                            <td className="text-lg text-center px-2">Item</td>
                            <td className="text-2xl text-center py-1">Product</td>
                            <td className="text-lg text-center px-2">Quantity</td>
                            <td className="text-lg text-center px-2">Price</td>
                            <td className="text-lg text-center px-2">total</td>
                        </tr>
                            {CartArray.map((item, index) => (
                            <tr key={index}>
                                <td className="p-4 text-center">{(index+1)}</td>
                                <td>{item.title}</td>
                                <td className="p-4 text-center">{item.quantity}</td>
                                <td className="p-4 text-center">{item.price}</td>
                                <td className="p-4 text-center">{partialTotal(item.quantity, item.price)}</td>
                            </tr>))}
                        <tr>
                            <td colSpan={4} className="text-end text-slate-900">total to pay: </td>
                            <td className="text-2xl text-center">${calculateTotal()}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Checkout;
