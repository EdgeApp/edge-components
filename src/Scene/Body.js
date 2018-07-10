// @flow

import React, { Component } from 'react'
import type { Node } from 'react'
import { StyleSheet, Text as RNText, View } from 'react-native'

import THEME from '../edge-theme.js'

const rawStyles = {
  bodyText: {
    // fontFamily: THEME.FONTS.DEFAULT,
    color: THEME.COLORS.WHITE,
    fontSize: 18
  },
  body: {
    alignItems: 'center'
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
    return <RNText style={[styles.bodyText, style]}>{children}</RNText>
  }
}

export type BodyProps = {
  children?: Node,
  // $FlowFixMe
  style?: StyleSheet.Styles
}
export class Body extends Component<BodyProps> {
  static Text = Text
  render () {
    const { children, style } = this.props
    return <View style={[styles.body, style]}>{children}</View>
  }
}

export default Body
