import { GestureHandlerRootView } from "react-native-gesture-handler"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { ProductScreen } from "@screens/Product"
import { HomeScreen } from "@screens/Home"
import { SplashScreen } from "@screens/Splash"

const { Navigator, Screen } = createNativeStackNavigator<AppRouteProps>()

export type AppRouteProps = {
  HomeScreen: undefined
  SplashScreen: undefined
  ProductScreen: {
    productID: number
  }
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
      </Navigator>
    </GestureHandlerRootView>
  )
}
