import { useState, useEffect } from 'react';
import { useContext } from "react";
import { CartContext } from "../contexts/CartProvider";
import { fetchProduct } from '../api/fetchdata';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import react from '../assets/react.svg';

const Detail = () => {
    const { addToCart } = useContext(CartContext);
    const { productId } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true)
    const Navi = useNavigate();

    useEffect(() => {
        async function getProduct(){
            try {
                const result = await fetchProduct({productId});
                if (typeof result !== 'object')
                    Navi('/NotFound')
                setLoading(false);
                setProduct(result);
            } catch (error) {
                console.error('Error getting product details')
            }
        }getProduct();
    }, [productId, Navi]);

    if (loading) {
        return  <div className='flex items-center justify-center h-screen bg-slate-900'>
                    <img src={react} className='mx-auto my-auto animate-spin size-1/6' alt="spinning..." />
                </div>
    }

    return (
        <>
            <Header/>
            <div className="mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:max-w-5xl lg:px-8 md:h-96 sm:h-full">
                <Link to="/"><i id='back' className="bi bi-arrow-left-circle text-2xl hover:animate-pulse"></i></Link>
                <h1 className='text-4xl mb-2'>Product details</h1>
                <div className='grid-cols-2 lg:grid  md:flex gap-10'>
                    <div>
                        <img src={product.image} alt="productimage" className='md:max-h-96'/>
                    </div>
                    <div className='flex flex-col text-center'>
                        <h1 className='font-bold'>{product.title}</h1>
                        <p>Description: {product.description}</p>
                        <div>
                            Rate: {product.rating.rate}
                            {[1, 2, 3, 4, 5].map((star) => (
                            <span key={star} className='text-2xl'
                            style={{ color: star <= Math.floor(product.rating.rate) ? 'gold' : 'gray' }}>&#9733;</span>))}
                        </div>
                        <p className='lg:text-end text-lg'>Price: ${product.price}</p>
                        <button className='transition ease-in w-full bg-slate-600 rounded py-2 text-slate-100 hover:bg-slate-100 hover:text-slate-600 border border-slate-600' onClick={()=>addToCart(product)}>Add to cart</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Detail;
