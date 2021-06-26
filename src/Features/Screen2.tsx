import React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationProps} from '../Navigation/StartNavigation';

interface IStartProps {
  navigation: NavigationProps;
}

export const Screen2 = ({navigation}: IStartProps): React.ReactElement => {
  return (
    <View>
      <Text>hi screen2</Text>
      <Button
        title="Continuar"
        onPress={() => navigation.navigate('Start')}
      />
    </View>
  );
};

export default Screen2;
