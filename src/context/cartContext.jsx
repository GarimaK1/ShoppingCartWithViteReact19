import { allProducts } from "../assets/data/index";
import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [allItems, setAllItems] = useState([]);

    // memoize setToAllProducts so that it can be safely added in dependency list in useEffect in App.jsx
    const setToAllProducts = () => { 
        console.log('setToAllProducts ran');
        setAllItems(allProducts); // Display all products on the UI
    };

    // Adding products/items to shopping cart
    const addToCart = (item) => {
        console.log('addToCart ran');
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

    const removeFromCart = (item) => {
        console.log('removeFromCart ran');
        // Remove entirely from cart. Not reduce quantity by clicking '-'.
        setAllItems(prevItems => {
            return prevItems.map((prevItem => {
                return prevItem.id === item.id ? { ...prevItem, inCart: false, quantity: 1 } : prevItem; 
            }))
        })
    }

    return (
        <CartContext.Provider value={{ allItems, setToAllProducts, addToCart, removeFromCart }}>
            { children }
        </CartContext.Provider>
    )
}

export const useCart = () => {
    return useContext(CartContext);
}