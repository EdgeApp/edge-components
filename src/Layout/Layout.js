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
    alignItems: 'center',
    alignSelf: 'stretch',
    flex: 1,
    justifyContent: 'center',
    overflow: 'hidden'
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
    const {
      baseline,
      bottom,
      children,
      debug,
      height,
      left,
      right,
      shrink,
      spaceAround,
      spaceBetween,
      style,
      top,
      width,
      ...props
    } = this.props

    let justifyContent = null
    if (top) justifyContent = { justifyContent: 'flex-start' }
    if (bottom) justifyContent = { justifyContent: 'flex-end' }
    if (spaceAround) justifyContent = { justifyContent: 'space-around' }
    if (spaceBetween) justifyContent = { justifyContent: 'space-between' }

    let alignItems = null
    if (left) alignItems = { alignItems: 'flex-start' }
    if (right) alignItems = { alignItems: 'flex-end' }
    if (baseline) alignItems = { alignItems: 'baseline' }

    let flexStyle = null
    if (height || width) flexStyle = { flex: 0 }
    if (shrink) flexStyle = { flex: -1 }

    const debugStyle = debug ? { borderColor: 'red', borderWidth: 1 } : {}

    return (
      <View style={[styles.layout, style, justifyContent, alignItems, flexStyle, debugStyle]} {...props}>
        {children}
      </View>
    )
  }
}

export { Header, Body, Footer, Item, Row, Spacer }
export default Layout
