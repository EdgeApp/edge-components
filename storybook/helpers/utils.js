// @flow

import { selectV2 } from '@storybook/addon-knobs'

export const ROW = {
  alignItems: name => {
    return selectV2(
      `${name} Align Items`,
      {
        Top: 'flex-start',
        Center: 'center',
        Bottom: 'flex-end',
        Stretch: 'stretch',
        Baseline: 'baseline'
      },
      'center'
    )
  },
  justifyContent: name => {
    return selectV2(
      `${name} Justify Content`,
      {
        Left: 'flex-start',
        Center: 'center',
        Right: 'flex-end',
        'Space Around': 'space-around',
        'Space Between': 'space-between'
      },
      'center'
    )
  }
}

export const COLUMN = {
  alignItems: name => {
    return selectV2(
      `${name} Align Items`,
      {
        Left: 'flex-start',
        Center: 'center',
        Right: 'flex-end',
        Stretch: 'stretch',
        'Baseline': 'baseline'
      },
      'center'
    )
  },
  justifyContent: name => {
    return selectV2(
      `${name} Justify Content`,
      {
        Top: 'flex-start',
        Center: 'center',
        Bottom: 'flex-end',
        'Space Around': 'space-around',
        'Space Between': 'space-between'
      },
      'center'
    )
  }
}

export const TEXT = {
  textAlign: () => selectV2(
    'Text Align',
    {
      Left: 'left',
      Center: 'center',
      Right: 'right',
      Justify: 'justify',
      Auto: 'auto'
    },
    'center'
  )
}
