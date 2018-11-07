// @flow

import { StyleSheet } from 'react-native'
import * as Constants from '../../constants'
import THEME from '../../edge-theme.js'
import { scale } from '../../scaling.js'
export const rawStyles = {
  //  ALL BUTTONS
  button: {
    padding: 14,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontFamily: THEME.FONTS.DEFAULT,
    fontSize: 18
  },

  // PRIMARY BUTTON
  primaryButton: {
    backgroundColor: THEME.COLORS.SECONDARY
  },
  primaryButtonUnderlay: { color: THEME.COLORS.PRIMARY },
  primaryButtonText: {
    color: THEME.COLORS.WHITE
  },

  // SECONDARY BUTTON
  secondaryButton: {
    backgroundColor: THEME.COLORS.GRAY_2
  },
  secondaryButtonUnderlay: { color: THEME.COLORS.GRAY_1 },
  secondaryButtonText: {
    color: THEME.COLORS.WHITE
  },

  //  TERTIARY BUTTON
  tertiaryButton: {
    backgroundColor: THEME.COLORS.WHITE,
    borderWidth: 2,
    borderColor: THEME.COLORS.SECONDARY
  },
  tertiaryButtonUnderlay: { color: THEME.COLORS.GRAY_3 },
  tertiaryButtonText: {
    color: THEME.COLORS.PRIMARY
  },

  debug: {
    borderColor: 'red',
    borderWidth: 1
  }
}
export const MaterialInputStyle = {
  container: {
    position: 'relative',
    width: Constants.LOGIN_LABEL_WIDTH,
    paddingTop: 12
  },
  baseColor: Constants.WHITE,
  tintColor: Constants.ACCENT_MINT,
  errorColor: Constants.ACCENT_RED,
  textColor: Constants.WHITE,
  affixTextStyle: {
    color: Constants.WHITE
  },
  titleTextStyle: {
    color: Constants.WHITE
  }
}

export const InputAndButtonStyle = StyleSheet.create({
  buttonsArea: {
    height: scale(52),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'flex-end',
    paddingVertical: scale(4)
  },
  noButton: {
    flex: 1,
    marginRight: scale(2),
    backgroundColor: THEME.COLORS.GRAY_2,
    borderRadius: 3
  },
  buttonText: {
    color: THEME.COLORS.WHITE,
    fontSize: scale(17.5)
  },
  yesButton: {
    flex: 1,
    marginLeft: scale(2),
    backgroundColor: THEME.COLORS.SECONDARY,
    borderRadius: 3
  }
})

export const styles = StyleSheet.create(rawStyles)
