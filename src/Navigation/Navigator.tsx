import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import AppNavigator from './Appavigator';

const Navigator = (): React.ReactElement => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default Navigator;
