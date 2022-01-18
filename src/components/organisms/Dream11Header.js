import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import STYLES from '../../styles/HomePageStyle';
import * as Colors from '../../utils/colors';
import VectorIcons from '../atoms/Icons';
import React from 'react';
import {View, Text, StyleSheet, Image, Button} from 'react-native';
import {initLogout} from '../../store/actions/loginAction';
import {connect} from 'react-redux';
import Notifications from '../../screens/Notifications';
const Icon = MaterialCommunityIcons;

const Dream11Header = props => {
  return (
    <>
      <View style={STYLES.Header}>
        <View></View>
        <View>
          <Icon
            onPress={() => props.navigation.toggleDrawer()}
            name="home-outline"
            size={20}
          />
          <Image
            source={require('../../assets/images/Dream11.png')}
            style={STYLES.Dream11Image}
          />
        </View>
        <Button title="logout" onPress={() => props.initLogout()} />
        <View>
          <Text style={STYLES.TextDream11}> DREAM11</Text>
        </View>
        <View style={STYLES.Notification}>
          <Icon
            //IconName="bell-outline"
            name="bell-outline"
            onPress={() => props.navigation.navigate('Notifications')}
          />
        </View>
        <View style={STYLES.Balance}>
          <VectorIcons IconName="message-text-lock-outline" />
        </View>
      </View>
      <View style={STYLES.Header1}>
        <View style={STYLES.CricketWithIconParent}>
          <Icon
            name="tennis-ball"
            size={30}
            color="red"
            style={STYLES.CricketIcon}
          />
          <Text style={STYLES.Cricket}>Cricket</Text>
        </View>
        <View style={STYLES.FootBallWithIconParent}>
          <Icon
            name="soccer"
            size={30}
            color="red"
            style={STYLES.FootBallIcon}
          />
          <Text style={STYLES.FootBall}>FootBall</Text>
        </View>
      </View>
    </>
  );
};

export default connect(null, {initLogout})(Dream11Header);
