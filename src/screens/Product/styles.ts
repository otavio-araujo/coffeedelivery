import { THEME } from "@styles/theme"
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.GREY_100,
    alignItems: "flex-start",
  },

  productDetails: {
    paddingHorizontal: 32,
    paddingTop: 12,
  },

  productNameAndPriceContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
    marginTop: 12,
    gap: 8,
  },

  productNameContainer: {
    flexWrap: "wrap",
    maxWidth: 220,
  },

  productPriceContainer: {
    flexDirection: "row",
    alignItems: "baseline",
    gap: 4,
  },

  productDescription: {
    marginTop: 20,
    color: THEME.COLORS.GREY_500,
  },

  productImageContainer: {
    marginTop: 32,
    marginHorizontal: "auto",
    paddingHorizontal: 40,
  },

  productImage: {
    width: 295,
    height: 335,
  },

  productActionsContainer: {
    top: -72,
    backgroundColor: THEME.COLORS.GREY_900,
    paddingTop: 42,
    paddingHorizontal: 40,
    width: "100%",
    height: "100%",
    zIndex: -1,
    gap: 8,
  },

  productSizesContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
})
