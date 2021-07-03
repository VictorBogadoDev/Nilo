import React, {useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import {useSelector} from 'react-redux';
import {saveData} from '../../helper/asyncStorage/verifyDat';
import {NavigationProps} from '../Navigation/StartNavigation';
import {SelectUserData} from './User/slice';

interface IStartProps {
  navigation: NavigationProps;
}

export default ({navigation}: IStartProps): React.ReactElement => {
  const userStatus = useSelector(SelectUserData);

  useEffect(() => {
    const saveUserData = async () => {
      const dataUser = userStatus;
      await saveData(dataUser);
    };
    saveUserData();
  }, [userStatus]);

  return (
    <View>
      <Text>esta es la pantalla de Home</Text>
      <Button title="Continuar" onPress={() => navigation.navigate('Start')} />
    </View>
  );
};
