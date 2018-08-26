// @flow

import React, { Component } from 'react'
import type { Node } from 'react'
import { StyleSheet, View } from 'react-native'

const debug = {
  // borderColor: 'red', borderWidth: 1
}

export const rawStyles = {
  row: {
    ...debug,
    flex: 1,
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
    overflow: 'hidden'
  }
}
export const styles = StyleSheet.create(rawStyles)

export type RowProps = {
  children?: Node,
  // $FlowFixMe
  style?: StyleSheet.Styles
}
export class Row extends Component<RowProps> {
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
      shrinkVertical,
      shrinkHorizontal,
      spaceAround,
      spaceBetween,
      stretch,
      style,
      top,
      width,
      wrap,
      ...props
    } = this.props

    let justifyContent = null
    if (left) justifyContent = { justifyContent: 'flex-start' }
    if (right) justifyContent = { justifyContent: 'flex-end' }
    if (spaceAround) justifyContent = { justifyContent: 'space-around' }
    if (spaceBetween) justifyContent = { justifyContent: 'space-between' }

    let alignItems = null
    if (top) alignItems = { alignItems: 'flex-start' }
    if (bottom) alignItems = { alignItems: 'flex-end' }
    if (stretch) alignItems = { alignItems: 'stretch' }
    if (baseline) alignItems = { alignItems: 'baseline' }
    
    let flexStyle = null
    if (height) flexStyle = { flex: 0 }
    if (shrink) flexStyle = { flex: -1, alignSelf: 'auto' }

    if (shrinkVertical) flexStyle = { flex: -1 }
    let alignSelfStyle = null
    if (shrinkHorizontal) alignSelfStyle = { alignSelf: 'auto' }
    if (width) alignSelfStyle = { alignSelf: 'auto' }

    let wrapStyle = null
    if (wrap) wrapStyle = { flexWrap: 'wrap' }

    const sizeStyle = { height, width }

    const debugStyle = debug ? { borderColor: 'red', borderWidth: 1 } : {}

    return (
      <View style={[styles.row, style, alignItems, justifyContent, flexStyle, wrapStyle, sizeStyle, alignSelfStyle, debugStyle]} {...props}>
        {children}
      </View>
    )
  }
}

export default Row
