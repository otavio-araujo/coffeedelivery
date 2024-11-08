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

  searchContainer: {
    marginTop: 20,
    gap: 15,
    width: "100%",
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
})
