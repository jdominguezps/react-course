import { useContext } from 'react';
import { ShopingCartContext } from '../Context/index';

// Función que Obtiene el Precio Total de todos los articulos del Carrito de Compras
export const TotalPrice = () => {
    const context = useContext(ShopingCartContext);
    let sumPrice = 0;

    context.cartProducts.map(product => (sumPrice += product.price));
    context.cartProducts.TotalPrice = sumPrice;
    return (
        <span className='font-bold text-2xl'>{sumPrice}</span>
    )
};
