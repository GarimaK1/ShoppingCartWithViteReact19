import React from 'react';
import { allProducts } from './assets/data/index';
import CartItem from './components/CartItem';

const App = () => {
  return (
    <div className='grid place-items-center py-20'>
      <h1 className="text-5xl text-stone-500 mb-16">
        Shop the Season's Essential Outfits
      </h1>
      <div className='grid grid-cols-3 place-items-start gap-10'>
        {
          allProducts?.map((product) => (
            <CartItem key={product.id} item={product} />
          ))
        }
      </div>
    </div>
  )
}

export default App;