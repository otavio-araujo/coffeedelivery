import { THEME } from "@styles/theme"
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 32,
  },

  toastContainer: {
    flexDirection: "row",

    gap: 16,
    padding: 16,

    alignItems: "flex-start",

    width: "100%",

    borderWidth: 1,
    borderRadius: 6,
    borderColor: THEME.COLORS.GREY_600,

    backgroundColor: THEME.COLORS.GREY_900,
  },

  textContainer: {
    gap: 4,
  },
})
