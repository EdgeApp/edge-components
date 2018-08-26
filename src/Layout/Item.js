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
    alignItems: 'center',
    alignSelf: 'stretch',
    flex: 1,
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
      shrinkHorizontal,
      shrinkVertical,
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
    if (width) flexStyle = { flex: 0 }
    if (shrink) flexStyle = { flex: -1, alignSelf: 'auto' }

    if (shrinkHorizontal) flexStyle = { flex: -1 }
    let alignSelfStyle = null
    if (shrinkVertical) alignSelfStyle = { alignSelf: 'auto' }
    if (width) alignSelfStyle = { alignSelf: 'auto' }

    const debugStyle = debug ? { borderColor: 'red', borderWidth: 1 } : {}

    return (
      <View style={[styles.item, style, flexStyle, alignItems, justifyContent, alignSelfStyle, debugStyle]} height={height} width={width} {...props}>
        {children}
      </View>
    )
  }
}

export default Item
