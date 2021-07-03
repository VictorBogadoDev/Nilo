import React from 'react';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import {Start} from '../Features/StartScreen/index';
import HomeNavigator from '../Features/Home';

export type StartStackList = {
  Start: undefined;
  HomeNavigator: undefined;
};

export type NavigationProps = StackNavigationProp<StartStackList, 'Start'>;

export const Stack = createStackNavigator<StartStackList>();
//navegador de logeo.
const StartNavigator = (): React.ReactElement => (
  <Stack.Navigator
    initialRouteName="Start"
    screenOptions={{headerShown: false}}>
    <Stack.Screen name="Start" component={Start} />
    <Stack.Screen name="HomeNavigator" component={HomeNavigator} />
  </Stack.Navigator>
);
export default StartNavigator;
