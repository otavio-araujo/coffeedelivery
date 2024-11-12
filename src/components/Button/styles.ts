import { THEME } from "@styles/theme"
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flex: 1,

    minHeight: 45,
    maxHeight: 45,

    alignItems: "center",
    justifyContent: "center",

    paddingVertical: 8,
    paddingHorizontal: 12,

    borderRadius: 6,

    backgroundColor: THEME.COLORS.PURPLE_DARK,
  },

  confirmOrder: {
    backgroundColor: THEME.COLORS.YELLOW_DARK,
  },

  disabled: {
    opacity: 0.3,
  },
})
