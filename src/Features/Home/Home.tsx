import React from 'react';
import {View, Text, Button} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch} from 'react-redux';
import {
  deleteData,
  existsData,
  USER_DATA_KEY,
} from '../../../helper/asyncStorage/storage';
import {NavigationPropsHome} from '../../Navigation/HomeNavigator';
import {notExistData} from '../Splash/slice';
import {setUserDef} from '../User/slice';
import {colorsLinear, HomeStyle} from './style';

interface IStartProps {
  navigation: NavigationPropsHome;
}
interface IHomeProp {
  money: number;
}
export default ({navigation}: IStartProps): React.ReactElement => {
  //const userStatus = useSelector(SelectUserData);
  const dispatch = useDispatch();

  const RemoveUserData = async () => {
    const data = await existsData();
    console.log(data);
    if (data !== null) {
      await deleteData(USER_DATA_KEY);
      dispatch(notExistData());
      dispatch(setUserDef());
    }
    navigation.navigate('AppNavigator');
  };

  /*const saveUserData = async () => {
    const dataUser = userStatus;
    await saveData(dataUser);
  };*/

  return (
    <View style={HomeStyle.container}>
      <LinearGradient style={HomeStyle.linearGradient} colors={colorsLinear}>
        <View style={HomeStyle.subContainer} />
      </LinearGradient>
      <Text>hi ...</Text>
      <Button title="salir" onPress={RemoveUserData} />
    </View>
  );
};
