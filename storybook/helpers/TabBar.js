// @flow

import React, { Component } from 'react'
import type { Node } from 'react'
import { Text as RNText, StyleSheet, View } from 'react-native'

import { Spacer } from '../../src/Layout/Spacer.js'

import THEME from '../../src/edge-theme.js'

const debugStyle = { borderColor: 'red', borderWidth: 1 }

const rawStyles = {
  tabBarText: {
    // fontFamily: THEME.FONTS.DEFAULT,
    color: THEME.COLORS.PRIMARY,
    fontSize: 18
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: THEME.COLORS.WHITE
  },
  tabBar: {
    height: THEME.TAB_BAR.HEIGHT,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: THEME.COLORS.PRIMARY,
    padding: 2
  }
}
const styles = StyleSheet.create(rawStyles)

export type TabProps = {
  children?: Node,
  // $FlowFixMe
  style?: StyleSheet.Styles
}
export class Tab extends Component<TabProps> {
  render () {
    const { children, style } = this.props
    return <View style={[styles.tab, style]}>{children}</View>
  }
}

export type TextProps = {
  children?: Node,
  // $FlowFixMe
  style?: StyleSheet.Styles
}
export class Text extends Component<TextProps> {
  render () {
    const { children, style } = this.props
    return <RNText style={[styles.tabBarText, style]}>{children}</RNText>
  }
}

export type Props = {}
export class TabBar extends Component<Props> {
  static Text = Text
  render () {
    const { debug, ...props } = this.props
    const debugStyle = debug ? { borderColor: 'red', borderWidth: 1 } : {}
    
    return (
      <View style={[styles.tabBar, debugStyle]} {...props}>
        <Tab>
          <Text>Tab 1</Text>
        </Tab>

        <Spacer width={2} />

        <Tab>
          <Text>Tab 2</Text>
        </Tab>

        <Spacer width={2} />

        <Tab>
          <Text>Tab 3</Text>
        </Tab>

        <Spacer width={2} />

        <Tab>
          <Text>Tab 4</Text>
        </Tab>
      </View>
    )
  }
}

export default TabBar
