import { ShoppingCart, X } from 'lucide-react';
import { useState } from 'react';

const MyShoppingCart = () => {
    const [isOpen, setIsOpen] = useState(false); // to track if cart is open or close.
    return (
        <>
            <div className={`fixed top-0 z-30 w-[300px] h-screen bg-zinc-100 
                            border-l-4 border-red-200 rounded-tl-lg rounded-bl-lg
                            ${isOpen ? 'right-0' : '-right-[300px]'}`}>
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
                                    rounded-full text-sm text-white'
                    >
                        1
                    </span>
                </button>
                <div className='h-screen flex flex-col gap-y-3 overflow-y-scroll px-5 pb-24 pt-20'>
                </div>
                <div className='absolute bottom-0 left-0 z-10 w-full h-20 bg-white
                                grid place-items-center border border-zinc-200 rounded-lg'
                >
                    <h1 className='text-base text-stone-600'>Total: $155</h1>
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