import { THEME } from "@styles/theme"
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  notificationContainer: {
    flexDirection: "row",

    bottom: -10,

    gap: 20,

    width: "100%",
    paddingHorizontal: 32,
    paddingBottom: 32,
    paddingTop: 28,

    alignItems: "center",
    justifyContent: "center",

    backgroundColor: THEME.COLORS.WHITE,

    shadowColor: "#000",
    shadowOpacity: 1,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: -2 },
  },

  cartIconContainer: {
    padding: 8,
    backgroundColor: THEME.COLORS.GREY_500,
    borderRadius: 6,
  },

  cartIconBadgeContainer: {
    position: "absolute",
    top: -8,
    right: -8,
    zIndex: 1,
    width: 20,
    height: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    backgroundColor: THEME.COLORS.PURPLE,
  },

  messageContainer: {
    flex: 1,
  },

  goToCartContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
})
