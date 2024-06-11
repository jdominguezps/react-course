import { createContext, useState, useEffect } from 'react';

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

    // Checkout Side Menu (Open / Close)
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

    // Product Detail (Show Product)
    const [productToShow, setProductToShow] = useState({});

    // Shopping Cart (Add Products to Cart)
    const [cartProducts, setCartProducts] = useState([]);
    const [order, setOrder] = useState([]);

    // Get Products
    const [items, setItems] = useState(null);

    // Get Products By Title
    const [searchByTitle, setSearchByTitle] = useState(null);
    console.log( 'searchByTitle: ', searchByTitle);

    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
          .then(response => response.json())
          .then(data => setItems(data))
    }, [] );

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
            setCartProducts,
            isCheckoutSideMenuOpen,
            setIsCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            order,
            setOrder,
            items,
            setItems,
            searchByTitle,
            setSearchByTitle
        }}>
            {children}
        </ShopingCartContext.Provider>
    )
}
