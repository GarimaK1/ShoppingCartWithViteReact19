import { useContext } from 'react';
import { CartContext } from '../context/createdContexts';

export const useCart = () => {
    return useContext(CartContext);
}