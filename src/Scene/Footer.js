// @flow

import React, { Component } from 'react'
import type { Node } from 'react'
import { StyleSheet, Text as RNText, View } from 'react-native'

import THEME from '../edge-theme.js'

const rawStyles = {
  footerText: {
    // fontFamily: THEME.FONTS.DEFAULT,
    color: THEME.COLORS.WHITE,
    fontSize: 24
  },
  footer: {
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center'
  }
}
const styles = StyleSheet.create(rawStyles)

export type TextProps = {
  children?: Node,
  // $FlowFixMe
  style?: StyleSheet.Styles
}
export class Text extends Component<TextProps> {
  render () {
    const { children, style } = this.props
    return <RNText style={[styles.footerText, style]}>{children}</RNText>
  }
}

export type FooterProps = {
  children?: Node,
  // $FlowFixMe
  style?: StyleSheet.Styles
}
export class Footer extends Component<FooterProps> {
  static Text = Text
  render () {
    const { children, style } = this.props
    return <View style={[styles.footer, style]}>{children}</View>
  }
}

export default Footer
