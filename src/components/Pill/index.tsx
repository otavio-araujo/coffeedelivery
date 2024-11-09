import { Text, View } from "react-native"

import { styles } from "./styles"
import { THEME } from "@styles/theme"
import { globalStyles } from "@styles/globals"

type PillProps = {
  label: string
  pillVariant?: "purple" | "default"
}

export function Pill({ label, pillVariant = "default" }: PillProps) {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor:
            pillVariant === "purple"
              ? THEME.COLORS.PURPLE_LIGHT
              : THEME.COLORS.GREY_200,
        },
      ]}
    >
      <Text
        style={[
          styles.text,
          globalStyles.textTAG,
          {
            color:
              pillVariant === "purple"
                ? THEME.COLORS.PURPLE
                : THEME.COLORS.WHITE,
          },
        ]}
      >
        {label}
      </Text>
    </View>
  )
}
