import { NavigationContainer } from "@react-navigation/native"
import { AppRoutes } from "./app.routes"
import { StatusBar } from "expo-status-bar"
import { THEME } from "@/styles/theme"

export function Routes() {
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  )
}
