import React, { useEffect } from "react"
import { StatusBar } from "expo-status-bar"
import { View, Image, Dimensions } from "react-native"
import { Canvas, Circle } from "@shopify/react-native-skia"

import { styles } from "./styles"
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated"
import { THEME } from "@styles/theme"

export function SplashScreen() {
  const windowHeight = Dimensions.get("window").height
  const windowWidth = Dimensions.get("window").width

  const logoIconPosition = useSharedValue(70)
  const logoTextPosition = useSharedValue(70)
  const logoTextOpacity = useSharedValue(0)

  const logoIconAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: logoIconPosition.value }],
    }
  })

  const logoTextAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: logoTextPosition.value }],
      opacity: logoTextOpacity.value,
    }
  })

  const circleSize = useSharedValue(200)
  const circleOpacity = useSharedValue(0)

  useEffect(() => {
    circleSize.value = withTiming(windowHeight, { duration: 700 })
    circleOpacity.value = withTiming(1, { duration: 700 })
    logoIconPosition.value = withTiming(0, { duration: 700 })
    logoTextPosition.value = withTiming(0, { duration: 700 })
    logoTextOpacity.value = withTiming(1, { duration: 700 }, (finished) => {
      "worklet"
      if (finished) {
      }
    })
  }, [])

  return (
    <Animated.View style={styles.container}>
      <StatusBar style="light" />
      <Canvas
        style={{
          width: windowWidth,
          height: windowHeight,
          position: "absolute",
          top: 0,
        }}
      >
        <Circle
          cx={windowWidth / 2}
          cy={windowHeight / 2}
          r={circleSize}
          color={THEME.COLORS.PURPLE}
          opacity={circleOpacity}
        />
      </Canvas>
      <View style={styles.logoContainer}>
        <Animated.Image
          source={require("@assets/logo-icon.png")}
          style={[styles.logoIcon, logoIconAnimatedStyle]}
          resizeMode="contain"
        />
        <Animated.Image
          source={require("@assets/logo-text.png")}
          style={[styles.logoText, logoTextAnimatedStyle]}
          resizeMode="contain"
        />
      </View>
    </Animated.View>
  )
}
