// @flow

import React, { Component } from 'react'
import type { Node } from 'react'
import { StyleSheet, View } from 'react-native'

import { Header } from './Header.js'
import { Body } from './Body.js'
import { Footer } from './Footer.js'
import { Row } from './Row.js'
import { Item } from './Item.js'
import { Spacer } from './Spacer.js'

export const debug = {
  // borderColor: 'red', borderWidth: 1
}

export const rawStyles = {
  layout: {
    ...debug,
    flex: 1
  }
}
export const styles = StyleSheet.create(rawStyles)

export type Props = {
  children?: Node,
  // $FlowFixMe
  style?: StyleSheet.Styles
}
export class Layout extends Component<Props> {
  static Header = Header
  static Body = Body
  static Footer = Footer
  static Row = Row
  static Item = Item
  static Spacer = Spacer

  render () {
    const { children, style, debug, ...props } = this.props
    const debugStyle = debug ? { borderColor: 'red', borderWidth: 1 } : {}

    return (
      <View style={[styles.layout, style, debugStyle]} {...props}>
        {children}
      </View>
    )
  }
}

export { Header, Body, Footer, Item, Row, Spacer }
export default Layout
