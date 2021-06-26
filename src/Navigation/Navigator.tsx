import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import StartNavigator from './StartNavigation';

const Navigator = (): React.ReactElement => {
  return (
    <NavigationContainer>
      <StartNavigator />
    </NavigationContainer>
  );
};

export default Navigator;
