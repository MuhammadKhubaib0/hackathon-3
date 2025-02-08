import { Product } from "../types/product";



export const addToCart = (product: Product) => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');

    const excistingProductIndex = cart.findIndex(item => item._id === product._id);

    if ( excistingProductIndex > -1) {
        cart[excistingProductIndex].Inventory += 1;
    }
    else {
        cart.push({
            ...product, Inventory: 1
        })
    }
    localStorage.setItem('cart', JSON.stringify(cart));
}

export const removeFromCart = (productId: string) => {
    let cart : Product[] = JSON.parse(localStorage.getItem('cart') || '[]');
    cart = cart.filter(item => item._id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
}

export const updateCartQuantity = (productId :string, quantity : number) => {
    const cart : Product[] = JSON.parse(localStorage.getItem('cart') || '[]')
    const productIndex = cart.findIndex(item => item._id === productId)

    if(productIndex > -1) {
        cart[productIndex].inventory = quantity;
        localStorage.setItem('cart', JSON.stringify(cart))
    }
}

export const getCartItems = () => {
    return JSON.parse(localStorage.getItem('cart') || '[]');
}
    