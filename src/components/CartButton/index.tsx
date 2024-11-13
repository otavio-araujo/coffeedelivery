import {
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  Text,
} from "react-native"

import { styles } from "./styles"
import { globalStyles } from "@styles/globals"

import { useCart } from "@hooks/useCart"

import ShoppingCart from "phosphor-react-native/src/fill/ShoppingCart"

type CartButtonProps = TouchableOpacityProps & {
  color: string
}

export function CartButton({ color, ...rest }: CartButtonProps) {
  const { cart } = useCart()

  return (
    <TouchableOpacity style={styles.cartContainer} {...rest}>
      {cart.length > 0 && (
        <View style={styles.badgeContainer}>
          <Text style={[globalStyles.textXS, globalStyles.textWHITE]}>
            {cart.length}
          </Text>
        </View>
      )}
      <ShoppingCart size={20} color={color} />
    </TouchableOpacity>
  )
}
