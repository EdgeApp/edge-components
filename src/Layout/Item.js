// @flow

import React, { Component } from 'react'
import type { Node } from 'react'
import { StyleSheet, View } from 'react-native'

const debug = {
  // borderColor: 'red', borderWidth: 1
}

export const rawStyles = {
  item: {
    ...debug,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
  }
}
export const styles = StyleSheet.create(rawStyles)

export type ItemProps = {
  children?: Node,
  // $FlowFixMe
  style?: StyleSheet.Styles
}
export class Item extends Component<ItemProps> {
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
      stretch,
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
    if (stretch) alignItems = { alignItems: 'stretch' }
    if (baseline) alignItems = { alignItems: 'baseline' }

    let flexStyle = null
    if (height || width) flexStyle = { flex: 0 }
    if (shrink) flexStyle = { flex: -1 }

    const debugStyle = debug ? { borderColor: 'red', borderWidth: 1 } : {}

    return (
      <View style={[styles.item, style, flexStyle, alignItems, justifyContent, debugStyle]} height={height} width={width} {...props}>
        {children}
      </View>
    )
  }
}

export default Item
