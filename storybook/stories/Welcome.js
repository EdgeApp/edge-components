// @flow

import { setAddon, storiesOf } from '@storybook/react-native'
import React from 'react'
import JSXAddon from 'storybook-addon-jsx'

import Welcome from '../helpers/Welcome.js'

setAddon(JSXAddon)

storiesOf('Welcome', module).addWithJSX('Edge Components', () => <Welcome />)
