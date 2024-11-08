import { THEME } from "@styles/theme"
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 32,
  },

  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 20,
  },

  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },

  locationText: {
    color: THEME.COLORS.GREY_900,
  },

  cartContainer: {
    padding: 8,
  },
})
