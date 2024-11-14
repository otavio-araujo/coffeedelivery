import { View } from "react-native"

import { useNavigation } from "@react-navigation/native"
import { NavigationProp } from "@react-navigation/native"

import { AppRouteProps } from "@routes/app.routes"

import { styles } from "./styles"
import { globalStyles } from "@styles/globals"

import { removeAll } from "@storage/storageCart"

import { useCart } from "@hooks/useCart"
import { Button } from "@components/Button"

import Animated from "react-native-reanimated"
import { FadeIn } from "react-native-reanimated"
import { FadeInDown } from "react-native-reanimated"
import { SlideInLeft } from "react-native-reanimated"

import Toast from "react-native-toast-message"

export function OrderConfirmation() {
  const navigation: NavigationProp<AppRouteProps> = useNavigation()

  const { loadCartData } = useCart()

  async function handleGoToHome() {
    try {
      await removeAll()
      await loadCartData()
      navigation.navigate("HomeScreen", { notification: undefined })
    } catch (error) {
      Toast.show({
        type: "customToast",
        props: {
          title: "Erro",
          message: "Não foi possível limpar o carrinho",
          type: "error",
        },
      })
    }
  }

  return (
    <View style={styles.container}>
      <Animated.Image
        entering={SlideInLeft.duration(700)}
        source={require("@assets/cart/order-confirmation.png")}
        style={styles.image}
        resizeMode="contain"
      />
      <Animated.Text
        entering={FadeInDown.duration(500)}
        style={[
          styles.title,
          globalStyles.titleLG,
          globalStyles.textYELLOW_DARK,
        ]}
      >
        Uhu! Pedido confirmado
      </Animated.Text>
      <Animated.Text
        entering={FadeInDown.duration(500)}
        style={[styles.message, globalStyles.textSM, globalStyles.textGREY_200]}
      >
        Agora é só aguardar que logo o café chegará até você!
      </Animated.Text>

      <Animated.View
        style={{ width: "100%" }}
        entering={FadeIn.duration(500).delay(500)}
      >
        <Button
          label="ir para a home"
          isFullWidth
          buttonVariant="default"
          onPress={handleGoToHome}
        />
      </Animated.View>
    </View>
  )
}
