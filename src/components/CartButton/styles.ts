import { THEME } from "@styles/theme"
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  cartContainer: {
    padding: 8,
  },

  badgeContainer: {
    top: -8,
    right: -8,
    zIndex: 1,
    position: "absolute",

    width: 20,
    height: 20,

    alignItems: "center",
    justifyContent: "center",

    borderRadius: 100,
    backgroundColor: THEME.COLORS.PURPLE,
  },
})
