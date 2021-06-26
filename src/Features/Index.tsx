import React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationProps} from '../Navigation/StartNavigation';

interface IStartProps {
  navigation: NavigationProps;
}

export default ({navigation}: IStartProps): React.ReactElement => {
  return (
    <View>
      <Text>hi start</Text>
      <Button
        title="Continuar"
        onPress={() => navigation.navigate('Screen2')}
      />
    </View>
  );
};
