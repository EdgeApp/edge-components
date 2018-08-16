// @flow

import React from 'react'
import { boolean } from '@storybook/addon-knobs/react'

import Gradient from '../../src/Gradient/Gradient.js'

export const gradientStory = () => (
  <Gradient reverse={boolean('Reverse', false)} />
)
