import React from "react"
import { Image, Text, View } from "react-native"

import { styles } from "./styles"
import { Drinks } from "@assets/data/DrinkDataset"

interface FeaturedDrinkItemProps {
  drink: Drinks
}

export function FeaturedDrinkItem({ drink }: FeaturedDrinkItemProps) {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.dataContainer}>
          <Image
            source={require("../../assets/catalogue/americano.png")}
            style={styles.image}
            resizeMode="cover"
          />
          <Text>{drink.name}</Text>
        </View>
      </View>
    </>
  )
}
