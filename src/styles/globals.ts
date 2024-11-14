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
    textTransform: "uppercase",
    color: THEME.COLORS.WHITE,
  },

  textWHITE: {
    color: THEME.COLORS.WHITE,
  },

  textYELLOW: {
    color: THEME.COLORS.YELLOW,
  },

  textYELLOW_DARK: {
    color: THEME.COLORS.YELLOW_DARK,
  },

  textGREY_400: {
    color: THEME.COLORS.GREY_400,
  },

  textGREY_300: {
    color: THEME.COLORS.GREY_300,
  },

  textGREY_200: {
    color: THEME.COLORS.GREY_200,
  },

  textGREY_100: {
    color: THEME.COLORS.GREY_100,
  },

  textRED_DARK: {
    color: THEME.COLORS.RED_DARK,
  },

  textPURPLE: {
    color: THEME.COLORS.PURPLE,
  },
})
