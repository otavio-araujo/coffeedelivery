import { THEME } from "@styles/theme"
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: THEME.COLORS.GREY_700,

    backgroundColor: THEME.COLORS.GREY_600,

    paddingTop: 96,
    paddingBottom: 20,
    paddingHorizontal: 16,

    alignItems: "center",

    width: 208,
  },

  dataContainer: {
    position: "absolute",
    top: -32,
    zIndex: 1,
    paddingTop: 96,
    paddingBottom: 20,
    paddingHorizontal: 16,
  },

  image: {
    width: 120,
    height: 120,
  },
})
