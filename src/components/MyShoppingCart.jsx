import { ShoppingCart, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useCart } from '../hooks/useCart';
import CartItem from './CartItem';
import formatCurrency from '../utils/formatCurrency';

const MyShoppingCart = () => {

    const [isOpen, setIsOpen] = useState(false); // to track if cart is open or close.
    const [cartItems, setCartItems] = useState([]); // local state to track products in cart.
    const [totalPrice, setTotalPrice] = useState(0); // to track total price of all items in cart.

    const { allItems, setLocalStorage } = useCart();

    useEffect(() => {
        const inCartItems = allItems.filter((item) => item.inCart)
        console.log('inCartItems: ', inCartItems);
        setCartItems(inCartItems?.reverse()); // using reverse so that most recently added items appears first.

        const price = inCartItems?.reduce((accumulator, currVal) => {
            return (accumulator += (currVal.price * currVal.quantity))
        }, 0);
        console.log('price: ', price);
        setTotalPrice(price);

        setLocalStorage();
    }, [allItems]);

    return (
        <>
            {
                cartItems.length !== 0 && (
                    <div className={`fixed top-0 z-30 w-[300px] h-screen bg-zinc-100 
                            border-l-4 border-red-200 rounded-tl-lg rounded-bl-lg
                            ${isOpen ? 'right-0' : '-right-[300px]'}`}
                    >
                        <div className='absolute top-0 left-0 z-10 w-full h-16 bg-white
                                grid place-items-center border border-zinc-200 rounded-lg'
                        >
                            <h1 className='text-xl text-stone-600'>My Cart</h1>
                            <button className='absolute right-3 z-20 w-9 h-9 bg-yellow-400 
                                    grid place-items-center border-2 border-zinc-200 rounded-full
                                    hover:bg-yellow-500 transition-colors cursor-pointer'
                                onClick={() => setIsOpen(false)}
                            >
                                <X className='text-white' />
                            </button>
                        </div>
                        <button className='absolute -left-14 top-3 z-20 w-9 h-9 bg-yellow-400
                                    grid place-items-center border-2 border-zinc-200 rounded-full 
                                    hover:bg-yellow-500 transition-colors cursor-pointer'
                            onClick={() => setIsOpen(true)}
                        >
                            <ShoppingCart className='text-xs text-white' />
                            <span className='absolute -bottom-4 -left-2 w-6 h-6 bg-[#4d4637]
                                    grid place-items-center border border-zinc-200 
                                    rounded-full text-xs text-white'
                            >
                                {
                                    (cartItems.length > 9) ? '9+' : cartItems.length
                                }
                            </span>
                        </button>
                        <div className='h-screen flex flex-col gap-y-3 overflow-y-scroll px-5 pb-24 pt-20'>
                            {
                                cartItems?.map((cartItem) => {
                                    return <CartItem key={cartItem.id} item={cartItem} fromCart={true} />
                                })
                            }
                        </div>
                        <div className='absolute bottom-0 left-0 z-10 w-full h-20 bg-white
                                grid place-items-center border border-zinc-200 rounded-lg'
                        >
                            <h1 className='text-base text-stone-600'>Total: {formatCurrency(totalPrice)} </h1>
                            <button className='rounded-md bg-teal-400 px-4 py-1 text-white text-lg
                                    hover:bg-teal-500 transition-colors cursor-pointer'
                            >
                                Buy Now
                            </button>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default MyShoppingCart;