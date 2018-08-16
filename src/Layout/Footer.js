// @flow

import React, { Component } from 'react'
import type { Node } from 'react'
import { StyleSheet, View } from 'react-native'

const debug = {
  // borderColor: 'red', borderWidth: 1
}

export const rawStyles = {
  footer: {
    ...debug,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
}
export const styles = StyleSheet.create(rawStyles)

export type Props = {
  children?: Node,
  // $FlowFixMe
  style?: StyleSheet.Styles
}
export class Footer extends Component<Props> {
  render () {
    const {
      children,
      style,
      debug,
      spaceAround,
      spaceBetween,
      left,
      right,
      center,
      height,
      shrink,
      stretch,
      top,
      bottom,
      ...props
    } = this.props

    let alignItems = {}
    if (stretch) alignItems = { alignItems: 'stretch' }
    if (top) alignItems = { alignItems: 'flex-start' }
    if (bottom) alignItems = { alignItems: 'flex-end' }

    let justifyContent = { justifyContent: 'center' }
    if (left) justifyContent = { justifyContent: 'flex-start' }
    if (right) justifyContent = { justifyContent: 'flex-end' }
    if (spaceAround) justifyContent = { justifyContent: 'space-around' }
    if (spaceBetween) justifyContent = { justifyContent: 'space-between' }

    let flexStyle = { flex: 1 }
    if (height) flexStyle = { flex: 0 }
    if (shrink) flexStyle = { flex: -1 }

    const debugStyle = debug ? { borderColor: 'red', borderWidth: 1 } : {}

    return (
      <View style={[styles.footer, style, justifyContent, alignItems, flexStyle, debugStyle]} height={height} {...props}>
        {children}
      </View>
    )
  }
}

export default Footer
