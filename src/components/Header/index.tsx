import { Text, TouchableOpacity, View } from "react-native"

import { styles } from "./styles"
import { THEME } from "@styles/theme"

import ArrowLeft from "phosphor-react-native/src/bold/ArrowLeft"
import ShoppingCart from "phosphor-react-native/src/fill/ShoppingCart"
import { CartButton } from "@components/CartButton"
import { globalStyles } from "@styles/globals"

type HeaderProps = {
  handleOnPress: () => void
  handleGoToCart?: () => void
  headerVariant?: "default" | "cart"
}

export function Header({
  handleOnPress,
  handleGoToCart,
  headerVariant = "default",
}: HeaderProps) {
  return (
    <View
      style={[
        styles.headerContainer,
        headerVariant === "cart" && styles.headerCartVariantContainer,
      ]}
    >
      <TouchableOpacity
        style={styles.locationContainer}
        onPress={handleOnPress}
      >
        <ArrowLeft
          size={24}
          color={
            headerVariant === "default"
              ? THEME.COLORS.WHITE
              : THEME.COLORS.GREY_100
          }
        />
      </TouchableOpacity>
      {headerVariant === "default" && (
        <CartButton color={THEME.COLORS.WHITE} onPress={handleGoToCart} />
      )}
      {headerVariant === "cart" && (
        <Text
          style={[
            styles.title,
            globalStyles.titleSM,
            globalStyles.textGREY_200,
          ]}
        >
          Carrinho
        </Text>
      )}
    </View>
  )
}
