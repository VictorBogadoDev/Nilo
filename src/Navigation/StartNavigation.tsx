import React from 'react';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import Start from '../Features/Index';
import {Screen2} from '../Features/Screen2';

export type StartStackList = {
  Start: undefined;
  Screen2: undefined;
};

export type NavigationProps = StackNavigationProp<StartStackList, 'Start'>;

export const Stack = createStackNavigator<StartStackList>();

const StartNavigator = (): React.ReactElement => (
    <Stack.Navigator
      initialRouteName="Start">
      <Stack.Screen name="Start" component={Start} />
      <Stack.Screen name="Screen2" component={Screen2} />
    </Stack.Navigator>
  );
export default StartNavigator;
