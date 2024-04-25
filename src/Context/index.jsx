import { createContext, useState } from 'react';

export const ShopingCartContext = createContext();

export const ShoppingCartProvider= ({children}) => {
    const [count, setCount] = useState(0);
    const [colorfill, setColorfill] = useState("white");
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const openProductDetail = () => setIsProductDetailOpen(true);
    const closeProductDetail = () => setIsProductDetailOpen(false);

    return (
        <ShopingCartContext.Provider value={{
            count,
            setCount,
            colorfill,
            setColorfill,
            isProductDetailOpen,
            setIsProductDetailOpen,
            openProductDetail,
            closeProductDetail
        }}>
            {children}
        </ShopingCartContext.Provider>
    )
}
