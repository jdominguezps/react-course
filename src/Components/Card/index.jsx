import { useContext } from 'react';
import { ShopingCartContext } from '../../Context';
import { IconAddCart } from '../../Icons/IconAddCart';
import { IconCheck } from '../../Icons/IconCheck';

const Card = (data) => {
    const context = useContext(ShopingCartContext);

    const showProduct = (productDetail) => {
        context.setProductToShow(productDetail);
        context.closeCheckoutSideMenu();
        context.openProductDetail();
    };

    const addProductsToCart = (event, productData) => {
        event.stopPropagation();
        context.setCount(context.count + 1);
        context.setColorfill("green");
        context.setCartProducts([...context.cartProducts, productData]);
        context.closeProductDetail();
        context.openCheckoutSideMenu();
    }

    const renderIcon = (id) => {
        const isInCart = context.cartProducts.filter(product => product.id === id).length > 0;
        if (isInCart) {
            return (
                <div
                    className='absolute top-0 right-0 flex justify-center items-center bg-black w-6 h-6 rounded-full m-2 p-1'
                    onClick={(event) => {event.stopPropagation()
                    }}>
                    <IconCheck />
                </div>
                )
        } else
        {
            return (
                <div
                    className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'
                    onClick={(event) => {addProductsToCart(event, data.data);
                }}>
                    <IconAddCart />
                </div>
                )
        }
    };

    return (
        <div
            className='bg-white cursor-pointer w-56 h-60 rounded-lg'
            onClick={() => showProduct(data.data)}>
            <figure className='relative mb-2 w-full h-4/5'>
                <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{data.data.category.name}</span>
                <img className='w-full h-full object-cover rounded-lg' src={data.data.images[0]} alt={data.data.title} />
                {renderIcon(data.data.id)}
            </figure>
            <p className='flex justify-between'>
            <span className='text-sm font-semibold'>{data.data.title}</span>
            <span className='text-lg font-bold'>${data.data.price}</span>
            </p>
        </div>
    )
}

export default Card;
