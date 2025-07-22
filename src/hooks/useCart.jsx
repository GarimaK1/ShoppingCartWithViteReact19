import { useContext } from 'react';
import { CartContext } from '../context/allContexts';

export const useCart = () => {
    return useContext(CartContext);
}