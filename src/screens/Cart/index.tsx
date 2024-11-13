import React, { useState } from "react"
import { StatusBar } from "expo-status-bar"
import { View, Text, FlatList } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { NavigationProp, useNavigation } from "@react-navigation/native"

import { styles } from "./styles"
import { THEME } from "@styles/theme"
import { globalStyles } from "@styles/globals"

import ShoppingCart from "phosphor-react-native/src/fill/ShoppingCart"

import { AppRouteProps } from "@routes/app.routes"
import { useCart } from "@hooks/useCart"

import { Header } from "@components/Header"
import { Button } from "@components/Button"
import { CartItemList } from "@components/CartItemList"
import { removeCartItemById } from "@storage/storageCart"

export function CartScreen() {
  const navigation: NavigationProp<AppRouteProps> = useNavigation()

  const { cart, loadCartData } = useCart()

  const { top } = useSafeAreaInsets()

  const [totalPrice, setTotalPrice] = useState(0)

  function handleCalculateTotalPrice() {
    setTotalPrice(
      cart.reduce((acc, item) => acc + item.drink.price * item.quantity, 0)
    )
  }

  async function handleRemoveProduct(prodcutId: number, size: string) {
    await removeCartItemById(prodcutId, size)
    await loadCartData()
  }

  React.useEffect(() => {
    handleCalculateTotalPrice()
  }, [cart])

  return (
    <View style={[styles.container, { paddingTop: top }]}>
      <StatusBar
        translucent
        backgroundColor={THEME.COLORS.GREY_800}
        style="dark"
      />
      <Header handleOnPress={navigation.goBack} headerVariant="cart" />

      <FlatList
        data={cart}
        keyExtractor={(item, index) =>
          item.drink.id.toString() + index.toString()
        }
        renderItem={({ item }) => (
          <CartItemList
            product={item}
            handleRemoveProduct={() =>
              handleRemoveProduct(item.drink.id, item.size)
            }
          />
        )}
        ListEmptyComponent={() => (
          <View style={styles.emptyContainer}>
            <View style={styles.emptyIconAndTextContainer}>
              <ShoppingCart size={24} color={THEME.COLORS.GREY_500} />
              <Text style={[globalStyles.textSM, globalStyles.textGREY_400]}>
                O seu carrinho está vazio
              </Text>
            </View>
            <Button
              label="ver catálogo"
              buttonVariant="default"
              isFullWidth
              onPress={() => navigation.navigate("HomeScreen")}
            />
          </View>
        )}
      />

      {cart.length > 0 && (
        <View style={styles.footerContainer}>
          <View style={styles.totalContainer}>
            <Text style={[globalStyles.textMD, globalStyles.textGREY_200]}>
              Valor total
            </Text>
            <Text style={[globalStyles.titleMD, globalStyles.textGREY_200]}>
              R${" "}
              {Number(totalPrice / 100)
                .toFixed(2)
                .replace(".", ",")}
            </Text>
          </View>

          <Button
            label="confirmar pedido"
            buttonVariant="confirmOrder"
            isFullWidth
          />
        </View>
      )}
    </View>
  )
}
