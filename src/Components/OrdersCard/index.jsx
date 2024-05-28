import { IconTrash } from '../../Icons/IconTrash';

export const OrdersCard = props => {
    const { totalPrice, totalProducts } = props;

    return (
        <div className="flex justify-between items-center mb-3 border border-black">
            <p>
                <span>27.05.2024</span>
                <span>{totalProducts}</span>
                <span>{totalPrice}</span>
            </p>
        </div>
    )
};
