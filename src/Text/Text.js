// @flow

import React, { Component } from 'react'
import type { Node } from 'react'
import { StyleSheet, Text as RNText } from 'react-native'

import THEME from '../edge-theme.js'

const debug = {
  // borderColor: 'red', borderWidth: 1
}

export const rawStyles = {
  text: {
    ...debug,
    // fontFamily: THEME.FONTS.DEFAULT,
    color: THEME.COLORS.WHITE,
    backgroundColor: THEME.COLORS.TRANSPARENT
  },
  H1: {
    fontSize: 36,
    fontWeight: 'bold'
  },
  H2: {
    fontSize: 32,
    fontWeight: 'bold'
  },
  H3: {
    fontSize: 28,
    fontWeight: 'bold'
  },
  H4: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  H5: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  H6: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  P: {
    fontSize: 12
  },
  xlarge: {
    fontSize: 24
  },
  large: {
    fontSize: 20
  },
  medium: {
    fontSize: 16
  },
  small: {
    fontSize: 12
  },
  xsmall: {
    fontSize: 8
  }
}

export const styles = StyleSheet.create(rawStyles)

export type Props = {
  children?: Node,
  // $FlowFixMe
  style?: StyleSheet.Styles
}

export class Text extends Component<Props> {
  render () {
    const {
      children,
      style,
      H1,
      H2,
      H3,
      H4,
      H5,
      H6,
      P,
      xlarge,
      large,
      medium,
      small,
      xsmall,
      left,
      right,
      justify,
      auto,
      spaceAround,
      spaceBetween,
      debug,
      ...props
    } = this.props

    let textStyle
    if (H1) textStyle = styles.H1
    if (H2) textStyle = styles.H2
    if (H3) textStyle = styles.H3
    if (H4) textStyle = styles.H4
    if (H5) textStyle = styles.H5
    if (H6) textStyle = styles.H6
    if (P) textStyle = styles.P
    if (xlarge) textStyle = styles.xlarge
    if (large) textStyle = styles.large
    if (medium) textStyle = styles.medium
    if (small) textStyle = styles.small
    if (xsmall) textStyle = styles.xsmall

    let textAlign = { textAlign: 'center' }
    if (left) textAlign = { textAlign: 'left' }
    if (right) textAlign = { textAlign: 'right' }
    if (justify) textAlign = { textAlign: 'justify' }
    if (auto) textAlign = { textAlign: 'auto' }

    const debugStyle = debug ? { borderColor: 'red', borderWidth: 1 } : {}

    return (
      <RNText style={[styles.text, textStyle, style, textAlign, debugStyle]} {...props}>
        {children}
      </RNText>
    )
  }
}

export default Text
