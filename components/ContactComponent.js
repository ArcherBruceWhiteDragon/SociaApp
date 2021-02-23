import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import { Card, Text } from 'react-native-elements'

class Contact extends Component {
  static navigationOptions = {
    title: 'Contact Us',
  }

  render() {
    return (
      <ScrollView>
        <Card title='Contact Information' wrapperStyle={{ margin: 20 }}>
          <Text>1345 Socia Network Drive</Text>
          <Text>Tustin, CA 92701</Text>
          <Text style={{marginBottom: 10}}>U.S.A.</Text>
          <Text>Phone: 1 657 859-9556</Text>
          <Text>Email: Contact@Socia.Network</Text>
        </Card>
      </ScrollView>
    )
  }
}

export default Contact
