import React, {useContext} from 'react';

import GroceryScreen from './GroceryScreen';
import StatsScreen from './StatsScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/FontAwesome';

import {ThemeContext} from 'react-native-elements';
import Acceuil from './Acceuil';
import SignIn from './Signin';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  const {theme} = useContext(ThemeContext);

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Acceuil') {
              iconName = 'home';
            } else if (route.name === 'Profile') {
              iconName = 'user';
            } else if(route.name === 'Favoris') {
              iconName = 'star';
            }else if(route.name === 'Message') {
              iconName = 'envelope';
            } else if (route.name === 'SignIn') {
              iconName = 'sign-in'
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: theme.colors.primary,
          headerStyle: {
            backgroundColor: theme.colors.primary,
          },
          headerTintColor: 'white',
        })}>
        <Tab.Screen name="Acceuil" component={Acceuil}/>
        <Tab.Screen name="Profile" component={StatsScreen} />
        <Tab.Screen name="Favoris" component={GroceryScreen} />
        <Tab.Screen name="Message" component={StatsScreen} />
        <Tab.Screen name="SignIn" component={SignIn} />
       
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
