// @flow

import React from 'react'
import { StyleSheet } from 'react-native'
import { boolean, number, text } from '@storybook/addon-knobs/react'

import Gradient from '../../src/Gradient/Gradient.js'
import Layout, { Body, Footer, Header, Row } from '../../src/Layout/Layout.js'
import { TabBar } from '../helpers/TabBar.js'
import { Text } from '../../src/Text/Text.js'

import { ROW, COLUMN, TEXT } from '../helpers/utils.js'

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

export const layoutStory = () => {
  const debug = boolean('DEBUG', false)

  const HEADER = {
    isEnabled: boolean('Header', true),
    height: number('Header Height', undefined),
    shrink: boolean('Header Shrink', false),

    paddingHorizontal: number('Header Padding Horizontal', 0),
    paddingVertical: number('Header Padding Vertical', 0),

    justifyContent: ROW.justifyContent('Header'),
    alignItems: ROW.alignItems('Header'),

    textLeft: text('Header Left', 'L'),
    textCenter: text('Header Center', 'Header Text'),
    textRight: text('Header Right', 'R')
  }

  const BODY = {
    isEnabled: boolean('Body', true),
    shrink: boolean('Body Shrink', false),
    paddingHorizontal: number('Body Padding Horizontal', 0),
    paddingVertical: number('Body Padding Vertical', 0),

    justifyContent: COLUMN.justifyContent('Body'),
    alignItems: COLUMN.alignItems('Body'),

    text: text('Body Text', 'This is some body text'),
    textAlign: TEXT.textAlign()
  }

  const ROWS = {
    numberOfRows: Math.max(number('Number of rows', 5), 0),

    height: number('Row Height', 0),
    shrink: boolean('Row Shrink', false),

    justifyContent: ROW.justifyContent('Row'),
    alignItems: ROW.alignItems('Row')
  }

  const FOOTER = {
    isEnabled: boolean('Footer', true),
    text: text('Footer Text', 'This is some footer text'),
    height: number('Footer Height', undefined),
    shrink: boolean('Footer Shrink', false),
    justifyContent: ROW.justifyContent('Footer'),
    alignItems: ROW.alignItems('Footer'),
    paddingHorizontal: number('Footer Padding Horizontal', 0),
    paddingVertical: number('Footer Padding Vertical', 0)
  }

  const tabBar = boolean('TabBar', true)

  return (
    <Layout debug={debug}>
      <Gradient>
        {HEADER.isEnabled && (
          <Header
            paddingVertical={HEADER.paddingVertical}
            paddingHorizontal={HEADER.paddingHorizontal}
            height={HEADER.height}
            shrink={HEADER.shrink}
            justifyContent={HEADER.justifyContent}
            alignItems={HEADER.alignItems}
            debug={debug}
          >
            <Text H4 debug={debug}>
              {HEADER.textLeft}
            </Text>

            <Text H4 debug={debug}>
              {HEADER.textCenter}
            </Text>

            <Text H4 debug={debug}>
              {HEADER.textRight}
            </Text>
          </Header>
        )}

        {BODY.isEnabled && (
          <Body
            alignItems={BODY.alignItems}
            justifyContent={BODY.justifyContent}
            shrink={BODY.shrink}
            paddingHorizontal={BODY.paddingHorizontal}
            paddingVertical={BODY.paddingVertical}
            debug={debug}
          >
            {Array(ROWS.numberOfRows)
              .fill('')
              .map((number, index) => (
                <Row
                  key={index}
                  height={ROWS.height}
                  shrink={ROWS.shrink}
                  justifyContent={ROWS.justifyContent}
                  alignItems={ROWS.alignItems}
                  debug={debug}
                >
                  <Text P left={BODY.textAlign === 'left'} right={BODY.textAlign === 'right'} justify={BODY.textAlign === 'justify'} auto={BODY.textAlign === 'auto'} debug={debug}>
                    {BODY.text}
                  </Text>
                  <Text P left={BODY.textAlign === 'left'} right={BODY.textAlign === 'right'} justify={BODY.textAlign === 'justify'} auto={BODY.textAlign === 'auto'} debug={debug}>
                    {BODY.text}
                  </Text>
                </Row>
              ))}
          </Body>
        )}

        {FOOTER.isEnabled && (
          <Footer
            shrink={FOOTER.shrink}
            justifyContent={FOOTER.justifyContent}
            alignItems={FOOTER.alignItems}
            height={FOOTER.height}
            paddingHorizontal={FOOTER.paddingHorizontal}
            paddingVertical={FOOTER.paddingVertical}
            debug={debug}
          >
            <Text debug={debug}>{FOOTER.text}</Text>
          </Footer>
        )}

        {tabBar && <TabBar debug={debug} />}
      </Gradient>
    </Layout>
  )
}
