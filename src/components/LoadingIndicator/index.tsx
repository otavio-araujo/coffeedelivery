import { StatusBar } from "expo-status-bar"
import { View, ActivityIndicator } from "react-native"

import { THEME } from "@styles/theme"

import { styles } from "./styles"

const LoadingIndicator = () => {
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" style="light" />
      <ActivityIndicator size={"large"} color={THEME.COLORS.PURPLE} />
    </View>
  )
}

export default LoadingIndicator
