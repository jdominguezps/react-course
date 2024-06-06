import { useContext } from 'react';
import { ShopingCartContext } from '../Context/index';

// Función que Obtiene la Fecha Actual del Sistema
export const GetCurrentDate = () => {
    const context = useContext(ShopingCartContext);
    const date = new Date().toLocaleDateString(localStorage);
    context.cartProducts.currentDate = date;

    return (
        <span className='font-bold text-gray-700'>{date}</span>
    )
};
