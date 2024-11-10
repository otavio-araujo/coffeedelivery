import { THEME } from "@styles/theme"
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 6,
    paddingHorizontal: 12,

    borderWidth: 1,
    borderRadius: 100,
    borderColor: THEME.COLORS.PURPLE,
  },

  selected: {
    backgroundColor: THEME.COLORS.PURPLE,
  },

  label: {
    color: THEME.COLORS.PURPLE_DARK,
  },

  selectedLabel: {
    color: THEME.COLORS.WHITE,
  },
})
