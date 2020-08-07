// @flow

import React, { Component } from 'react'
import type { Node } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { default as Modal } from 'react-native-modal'

import { PrimaryButton, SecondaryButton } from '../../Buttons'
import { styles } from '../ModalStyle.js'

// CONTAINER /////////////////////////////////////////////////////////////////////////////
export type ContainerProps = {
  children: Node,
  style?: StyleSheet.Styles
}
export class Container extends Component<ContainerProps> {
  render () {
    const { children, style, ...props } = this.props
    return (
      <View style={[styles.container, style]} {...props}>
        {children}
      </View>
    )
  }
}

// HEADER /////////////////////////////////////////////////////////////////////////////
export type HeaderProps = {
  children?: Node,
  style?: StyleSheet.Styles
}
export class Header extends Component<HeaderProps> {
  render () {
    const { children, style, ...props } = this.props
    return (
      <View style={[styles.header, style]} {...props}>
        {children}
      </View>
    )
  }
}

// ANDROID_HACK_SPACER /////////////////////////////////////////////////////////////////////////////
/*
  This spacer should be used with Icon to overcome the limitations on Android
  React Native on Android does not support 'Overflow'
  If/When React Native on Android supports 'Overflow',
    * remove the hack component
    * move the Icon component inside Modal.Container
  https://github.com/facebook/react-native/issues/6802
*/
type AndroidHackSpacerProps = {
  style?: StyleSheet.Styles
}
export class AndroidHackSpacer extends Component<AndroidHackSpacerProps> {
  render () {
    return <View style={styles.androidHackSpacer} />
  }
}

// ICON /////////////////////////////////////////////////////////////////////////////
export type IconProps = {
  children: Node,
  style?: StyleSheet.Styles
}
export class Icon extends Component<IconProps> {
  static AndroidHackSpacer = AndroidHackSpacer
  render () {
    const { children, style, ...props } = this.props
    return (
      <View style={[styles.icon, style]} {...props}>
        {children}
      </View>
    )
  }
}

// TITLE /////////////////////////////////////////////////////////////////////////////
type TitleProps = {
  children: Node,
  style?: StyleSheet.Styles
}
export class Title extends Component<TitleProps> {
  render () {
    const { children, style, ...props } = this.props
    return (
      <Text style={[styles.title, style]} {...props}>
        {children}
      </Text>
    )
  }
}

// DESCRIPTION /////////////////////////////////////////////////////////////////////////////
export type DescriptionProps = {
  children: Node,
  style?: StyleSheet.Styles
}
export class Description extends Component<DescriptionProps> {
  render () {
    const { children, style, ...props } = this.props
    return (
      <Text style={[styles.description, style]} {...props}>
        {children}
      </Text>
    )
  }
}

// BODY /////////////////////////////////////////////////////////////////////////////
type BodyProps = {
  children: Node,
  style?: StyleSheet.Styles
}
export class Body extends Component<BodyProps> {
  render () {
    const { children, style, ...props } = this.props
    return (
      <View style={[styles.body, style]} {...props}>
        {children}
      </View>
    )
  }
}

// FOOTER /////////////////////////////////////////////////////////////////////////////
type FooterProps = {
  children: Node,
  style?: StyleSheet.Styles
}
export class Footer extends Component<FooterProps> {
  render () {
    const { children, style, ...props } = this.props
    return (
      <View style={[styles.footer, style]} {...props}>
        {children}
      </View>
    )
  }
}

// Item /////////////////////////////////////////////////////////////////////////////
type ItemProps = {
  children: Node,
  style?: StyleSheet.Styles
}
export class Item extends Component<ItemProps> {
  render () {
    const { children, style, ...props } = this.props
    return (
      <View style={[styles.item, style]} {...props}>
        {children}
      </View>
    )
  }
}

// Row /////////////////////////////////////////////////////////////////////////////
type RowProps = {
  children: Node,
  style?: StyleSheet.Styles
}
export class Row extends Component<RowProps> {
  render () {
    const { children, style, ...props } = this.props
    return (
      <View style={[styles.row, style]} {...props}>
        {children}
      </View>
    )
  }
}

// INTERACTIVE_MODAL /////////////////////////////////////////////////////////////////////////////
type Props = {
  isActive?: boolean,
  children: Node,
  style?: StyleSheet.Styles,
  legacy?: boolean
}
export class YesNoModal extends Component<Props> {
  static Icon = Icon
  static Title = Title
  static Description = Description
  static Body = Body
  static Footer = Footer
  static Item = Item
  static Row = Row

  render () {
    const { isActive, style, ...props } = this.props
    const children = React.Children.toArray(this.props.children)
    const icon = children.find(child => child.type === YesNoModal.Icon)
    const title = children.find(child => child.type === YesNoModal.Title)
    const body = children.find(child => child.type === YesNoModal.Body)
    const footer = children.find(child => child.type === YesNoModal.Footer)

    return this.props.legacy ? (
      <Modal useNativeDriver avoidKeyboard isVisible={isActive} style={[styles.modal, style]} {...props}>
        {icon}
        <Container style={style}>
          <Icon.AndroidHackSpacer />
          <Header style={styles.header}>{title}</Header>
          {body}
          {footer}
        </Container>
      </Modal>
    ) : (
      <View style={styles.modal} {...props}>
        {icon}
        <Container style={style}>
          <Icon.AndroidHackSpacer />
          <Header style={styles.header}>{title}</Header>
          {body}
          {footer}
        </Container>
      </View>
    )
  }
}

export type YesNoModalOpts = {
  title?: string,
  message?: string | Node,
  textAlign?: string,
  icon: Node,
  yesButtonText: string,
  noButtonText: string,
  textInput?: any
}

export const createYesNoModal = (opts: YesNoModalOpts) =>
  function YesNoModalComponent (props: { +onDone: Function }) {
    const textAlign = opts.textAlign ? opts.textAlign : 'center'
    return (
      <YesNoModal>
        <YesNoModal.Icon>{opts.icon}</YesNoModal.Icon>

        <YesNoModal.Title style={{ textAlign: 'center' }}>
          <Text>{opts.title || ''}</Text>
        </YesNoModal.Title>
        <YesNoModal.Body>
          {opts.message && (
            <YesNoModal.Row style={{ flexDirection: 'row', justifyContent: 'center' }}>
              <YesNoModal.Description style={{ textAlign }}>{opts.message || ''}</YesNoModal.Description>
            </YesNoModal.Row>
          )}
          {opts.textInput && <YesNoModal.Row>{opts.textInput}</YesNoModal.Row>}
        </YesNoModal.Body>
        <YesNoModal.Footer>
          <YesNoModal.Row>
            <YesNoModal.Item>
              <PrimaryButton
                onPress={() => {
                  props.onDone(true)
                }}
              >
                <PrimaryButton.Text>{opts.yesButtonText}</PrimaryButton.Text>
              </PrimaryButton>
            </YesNoModal.Item>
          </YesNoModal.Row>
          <YesNoModal.Row>
            <YesNoModal.Item>
              <SecondaryButton onPress={() => props.onDone(false)}>
                <SecondaryButton.Text>{opts.noButtonText}</SecondaryButton.Text>
              </SecondaryButton>
            </YesNoModal.Item>
          </YesNoModal.Row>
        </YesNoModal.Footer>
      </YesNoModal>
    )
  }
