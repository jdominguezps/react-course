import { IconTrash } from '../../Icons/IconTrash';

export const OrderCard = props => {
    const { id, title, imageUrl, price, handleDelete } = props;
    let renderIconTrash;
    if (handleDelete) {
        renderIconTrash = <IconTrash />;
    };

    return (
        <div className="flex justify-between items-center mb-3">
            <div className='flex items-center gap-2'>
                <figure className='w-20 h-20'>
                    <img className='w-full h-full rounded-lg object-cover' src={imageUrl} alt={title}/>
                </figure>
                <p className='text-sm font-light'>{title}</p>
            </div>
            <div className='flex items-center cursor-pointer gap-2' onClick={() => handleDelete(id)}>
                <p className='text-lg font-medium'>${price}</p>
                {renderIconTrash}
            </div>
        </div>
    )
};
