import React from 'react';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import SplashScreen from '../Features/Splash/index';
import HomeNavigator from './HomeNavigator';
import StartNavigator from './StartNavigation';
import SecurityCheck from '../Features/Splash/security/index';

export type StartStackList = {
  SplashScreen: undefined;
  SecurityCheck: undefined;
  HomeNavigator: undefined;
  StartNavigator: undefined;
};

export type AppNavigationAppProps = StackNavigationProp<
  StartStackList,
  'SplashScreen'
>;

export const Stack = createStackNavigator<StartStackList>();
//navegador de logeo.
const AppNavigator = (): React.ReactElement => (
  <Stack.Navigator
    initialRouteName="SplashScreen"
    screenOptions={{headerShown: false}}>
    <Stack.Screen name="SplashScreen" component={SplashScreen} />
    <Stack.Screen name="SecurityCheck" component={SecurityCheck} />
    <Stack.Screen name="HomeNavigator" component={HomeNavigator} />
    <Stack.Screen name="StartNavigator" component={StartNavigator} />
  </Stack.Navigator>
);
export default AppNavigator;
