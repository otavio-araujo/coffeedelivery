import { GestureHandlerRootView } from "react-native-gesture-handler"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { HomeScreen } from "@screens/Home"
import { CartScreen } from "@screens/Cart"
import { SplashScreen } from "@screens/Splash"
import { ProductScreen } from "@screens/Product"

const { Navigator, Screen } = createNativeStackNavigator<AppRouteProps>()

export type AppRouteProps = {
  HomeScreen: undefined
  SplashScreen: undefined
  ProductScreen: {
    productID: number
  }
  CartScreen: undefined
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
      </Navigator>
    </GestureHandlerRootView>
  )
}
