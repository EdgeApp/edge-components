// @flow

import React from 'react'
import { StyleSheet } from 'react-native'

import Layout, { Header, Body, Row, Spacer } from '../../src/Layout/Layout.js'
import { Text } from '../../src/Text/Text.js'
import { Gradient } from '../../src/Gradient/Gradient.js'

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

export const welcomeStory = () => {
  return (
    <Layout>
      <Gradient>
        <Header paddingVertical={14} shrink>
          <Text H4>Edge Components</Text>
        </Header>

        <Body top left paddingHorizontal={24}>
          <Row shrink>
            <Text medium top left>
              This is a UI component catalog and development environment for Edge.
            </Text>
          </Row>

          <Spacer height={44} />

          <Row shrink>
            <Text medium top left>
              Here you can display and interact with your UI components as stories. A story is a single state of one or
              more UI components. You can have as many stories as you want.
            </Text>
          </Row>

          <Spacer height={44} />

          <Row shrink>
            <Text medium top left>
              In other words a story is like a visual test case.
            </Text>
          </Row>
        </Body>
      </Gradient>
    </Layout>
  )
}
