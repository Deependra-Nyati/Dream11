import * as COLORS from '../../utils/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
import {StyleSheet} from 'react-native';

const vectorIcons = props => {
  return (
    <MaterialCommunityIcons
      name={props.IconName}
      style={styles.icons}
      size={27}
      color={COLORS.WHITE}
    />
  );
};

const styles = StyleSheet.create({
  icons: {
    paddingTop: 15,
    padding: 10,
  },
});

export default vectorIcons;
