import React from "react"
import { Image, Text, TouchableOpacity, View } from "react-native"

import { styles } from "./styles"
import { THEME } from "@styles/theme"
import { globalStyles } from "@styles/globals"

import { CartDTO } from "@dtos/CartDTO"

import Plus from "phosphor-react-native/src/bold/Plus"
import Minus from "phosphor-react-native/src/bold/Minus"
import Trash from "phosphor-react-native/src/regular/Trash"

type CartItemListProps = {
  product: CartDTO
  handleRemoveProduct: () => void
}

export function CartItemList({
  product,
  handleRemoveProduct,
}: CartItemListProps) {
  return (
    <View style={styles.container}>
      {/* Product Image */}
      <Image source={product.drink.image} style={styles.image} />
      <View style={styles.productDetailsContainer}>
        {/* Title, size and price */}
        <View style={styles.productDetailsTitleAndPriceContainer}>
          <View style={{ gap: 2 }}>
            <Text style={[globalStyles.textMD, globalStyles.textGREY_100]}>
              {product.drink.name}
            </Text>
            <Text style={[globalStyles.textSM, globalStyles.textGREY_400]}>
              {product.size}
            </Text>
          </View>
          <Text style={[globalStyles.titleSM, globalStyles.textGREY_100]}>
            R${" "}
            {Number(product.drink.price / 100)
              .toFixed(2)
              .replace(".", ",")}
          </Text>
        </View>

        {/* Actions */}
        <View style={styles.actionsContainer}>
          {/* Quantity */}
          <View style={styles.quantityContainer}>
            <TouchableOpacity
              style={styles.quantityButtonContainer}
              onPress={() => {}}
            >
              <Minus size={20} color={THEME.COLORS.PURPLE} />
            </TouchableOpacity>

            <Text style={[globalStyles.textSM, globalStyles.textGREY_100]}>
              {product.quantity}
            </Text>

            <TouchableOpacity
              style={styles.quantityButtonContainer}
              onPress={() => {}}
            >
              <Plus size={20} color={THEME.COLORS.PURPLE} />
            </TouchableOpacity>
          </View>

          {/* Delete Button */}
          <TouchableOpacity
            style={styles.deleteButtonContainer}
            onPress={handleRemoveProduct}
          >
            <Trash size={20} color={THEME.COLORS.PURPLE} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
