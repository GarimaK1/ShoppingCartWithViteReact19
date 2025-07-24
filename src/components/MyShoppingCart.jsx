import { ShoppingCart, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useCart } from '../hooks/useCart';
import CartItem from './CartItem';
import formatCurrency from '../utils/formatCurrency';

const MyShoppingCart = () => {

    const [isOpen, setIsOpen] = useState(false); // to track if cart is open or close.
    const [cartItems, setCartItems] = useState([]); // local state to track products in cart.
    const [totalPrice, setTotalPrice] = useState(0); // to track total price of all items in cart.
    const [totalQuantity, setTotalQuantity] = useState(0); // to track total quantity of all items in cart.

    const { allItems, setLocalStorage } = useCart();

    useEffect(() => {
        const inCartItems = allItems.filter((item) => item.inCart)
        console.log('inCartItems: ', inCartItems);
        setCartItems([...inCartItems]?.reverse()); // using reverse so that most recently added items appears first.

        const price = inCartItems?.reduce((accumulator, currVal) => {
            return (accumulator += (currVal.price * currVal.quantity))
        }, 0);
        console.log('price: ', price);
        setTotalPrice(price);

        const quantity = inCartItems?.reduce((accumulator, currVal) => {
            return (accumulator += currVal.quantity)
        }, 0);
        console.log('quantity: ', quantity);
        setTotalQuantity(quantity);

        setLocalStorage();
    }, [allItems, setLocalStorage]);

    return (
        <>
            <div className='fixed top-0 right-0 z-30 '>
                <button className={`absolute ${isOpen ? 'right-[320px]' : '-left-14'} top-3 z-20 w-9 h-9 bg-yellow-400
                                    grid place-items-center border border-zinc-200 rounded-full 
                                    hover:bg-yellow-500 transition-colors cursor-pointer`}
                    onClick={() => setIsOpen(true)}
                >
                    <ShoppingCart className={`text-xs ${totalQuantity > 0 ? 'text-white' : 'text-[#4d4637]'}`} />
                    <span className={`${totalQuantity <= 0 ? 'hidden' : `absolute -bottom-4 -left-2 w-6 h-6 bg-[#4d4637]
                                    grid place-items-center border border-zinc-200 
                                    rounded-full text-xs text-white`}`}
                    >
                        {
                            totalQuantity > 9 ? '9+' : totalQuantity
                        }
                    </span>
                </button>
            </div>

            <div className={`fixed top-0 right-0 z-30 w-[300px] h-screen bg-zinc-100 
                            border-l-4 border-red-200 rounded-tl-lg rounded-bl-lg
                            ${!isOpen && 'hidden'}`}
            >
                <div className='absolute top-0 left-0 z-10 w-full h-16 bg-white
                                grid place-items-center border border-zinc-200 rounded-lg'
                >
                    <h1 className='text-xl text-stone-600'>My Cart</h1>
                    <button className='absolute right-3 z-20 w-9 h-9 bg-yellow-400 
                                    grid place-items-center border border-zinc-200 rounded-full
                                    hover:bg-yellow-500 transition-colors cursor-pointer'
                        onClick={() => setIsOpen(false)}
                    >
                        <X className='text-white' />
                    </button>
                </div>

                <div className='h-screen flex flex-col gap-y-3 overflow-y-auto px-5 pb-24 pt-20'>
                    {
                        totalQuantity ? (
                            cartItems?.map((cartItem) => {
                                return <CartItem key={cartItem.id} item={cartItem} fromCart={true} />
                            })
                        ) : (
                            <p className='text-base text-stone-600 text-center'>Your cart is empty.</p>
                        )
                    }
                </div>
                <div className='absolute bottom-0 left-0 z-10 w-full h-20 pb-2 bg-white
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

        </>
    )
}

export default MyShoppingCart;