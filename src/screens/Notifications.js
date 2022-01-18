import React from 'react';

import {Text, View, StyleSheet, Button} from 'react-native';

const Notifications = ({navigation}) => {
  return (
    <View>
      <Text>This is contest Page</Text>
      <Button title="Go Back" onPress={() => navigation.navigate('MyHomePage')}></Button>
    </View>
  );
};

export default Notifications;
