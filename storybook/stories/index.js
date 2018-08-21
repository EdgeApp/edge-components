// @flow

import { setAddon, storiesOf } from '@storybook/react-native'
import JSXAddon from 'storybook-addon-jsx'
import { withKnobs } from '@storybook/addon-knobs/react'

import { welcomeStory } from './welcome.js'
import { layoutStory } from './layout.js'
import { typicalLayoutStory } from './typicalLayout.js'
import { footerWithButtonsStory } from './footerWithButtons.js'
import { rowStory } from './row.js'
import { gradientStory } from './gradient.js'
import { deleteMeStory } from './deleteMe.js'

setAddon(JSXAddon)

storiesOf('Welcome', module)
  .addWithJSX('Edge Components', welcomeStory)

storiesOf('Layout', module)
  .addDecorator(withKnobs)
  .addWithJSX('Default, Debug Borders', layoutStory)
  .addWithJSX('Typical Layout', typicalLayoutStory)
  .addWithJSX('Footer With Buttons', footerWithButtonsStory)
  .addWithJSX('Row', rowStory)

storiesOf('DeleteMe', module)
  .addWithJSX('DeleteMe', deleteMeStory)

storiesOf('Gradient', module)
  .addDecorator(withKnobs)
  .addWithJSX('Default, Reverse', gradientStory)
