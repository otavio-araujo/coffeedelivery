import { THEME } from "@styles/theme"
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  emptyContainer: {
    flex: 1,
    width: "100%",
    padding: 64,
    alignItems: "center",
    justifyContent: "center",
    gap: 32,
  },

  emptyIconAndTextContainer: {
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
  },

  footerContainer: {
    bottom: 0,
    width: "100%",
    position: "absolute",

    gap: 20,

    paddingTop: 28,
    paddingBottom: 40,
    paddingHorizontal: 32,

    backgroundColor: THEME.COLORS.WHITE,

    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: -2 },
  },

  totalContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
  },
})
