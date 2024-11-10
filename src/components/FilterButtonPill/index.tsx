import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native"
import { styles } from "./styles"
import { globalStyles } from "@styles/globals"

type FilterButtonPillProps = TouchableOpacityProps & {
  label: string
  isSelected?: boolean
}

export function FilterButtonPill({
  label,
  isSelected = false,
  ...rest
}: FilterButtonPillProps) {
  return (
    <TouchableOpacity
      {...rest}
      style={[styles.container, isSelected && styles.selected]}
    >
      <Text
        style={[
          globalStyles.textTAG,
          styles.label,
          isSelected && styles.selectedLabel,
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  )
}
