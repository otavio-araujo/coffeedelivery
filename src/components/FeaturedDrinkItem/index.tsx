import { Image, Pressable, Text, TouchableOpacity, View } from "react-native"

import { styles } from "./styles"

import { Pill } from "@components/Pill"
import { Drinks } from "@assets/data/DrinkDataset"
import { globalStyles } from "@styles/globals"

interface FeaturedDrinkItemProps {
  drink: Drinks
}

export function FeaturedDrinkItem({ drink }: FeaturedDrinkItemProps) {
  return (
    <Pressable style={styles.touchableContainer}>
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
    </Pressable>
  )
}
