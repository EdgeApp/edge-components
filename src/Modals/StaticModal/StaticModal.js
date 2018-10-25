// @flow

import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { Gradient } from '../../Gradient/Gradient.js'
import Modal from 'react-native-modal'

import { StaticModalStyle } from '../ModalStyle.js'
import THEME from '../../edge-theme.js'

type StaticModalProps = {
  isActive?: boolean,
  modalDismissTimerSeconds?: number,
  message: string,
  onDone(): void,
  icon: any
}

export class StaticModal extends Component<StaticModalProps> {
  reset: TimeoutID

  componentDidMount () {
    if (this.props.modalDismissTimerSeconds) {
      this.reset = setTimeout(() => {
        this.props.onDone()
      }, this.props.modalDismissTimerSeconds * 1000)
    }
  }

  componentWillUnmount () {
    clearTimeout(this.reset)
  }

  render () {
    const { isActive, ...props } = this.props
    const styles = StaticModalStyle
    return (
      <TouchableOpacity style={styles.container} onPress={() => this.props.onDone()} {...props}>
        <View style={styles.modalBox}>
          <View style={styles.innerBox}>
            <Gradient style={styles.header}>{this.props.icon}</Gradient>
            <View style={styles.bottom}>
              <View style={styles.bodyRow}>
                <Text style={styles.bodyText}>{this.props.message}</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

export type StaticModalOpts = {
  message: string,
  icon: any,
  modalDismissTimerSeconds?: number
}

export const createStaticModal = (opts: StaticModalOpts) => (props: { +onDone: Function }) => {
  return (
    <StaticModal
      message={opts.message}
      icon={opts.icon}
      onDone={props.onDone}
      modalDismissTimerSeconds={opts.modalDismissTimerSeconds}
    />
  )
}
