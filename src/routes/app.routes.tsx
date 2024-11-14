import { GestureHandlerRootView } from "react-native-gesture-handler"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { HomeScreen } from "@screens/Home"
import { CartScreen } from "@screens/Cart"
import { SplashScreen } from "@screens/Splash"
import { ProductScreen } from "@screens/Product"
import { OrderConfirmation } from "@screens/OrderConfirmation"

const { Navigator, Screen } = createNativeStackNavigator<AppRouteProps>()

export type NotificationProps = {
  productName: string
  productSize: string
  productQuantity: number
}

export type AppRouteProps = {
  HomeScreen: {
    notification: NotificationProps | undefined
  }
  SplashScreen: undefined
  ProductScreen: {
    productID: number
  }
  CartScreen: undefined
  OrderConfirmationScreen: undefined
}

export function AppRoutes() {
  return (
    <GestureHandlerRootView>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Screen name="SplashScreen" component={SplashScreen} />
        <Screen name="HomeScreen" component={HomeScreen} />
        <Screen name="ProductScreen" component={ProductScreen} />
        <Screen name="CartScreen" component={CartScreen} />
        <Screen name="OrderConfirmationScreen" component={OrderConfirmation} />
      </Navigator>
    </GestureHandlerRootView>
  )
}
