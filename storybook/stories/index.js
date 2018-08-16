// @flow

import { setAddon, storiesOf } from '@storybook/react-native'
import JSXAddon from 'storybook-addon-jsx'
import { withKnobs } from '@storybook/addon-knobs/react'

import { welcomeStory } from './welcome.js'
import { layoutStory } from './layout.js'
import { gradientStory } from './gradient.js'

setAddon(JSXAddon)

storiesOf('Welcome', module)
  .addWithJSX('Edge Components', welcomeStory)

storiesOf('Layout', module)
  .addDecorator(withKnobs)
  .addWithJSX('Default, Debug Borders', layoutStory)

storiesOf('Gradient', module)
  .addDecorator(withKnobs)
  .addWithJSX('Default, Reverse', gradientStory)
