import { Button, Text, View } from "react-native"

import { styles } from "./styles"
import { useNavigation } from "@react-navigation/native"

export function SplashScreen() {
  const { navigate } = useNavigation()

  return (
    <View style={styles.container}>
      <Text>SplashScreen</Text>
      <Button
        title="Home"
        onPress={() => {
          navigate("home" as never)
        }}
      />
    </View>
  )
}
