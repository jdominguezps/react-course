import { createContext, useState } from 'react';

export const ShopingCartContext = createContext();

export const ShoppingCartProvider= ({children}) => {
    const [count, setCount] = useState(0);

    return (
        <ShopingCartContext.Provider value={{
            count,
            setCount
        }}>
            {children}
        </ShopingCartContext.Provider>
    )
}
