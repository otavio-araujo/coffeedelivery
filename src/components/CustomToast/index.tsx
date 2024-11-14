import { Text, View } from "react-native"

import CheckCircle from "phosphor-react-native/src/regular/CheckCircle"
import WarningCircle from "phosphor-react-native/src/regular/WarningCircle"
import XCircle from "phosphor-react-native/src/regular/XCircle"
import Info from "phosphor-react-native/src/regular/Info"

import { styles } from "./styles"
import { THEME } from "@styles/theme"
import { globalStyles } from "@styles/globals"

type Props = {
  title: string
  message: string
  type: "success" | "error" | "warning" | "info"
}

export function CustomToast({ title, message, type = "info" }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.toastContainer}>
        {type === "success" ? (
          <CheckCircle size={24} color={THEME.COLORS.GREEN_400} />
        ) : type === "error" ? (
          <XCircle size={24} color={THEME.COLORS.RED_400} />
        ) : type === "warning" ? (
          <WarningCircle size={24} color={THEME.COLORS.YELLOW_600} />
        ) : (
          <Info size={24} color={THEME.COLORS.BLUE_400} />
        )}
        <View style={styles.textContainer}>
          <Text
            style={[
              globalStyles.textSM,
              globalStyles.textBold,
              globalStyles.textGREY_200,
            ]}
          >
            {title}
          </Text>
          <Text style={[globalStyles.textSM, globalStyles.textGREY_400]}>
            {message}
          </Text>
        </View>
      </View>
    </View>
  )
}
