import AsyncStorage from "@react-native-async-storage/async-storage"

import { CartDTO } from "@dtos/CartDTO"

import { CART_STORAGE } from "@storage/storageConfig"

export async function saveCart(cart: CartDTO[]) {
  await AsyncStorage.setItem(CART_STORAGE, JSON.stringify(cart))
}

export async function loadCart(): Promise<CartDTO[]> {
  const storageCart = await AsyncStorage.getItem(CART_STORAGE)
  return storageCart ? JSON.parse(storageCart) : []
}

export async function removeCartItemById(productId: number, size: string) {
  const storageCart = await loadCart()
  const updatedCart = storageCart.filter(
    (cartItem: CartDTO) =>
      cartItem.drink.id !== productId || cartItem.size !== size
  )
  await saveCart(updatedCart)
}

export async function removeAll() {
  await AsyncStorage.removeItem(CART_STORAGE)
}
