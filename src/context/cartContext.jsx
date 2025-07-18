import { createContext } from "react";
import { allProducts } from "../assets/data/index";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    return (
        <CartContext value={{}}>
            { children }
        </CartContext>
    )
}