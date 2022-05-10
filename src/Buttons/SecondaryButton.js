// @flow

import React, { Component } from 'react'
import type { Node } from 'react-native'
import { Text as RNText, TouchableHighlight, View } from 'react-native'

import { rawStyles, styles } from './style.js'

export type TextProps = {
  children: Node,
  style?: Object
}
class Text extends Component<TextProps> {
  render () {
    const { children, style, ...props } = this.props
    return (
      <RNText
        numberOfLines={1}
        ellipsizeMode={'middle'}
        style={[styles.buttonText, styles.secondaryButtonText, style]}
        {...props}
      >
        {children}
      </RNText>
    )
  }
}

export type Props = {
  children: Node,
  style?: Object,
  onPress: () => void
}
export class SecondaryButton extends Component<Props> {
  static Text = Text
  render () {
    const { children, style, ...props } = this.props
    return (
      <TouchableHighlight
        underlayColor={rawStyles.secondaryButtonUnderlay.color}
        style={[styles.button, styles.secondaryButton, style]}
        {...props}
      >
        <View>{children}</View>
      </TouchableHighlight>
    )
  }
}
