import React, { useContext, useState } from 'react'
import { IProduct } from '../adapters/product'

export type CartContextType = {
  cart: IProduct[]
  setCart: (product: IProduct[]) => void;
}

export const CartContext = React.createContext<CartContextType>({} as CartContextType)

export const useProducts = () => useContext(CartContext)

export const CartProvider = ({ children }: { children: JSX.Element }) => {
  const [cart, setCart] = useState<IProduct[]>([])

  return <CartContext.Provider value={{ cart, setCart }}>{children}</CartContext.Provider>
}