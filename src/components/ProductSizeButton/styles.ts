import { THEME } from "@styles/theme"
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    width: 98,
    height: 40,

    alignItems: "center",
    justifyContent: "center",

    borderRadius: 6,

    backgroundColor: THEME.COLORS.GREY_700,
  },

  error: {
    borderWidth: 2,
    borderColor: THEME.COLORS.RED,
  },

  selected: {
    borderWidth: 1,
    borderColor: THEME.COLORS.PURPLE,
    backgroundColor: THEME.COLORS.WHITE,
  },
})
