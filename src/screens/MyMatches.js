import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Dream11Header from '../components/organisms/Dream11Header';
import Dream11FooterTemp from '../components/organisms/Dream11FooterTemp';
const MyMatches = () => {
  return (
    <View>
      <Dream11Header />
      <Text>No Matches Currently</Text>
      {/* <Dream11Footer/> */}
    </View>
  );
};

export default MyMatches;
