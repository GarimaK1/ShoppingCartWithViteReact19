import React, { useEffect } from 'react';
import { useCart } from './context/cartContext';
import CartItem from './components/CartItem';
import MyShoppingCart from './components/MyShoppingCart';

const App = () => {
  const { allItems, setToAllProducts } = useCart();

  useEffect(() => {
    console.log('Also running');
    setToAllProducts(); // reset all products when app loads.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // just monitor changes to allItems
    console.log(`allItems:`, allItems);
  }, [allItems]);

  return (
    <div className='grid place-items-center py-20'>
      <h1 className="text-5xl text-stone-500 mb-16">
        Shop the Season's Essential Outfits
      </h1>
      <MyShoppingCart />
      <div className='grid grid-cols-3 place-items-start gap-10'>
        {
          allItems?.map((product) => (
            <CartItem key={product.id} item={product} fromCart={false} />
          ))
        }
      </div>
    </div>
  )
}

export default App;