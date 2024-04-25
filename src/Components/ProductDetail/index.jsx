import { XMarkIcon } from '@heroicons/react/24/solid';
import { useContext } from 'react';
import { ShopingCartContext } from '../../Context';
import './ProductDetail.css';

const ProductDetail = () => {
    const context = useContext(ShopingCartContext);

    return (
        <aside
            className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <div onClick={() => context.closeProductDetail()}>
                    <XMarkIcon className='h-6 w-6 text-black-500' />
                </div>
            </div>
        </aside>
    )
};

export default ProductDetail;
