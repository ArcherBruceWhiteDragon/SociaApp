import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Card, Text } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';
import { ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import Loading from './LoadingComponent';

const mapStateToProps = state => {
  return {
      partners: state.partners
  };
};

function Mission() {
  return (
    <Card title='Business Social Mission'>
      <Text style={{margin: 10}}>
      One business social network will inspire & build a happier and better world.
      People are truly engaged with the platform because it's so easy to use and intuitive. It really gives Socia™️ a business platform a personality.
      
      More communication, less noise, everything in one place
      Whether you’re looking to streamline internal advertising, replace all your connections, implement on our business social network, or launch our Socia™️ Network app.
      Built-in features for peer recognition, Verification, Business company values, goals, and feedback, to bring your life into a business culture to life.
      We combine the power of a social network, intranet, and employee app into one familiar digital experience that a new future loves.
      </Text>
    </Card>
  )
}

class About extends Component {

  static navigationOptions = {
    title: 'About Us',
  }

  render() {
    const renderPartner = ({ item }) => {
      return (
        <ListItem
          title={item.name}
          subtitle={item.description}
          leftAvatar={{source: {uri: baseUrl + item.image}}}
        />
      )
    }

    if (this.props.partners.isLoading) {
      return (
          <ScrollView>
              <Mission />
              <Card
                  title='Community Partners'>
                  <Loading />
              </Card>
          </ScrollView>
      );
  }
  if (this.props.partners.errMess) {
      return (
          <ScrollView>
              <Mission />
              <Card
                  title='Community Partners'>
                  <Text>{this.props.partners.errMess}</Text>
              </Card>
          </ScrollView>
      );
  }

    return (
      <ScrollView>
        <Mission />
        <Card title='Community Partners'>
          <FlatList 
              data={this.props.partners.partners}
              renderItem={renderPartner}
              keyExtractor={item => item.id.toString()}
          />
        </Card>
      </ScrollView>
    )
  }
}


export default connect(mapStateToProps)(About);
