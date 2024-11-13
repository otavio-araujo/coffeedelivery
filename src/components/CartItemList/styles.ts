import { THEME } from "@styles/theme"
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",

    alignItems: "center",
    justifyContent: "space-between",

    width: "100%",
    gap: 20,

    paddingVertical: 16,
    paddingHorizontal: 32,

    borderBottomWidth: 1,
    borderBottomColor: THEME.COLORS.GREY_600,
  },

  image: {
    width: 64,
    height: 64,
  },

  productDetailsContainer: {
    flex: 1,
    gap: 8,
  },

  productDetailsTitleAndPriceContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 8,
  },

  actionsContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  quantityContainer: {
    gap: 4,

    flexDirection: "row",
    alignItems: "center",

    borderWidth: 1,
    borderRadius: 6,
    borderColor: THEME.COLORS.GREY_500,
  },

  quantityButtonContainer: {
    padding: 8,
  },

  deleteButtonContainer: {
    padding: 8,
    borderRadius: 6,
    backgroundColor: THEME.COLORS.GREY_600,
  },
})
