import { THEME } from "@styles/theme"
import { Dimensions, StyleSheet } from "react-native"

const windowWidth = Dimensions.get("window").width

export const styles = StyleSheet.create({
  touchableContainer: {
    alignItems: "center",
    width: windowWidth,
    marginTop: 32,
    flexDirection: "row",
    marginHorizontal: 32,
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

    paddingTop: 16,
    paddingBottom: 20,
    paddingLeft: 116,
    paddingRight: 16,

    gap: 14,

    width: windowWidth - 64,
  },

  image: {
    position: "absolute",
    top: -32,
    left: 8,
    width: 96,
    height: 96,

    zIndex: 1,
  },

  textContainer: {
    gap: 4,
    paddingBottom: 4,
  },

  textName: {
    color: THEME.COLORS.GREY_200,
  },

  textDescription: {
    color: THEME.COLORS.GREY_400,
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
