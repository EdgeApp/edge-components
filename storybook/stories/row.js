// @flow

import React from 'react'
import { StyleSheet } from 'react-native'
import { boolean, number, text, selectV2 } from '@storybook/addon-knobs/react'

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

export const rowStory = () => {
  const debug = boolean('DEBUG', false)

  const HEADER = {
    isEnabled: true,
    height: 60,
    shrink: false,

    paddingHorizontal: 14,
    paddingVertical: 14,

    justifyContent: 'space-between',
    alignItems: 'center',

    textLeft: 'L',
    textCenter: 'Header Text',
    textRight: 'R'
  }

  const BODY = {
    isEnabled: true,
    shrink: false,
    paddingHorizontal: 24,
    paddingVertical: 24,

    justifyContent: 'flex-start',
    alignItems: 'stretch'
  }

  const ROWS = {
    numberOfRows: Math.max(number('Number of rows', 5), 0),

    height: number('Row Height', 0),
    shrink: boolean('Row Shrink', false),

    justifyContent: ROW.justifyContent('Row'),
    alignItems: ROW.alignItems('Row'),

    text: 'T',
    textAlign: 'center',
    numberOfItems: number('Number of Items', 1)
  }

  const FOOTER = {
    isEnabled: true,
    text: 'This is some footer text',
    height: 40,
    shrink: false,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 0,
    paddingVertical: 0
  }

  const tabBar = true

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
                  {Array(ROWS.numberOfItems)
                    .fill('')
                    .map((number, index) => (
                      <Text P 
                        key={index}
                        left={ROW.textAlign === 'left'}
                        right={ROW.textAlign === 'right'}
                        justify={ROW.textAlign === 'justify'}
                        auto={ROW.textAlign === 'auto'}
                        debug={debug}>
                        {ROWS.text}
                      </Text>
                    ))
                  }
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
