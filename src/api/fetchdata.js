
const URL_API = 'https://fakestoreapi.com/products/';

export async function fetchProducts(){
    try {
        const response = await fetch(URL_API);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

export async function fetchProduct({productId}) {
    try {
        const response = await fetch(URL_API + `${productId}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching product details:', error);
    }
}
