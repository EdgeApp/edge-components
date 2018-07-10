// @flow

import React from 'react'
import type { Node } from 'react'
import { View } from 'react-native'

const styles = {
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
}

export type Props = {
  children: Node
}
export default function CenterView (props: Props) {
  return <View style={styles.main}>{props.children}</View>
}
