// @flow

import * as Colors from '../constants/Colors'
import { scale } from '../scaling.js'

const InputStyles = {
  container: {
    position: 'relative',
    borderBottomColor: Colors.PRIMARY,
    borderBottomWidth: 1,
    width: '100%'
  },
  inputStyle: {
    position: 'relative',
    color: '#FFFFFF'
  },
  fontSize: scale(15),
  titleFontSize: scale(12),
  labelFontSize: scale(12)
}

export { InputStyles }
