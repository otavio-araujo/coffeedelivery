import { Button, Text, View } from "react-native"
import {
  NavigationProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native"

import { AppRouteProps } from "@routes/app.routes"

type RouteParamsProps = {
  productID: number
}

export function ProductScreen() {
  const { productID } = useRoute().params as RouteParamsProps

  const navigation: NavigationProp<AppRouteProps> = useNavigation()

  console.log(productID)

  return (
    <View>
      <Text>Product</Text>
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  )
}
