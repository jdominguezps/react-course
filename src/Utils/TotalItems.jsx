import { useContext } from 'react';
import { ShopingCartContext } from '../Context/index';

export const TotalItems = () => {
    const context = useContext(ShopingCartContext);
    let totItems = context.cartProducts.length;

    return (
        <span className='font-bold text-gray-700'>{totItems}</span>
    )
};
