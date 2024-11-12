import { Text, TouchableOpacity, View } from "react-native"

import { styles } from "./styles"
import { THEME } from "@styles/theme"

import ArrowLeft from "phosphor-react-native/src/bold/ArrowLeft"
import ShoppingCart from "phosphor-react-native/src/fill/ShoppingCart"

type HeaderProps = {
  handleOnPress: () => void
}

export function Header({ handleOnPress }: HeaderProps) {
  return (
    <View style={[styles.headerContainer]}>
      <TouchableOpacity
        style={styles.locationContainer}
        onPress={handleOnPress}
      >
        <ArrowLeft size={24} color={THEME.COLORS.WHITE} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.cartContainer}>
        <ShoppingCart size={20} color={THEME.COLORS.WHITE} />
      </TouchableOpacity>
    </View>
  )
}
