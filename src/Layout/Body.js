// @flow

import React, { Component } from 'react'
import type { Node } from 'react'
import { StyleSheet, View } from 'react-native'

const debug = {
  // borderColor: 'red', borderWidth: 1
}

export const rawStyles = {
  body: {
    ...debug,
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center'
  }
}
export const styles = StyleSheet.create(rawStyles)

export type Props = {
  children?: Node,
  // $FlowFixMe
  style?: StyleSheet.Styles
}
export class Body extends Component<Props> {
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

    let alignItemsStyle = { alignItems: 'center' }
    if (stretch) alignItemsStyle = { alignItems: 'stretch' }
    if (left) alignItemsStyle = { alignItems: 'flex-start' }
    if (right) alignItemsStyle = { alignItems: 'flex-end' }

    let justifyContent = { justifyContent: 'center' }
    if (top) justifyContent = { justifyContent: 'flex-start' }
    if (bottom) justifyContent = { justifyContent: 'flex-end' }
    if (spaceAround) justifyContent = { justifyContent: 'space-around' }
    if (spaceBetween) justifyContent = { justifyContent: 'space-between' }

    let flexStyle = { flex: 1 }
    if (height || width) flexStyle = { flex: 0 }
    if (shrink) flexStyle = { flex: -1 }

    const debugStyle = debug ? { borderColor: 'red', borderWidth: 1 } : {}

    return (
      <View style={[styles.body, style, alignItemsStyle, justifyContent, flexStyle, debugStyle]} height={height} width={width} {...props}>
        {children}
      </View>
    )
  }
}

export default Body
