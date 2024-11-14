import { globalStyles } from "@styles/globals"
import { styles } from "./styles"
import { Text, TouchableOpacity, View } from "react-native"
import { THEME } from "@styles/theme"
import ShoppingCart from "phosphor-react-native/src/fill/ShoppingCart"
import ArrowRight from "phosphor-react-native/src/regular/ArrowRight"

export type NotificationToastProps = {
  productName: string
  productSize: string
  productQuantity: number
  cartLength: number
  handleNavigation: () => void
}

export function NotificationToast({
  productName,
  productSize,
  productQuantity,
  cartLength,
  handleNavigation,
}: NotificationToastProps) {
  return (
    <View style={styles.notificationContainer}>
      <View style={styles.cartIconContainer}>
        <View style={styles.cartIconBadgeContainer}>
          <Text style={[globalStyles.textXS, globalStyles.textWHITE]}>
            {cartLength}
          </Text>
        </View>
        <ShoppingCart size={24} color={THEME.COLORS.WHITE} />
      </View>

      <View style={styles.messageContainer}>
        <Text style={[globalStyles.textSM, globalStyles.textGREY_400]}>
          {productQuantity} {productQuantity === 1 ? "café " : "cafés "}
          <Text style={{ fontWeight: "bold" }}>{productName}</Text> de{" "}
          <Text style={{ fontWeight: "bold" }}>{productSize}</Text>
        </Text>
        <Text style={[globalStyles.textSM, globalStyles.textGREY_400]}>
          {productQuantity === 1 ? "adicionado " : "adicionados "}
          ao carrinho
        </Text>
      </View>

      <TouchableOpacity
        style={styles.goToCartContainer}
        onPress={handleNavigation}
      >
        <Text style={[globalStyles.textBUTTON, globalStyles.textPURPLE]}>
          VER
        </Text>
        <ArrowRight size={16} color={THEME.COLORS.PURPLE} />
      </TouchableOpacity>
    </View>
  )
}
