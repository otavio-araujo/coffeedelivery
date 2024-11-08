import { useEffect } from "react"
import { StatusBar } from "expo-status-bar"
import { Dimensions, Text, View } from "react-native"
import { Canvas, Rect } from "@shopify/react-native-skia"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { useSharedValue, withTiming } from "react-native-reanimated"

import { THEME } from "@styles/theme"

import { styles } from "./styles"

export function HomeScreen() {
  const { top } = useSafeAreaInsets()

  const windowWidth = Dimensions.get("window").width

  const topRectangleHeight = useSharedValue(40)

  useEffect(() => {
    topRectangleHeight.value = withTiming(342, { duration: 700 })
  }, [])

  return (
    <View style={[styles.container, { paddingTop: top }]}>
      <StatusBar
        translucent
        backgroundColor={THEME.COLORS.GREY_100}
        style="light"
      />
      <Canvas
        style={{
          height: 342,
          width: windowWidth,
          position: "absolute",
          top: 0,
          left: 0,
        }}
      >
        <Rect
          x={0}
          y={0}
          width={windowWidth}
          height={topRectangleHeight}
          color={THEME.COLORS.GREY_100}
        />
      </Canvas>
      <View style={styles.headerContainer}>
        <Text>Porto Alegre</Text>
        <Text>Icon</Text>
      </View>
    </View>
  )
}
