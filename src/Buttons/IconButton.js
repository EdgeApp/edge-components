// @flow

import React, { Component } from 'react'
import { StyleSheet, TouchableHighlight, View } from 'react-native'

type Props = {
  icon: any,
  style: StyleSheet.Styles,
  onPress: Function
}
type State = {
  pressed: boolean
}

class IconButton extends Component<Props, State> {
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
    const { container, icon, iconPressed, iconSize, underlayColor } = this.props.style
    return (
      <TouchableHighlight
        style={container}
        onPress={this._onPressButton}
        onShowUnderlay={this._onShowUnderlay}
        onHideUnderlay={this._onHideUnderlay}
        underlayColor={underlayColor}
      >
        <View>{this.props.icon}</View>
      </TouchableHighlight>
    )
  }
}

export { IconButton }
