// @flow

import { boolean, number, text, withKnobs } from '@storybook/addon-knobs/react'
import { setAddon, storiesOf } from '@storybook/react-native'
import React from 'react'
import { Text } from 'react-native'
import JSXAddon from 'storybook-addon-jsx'

import Gradient from '../../src/Gradient/Gradient.js'
import Scene, { Body, Footer, Header } from '../../src/Scene/Scene.js'
import { TabBar } from '../helpers/TabBar.js'

setAddon(JSXAddon)

const debug = { borderColor: 'red', borderWidth: 1 }

storiesOf('Scene', module)
  .addDecorator(withKnobs)
  .addWithJSX('Default, Debug Borders', () => {
    const debugStyle = boolean('DEBUG', false) ? debug : null
    const paddingStyle = {
      padding: number('Padding', 0),
      paddingHorizontal: number('Padding Horizontal', 0) || undefined, // enables padding if 0
      paddingVertical: number('Padding Vertical', 0) || undefined // enables padding if 0
    }
    const header = boolean('Header', true)
    const body = boolean('Body', true)
    const footer = boolean('Footer', true)
    const flexStyle = boolean('Flex', true) ? { flex: 1 } : {}

    return (
      <Gradient>
        <Scene style={[debugStyle, paddingStyle]}>
          {header && (
            <Header style={debugStyle}>
              <Header.Text style={debugStyle}>
                <Text style={debugStyle}>{text('Header Text', 'This is some header text')}</Text>
              </Header.Text>
            </Header>
          )}

          {body && (
            <Body style={[debugStyle, flexStyle]}>
              <Body.Text style={debugStyle}>
                <Text style={debugStyle}>{text('Body Text', 'This is some body text')}</Text>
              </Body.Text>
            </Body>
          )}

          {footer && (
            <Footer style={debugStyle}>
              <Footer.Text style={debugStyle}>
                <Text style={debugStyle}>{text('Footer Text', 'This is some footer text')}</Text>
              </Footer.Text>
            </Footer>
          )}
        </Scene>
        <TabBar style={debug} />
      </Gradient>
    )
  })
