// @flow

import React, { Component } from 'react'

import { Input } from './Input.js'

type Props = {
  style: Object,
  label: string,
  value?: string,
  placeholder?: string,
  autoCorrect?: boolean,
  autoFocus?: boolean,
  forceFocus?: boolean,
  autoCapitalize?: string,
  secureTextEntry?: boolean,
  showSecureCheckbox?: boolean,
  keyboardType?: string,
  returnKeyType: string,
  error?: string,
  onFinish?: () => void,
  onFocus?: () => void,
  onBlur?: () => void,
  onChangeText?: string => void,
  onSubmitEditing?: () => void
}

type State = {
  secure: boolean,
  autoFocus: boolean
}

class FormField extends Component<Props, State> {
  static defaultProps = {
    value: '',
    returnKeyType: 'done'
  }
  UNSAFE_componentWillMount () {
    const secure = this.props.secureTextEntry ? this.props.secureTextEntry : false
    this.setState({
      secure: secure,
      autoFocus: this.props.autoFocus
    })
  }
  render () {
    const { container, baseColor, inputContainer, tintColor, textColor, errorColor, titleTextStyle } = this.props.style
    return (
      <Input
        containerStyle={container}
        secureTextEntry={this.state.secure}
        keyboardType={this.props.keyboardType}
        baseColor={baseColor}
        tintColor={tintColor}
        textColor={textColor}
        errorColor={errorColor}
        titleTextStyle={titleTextStyle}
        autoFocus={this.state.autoFocus}
        autoCapitalize={'none'}
        onSubmitEditing={this.onSubmitEditing}
        inputContainerStyle={inputContainer}
        {...this.props}
      />
    )
  }
  onSubmitEditing = (event: any) => {
    if (this.props.onSubmitEditing) {
      this.props.onSubmitEditing()
    }
  }
}

export { FormField }
