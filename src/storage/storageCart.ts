import AsyncStorage from "@react-native-async-storage/async-storage"

import { CartDTO } from "@dtos/CartDTO"

import { CART_STORAGE } from "@storage/storageConfig"

export async function saveCart(cart: CartDTO[]) {
  try {
    await AsyncStorage.setItem(CART_STORAGE, JSON.stringify(cart))
  } catch (error) {
    throw error
  }
}

export async function loadCart(): Promise<CartDTO[]> {
  try {
    const storageCart = await AsyncStorage.getItem(CART_STORAGE)
    return storageCart ? JSON.parse(storageCart) : []
  } catch (error) {
    throw error
  }
}

export async function removeCartItemById(productId: number, size: string) {
  try {
    const storageCart = await loadCart()
    const updatedCart = storageCart.filter(
      (cartItem: CartDTO) =>
        cartItem.drink.id !== productId || cartItem.size !== size
    )
    await saveCart(updatedCart)
  } catch (error) {
    throw error
  }
}

export async function incrementCartItemQuantityById(
  productId: number,
  size: string
) {
  try {
    const storageCart = await loadCart()
    const updatedCart = storageCart.map((cartItem: CartDTO) => {
      if (cartItem.drink.id === productId && cartItem.size === size) {
        return { ...cartItem, quantity: cartItem.quantity + 1 }
      }
      return cartItem
    })
    await saveCart(updatedCart)
  } catch (error) {
    throw error
  }
}

export async function decrementCartItemQuantityById(
  productId: number,
  size: string
) {
  try {
    const storageCart = await loadCart()
    const updatedCart = storageCart.map((cartItem: CartDTO) => {
      if (cartItem.drink.id === productId && cartItem.size === size) {
        return { ...cartItem, quantity: cartItem.quantity - 1 }
      }
      return cartItem
    })
    await saveCart(updatedCart)
  } catch (error) {
    throw error
  }
}

export async function removeAll() {
  try {
    await AsyncStorage.removeItem(CART_STORAGE)
  } catch (error) {
    throw error
  }
}
