// @flow

import React from 'react'
import { StyleSheet } from 'react-native'
import { boolean, number } from '@storybook/addon-knobs/react'

import Gradient from '../../src/Gradient/Gradient.js'
import Layout, { Body, Row, Item } from '../../src/Layout/Layout.js'
import { Text } from '../../src/Text/Text.js'

import { ROW, COLUMN } from '../helpers/utils.js'

console.disableYellowBox = true

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
  const BODY = {
    isEnabled: true,
    shrink: false,
    paddingHorizontal: 24,
    paddingVertical: 24,

    justifyContent: COLUMN.justifyContent('Body'),
    alignItems: COLUMN.alignItems('Body'),

    debug: boolean('Body DEBUG', false)
  }

  const ROWS = {
    numberOfRows: Math.max(number('Number of rows', 5), 0),

    height: number('Row Height', undefined),
    width: number('Row Width', undefined),
    shrink: boolean('Row Shrink', false),

    justifyContent: ROW.justifyContent('Row'),
    alignItems: ROW.alignItems('Row'),

    numberOfItems: number('Number of Items', 1),

    debug: boolean('Row DEBUG', false)
  }

  const ITEMS = {
    height: number('Item Height', undefined),
    width: number('Item Width', undefined),
    shrink: boolean('Item Shrink', false),

    justifyContent: COLUMN.justifyContent('Item'),
    alignItems: COLUMN.alignItems('Item'),

    numberOfItems: number('Number of Items', 1),

    debug: boolean('Item DEBUG', false)
  }

  const TEXT = {
    text: 'T',

    debug: boolean('Text DEBUG', false)
  }

  return (
    <Layout>
      <Gradient>
        <Body
          flexDirection={'row'}
          alignItems={BODY.alignItems}
          justifyContent={BODY.justifyContent}
          shrink={BODY.shrink}
          paddingHorizontal={BODY.paddingHorizontal}
          paddingVertical={BODY.paddingVertical}
          debug={BODY.debug}
        >
          <Row
            // flexDirection={'column'}
            height={ROWS.height}
            shrink={ROWS.shrink}
            justifyContent={ROWS.justifyContent}
            alignItems={ROWS.alignItems}
            debug={ROWS.debug}
          >
            {/* <Item
              height={ITEMS.height}
              width={ITEMS.width}
              shrink={ITEMS.shrink}
              justifyContent={ITEMS.justifyContent}
              alignItems={ITEMS.alignItems}
              debug={ITEMS.debug}
            > */}
              <Text
                P
                left={TEXT.textAlign === 'left'}
                right={TEXT.textAlign === 'right'}
                justify={TEXT.textAlign === 'justify'}
                auto={TEXT.textAlign === 'auto'}
                debug={TEXT.debug}
              >
                {TEXT.text}
              </Text>

              <Text
                P
                left={TEXT.textAlign === 'left'}
                right={TEXT.textAlign === 'right'}
                justify={TEXT.textAlign === 'justify'}
                auto={TEXT.textAlign === 'auto'}
                debug={TEXT.debug}
              >
                {TEXT.text}
              </Text>
            {/* </Item> */}
          </Row>
        </Body>
      </Gradient>
    </Layout>
  )
}
//   return (
//     <Layout>
//       <Gradient>
//         <Body
//           alignItems={BODY.alignItems}
//           justifyContent={BODY.justifyContent}
//           shrink={BODY.shrink}
//           paddingHorizontal={BODY.paddingHorizontal}
//           paddingVertical={BODY.paddingVertical}
//           debug={BODY.debug}
//         >
//           {Array(ROWS.numberOfRows)
//             .fill('')
//             .map((number, index) => (
//               <Row
//                 key={index}
//                 height={ROWS.height}
//                 shrink={ROWS.shrink}
//                 justifyContent={ROWS.justifyContent}
//                 alignItems={ROWS.alignItems}
//                 debug={ROWS.debug}
//               >
//                 {Array(ITEMS.numberOfItems)
//                   .fill('')
//                   .map((number, index) => (
//                     <Item
//                       key={index}
//                       height={ITEMS.height}
//                       width={ITEMS.width}
//                       shrink={ITEMS.shrink}
//                       justifyContent={ITEMS.justifyContent}
//                       alignItems={ITEMS.alignItems}
//                       debug={ITEMS.debug}>
//                       <Text
//                         P
//                         key={index}
//                         left={TEXT.textAlign === 'left'}
//                         right={TEXT.textAlign === 'right'}
//                         justify={TEXT.textAlign === 'justify'}
//                         auto={TEXT.textAlign === 'auto'}
//                         debug={TEXT.debug}
//                       >
//                         {TEXT.text}
//                       </Text>

//                       <Text
//                         P
//                         key={index}
//                         left={TEXT.textAlign === 'left'}
//                         right={TEXT.textAlign === 'right'}
//                         justify={TEXT.textAlign === 'justify'}
//                         auto={TEXT.textAlign === 'auto'}
//                         debug={TEXT.debug}
//                       >
//                         {TEXT.text}
//                       </Text>
//                     </Item>
//                   ))}
//               </Row>
//             ))}
//         </Body>
//       </Gradient>
//     </Layout>
//   )
// }
