import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { HomeScreen } from "@/screens/Home"

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="home" component={HomeScreen} />
    </Navigator>
  )
}
