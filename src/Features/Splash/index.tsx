import React, {useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {useDispatch} from 'react-redux';
import {existsUserData} from '../../../helper/asyncStorage/verifyDat';
import {NavigationAppProps} from '../../Navigation/Appavigator';
import {setUserData} from '../User/slice';
import {
  existData,
  notExistData,
  splashLoading,
  splashStopLoading,
} from './slice';
import SplashStyle from './style';

interface IStartProps {
  navigation: NavigationAppProps;
}
export default ({navigation}: IStartProps): React.ReactElement => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(splashLoading());
    const fetchUserData = async () => {
      const data = await existsUserData();
      console.log(data);
      if (data === null) {
        setTimeout(() => {
          dispatch(splashStopLoading());
          dispatch(notExistData());
          navigation.navigate('StartNavigator');
        }, 2000);
      } else {
        setTimeout(() => {
          dispatch(setUserData(data));
          dispatch(splashStopLoading());
          dispatch(existData());
          navigation.navigate('SecurityCheck');
        }, 2000);
      }
    };

    fetchUserData();
  }, [dispatch, navigation]);

  return (
    <View style={SplashStyle.container}>
      <Image
        style={SplashStyle.img}
        source={require('../../../Assets/img/boxf.jpg')}
      />
      <Text style={SplashStyle.text}>loading</Text>
    </View>
  );
};
