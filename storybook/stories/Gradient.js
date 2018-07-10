// @flow

import { boolean, withKnobs } from '@storybook/addon-knobs/react'
// import { action } from '@storybook/addon-actions'
import { setAddon, storiesOf } from '@storybook/react-native'
import React from 'react'
import JSXAddon from 'storybook-addon-jsx'

import Gradient from '../../src/Gradient/Gradient.js'

setAddon(JSXAddon)

storiesOf('Gradient', module)
  .addDecorator(withKnobs)
  .addWithJSX('Default, Reverse', () => <Gradient reverse={boolean('Reverse', false)} />)
