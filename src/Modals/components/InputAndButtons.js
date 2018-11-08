// @flow

import React, { Component } from 'react'
import { ActivityIndicator, Image, Text, View } from 'react-native'
import Modal from 'react-native-modal'
import { FormField } from '../../FormField'
import * as Constants from '../../constants/'
import { InputAndButtonStyle, MaterialInputStyle } from './styles.js'
import { PrimaryButton, SecondaryButton } from '../../Buttons'

type InputAndButtonsOwnProps = {
  noButton: {
    title: string
  },
  yesButton: {
    title: string
  },
  input: {
    label: string
  }
}
export class InputAndButtons extends Component<Props, State> {
  constructor (props) {
    super(props)
    this.state = {
      value: this.props.input.initialValue || ''
    }
  }

  updateValue = (value: string) => {
    this.setState({
      value
    })
  }

  render () {
    return (
      <View style={[InputAndButtonStyle.footer]}>
        <View style={[InputAndButtonStyle.row]}>
          <FormField
            containerstyle={MaterialInputStyle}
            label={this.props.input.label}
            autoCorrect={this.props.input.autoCorrect}
            {...this.props.input}
            value={this.state.value}
            onChangeText={this.updateValue}
          />
        </View>
        <View style={[InputAndButtonStyle.row]}>
          <View style={InputAndButtonStyle.buttonsArea}>
            <SecondaryButton
              onPress={() => this.props.yesButton.onPress(props.onDone(true))}
              style={[InputAndButtonStyle.noButton]}
            >
              <SecondaryButton.Text style={[InputAndButtonStyle.buttonText]}>
                {this.props.noButton.title}
              </SecondaryButton.Text>
            </SecondaryButton>
            <PrimaryButton
              onPress={() => this.props.noButton.onPress(props.onDone(false))}
              style={[InputAndButtonStyle.yesButton]}
            >
              <PrimaryButton.Text style={[InputAndButtonStyle.buttonText]}>
                {this.props.yesButton.title}
              </PrimaryButton.Text>
            </PrimaryButton>
          </View>
        </View>
      </View>
    )
  }
}
