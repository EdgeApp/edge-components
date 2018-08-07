// @flow

import React, { Component } from 'react'
import type { Node } from 'react'
import { StyleSheet, Text as RNText, View } from 'react-native'

import THEME from '../edge-theme.js'

const debug = {
  // borderColor: 'red', borderWidth: 1
}

export const rawStyles = {
  footer: {
    alignItems: 'stretch',
    justifyContent: 'center'
  },
  text: {
    color: THEME.COLORS.WHITE,
    backgroundColor: THEME.COLORS.TRANSPARENT
  }
}
export const styles = StyleSheet.create(rawStyles)

export type TextProps = {
  children?: Node,
  // $FlowFixMe
  style?: StyleSheet.Styles
}
export class Text extends Component<TextProps> {
  render () {
    const { children, style, ...props } = this.props

    return (
      <RNText style={[styles.text, style]} {...props}>
        {children}
      </RNText>
    )
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
