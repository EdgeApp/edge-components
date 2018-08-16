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
    flex: 1
    // alignItems: 'center',
    // justifyContent: 'center'
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
    const { children, style, debug, ...props } = this.props
    const debugStyle = debug ? { borderColor: 'red', borderWidth: 1 } : {}

    return (
      <View style={[styles.item, style, debugStyle]} {...props}>
        {children}
      </View>
    )
  }
}

export default Item
