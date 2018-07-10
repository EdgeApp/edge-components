// @flow

import React, { Component } from 'react'
import type { Node } from 'react'
import { StyleSheet, View } from 'react-native'

import { Header } from './Header.js'
import { Body } from './Body.js'
import { Footer } from './Footer.js'

const rawStyles = {
  scene: {
    flex: 1
  }
}
const styles = StyleSheet.create(rawStyles)

export type Props = {
  children?: Node,
  // $FlowFixMe
  style?: StyleSheet.Styles
}
export class Scene extends Component<Props> {
  static Header = Header
  static Body = Body
  static Footer = Footer

  render () {
    const { children, style } = this.props
    return <View style={[styles.scene, style]}>{children}</View>
  }
}

export { Header, Body, Footer }
export default Scene
