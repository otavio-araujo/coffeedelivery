import React from "react"
import { StatusBar } from "expo-status-bar"
import Toast from "react-native-toast-message"

import { useFonts } from "expo-font"
import { Baloo2_700Bold } from "@expo-google-fonts/baloo-2"
import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto"

import { Routes } from "@routes/index"

import { THEME } from "@styles/theme"

import LoadingIndicator from "@components/LoadingIndicator"

import { CartContextProvider } from "./src/contexts/CartContext"
import {
  NotificationToast,
  NotificationToastProps,
} from "@components/NotificationToast"
import { Text, View } from "react-native"
import { CustomToast } from "@components/CustomToast"

export default function App() {
  const [fontsLoaded] = useFonts({
    Baloo2_700Bold,
    Roboto_400Regular,
    Roboto_700Bold,
  })

  if (!fontsLoaded) {
    return <LoadingIndicator />
  }

  ;<CustomToast
    title="Carrinho"
    type="success"
    message="Café adicionado ao carrinho"
  />

  const toastConfig = {
    notificationToast: ({ props }: any) => (
      <NotificationToast
        productName={props.productName}
        productSize={props.productSize}
        productQuantity={props.productQuantity}
        cartLength={props.cartLength}
        handleNavigation={props.handleNavigation}
      />
    ),

    customToast: ({ props }: any) => (
      <CustomToast
        title={props.title}
        message={props.message}
        type={props.type}
      />
    ),
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
      <Toast config={toastConfig} />
    </>
  )
}
