import { THEME } from "@styles/theme"
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 32,
    paddingVertical: 20,
    backgroundColor: THEME.COLORS.GREY_100,
  },

  headerCartVariantContainer: {
    backgroundColor: THEME.COLORS.GREY_800,
    borderBottomWidth: 1,
    borderBottomColor: THEME.COLORS.GREY_600,
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

  title: {
    flex: 1,
    textAlign: "center",
    marginRight: 32,
  },
})
