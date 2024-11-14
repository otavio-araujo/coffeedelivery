import { THEME } from "@styles/theme"
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.GREY_100,
  },

  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 32,
    paddingVertical: 20,
    backgroundColor: THEME.COLORS.GREY_100,
  },

  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },

  locationText: {
    color: THEME.COLORS.GREY_900,
  },

  searchContainer: {
    gap: 15,
    width: "100%",
    marginTop: 20,
    paddingHorizontal: 32,
  },

  searchInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 12,
    gap: 8,
    width: "100%",
    backgroundColor: THEME.COLORS.GREY_200,
    borderRadius: 4,
  },

  searchInput: {
    flex: 1,
    color: THEME.COLORS.GREY_400,
  },

  coffeeBean: {
    width: 83,
    height: 83,
    marginTop: -14,
    alignSelf: "flex-end",
  },

  featuredDrinksContainer: { flex: 1, marginTop: -65, paddingBottom: 16 },

  drinksFilterContainer: {
    paddingHorizontal: 32,
    paddingVertical: 16,
    gap: 12,
    backgroundColor: THEME.COLORS.GREY_800,
    borderBottomWidth: 1,
    borderBottomColor: THEME.COLORS.GREY_700,
    borderTopWidth: 1,
    borderTopColor: THEME.COLORS.GREY_700,
  },

  drinksFilterTitle: {
    color: THEME.COLORS.GREY_300,
    gap: 8,
  },

  drinksFilterPillsContainer: {
    flexDirection: "row",
    gap: 8,
  },

  sectionListDrinksTitle: {
    color: THEME.COLORS.GREY_400,
    textTransform: "capitalize",
    paddingVertical: 16,
    backgroundColor: THEME.COLORS.GREY_800,
  },

  notificationContainer: {
    flexDirection: "row",

    position: "absolute",
    bottom: 0,

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
