import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native"
import { styles } from "./styles"
import { globalStyles } from "@styles/globals"

type Props = TouchableOpacityProps & {
  label: string
  buttonVariant: "default" | "confirmOrder"
  disabled?: boolean
  isFullWidth?: boolean
}

export function Button({
  label,
  buttonVariant = "default",
  isFullWidth = false,
  disabled = false,
  ...rest
}: Props) {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        buttonVariant === "confirmOrder" && styles.confirmOrder,
        disabled && styles.disabled,
        isFullWidth && { width: "100%" },
      ]}
      disabled={disabled}
      {...rest}
    >
      <Text style={globalStyles.textBUTTON}>{label}</Text>
    </TouchableOpacity>
  )
}
