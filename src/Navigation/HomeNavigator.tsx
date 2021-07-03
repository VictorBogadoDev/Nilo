import React from 'react';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import HomeScreen from '../Features/Home';

export type StartStackList = {
  HomeScreen: undefined;
  SecurityCheck: undefined;
};

export type NavigationProps = StackNavigationProp<StartStackList, 'HomeScreen'>;

export const Stack = createStackNavigator<StartStackList>();
//navegador de logeo.
const HomeNavigator = (): React.ReactElement => (
  <Stack.Navigator
    screenOptions={{headerShown: false}}
    initialRouteName="HomeScreen">
    <Stack.Screen name="HomeScreen" component={HomeScreen} />
    <Stack.Screen name="SecurityCheck" component={HomeScreen} />
  </Stack.Navigator>
);
export default HomeNavigator;
