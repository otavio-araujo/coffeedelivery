import { Drinks } from "@assets/data/DrinkDataset"
import { createContext, ReactNode, useEffect, useState } from "react"
import { CartDTO } from "@dtos/CartDTO"
import { saveCart, loadCart, removeAll } from "@storage/storageCart"

export type CartContextDataProps = {
  cart: CartDTO[]
  addProduct: (product: CartDTO) => Promise<void>
  removeProduct: () => Promise<void>
}

type CartContextProviderProps = {
  children: ReactNode
}

export const CartContext = createContext<CartContextDataProps>(
  {} as CartContextDataProps
)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState<CartDTO[]>([])

  async function addProduct(product: CartDTO) {
    let currentCart = await loadCart()

    const productIndex = currentCart.findIndex(
      (item) => item.drink.id === product.drink.id && item.size === product.size
    )

    if (productIndex !== -1) {
      currentCart[productIndex].quantity += product.quantity
    } else {
      currentCart.push(product)
    }

    await saveCart(currentCart)
    await loadCartData()
  }

  async function removeProduct() {
    await removeAll()
  }

  async function loadCartData() {
    const storedCart = await loadCart()

    setCart(storedCart)
  }

  useEffect(() => {
    loadCartData()
  }, [])

  return (
    <CartContext.Provider value={{ cart, addProduct, removeProduct }}>
      {children}
    </CartContext.Provider>
  )
}
