import React from "react"
import { Image, Pressable, Text, TouchableOpacity, View } from "react-native"

import { styles } from "./styles"
import { Drinks } from "@assets/data/DrinkDataset"

interface FeaturedDrinkItemProps {
  drink: Drinks
}

export function FeaturedDrinkItem({ drink }: FeaturedDrinkItemProps) {
  return (
    <Pressable style={styles.touchableContainer}>
      <Image source={drink.image} style={styles.image} resizeMode="cover" />
      <View style={styles.container}>
        <Text>{drink.name}</Text>
      </View>
    </Pressable>
  )
}
