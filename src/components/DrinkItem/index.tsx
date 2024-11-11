import {
  Dimensions,
  Image,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from "react-native"

import { styles } from "./styles"

import { Pill } from "@components/Pill"
import { Drinks } from "@assets/data/DrinkDataset"
import { globalStyles } from "@styles/globals"
import Animated, {
  FadeInDown,
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated"
import { Extrapolate } from "@shopify/react-native-skia"

interface FeaturedDrinkItemProps {
  drink: Drinks
}

export function DrinkItem({ drink }: FeaturedDrinkItemProps) {
  const AnimatedPressable = Animated.createAnimatedComponent(Pressable)

  return (
    <AnimatedPressable
      style={styles.touchableContainer}
      entering={FadeInDown.delay(1000).duration(300)}
    >
      <Image source={drink.image} style={styles.image} resizeMode="cover" />

      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={[styles.textName, globalStyles.titleMD]}>
            {drink.name}
          </Text>
          <Text style={styles.textDescription}>{drink.description}</Text>
        </View>

        <View style={styles.priceContainer}>
          <Text style={[styles.textPrice, globalStyles.textSM]}>R$</Text>
          <Text style={[styles.textPrice, globalStyles.titleLG]}>
            {Number(drink.price / 100)
              .toFixed(2)
              .replace(".", ",")}
          </Text>
        </View>
      </View>
    </AnimatedPressable>
  )
}
