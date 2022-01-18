import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import STYLES from '../../styles/HomePageStyle';
import * as Colors from '../../utils/colors';
import VectorIcons from '../atoms/Icons';
import HomeIcon from '../atoms/HomeIcon';
const Icon = MaterialCommunityIcons;

class Dream11FooterTemp extends Component {
  //    console.log(props);
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <View style={STYLES.Footer}>
          {/* <View>
                <TouchableOpacity
                title=''
                onPress={()=>{}}
                color="grey"
                style={{marginLeft:10}}
                
                >
                <Icon name="home-outline"size={35}color="grey"/>
                <Text>Home</Text>
                </TouchableOpacity>
              </View> */}
          <HomeIcon navigation={this.props.navigation} />
          <View>
            <TouchableOpacity
              title=""
              color="grey"
              style={{marginLeft: 10}}
              onPress={() => {
                this.props.navigation.navigate('MyMatches');
              }}>
              <Icon
                name="home-outline"
                size={35}
                color="grey"
                style={{marginLeft: 12}}
              />
              <Text>My Match..</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              title=""
              onPress={() => {}}
              color="grey"
              style={{marginLeft: 10}}>
              <Icon
                name="home-outline"
                size={35}
                color="grey"
                style={{marginLeft: 9}}
              />
              <Text>Winners</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              title=""
              onPress={() => {}}
              color="grey"
              style={{marginLeft: 10}}>
              <Icon name="message-text" size={35} color="grey" />
              <Text>Chat</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              title=""
              onPress={() => {}}
              color="grey"
              style={{marginLeft: 10}}>
              <Icon name="rss-box" size={35} color="grey" />
              <Text>Feed</Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  }
}

export default Dream11FooterTemp;
