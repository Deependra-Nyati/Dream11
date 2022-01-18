import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MyMatches from './MyMatches';
import Winners from './Winners';
import Chat from './Chat';
import Feed from './Feed';
import React from 'react';
import MyHomePage from './MyHomePage';
import {NavigationContainer} from '@react-navigation/native';
const Tab = createBottomTabNavigator();

const Dream11Footer = () => {
  return (
    <Tab.Navigator
      initialRouteName="MyHomePage"
      tabBarOptions={{
        activeTintColor: '#e91e63',
      }}>
      <Tab.Screen
        name="MyHomePage"
        component={MyHomePage}
        options={{
          tabBarLabel: 'MyHomePage',
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="home-outline"
              color="grey"
              size={35}
            />
          ),
        }}
      />
      <Tab.Screen
        name="MyMatches"
        component={MyMatches}
        options={{
          tabBarLabel: 'MyMatches',
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="home-outline"
              color="grey"
              size={35}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Winners"
        component={Winners}
        options={{
          tabBarLabel: 'Winners',
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="home-outline"
              color="grey"
              size={35}
            />
          ),
          tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarLabel: 'Chat',
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="message-text"
              color="grey"
              size={35}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarLabel: 'Feed',
          tabBarIcon: () => (
            <MaterialCommunityIcons name="rss-box" color="grey" size={35} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Dream11Footer;
// function AppNavigator() {
//     return (
//       <NavigationContainer>
//         <Dream11Footer />
//       </NavigationContainer>
//     );
//   }
