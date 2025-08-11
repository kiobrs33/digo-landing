import { ReactNode, useEffect, useReducer } from "react";
import { CartAction, CartState } from "../types/cartTypes";
import { CartContext } from "./CartContext";

const initialState: CartState = {
  items: [],
};

const cartReducer = (state: CartState, action: CartAction) => {
  switch (action.type) {
    case "ADD_ITEM": {
      const exists = state.items.find(
        (item) => item.productId === action.payload.productId
      );
      if (exists) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.productId === action.payload.productId
              ? { ...item, quantity: item.quantity + action.payload.quantity }
              : item
          ),
        };
      }
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    }
    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.productId !== action.payload),
      };
    case "CLEAR_CART":
      return { ...state, items: [] };
    default:
      return state;
  }
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  // Initialize the state from localStorage if available
  const [state, dispatch] = useReducer(cartReducer, initialState, (initial) => {
    const persisted = localStorage.getItem("cartState");
    return persisted ? JSON.parse(persisted) : initial;
  });

  // Persist the state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cartState", JSON.stringify(state));
  }, [state]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
