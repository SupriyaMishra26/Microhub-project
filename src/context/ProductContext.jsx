// src/context/ProductContext.jsx
import { createContext, useContext, useState } from "react";
import productsData from "../data/product";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products] = useState(productsData);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
