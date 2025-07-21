import { createContext, useContext, useState } from "react";
import { allProducts } from "../assets/data/index";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [allItems, setAllItems] = useState([]);

    const setToAllProducts = () => {
        setAllItems(allProducts); // Display all products on the UI
    } 

    // Adding products/items to shopping cart
    const addToCart = (item) => {
        // Add/Remove from cart by changing the 'inCart' property of each product.
        setAllItems(prevItems => {
            return prevItems.map(prevItem => {
                // map function requires a return for every record in array.
                if (prevItem.inCart) {
                    return prevItem; // if 'inCart' is true, return cart item as is.
                }

                // Else, if the item is the one user is trying to add to cart, update the 'inCart' to true and return item
                if (prevItem.id === item.id) {
                    return { ...prevItem, inCart: true }
                } else {
                    // this is not the item user is trying to add to cart. Return as is.
                    return prevItem;
                }
            })
        })
    }

    return (
        <CartContext.Provider value={{ allItems, setToAllProducts, addToCart }}>
            { children }
        </CartContext.Provider>
    )
}

export const useCart = () => {
    return useContext(CartContext);
}