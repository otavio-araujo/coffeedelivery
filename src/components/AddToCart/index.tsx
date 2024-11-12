import { Text, TouchableOpacity, View } from "react-native"

import Minus from "phosphor-react-native/src/bold/Minus"
import Plus from "phosphor-react-native/src/bold/Plus"
import { THEME } from "@styles/theme"
import { styles } from "./styles"
import { globalStyles } from "@styles/globals"
import { Button } from "@components/Button"

type Props = {
  handleRemove: () => void
  handleAdd: () => void
  handleAddToCart: () => void
  quantity: number
  disabled?: boolean
}

export function AddToCart({
  handleRemove,
  handleAdd,
  handleAddToCart,
  quantity,
  disabled = false,
}: Props) {
  return (
    <View style={styles.container}>
      {/* Quantity */}
      <View style={styles.quantityContainer}>
        <TouchableOpacity
          style={styles.quantityButtonContainer}
          onPress={handleRemove}
        >
          <Minus size={20} color={THEME.COLORS.PURPLE} />
        </TouchableOpacity>

        <Text style={[globalStyles.textSM, globalStyles.textGREY_100]}>
          {quantity}
        </Text>

        <TouchableOpacity
          style={styles.quantityButtonContainer}
          onPress={handleAdd}
        >
          <Plus size={20} color={THEME.COLORS.PURPLE} />
        </TouchableOpacity>
      </View>

      {/* Add to cart */}
      <Button
        label="adicionar"
        buttonVariant="default"
        onPress={handleAddToCart}
        disabled={disabled}
      />
    </View>
  )
}
