import { useState, useCallback } from "react";
import { CartContext } from "./createdContexts";
import { allProducts } from "../assets/data/index";
import {
    getFromLocalStorage,
    getParsedFromLocalStorage,
    setInLocalStorage
} from '../utils/localStorageFns';

export const CartProvider = ({ children }) => {
    const [allItems, setAllItems] = useState([]);

    // memoize setToAllProducts so that it can be safely added in dependency list in useEffect in App.jsx
    const setToAllProducts = useCallback(() => {
        console.log('setToAllProducts ran');
        setAllItems(allProducts); // Display all products on the UI
    }, []);

    // Adding products/items to shopping cart
    const addToCart = useCallback((item) => {
        console.log('addToCart ran');
        // Add/Remove from cart by changing the 'inCart' property of each product. Quantity is already 1.
        setAllItems(prevItems => {
            return prevItems.map(prevItem => {
                // map function requires a return for every record in array.
                if (prevItem.inCart) {
                    return prevItem; // if 'inCart' is true, return cart item as is.
                }

                // Else, if the item is the one user is trying to add to cart, update the 'inCart' to true and return item
                if (prevItem.id === item.id) {
                    return { ...prevItem, inCart: true } // Quantity is already 1.
                } else {
                    // this is not the item user is trying to add to cart. Return as is.
                    return prevItem;
                }
            })
        })
    }, []);

    const removeFromCart = useCallback((item) => {
        console.log('removeFromCart ran');
        // Remove entirely from cart. Not reduce quantity by clicking '-'.
        setAllItems(prevItems => {
            return prevItems.map((prevItem => {
                return prevItem.id === item.id ? { ...prevItem, inCart: false, quantity: 1 } : prevItem;
            }))
        })
    }, []);

    const updateCartQuantity = useCallback((item, amount) => {
        // Works for both '+' and '-' buttons, as amount is +1 or -1 respectively.
        console.log('updateCartQuantity ran');
        setAllItems((prevItems) => {
            return prevItems.map((prevItem) => {
                // If we find the item that we are trying to update, update it. REturn the rest unchanged.
                return prevItem.id === item.id ? { ...prevItem, quantity: prevItem.quantity + amount } : prevItem;
            })
        })
    }, []);

    const setLocalStorage = useCallback(() => {
        console.log('setLocalStorage ran');
        if (allItems.length !== 0) {
            const inCartItems = allItems.filter(item => item.inCart);
            setInLocalStorage('cartItems', inCartItems);
        }
    }, [allItems]);

    const setCartItemsFromLocalStorage = useCallback(() => {
        // On restarting the app, if there are any products in local storage, update cart.
        console.log('setCartItemsFromLocalStorage ran');
        if (getFromLocalStorage('cartItems') !== null) {
            const storageItems = getParsedFromLocalStorage('cartItems');

            setAllItems((prevItems) => {
                return prevItems.map((prevItem) => {
                    const matchedItem = storageItems.find((storageItem) => storageItem.id === prevItem.id);
                    return matchedItem ? matchedItem : prevItem;
                })
            })
        }
    }, []);

    return (
        <CartContext.Provider
            value={{
                allItems,
                setToAllProducts,
                addToCart,
                removeFromCart,
                updateCartQuantity,
                setLocalStorage,
                setCartItemsFromLocalStorage
            }}>
            {children}
        </CartContext.Provider>
    )
}
