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
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'center'
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
    const { children, style, left, right, center, spaceAround, spaceBetween, stretchVertical, shrink, height, debug, ...props } = this.props
    let justifyStyle = null
    if (left) justifyStyle = { justifyContent: 'flex-start' }
    if (center) justifyStyle = { justifyContent: 'center' }
    if (right) justifyStyle = { justifyContent: 'flex-end' }
    if (spaceAround) justifyStyle = { justifyContent: 'space-around' }
    if (spaceBetween) justifyStyle = { justifyContent: 'space-between' }

    let flexStyle = { flex: 1 }
    if (height) flexStyle = { flex: 0 }
    if (shrink) flexStyle = { flex: -1 }

    const debugStyle = debug ? { borderColor: 'red', borderWidth: 1 } : {}

    return (
      <View style={[styles.row, style, justifyStyle, flexStyle, debugStyle]} height={height} {...props}>
        {children}
      </View>
    )
  }
}

export default Row
