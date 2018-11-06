// @flow

import React, { Component } from 'react'
import { ActivityIndicator, Image, Text, View } from 'react-native'
import Modal from 'react-native-modal'

import * as Constants from '../../constants/'
import { ModalStyle } from './styles/'
import { PrimaryButton, SecondaryButton } from '../../Buttons'

export class InputAndButtons extends Component<Props, State> {
  render () {
    return (
      <View style={[styles.footer]}>
        <View style={[styles.row]}>
          <Input />
        </View>
        <View style={[styles.row]}>
          <View style={styles.buttonsWrap}>
            <SecondaryButton>
              <SecondaryButton.Text>{opts.noButtonText}</SecondaryButton.Text>
            </SecondaryButton>
            <PrimaryButton>
              <PrimaryButton.Text>{opts.yesButtonText}</PrimaryButton.Text>
            </PrimaryButton>
          </View>
        </View>
      </View>
    )
  }
}
