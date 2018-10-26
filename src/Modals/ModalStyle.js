// @flow

import { StyleSheet } from 'react-native'
import { Dimensions } from 'react-native'

import THEME from '../edge-theme.js'

export const rawStyles = {
  modal: {},
  container: {
    padding: 12,
    backgroundColor: THEME.COLORS.WHITE,
    borderRadius: 4,
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 1,
    shadowRadius: 4
  },
  header: {
    alignItems: 'center',
    paddingHorizontal: 22
  },
  body: {
    padding: 6
  },
  footer: {
    padding: 6
  },
  icon: {
    height: 65,
    width: 65,
    borderRadius: 65,
    borderWidth: 4,
    borderColor: THEME.COLORS.SECONDARY,
    backgroundColor: THEME.COLORS.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: -32,
    zIndex: 1
  },
  androidHackSpacer: {
    paddingTop: 26
  },
  item: {
    flex: 1,
    padding: 4
  },
  row: {
    flexDirection: 'row'
  },
  title: {
    fontSize: 22,
    fontFamily: THEME.FONTS.DEFAULT,
    color: THEME.COLORS.PRIMARY
  },
  description: {
    paddingVertical: 6,
    fontSize: 16,
    color: THEME.COLORS.GRAY_1,
    fontFamily: THEME.FONTS.DEFAULT,
    alignSelf: 'center'
  },
  debug: {
    borderColor: 'red',
    borderWidth: 1
  }
}

export const styles = StyleSheet.create(rawStyles)

const screenDimensions = {
  height: Dimensions.get('window').height,
  width: Dimensions.get('window').width
}

const StaticModalStyle = {
  container: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: (screenDimensions.height * 1) / 8,
    left: 0,
    right: 0
  },
  modalBox: {
    paddingHorizontal: screenDimensions.width / 8,
    width: screenDimensions.width,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch'
  },
  innerBox: {
    backgroundColor: THEME.COLORS.WHITE
  },
  header: {
    position: 'relative',
    height: 62,
    width: '100%',
    backgroundColor: THEME.COLORS.TRANSPARENT,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  bottom: {
    position: 'relative',
    width: '100%',
    backgroundColor: THEME.COLORS.WHITE
  },
  bodyRow: {
    width: '100%',
    padding: 15
  },
  bodyText: {
    width: '100%',
    textAlign: 'center',
    fontFamily: THEME.FONTS.DEFAULT
  },
  shim: 20, // Styles.Shim.height,
  icon: {
    color: THEME.COLORS.WHITE
  },
  iconSize: 36
}

export { StaticModalStyle }
