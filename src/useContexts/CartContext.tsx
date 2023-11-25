import { createContext, useContext, useState } from "react";

const CartContext=createContext({});

export const CartProvider=({children})=>{

    const [cart,setCart] = useState([]);

    const values ={cart};

    return <CartContext.Provider value={values}>{children}</CartContext.Provider>
}

export const useCartContext=()=>{
    return useContext(CartContext);
}