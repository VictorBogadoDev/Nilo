import React from 'react';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import {Login} from '../Features/StartScreen/index';
import HomeNavigator from '../Navigation/HomeNavigator';
import CodeScreen from '../Features/StartScreen/Register/code';
import debeScreen from '../Features/StartScreen/Register/debe';
export type StartStackList = {
  Login: undefined;
  CodeScreen: undefined;
  debeScreen: undefined;
  HomeNavigator: undefined;
};

export type StartNavigationProps = StackNavigationProp<StartStackList, 'Login'>;

export const Stack = createStackNavigator<StartStackList>();
//navegador de logeo.
const StartNavigator = (): React.ReactElement => (
  <Stack.Navigator
    initialRouteName="Login"
    screenOptions={{headerShown: false}}>
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="CodeScreen" component={CodeScreen} />
    <Stack.Screen name="debeScreen" component={debeScreen} />
    <Stack.Screen name="HomeNavigator" component={HomeNavigator} />
  </Stack.Navigator>
);
export default StartNavigator;
