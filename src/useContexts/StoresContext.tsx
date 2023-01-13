import { createContext, useContext, useState } from "react";
import { StoreData } from "../DummyData/DummyData";

const StoreContext = createContext({});

export const StoreProvider = ({ children }) => {
  const [store, setStore] = useState(StoreData);

  const allProducts=()=>{
    const product=store.map((store)=>{
        const {products} = store;
        return products;
    })
    return product;
  }

  const values = { store,allProducts };

  return (
    <StoreContext.Provider value={values}>{children}</StoreContext.Provider>
  );
};

export const UseStoreContext = () => {
  return useContext(StoreContext);
};
