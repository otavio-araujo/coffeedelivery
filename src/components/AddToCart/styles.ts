import { THEME } from "@styles/theme"
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",

    borderRadius: 6,

    marginTop: 20,
    padding: 8,
    gap: 16,

    backgroundColor: THEME.COLORS.GREY_700,
  },

  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },

  quantityButtonContainer: {
    padding: 8,
  },
})
