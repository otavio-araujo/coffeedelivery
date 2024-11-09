import { useEffect } from "react"
import { StatusBar } from "expo-status-bar"
import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native"
import Carousel from "react-native-reanimated-carousel"
import { useSafeAreaInsets } from "react-native-safe-area-context"

import { Canvas, Rect } from "@shopify/react-native-skia"
import Animated, {
  FadeInDown,
  FadeInRight,
  useSharedValue,
  withTiming,
} from "react-native-reanimated"

import { styles } from "./styles"
import { THEME } from "@styles/theme"
import { globalStyles } from "@styles/globals"

import { drinks, featuredDrinks } from "@assets/data/DrinkDataset"

import MapPin from "phosphor-react-native/src/fill/MapPin"
import ShoppingCart from "phosphor-react-native/src/fill/ShoppingCart"
import MagnifyingGlass from "phosphor-react-native/src/regular/MagnifyingGlass"
import { FeaturedDrinkItem } from "@components/FeaturedDrinkItem"

export function HomeScreen() {
  const { top } = useSafeAreaInsets()

  const BG_RECTANGLE_HEIGHT = 420

  const windowWidth = Dimensions.get("window").width
  const PAGE_WIDTH = windowWidth / 2

  const topRectangleHeight = useSharedValue(40)

  useEffect(() => {
    topRectangleHeight.value = withTiming(BG_RECTANGLE_HEIGHT, {
      duration: 500,
    })
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
          height: BG_RECTANGLE_HEIGHT,
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

      {/* Header */}
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

      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        {/* Search */}
        <Animated.View
          entering={FadeInDown.delay(400).duration(300)}
          style={styles.searchContainer}
        >
          <Text style={[globalStyles.titleMD, globalStyles.textWHITE]}>
            Encontre o café perfeito para qualquer hora do dia
          </Text>
          <View style={styles.searchInputContainer}>
            <MagnifyingGlass size={16} color={THEME.COLORS.GREY_400} />

            <TextInput
              style={[styles.searchInput, globalStyles.textSM]}
              placeholder="Pesquisar"
              placeholderTextColor={THEME.COLORS.GREY_400}
            />
          </View>
          <Image
            source={require("@assets/catalogue/coffee-bean.png")}
            style={styles.coffeeBean}
          />
        </Animated.View>

        {/* Featured Drinks */}
        <Animated.View
          entering={FadeInRight.delay(500).duration(300)}
          style={styles.featuredDrinksContainer}
        >
          <Carousel
            data={featuredDrinks}
            style={{
              width: windowWidth,
              justifyContent: "center",
              alignItems: "center",
            }}
            width={PAGE_WIDTH}
            renderItem={({ item }) => <FeaturedDrinkItem drink={item} />}
            loop={false}
            mode="parallax"
            modeConfig={{
              parallaxScrollingScale: 1,
              parallaxScrollingOffset: 0,
              parallaxAdjacentItemScale: 0.7,
            }}
          />
        </Animated.View>
      </ScrollView>
    </View>
  )
}
