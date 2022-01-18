import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import STYLES from '../../styles/HomePageStyle';
import * as Colors from '../../utils/colors';
import VectorIcons from '../atoms/Icons';
import Dream11Header from '../organisms/Dream11Header';
//props.navigation.navigate('Dream11Header')
const Icon = MaterialCommunityIcons;
const HomeIcon = props => {
  return (
    <View>
      {/* <Dream11Header /> */}
      <TouchableOpacity
        title=""
        onPress={() => {}}
        color="grey"
        style={{marginLeft: 10}}>
        <Icon name="home-outline" size={35} color="grey" />
        <Text>Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeIcon;
