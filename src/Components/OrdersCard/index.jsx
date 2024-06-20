import { ChevronRightIcon } from "@heroicons/react/24/solid";

export const OrdersCard = props => {
    const { dateOrder, totalPrice, totalProducts } = props;

    return (
        <div className="flex justify-between items-center border mb-3 border-black rounded-lg p-4 w-80">
            <div className="flex justify-between w-full">
                <p className='flex flex-col'>
                    <span className='font-light'>{dateOrder}</span>
                    <span className='font-light'>{totalProducts} Artículos</span>
                </p>
                <p className="flex items-center gap-2">
                    <span className='font-medium text-2xl'>Total ${totalPrice}</span>
                    <ChevronRightIcon className="h-6 w-6 text-black cursor-pointer"/>
                </p>
            </div>
        </div>
    )
};
