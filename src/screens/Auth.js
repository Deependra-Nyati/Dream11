import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import Login from '../screens/Login';
import Home from '../screens/Home';
import Loader from '../components/Loader';
import {setUserData} from '../store/actions';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import SubPage from './SubPage';
import ListPage from './ListPage';
import {Button} from '../components';
import MyHomePage from './MyHomePage';
import RegistrationPage from './RegistrationPage';
import MyMatches from './MyMatches';
import Dream11Header from '../components/organisms/Dream11Header';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Dream11Footer from '../screens/Dream11Footer';
import Notifications from './Notifications';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
//var flag=0;
class Auth extends Component {
  state = {
    loading: true,
  };

  componentDidMount() {
    AsyncStorage.getItem('userData')
      .then(data => {
        this.setState({loading: false});
        if (data) {
          this.props.setUserData(JSON.parse(data));
        }
      })
      .catch(() => {
        this.setState({loading: false});
      });
  }

  render() {
    const {loading} = this.state;
    const {user} = this.props;

    if (loading) {
      return <Loader loading={loading} />;
    }

    return (
      <NavigationContainer>
        {user ? (
          <Stack.Navigator>
            {/* flag=1; */}
            <Stack.Screen
              options={{headerShown: false}}
              name="HomeScreen"
              component={HomeScreen}
            />
            {/* <Stack.Screen
              options={{headerShown: false}}
              name="HomeScreen"
              component={HomeScreen}
            /> */}
            <Stack.Screen name="Notifications" component={Notifications} />
            <Stack.Screen name="ContestPage" component={ContestPage} />
            {/* <Stack.Screen name="MyMatches" component={MyMatches} /> */}
          </Stack.Navigator>
        ) : (
          <Stack.Navigator>
            <Stack.Screen
              name="RegistrationPage"
              component={RegistrationPage}
              // options={{headerShown: false}}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              // options={{headerShown: false}}
            />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    );

    // if (loading) {
    //   return <Loader loading={loading} />;
    // }
    // if (user) return <Home />;
    // return <Login />;
  }
}

const mapStateToProps = state => {
  return {
    user: state.loginReducer.user,
  };
};

export default connect(mapStateToProps, {setUserData})(Auth);

// function MyHomePage() {
//   return <Dream11Footer />;
// }

function HomeScreen({navigation}) {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Dream11Footer" component={Dream11Footer} />
      <Drawer.Screen name="Notifications" component={Notifications} />
      <Drawer.Screen name="MenuPage1" component={MenuPage1} />
      <Drawer.Screen name="MenuPage2" component={MenuPage2} />
    </Drawer.Navigator>
  );
}

function MenuPage1({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>MenuPage1</Text>
      <Button title="Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

function MenuPage2({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>MenuPage2</Text>
      <Button title="Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}
