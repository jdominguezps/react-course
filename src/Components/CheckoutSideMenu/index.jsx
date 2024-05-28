import { XMarkIcon } from '@heroicons/react/24/solid';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopingCartContext } from '../../Context';
import { OrderCard } from '../../Components/OrderCard';
import { TotalPrice } from '../../Utils/TotalPrice';
import { TotalItems } from '../../Utils/TotalItems';
import './CheckoutSideMenu.css';

const CheckoutSideMenu = () => {
    const context = useContext(ShopingCartContext);

    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter(product => product.id != id);
        context.setCartProducts(filteredProducts);
        context.setCount(context.count - 1);

        if (context.count <= 1) {
            context.setColorfill("white");
        }
    };

    const handleCheckout = () => {
        const orderToAdd = {
            date: Date,
            products: context.cartProducts,
            totalProducts: context.cartProducts.count,
            totalPrice: context.TotalPrice
        };

        context.setOrder([...context.order, orderToAdd]);
        context.setCartProducts([]);
    };

    return (
        <aside
            className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-gray-200`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <div>
                    <XMarkIcon
                        className='h-6 w-6 text-black-500 cursor-pointer'
                        onClick={() => context.closeCheckoutSideMenu()}>
                     </XMarkIcon>
                </div>
            </div>
            <div className='flex justify-between items-center p-6 text-xl font-light bg-blue-100'>
                <span>
                    <h1 className='font-bold text-center'>RESUMEN</h1>
                    <h2>Total de Articulos: <TotalItems /></h2>
                    <h2>Total a Pagar: $<TotalPrice /></h2>
                    <Link to='/my-orders/last'>
                        <button className='font-bold py-0.5 w-full text-xl border border-black rounded-lg bg-green-200' onClick={() => handleCheckout()}>Checkout</button>
                    </Link>
                </span>
            </div>
            <div className='px-6 overflow-y-auto flex-1'>
            {context.cartProducts.map(product => (
                <OrderCard
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    imageUrl={product.images}
                    price={product.price}
                    handleDelete={handleDelete}  
                />
              ))
            }
            </div>
        </aside>
    )
};

export default CheckoutSideMenu;
