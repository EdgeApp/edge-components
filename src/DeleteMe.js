// @flow

import React, { Component } from 'react'
import type { Node } from 'react'
import { StyleSheet, View } from 'react-native'

import { Layout, Row, Item } from '../src/Layout/Layout.js'
import Text from './Text/Text.js'

export class DeleteMe extends React.Component {
  render () {
    return (
      <Layout top backgroundColor={'grey'} debug>
        <Row backgroundColor={'aquamarine'} debug>
          <Item backgroundColor={'yellow'} debug>
            <Text debug color={'black'}>ETH: $386.42</Text>
          </Item>
        </Row>
        
        <Row debug backgroundColor={'aquamarine'}>
          <Item backgroundColor={'yellow'} debug>
            <Text debug color={'black'}>ETH: $386.42</Text>
          </Item>
        </Row>
        
        <Row debug backgroundColor={'aquamarine'}>
          <Item backgroundColor={'yellow'} debug>
            <Text debug color={'black'}>ETH: $386.42</Text>
          </Item>
        </Row>
        
        <Row debug backgroundColor={'aquamarine'}>
          <Item backgroundColor={'yellow'} debug>
            <Text debug color={'black'}>ETH: $386.42</Text>
          </Item>
        </Row>
      </Layout>
    )
  }
}
