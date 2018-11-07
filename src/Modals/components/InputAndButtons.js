// @flow

import React, { Component } from 'react'
import { ActivityIndicator, Image, Text, View } from 'react-native'
import Modal from 'react-native-modal'
import { FormField } from '../../FormField'
import * as Constants from '../../constants/'
import { InputAndButtonStyle, styles, MaterialInputStyle } from './styles.js'
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
  render () {
    return (
      <View style={[InputAndButtonStyle.footer]}>
        <View style={[InputAndButtonStyle.row]}>
          <FormField
            style={MaterialInputStyle}
            label={this.props.input.label}
            autoCorrect={this.props.input.autoCorrect}
          />
        </View>
        <View style={[InputAndButtonStyle.row]}>
          <View style={InputAndButtonStyle.buttonsArea}>
            <SecondaryButton style={[InputAndButtonStyle.noButton]}>
              <SecondaryButton.Text style={[InputAndButtonStyle.buttonText]}>
                {this.props.noButton.title}
              </SecondaryButton.Text>
            </SecondaryButton>
            <PrimaryButton style={[InputAndButtonStyle.yesButton]}>
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
