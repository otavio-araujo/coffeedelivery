import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { HomeScreen } from "@screens/Home"
import { SplashScreen } from "@screens/Splash"
import { GestureHandlerRootView } from "react-native-gesture-handler"

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <GestureHandlerRootView>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Screen name="splash" component={SplashScreen} />
        <Screen name="home" component={HomeScreen} />
      </Navigator>
    </GestureHandlerRootView>
  )
}
