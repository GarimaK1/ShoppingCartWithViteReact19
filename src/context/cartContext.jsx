import { createContext, useContext, useState } from "react";
import { allProducts } from "../assets/data/index";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [allItems, setAllItems] = useState([]);

    const setToAllProducts = () => {
        setAllItems(allProducts);
    } 

    return (
        <CartContext.Provider value={{ allItems, setToAllProducts }}>
            { children }
        </CartContext.Provider>
    )
}

export const useCart = () => {
    return useContext(CartContext);
}