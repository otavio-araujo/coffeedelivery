import { StyleSheet } from "react-native"

import { THEME } from "@styles/theme"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.PURPLE_DARK,
    alignItems: "center",
    justifyContent: "center",
  },

  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  logoIcon: {
    width: 60,
    height: 95,
  },

  logoText: {
    width: 130,
    height: 95,
  },
})
