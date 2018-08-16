// @flow

import React, { Component } from 'react'
import type { Node } from 'react'
import { StyleSheet, View } from 'react-native'

const debug = {
  // borderColor: 'red', borderWidth: 1
}

export const rawStyles = {
  spacer: {
    flex: 1,
    ...debug
  }
}
export const styles = StyleSheet.create(rawStyles)

export type SpacerProps = {
  children?: Node,
  // $FlowFixMe
  style?: StyleSheet.Styles
}
export class Spacer extends Component<SpacerProps> {
  render () {
    const {
      children,
      style,
      stretch,
      left,
      center,
      right,
      auto,
      top,
      middle,
      bottom,
      spaceAround,
      spaceBetween,
      height,
      width,
      shrink,
      debug,
      ...props
    } = this.props
    let alignItemsStyle = {}
    if (stretch) alignItemsStyle = { alignItems: 'stretch' }
    if (left) alignItemsStyle = { alignItems: 'flex-start' }
    if (center) alignItemsStyle = { alignItems: 'center' }
    if (right) alignItemsStyle = { alignItems: 'flex-end' }

    let justifyContent = {}
    if (top) justifyContent = { justifyContent: 'flex-start' }
    if (middle) justifyContent = { justifyContent: 'center' }
    if (bottom) justifyContent = { justifyContent: 'flex-end' }
    if (spaceAround) justifyContent = { justifyContent: 'space-around' }
    if (spaceBetween) justifyContent = { justifyContent: 'space-between' }

    let flexStyle = { flex: 1 }
    if (height || width) flexStyle = { flex: 0 }
    if (shrink) flexStyle = { flex: -1 }

    const debugStyle = debug ? { borderColor: 'red', borderWidth: 1 } : {}

    return (
      <View style={[styles.spacer, style, flexStyle, justifyContent, alignItemsStyle, debugStyle]} height={height} width={width} {...props}>
        {children}
      </View>
    )
  }
}

export default Spacer
