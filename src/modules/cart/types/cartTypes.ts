import { Dispatch } from "react";

export interface CartState {
  items: CartItem[];
  // totalQuantity?: number; // Optional field for total quantity
  // totalPrice?: number; // Optional field for total price
}

export interface CartItem {
  productId: number;
  productName: string;
  purchasePrice: number;
  quantity: number;
  salePrice: number;
  description: string;
  category: string;
  rating?: number; // Optional rating field
  image: string;
}

export type CartAction =
  | { type: "ADD_ITEM"; payload: CartItem }
  | { type: "REMOVE_ITEM"; payload: number }
  | { type: "CLEAR_CART" };

export interface CartContextType {
  state: CartState;
  dispatch: Dispatch<CartAction>;
}

export interface Product {
  productId: number;
  productName: string;
  purchasePrice: number;
  salePrice: number;
  serial: string;
  unit: string;
  categoryId: number;
  category: {
    categoryName: string;
  };
  stocks: [
    {
      stockId: number;
      quantity: number;
      warehouseId: number;
      warehouse: {
        warehouseId: number;
        warehouseName: string;
      };
    }
  ];
}
