import { ActivityIndicator } from "react-native"

import { useFonts } from "expo-font"
import { Baloo2_700Bold } from "@expo-google-fonts/baloo-2"
import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto"

import { Routes } from "@/routes"

import { THEME } from "@/styles/theme"
import LoadingIndicator from "@/components/LoadingIndicator"

export default function App() {
  const [fontsLoaded] = useFonts({
    Baloo2_700Bold,
    Roboto_400Regular,
    Roboto_700Bold,
  })

  if (fontsLoaded) {
    return <LoadingIndicator />
  }

  return <Routes />
}
