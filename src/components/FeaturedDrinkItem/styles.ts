import { THEME } from "@styles/theme"
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  touchableContainer: {
    alignItems: "center",
    width: 208,
    top: -88,
  },

  container: {
    borderWidth: 1,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 36,
    borderBottomLeftRadius: 36,
    borderBottomRightRadius: 6,

    borderColor: THEME.COLORS.GREY_700,

    backgroundColor: THEME.COLORS.GREY_800,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },

    paddingTop: 96,
    paddingBottom: 20,
    paddingHorizontal: 16,

    gap: 14,

    alignItems: "center",

    width: 208,
  },

  image: {
    width: 120,
    height: 120,

    top: 88,

    zIndex: 1,
  },

  textContainer: {
    alignItems: "center",
    gap: 4,
    paddingBottom: 4,
  },

  textName: {
    color: THEME.COLORS.GREY_200,
  },

  textDescription: {
    color: THEME.COLORS.GREY_400,
    textAlign: "center",
  },

  priceContainer: {
    flexDirection: "row",
    alignItems: "baseline",
    gap: 4,
  },

  textPrice: {
    color: THEME.COLORS.YELLOW_DARK,
  },
})
