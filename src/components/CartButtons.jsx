import { useCart } from '../context/cartContext';

const CartButtons = ({ item }) => {
    const { addToCart, removeFromCart } = useCart();
    
    return (
        <div className='w-max absolute right-5 top-5'>
            <div className='space-x-3'>
                {
                    !item.inCart ? (
                        <button
                            type="button"
                            className='bg-zinc-400 border rounded-md px-2 py-1 text-sm text-white
                            hover:bg-zinc-500 transition-colors cursor-pointer'
                            onClick={() => addToCart(item)}
                        >
                            + Add to Cart
                        </button>
                    ) : (
                        <div>
                            <div className='flex'>
                                <button className='border rounded-lg px-3 cursor-pointer'>-</button>
                                <p className='flex items-center gap-x-1 mx-1 cursor-default'>
                                    <span className='min-w-7 bg-green-100 flex items-center justify-center border rounded-full cursor-default'>1</span>
                                    <span className='text-xs cursor-default'>in cart</span>
                                </p>
                                <button className='border rounded-lg px-3 cursor-pointer'>+</button>
                            </div>
                            <button 
                                className='bg-violet-400 mx-auto mt-2 block rounded-md px-2 py-1 text-xs text-white hover:bg-violet-700 cursor-pointer'
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