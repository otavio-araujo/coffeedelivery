import { sub } from "@shopify/react-native-skia"
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
    justifyContent: "center",

    paddingHorizontal: 48,
    paddingTop: 68,
    paddingBottom: 80,
  },

  image: {
    width: 240,
    height: 240,
  },

  title: {
    marginTop: 48,
  },

  message: {
    marginTop: 8,
    marginBottom: 64,
    maxWidth: 260,
    textAlign: "center",
  },
})
