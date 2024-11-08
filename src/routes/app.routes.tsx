import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { HomeScreen } from "@screens/Home"
import { SplashScreen } from "@screens/Splash"

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="splash" component={SplashScreen} />
      <Screen name="home" component={HomeScreen} />
    </Navigator>
  )
}
