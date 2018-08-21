// @flow

import React, { Component } from 'react'
import type { Node } from 'react'
import { StyleSheet, View } from 'react-native'

import { Layout, Row, Item } from '../src/Layout/Layout.js'
import Text from './Text/Text.js'

export class DeleteMe extends React.Component {
  render () {
    return (
      <Layout backgroundColor={'grey'} debug>
        <Row backgroundColor={'yellow'} debug>
          <Text>Hello, World!</Text>
          <Text>Hello, World!</Text>
        </Row>
        
        <Row backgroundColor={'purple'} debug>
          <Text>Hello, World!</Text>
          <Text>Hello, World!</Text>
        </Row>
      </Layout>
    )
  }
}
