import { Pressable, PressableProps, Text } from "react-native"
import { styles } from "./styles"
import { globalStyles } from "@styles/globals"
import { THEME } from "@styles/theme"

type Props = PressableProps & {
  label: string
  isSelected?: boolean
  hasError?: boolean
}

export function ProductSizeButton({
  label,
  isSelected = false,
  hasError = false,
  ...rest
}: Props) {
  return (
    <Pressable
      {...rest}
      style={[
        styles.container,
        hasError && styles.error,
        isSelected && styles.selected,
      ]}
    >
      <Text
        style={[
          globalStyles.textSM,
          globalStyles.textGREY_300,
          isSelected && { fontWeight: "bold", color: THEME.COLORS.PURPLE },
          isSelected && { fontWeight: "bold", color: THEME.COLORS.PURPLE },
        ]}
      >
        {label}
      </Text>
    </Pressable>
  )
}
