import { useContext, createContext } from "react";

export const CartStruct = createContext({
    cart:[],
    addItem: (item) => {},
    removeItem: (item) => {},
    subTotal:0,
    totalItems:0
})


export const CartProvider = CartStruct.Provider


export default function useCart(){
    return useContext(CartStruct)
}

