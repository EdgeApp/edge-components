// @flow

import React, { Component } from 'react'
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'

import { styles } from './style'

type Props = {
  icon: any,
  style: StyleSheet.Styles,
  onPress: Function,
  title: string | Function
}
type State = {
  pressed: boolean
}

export class TextAndIconButton extends Component<Props, State> {
  constructor (props: Props) {
    super(props)
    this.state = {
      pressed: false
    }
  }

  _onPressButton = () => {
    this.props.onPress()
  }
  _onShowUnderlay = () => {
    this.setState({
      pressed: true
    })
  }
  _onHideUnderlay = () => {
    this.setState({
      pressed: false
    })
  }

  render () {
    const {
      container,
      centeredContent,
      inner,
      textContainer,
      iconContainer,
      text,
      textPressed,
      underlayColor
    } = this.props.style
    return (
      <TouchableHighlight
        style={container}
        onPress={this._onPressButton}
        onShowUnderlay={this._onShowUnderlay}
        onHideUnderlay={this._onHideUnderlay}
        underlayColor={underlayColor}
      >
        <View style={centeredContent}>
          <View style={inner}>
            <View style={textContainer}>
              {typeof this.props.title === 'string' && (
                <Text
                  style={[styles.text, text, this.state.pressed && textPressed]}
                  ellipsizeMode={'middle'}
                  numberOfLines={1}
                >
                  {this.props.title + ' '}
                </Text>
              )}
              {typeof this.props.title === 'function' &&
                this.props.title({ textStyles: [styles.text, text, this.state.pressed && textPressed] })}
            </View>
            <View style={iconContainer}>{this.props.icon}</View>
          </View>
        </View>
      </TouchableHighlight>
    )
  }
}
