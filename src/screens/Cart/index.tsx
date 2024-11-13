import React from "react"
import { StatusBar } from "expo-status-bar"
import { View, Text, FlatList } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { NavigationProp, useNavigation } from "@react-navigation/native"

import { styles } from "./styles"
import { THEME } from "@styles/theme"

import ShoppingCart from "phosphor-react-native/src/fill/ShoppingCart"

import { AppRouteProps } from "@routes/app.routes"
import { useCart } from "@hooks/useCart"

import { Header } from "@components/Header"
import { globalStyles } from "@styles/globals"
import { Button } from "@components/Button"

export function CartScreen() {
  const navigation: NavigationProp<AppRouteProps> = useNavigation()

  const { cart } = useCart()

  const { top } = useSafeAreaInsets()

  return (
    <View style={[styles.container, { paddingTop: top }]}>
      <StatusBar
        translucent
        backgroundColor={THEME.COLORS.GREY_800}
        style="dark"
      />
      <Header handleOnPress={navigation.goBack} headerVariant="cart" />

      <FlatList
        data={[]}
        keyExtractor={(item, index) =>
          item.drink.id.toString() + index.toString()
        }
        renderItem={({ item }) => <Text>{item.drink.name}</Text>}
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
    </View>
  )
}
