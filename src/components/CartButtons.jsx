import { useCart } from '../hooks/useCart';

const CartButtons = ({ item, fromCart }) => {
    const { addToCart, removeFromCart, updateCartQuantity } = useCart();
    
    return (
        <div className={`w-max absolute right-5 top-5 ${fromCart && 'scale-90'}`}>
            <div className='space-x-3'>
                {
                    !item.inCart ? (
                        <button
                            type="button"
                            className='bg-zinc-500 border rounded-md px-2 py-1 text-sm text-white
                            hover:bg-zinc-600 transition-colors cursor-pointer'
                            onClick={() => addToCart(item)}
                        >
                            + Add to Cart
                        </button>
                    ) : (
                        <div>
                            <div className='flex'>
                                <button 
                                    className='border rounded-lg px-3 cursor-pointer'
                                    // onClick={() => {
                                    //     if (item.quantity === 1) {
                                    //         removeFromCart(item);
                                    //     } else {
                                    //         updateCartQuantity(item, -1)
                                    //     }
                                    // }}
                                    onClick={() => {
                                        (item.quantity === 1) ? removeFromCart(item) : updateCartQuantity(item, -1)
                                    }}
                                >-</button>
                                <p className='flex items-center gap-x-1 mx-1 cursor-default'>
                                    <span className='min-w-7 bg-green-100 flex items-center justify-center border rounded-full cursor-default'>{item.quantity}</span>
                                    <span className='text-xs cursor-default'>in cart</span>
                                </p>
                                <button 
                                    className='border rounded-lg px-3 cursor-pointer'
                                    onClick={() => updateCartQuantity(item, 1)}
                                >+</button>
                            </div>
                            <button 
                                className='bg-violet-400 mx-auto mt-2 block rounded-md px-2 py-1 text-xs text-white hover:bg-violet-600 cursor-pointer'
                                onClick={() => removeFromCart(item)}
                            >
                                Remove
                            </button>
                        </div>
                    )
                }

            </div>
        </div>
    )
}

export default CartButtons;