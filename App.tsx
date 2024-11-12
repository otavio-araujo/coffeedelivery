import React from "react"
import { StatusBar } from "expo-status-bar"

import { useFonts } from "expo-font"
import { Baloo2_700Bold } from "@expo-google-fonts/baloo-2"
import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto"

import { Routes } from "@routes/index"

import { THEME } from "@styles/theme"
import LoadingIndicator from "@components/LoadingIndicator"
import { CartContextProvider } from "@contexts/cartContext"

export default function App() {
  const [fontsLoaded] = useFonts({
    Baloo2_700Bold,
    Roboto_400Regular,
    Roboto_700Bold,
  })

  if (!fontsLoaded) {
    return <LoadingIndicator />
  }

  return (
    <>
      <StatusBar
        translucent
        backgroundColor={THEME.COLORS.PURPLE_DARK}
        style="light"
      />
      <CartContextProvider>
        <Routes />
      </CartContextProvider>
    </>
  )
}
