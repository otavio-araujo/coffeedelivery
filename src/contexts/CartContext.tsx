import { Drinks } from "@assets/data/DrinkDataset"
import { createContext, ReactNode, useState } from "react"

export type Product = {
  drink: Drinks
  quantity: number
  size: "114ml" | "140ml" | "227ml"
}

export type CartContextDataProps = {
  cart: Product[]
  addProduct: (product: Product) => void
  removeProduct: (product: Product) => void
}

type CartContextProviderProps = {
  children: ReactNode
}

export const CartContext = createContext<CartContextDataProps>(
  {} as CartContextDataProps
)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState<Product[]>([])

  function addProduct(product: Product) {
    setCart([...cart, product])
  }

  function removeProduct(product: Product) {
    setCart(cart.filter((item) => item.drink.id !== product.drink.id))
  }

  return (
    <CartContext.Provider value={{ cart, addProduct, removeProduct }}>
      {children}
    </CartContext.Provider>
  )
}
