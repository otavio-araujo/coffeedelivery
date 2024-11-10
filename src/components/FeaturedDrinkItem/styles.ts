import { THEME } from "@styles/theme"
import { Dimensions, StyleSheet } from "react-native"

const windowWidth = Dimensions.get("window").width

export const styles = StyleSheet.create({
  touchableContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 375,
    marginTop: 32,
  },

  container: {
    flexGrow: 1,

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
    position: "absolute",
    top: -32,
    width: 120,
    height: 120,

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
    marginTop: "auto",
    alignItems: "baseline",
    gap: 4,
  },

  textPrice: {
    color: THEME.COLORS.YELLOW_DARK,
  },
})
