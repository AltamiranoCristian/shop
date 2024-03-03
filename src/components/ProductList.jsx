import { useEffect, useState } from 'react';
import Product from './Product';
import { fetchProducts } from '../api/fetchdata'
import react from '../assets/react.svg';
import Header from "./Header"
import HeroBanner from './HeroBanner';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        async function getProducts(){
            try {
                const result = await fetchProducts();
                setProducts(result);
                setLoading(false)
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }getProducts();
    }, []);

    if (loading) {
        return  <div className='flex items-center justify-center h-screen bg-slate-900'>
                    <img src={react} className='mx-auto my-auto animate-spin size-1/6' alt="" />
                </div>
    }

    return (
        <>
        <Header/>
        <HeroBanner/>
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 h-full">
                <h1 className='text-4xl mb-4'>Products</h1>
                <div className='group grid gap-x-6 gap-y-10 lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-3'>
                    {products.map((product)=>(
                        <Product key={ product.id } product={ product }/>
                    ))}
                </div>
            </div>
        </>
    );
}

export default ProductList;
