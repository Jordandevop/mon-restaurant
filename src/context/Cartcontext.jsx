import { createContext, useReducer, useState } from "react";
import { cartReducer } from "../reducers/cartReducers";
import { useContext } from "react";

const CartContext = createContext();

export function CartProvider ({children}){
    const [cartItems, dispatch] = useReducer(cartReducer, []);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const addToCart = (product) => dispatch({ type: "ADD_ITEM", payload: product });
  const removeOne = (productId) => dispatch({ type: "REMOVE_ONE", payload: productId });
  const deleteItem = (productId) => dispatch({ type: "DELETE_ITEM", payload: productId });

  const cartCount = cartItems.reduce((sum, item) => sum + item.qty, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartCount,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        removeOne,
        deleteItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}