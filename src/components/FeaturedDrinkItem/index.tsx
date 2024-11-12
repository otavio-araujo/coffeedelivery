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
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated"
import { Extrapolate } from "@shopify/react-native-skia"
import { ComponentProps } from "react"

const AnimatedPressable = Animated.createAnimatedComponent(Pressable)

type FeaturedDrinkItemProps = ComponentProps<typeof Pressable> & {
  drink: Drinks
  index: number
  scrollX: SharedValue<number>
}

export function FeaturedDrinkItem({
  drink,
  scrollX,
  index,
  ...rest
}: FeaturedDrinkItemProps) {
  const { width } = Dimensions.get("screen")

  const scrollXAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: interpolate(
            scrollX.value,
            [(index - 1) * width, index * width, (index + 1) * width],
            [-width * 0.45, 0, width * 0.45],
            Extrapolate.CLAMP
          ),
        },
        {
          scale: interpolate(
            scrollX.value,
            [(index - 1) * width, index * width, (index + 1) * width],
            [0.7, 1, 0.7],
            Extrapolate.CLAMP
          ),
        },
      ],
    }
  })
  return (
    <AnimatedPressable
      style={[styles.touchableContainer, scrollXAnimatedStyle]}
      {...rest}
    >
      <Image source={drink.image} style={styles.image} resizeMode="cover" />

      <View style={styles.container}>
        <Pill label={drink.category} pillVariant="purple" />

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
