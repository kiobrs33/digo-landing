import { createContext, useContext } from "react";
import { CartContextType } from "../types/cartTypes";

export const CartContext = createContext<CartContextType | null>(null);

export const useCartContext = () => useContext(CartContext);
