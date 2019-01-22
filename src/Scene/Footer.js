// @flow

import React, { Component } from 'react'
import type { Node } from 'react'
import { StyleSheet, View } from 'react-native'

export const rawStyles = {
  footer: {
    alignItems: 'stretch',
    justifyContent: 'center'
  }
}
export const styles = StyleSheet.create(rawStyles)

export type FooterProps = {
  children?: Node,
  // $FlowFixMe
  style?: StyleSheet.Styles
}
export class Footer extends Component<FooterProps> {
  render () {
    const { children, style } = this.props

    return <View style={[styles.footer, style]}>{children}</View>
  }
}

export default Footer
