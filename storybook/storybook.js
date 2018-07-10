// @flow

import { configure, getStorybookUI } from '@storybook/react-native'
import React, { Component } from 'react'
import { AppRegistry } from 'react-native'

// import stories
setTimeout(() => configure(() => require('./stories'), module), 1000) // setTimeout is a hack to get addons to work https://storybook.js.org/basics/faq/#why-is-there-no-addons-channel
// configure(() => require('./stories'), module) // original

// This assumes that storybook is running on the same host as your RN packager,
// to set manually use, e.g. host: 'localhost' option
const StorybookUIRoot = getStorybookUI({ port: 7007, onDeviceUI: true })

// react-native hot module loader must take in a Class - https://github.com/facebook/react-native/issues/10991
// https://github.com/storybooks/storybook/issues/2081
// eslint-disable-next-line react/prefer-stateless-function
class StorybookUIHMRRoot extends Component<{}> {
  render () {
    return <StorybookUIRoot />
  }
}

AppRegistry.registerComponent('edge-components', () => StorybookUIHMRRoot)
export default StorybookUIHMRRoot
