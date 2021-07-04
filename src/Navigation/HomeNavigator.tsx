import React from 'react';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import HomeScreen from '../Features/Home/Home';
import SecurityCheck from '../Features/Splash/security/index';
import AppNavigator from './AppNavigator';
export type StartStackList = {
  HomeScreen: undefined;
  SecurityCheck: undefined;
  AppNavigator: undefined;
};

export type NavigationPropsHome = StackNavigationProp<
  StartStackList,
  'HomeScreen'
>;

export const Stack = createStackNavigator<StartStackList>();
//navegador de logeo.
const HomeNavigator = (): React.ReactElement => (
  <Stack.Navigator
    screenOptions={{headerShown: false}}
    initialRouteName="HomeScreen">
    <Stack.Screen name="HomeScreen" component={HomeScreen} />
    <Stack.Screen name="AppNavigator" component={AppNavigator} />
    <Stack.Screen name="SecurityCheck" component={SecurityCheck} />
  </Stack.Navigator>
);
export default HomeNavigator;
