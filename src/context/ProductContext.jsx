import { createContext, useContext, useEffect, useState } from 'react'

const ProductContext = createContext({
  updateProductContext: () => {},
  clickedProduct: {},
})

export const useProductContext = () => useContext(ProductContext)

export const ProductContextProvider = ({ children }) => {
  const [clickedProduct, setClickedProduct] = useState()

  const updateProductContext = value => {
    setClickedProduct(value)
  }

  return (
    <ProductContext.Provider value={{ updateProductContext, clickedProduct }}>
      {children}
    </ProductContext.Provider>
  )
}
