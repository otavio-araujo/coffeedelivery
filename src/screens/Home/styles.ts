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

  cartContainer: {
    padding: 8,
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
})
