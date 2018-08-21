// @flow

import React from 'react'
import { TouchableHighlight, StyleSheet, View } from 'react-native'
import { boolean, number, text } from '@storybook/addon-knobs/react'
import { action } from '@storybook/addon-actions'

import R from 'ramda'

import Gradient from '../../src/Gradient/Gradient.js'
import Layout, { Body, Footer, Header, Row, Spacer } from '../../src/Layout/Layout.js'
import { TabBar } from '../helpers/TabBar.js'
import { Text } from '../../src/Text/Text.js'

import { ROW, COLUMN, TEXT } from '../helpers/utils.js'
import { selectV2 } from '@storybook/addon-knobs/dist/base'

export const debug = {
  // borderColor: 'red', borderWidth: 1
}

export const rawStyles = {
  layout: {},
  header: {},
  body: {},
  topRow: {},
  middleRow: {},
  bottomRow: {},
  item: {},
  text: {},
  debug
}

export const styles = StyleSheet.create(rawStyles)

export const footerWithButtonsStory = () => {
  const debug = boolean('DEBUG', false)

  const numberOfButtons = number('Number of Buttons', 4)
  const buttonHeight = number('Button Height', 40)

  const spacerWidth = number('Spacer Width', 8)

  return (
    <Gradient>
      <Layout debug={debug}>
        <Header height={60} debug={debug}>
          <Text H4 debug={debug}>
            Header Text
          </Text>
        </Header>

        <Body paddingHorizontal={24} paddingVertical={24} debug={debug} />

        <Footer
          shrink
          style={{ backgroundColor: 'yellow' }}
          spaceAround
          paddingHorizontal={8}
          paddingVertical={8}
          debug={debug}
        >
          {R.intersperse(
            <Spacer debug={debug} width={spacerWidth} />,
            Array(numberOfButtons)
              .fill('')
              .map((number, index) => (
                <TouchableHighlight
                  key={index}
                  onPress={action(`Button ${index} Clicked`)}
                  debug={debug}
                  style={{
                    flex: 1,
                    height: buttonHeight,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'blue',
                    borderRadius: 12
                  }}
                >
                  <View>
                    <Text debug={debug}>{'Button 1'}</Text>
                  </View>
                </TouchableHighlight>
              ))
          )}
        </Footer>
        <TabBar debug={debug} />
      </Layout>
    </Gradient>
  )
}
