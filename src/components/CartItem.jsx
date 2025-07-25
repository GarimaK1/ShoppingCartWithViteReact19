import CartButtons from './CartButtons';

const CartItem = ({ item, fromCart }) => {
    // 'fromCart' is a flag to indicate if a product is displayed on the main page or from cart sidebar.
    const { name, imageUrl, price } = item;

    return (
        <div className={`group relative flex flex-col gap-y-2 border border-zinc-200
                        rounded-md bg-white p-24 ${!fromCart && 'h-full'}`}>
            <img src={imageUrl} alt={name} width={300} height={300} 
                    className={`${!fromCart && 'group-hover:-translate-y-2 transition-all duration-500'}`} 
            />
            <div className='absolute bottom-5 left-5 cursor-default'>
                <div className={`text-stone-500 font-medium ${fromCart ? 'text-sm' : 'text-base' }`}>
                    { name }
                </div>
                <span className={`text-stone-700 ${fromCart ? 'text-sm' : 'text-base' }`}>
                    ${ price }
                </span>
            </div>
            <CartButtons item={item} fromCart={fromCart} />
        </div>
    )
}

export default CartItem;