import React from 'react';

const CartItem = ({ item }) => {
    const { id, name, imageUrl, price } = item;

    return (
        <div className='group relative flex flex-col gap-y-2 border border-zinc-200
                        rounded-md bg-white p-24'>
            <img src={imageUrl} alt={name} width={300} height={300} 
                    className='group-hover:-translate-y-2 transition-all duration-500' 
            />
            <div className='absolute bottom-5 left-5'>
                <div className='text-stone-500 font-medium text-sm'>
                    { name }
                </div>
                <span className='text-stone-700 text-sm'>
                    ${ price }
                </span>
            </div>
        </div>
    )
}

export default CartItem;