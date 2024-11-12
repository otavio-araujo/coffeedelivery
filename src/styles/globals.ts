import { StyleSheet } from "react-native"
import { THEME } from "./theme"

export const globalStyles = StyleSheet.create({
  titleXL: {
    fontFamily: THEME.FONTS.BALOO_BOLD,
    fontSize: THEME.FONT_SIZES.TITLE_XL,
    lineHeight: THEME.LINE_HEIGHTS.TITLE_XL,
  },

  titleLG: {
    fontFamily: THEME.FONTS.BALOO_BOLD,
    fontSize: THEME.FONT_SIZES.TITLE_LG,
    lineHeight: THEME.LINE_HEIGHTS.TITLE_LG,
  },

  titleMD: {
    fontFamily: THEME.FONTS.BALOO_BOLD,
    fontSize: THEME.FONT_SIZES.TITLE_MD,
    lineHeight: THEME.LINE_HEIGHTS.TITLE_MD,
  },

  titleSM: {
    fontFamily: THEME.FONTS.BALOO_BOLD,
    fontSize: THEME.FONT_SIZES.TITLE_SM,
    lineHeight: THEME.LINE_HEIGHTS.TITLE_SM,
  },

  titleXS: {
    fontFamily: THEME.FONTS.BALOO_BOLD,
    fontSize: THEME.FONT_SIZES.TITLE_XS,
    lineHeight: THEME.LINE_HEIGHTS.TITLE_XS,
  },

  textLG: {
    fontFamily: THEME.FONTS.ROBOTO_REGULAR,
    fontSize: THEME.FONT_SIZES.TEXT_LG,
    lineHeight: THEME.LINE_HEIGHTS.TEXT_LG,
  },

  textMD: {
    fontFamily: THEME.FONTS.ROBOTO_REGULAR,
    fontSize: THEME.FONT_SIZES.TEXT_MD,
    lineHeight: THEME.LINE_HEIGHTS.TEXT_MD,
  },

  textSM: {
    fontFamily: THEME.FONTS.ROBOTO_REGULAR,
    fontSize: THEME.FONT_SIZES.TEXT_SM,
    lineHeight: THEME.LINE_HEIGHTS.TEXT_SM,
  },

  textXS: {
    fontFamily: THEME.FONTS.ROBOTO_REGULAR,
    fontSize: THEME.FONT_SIZES.TEXT_XS,
    lineHeight: THEME.LINE_HEIGHTS.TEXT_XS,
  },

  textTAG: {
    fontFamily: THEME.FONTS.ROBOTO_BOLD,
    fontSize: THEME.FONT_SIZES.TAG,
    lineHeight: THEME.LINE_HEIGHTS.TAG,
    textTransform: "uppercase",
  },

  textBUTTON: {
    fontFamily: THEME.FONTS.ROBOTO_BOLD,
    fontSize: THEME.FONT_SIZES.BUTTON,
    lineHeight: THEME.LINE_HEIGHTS.BUTTON,
  },

  textWHITE: {
    color: THEME.COLORS.WHITE,
  },

  textYELLOW: {
    color: THEME.COLORS.YELLOW,
  },

  textGREY_400: {
    color: THEME.COLORS.GREY_400,
  },
})
