import { useState } from "react"
import { useEffect } from "react"

import { Text } from "react-native"
import { View } from "react-native"
import { Image } from "react-native"

import { useRoute } from "@react-navigation/native"
import { useNavigation } from "@react-navigation/native"
import { NavigationProp } from "@react-navigation/native"

import { useSafeAreaInsets } from "react-native-safe-area-context"

import Toast from "react-native-toast-message"

import { AppRouteProps, NotificationProps } from "@routes/app.routes"

import { styles } from "./styles"
import { globalStyles } from "@styles/globals"

import { Pill } from "@components/Pill"
import { Header } from "@components/Header"
import { AddToCart } from "@components/AddToCart"
import { ProductSizeButton } from "@components/ProductSizeButton"

import { CartDTO } from "@dtos/CartDTO"
import { Drinks, getDrinkById } from "@assets/data/DrinkDataset"

import { useCart } from "@hooks/useCart"

type RouteParamsProps = {
  productID: number
}

export function ProductScreen() {
  const { productID } = useRoute().params as RouteParamsProps

  const navigation: NavigationProp<AppRouteProps> = useNavigation()

  const { addProduct, removeProduct, cart } = useCart()

  const { top } = useSafeAreaInsets()

  const [drink, setDrink] = useState<Drinks>()

  const [productSize, setProductSize] = useState<
    "114ml" | "140ml" | "227ml" | null
  >(null)

  const [productQuantity, setProductQuantity] = useState(1)

  async function handleAddToCart() {
    if (drink === undefined || productSize === null || productQuantity === 0) {
      return
    }

    const product: CartDTO = {
      drink,
      quantity: productQuantity,
      size: productSize,
    }
    try {
      await addProduct(product)

      const notification: NotificationProps = {
        productName: drink.name,
        productSize: productSize,
        productQuantity: productQuantity,
      }

      navigation.navigate("HomeScreen", { notification })
    } catch (error) {
      Toast.show({
        type: "customToast",
        props: {
          title: "Erro - Adicionar ao carrinho",
          message: "Não foi possível adicionar o produto ao carrinho",
          type: "error",
        },
      })
    }
  }

  useEffect(() => {
    setDrink(getDrinkById(productID))
  })

  return (
    <View style={[styles.container, { paddingTop: top }]}>
      <Header
        handleOnPress={() => navigation.goBack()}
        handleGoToCart={() => navigation.navigate("CartScreen")}
      />

      {/* Product Details */}
      <View style={styles.productDetails}>
        <View style={{ marginRight: "auto" }}>
          <Pill pillVariant="default" label={drink?.category || ""} />
        </View>
        <View style={styles.productNameAndPriceContainer}>
          <Text
            style={[
              globalStyles.titleLG,
              globalStyles.textWHITE,
              styles.productNameContainer,
            ]}
            numberOfLines={2}
          >
            {drink?.name}
          </Text>
          <View style={styles.productPriceContainer}>
            <Text style={[globalStyles.titleXS, globalStyles.textYELLOW]}>
              R$
            </Text>
            <Text style={[globalStyles.titleXL, globalStyles.textYELLOW]}>
              {(Number(drink?.price ?? 0) / 100).toFixed(2).replace(".", ",") ||
                "0,00"}
            </Text>
          </View>
        </View>
        <Text style={[styles.productDescription, globalStyles.textMD]}>
          Bebida a base de café, uísque irlandês, açúcar e chantilly.
        </Text>
      </View>

      {/* Product Image */}
      <View style={styles.productImageContainer}>
        <Image
          source={require("@assets/catalogue/cup.png")}
          style={styles.productImage}
          resizeMode="contain"
        />
      </View>

      {/* Product Actions */}
      <View style={styles.productActionsContainer}>
        {/* Product Sizes */}
        <Text
          style={[
            globalStyles.textSM,
            globalStyles.textGREY_400,
            productSize === null && globalStyles.textRED_DARK,
          ]}
        >
          Selecione o tamanho:
        </Text>
        <View style={styles.productSizesContainer}>
          <ProductSizeButton
            onPress={() => setProductSize("114ml")}
            label="114ml"
            hasError={productSize === null}
            isSelected={productSize === "114ml"}
          />
          <ProductSizeButton
            onPress={() => setProductSize("140ml")}
            label="140ml"
            hasError={productSize === null}
            isSelected={productSize === "140ml"}
          />
          <ProductSizeButton
            onPress={() => setProductSize("227ml")}
            label="227ml"
            hasError={productSize === null}
            isSelected={productSize === "227ml"}
          />
        </View>

        {/* Add to Cart */}
        <AddToCart
          quantity={productQuantity}
          disabled={productSize === null}
          handleRemove={() =>
            setProductQuantity((state) => Math.max(state - 1, 1))
          }
          handleAdd={() => setProductQuantity((state) => state + 1)}
          handleAddToCart={handleAddToCart}
        />
      </View>
    </View>
  )
}
