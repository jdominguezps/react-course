import { createContext, useState } from 'react';

export const ShopingCartContext = createContext();

export const ShoppingCartProvider= ({children}) => {
    // Shopping Cart (Increment quantity)
    const [count, setCount] = useState(0);

    // Shopping Cart (Background Color)
    const [colorfill, setColorfill] = useState("white");

    // Product Detail (Open / Close)
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const openProductDetail = () => setIsProductDetailOpen(true);
    const closeProductDetail = () => setIsProductDetailOpen(false);

    // Product Detail (Show Product)
    const [productToShow, setProductToShow] = useState({});

    // Shopping Cart (Add Products to Cart)
    const [cartProducts, setCartProducts] = useState([]);

    return (
        <ShopingCartContext.Provider value={{
            count,
            setCount,
            colorfill,
            setColorfill,
            isProductDetailOpen,
            setIsProductDetailOpen,
            openProductDetail,
            closeProductDetail,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts
        }}>
            {children}
        </ShopingCartContext.Provider>
    )
}
