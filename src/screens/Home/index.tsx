import { useEffect } from "react"
import { StatusBar } from "expo-status-bar"
import { Dimensions, Text, TouchableOpacity, View } from "react-native"
import { Canvas, Rect } from "@shopify/react-native-skia"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { useSharedValue, withTiming } from "react-native-reanimated"

import { styles } from "./styles"
import { THEME } from "@styles/theme"
import { globalStyles } from "@styles/globals"

import MapPin from "phosphor-react-native/src/fill/MapPin"
import ShoppingCart from "phosphor-react-native/src/fill/ShoppingCart"

export function HomeScreen() {
  const { top } = useSafeAreaInsets()

  const windowWidth = Dimensions.get("window").width

  const topRectangleHeight = useSharedValue(40)

  useEffect(() => {
    topRectangleHeight.value = withTiming(342, { duration: 500 })
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
        <View style={styles.locationContainer}>
          <MapPin size={20} color={THEME.COLORS.PURPLE} />
          <Text style={[styles.locationText, globalStyles.textSM]}>
            Porto Alegre, RS
          </Text>
        </View>
        <TouchableOpacity style={styles.cartContainer}>
          <ShoppingCart size={20} color={THEME.COLORS.YELLOW_DARK} />
        </TouchableOpacity>
      </View>
    </View>
  )
}
