import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';
import VectorIcons from '../components/atoms/Icons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SingleMatch from '../components/molecules/SingleMatch';
import STYLES from '../styles/HomePageStyle';
import {initLogout} from '../store/actions/loginAction';
import {connect} from 'react-redux';
// import { Header } from '../components/Header';
import Dream11Header from '../components/organisms/Dream11Header';
import Dream11FooterTemp from '../components/organisms/Dream11FooterTemp';
import MyMatches from './MyMatches';
import Dream11Footer from '../screens/Dream11Footer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
// import Login from './Login';

class MyHomePage extends Component {
  constructor(props) {
    // console.log(props);
    super(props);
  }
  render() {
    const Icon = MaterialCommunityIcons;
    const {navigation} = this.props;
    return (
      <>
        {/* <Header/> */}

        <View style={STYLES.Parent}>
          <Dream11Header navigation={navigation} />
          <View style={STYLES.Images}>
            <View></View>
            <View></View>
          </View>
          <ScrollView style={STYLES.MatchPage}>
            <View>
              <Text style={STYLES.UpcomingMatches}>Upcoming Matches</Text>
            </View>

            {/* //Match 1 starts */}

            <SingleMatch
              Name="Ireland v/s South Africa ODI"
              TeamName1="Ireland"
              TeamName2="South Africa"
              TeamName1Short="IRE"
              TeamName2Short="SA"
              Image1={require('../assets/images/Ireland_Cricket.png')}
              Image2={require('../assets/images/SA_cricket.png')}
              IconName="bell-plus-outline"
              Time="36m 05s"
              Mega="Mega"
              Prize="1 Crore"
              navigation={navigation}
              // onPress = {this.props.navigation}
            />
            {/* //Match 1 ends */}
            {/* //Match 2 Starts */}

            <SingleMatch
              Name="India v/s Sri Lanka ODI"
              TeamName1="India"
              TeamName2="Sri Lanka"
              TeamName1Short="IND"
              TeamName2Short="SL"
              Image1={require('../assets/images/India_Cricket.png')}
              Image2={require('../assets/images/SriLanka_Cricket.png')}
              IconName="bell-plus-outline"
              Time="6 days "
              Mega="Mega"
              Prize="5 Crore"
            />

            {/* //Match 2 ends */}
            {/* Match 3 starts */}
            <SingleMatch
              Name="Ireland v/s South Africa ODI"
              TeamName1="Ireland"
              TeamName2="South Africa"
              TeamName1Short="IRE"
              TeamName2Short="SA"
              Image1={require('../assets/images/Ireland_Cricket.png')}
              Image2={require('../assets/images/SA_cricket.png')}
              IconName="bell-plus-outline"
              Time="7 days"
              Mega="Mega"
              Prize="1 Crore"
              // onPress = {this.props.navigation}
            />
            {/* Match 3 ends */}

            {/* <View></View> */}
          </ScrollView>

          <Dream11FooterTemp navigation={this.props.navigation} />
          {/* <Dream11Footer/> */}
        </View>
      </>
    );
  }
}

export default MyHomePage;

// export default connect(null,{initLogout})(MyHomePage);
